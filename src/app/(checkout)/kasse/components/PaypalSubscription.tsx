import React, { useState } from 'react'
import { Buffer } from 'buffer'
import { useEffect } from 'react'
import { useCart } from 'react-use-cart'

export default function PaypalSubscription({ placeOrder }) {
  const [loading, setLoading] = useState(false)
  const { items: cartItems, emptyCart, cartTotal, metadata, isEmpty } = useCart()
  const dataForPlan = {
    product_id: null,
    name: cartItems[0]?.subscriptionObj?.name,
    description: cartItems[0]?.subscriptionObj?.detail,
    billing_cycles: [
      {
        frequency: {
          interval_unit:
            cartItems[0]?.subscriptionObj?.duration == 1
              ? 'DAY'
              : cartItems[0]?.subscriptionObj?.duration == 7
                ? 'WEEK'
                : 'MONTH',
          interval_count: 1,
        },
        tenure_type: 'REGULAR',
        sequence: metadata?.promoDiscount && metadata?.promoDiscount > 0 ? 2 : 1,
        total_cycles: 0,
        pricing_scheme: {
          fixed_price: {
            value:
              metadata?.promoDiscount && metadata?.promoDiscount > 0
                ? (parseFloat(metadata.grandTotal) + metadata?.promoDiscount).toFixed(2)
                : parseFloat(metadata.grandTotal).toFixed(2),

            // If PromoDiscount Applies will be Added in Following Recurring Payments but not in TRIAL/First Payment
            currency_code: 'EUR',
          },
        },
      },
    ],
    payment_preferences: {
      auto_bill_outstanding: true,
      //   setup_fee: {
      //     value: "10.00",
      //     currency_code: "USD",
      //   },
      //   setup_fee_failure_action: "CONTINUE",
      payment_failure_threshold: 3,
    },
    // taxes: {
    //   percentage: "10",
    //   inclusive: false,
    // },
  }
  if (metadata?.promoDiscount && metadata?.promoDiscount > 0) {
    dataForPlan?.billing_cycles.push({
      // Initial discounted payment cycle
      frequency: {
        interval_unit: 'DAY', // Assuming the first payment is monthly
        interval_count: 1,
      },
      tenure_type: 'TRIAL', // Use TRIAL for an initial different rate, even if it's not a free trial
      sequence: 1,
      total_cycles: 1, // One cycle of discounted rate
      pricing_scheme: {
        fixed_price: {
          value: parseFloat(metadata.grandTotal).toFixed(2), // Set your discounted price here
          currency_code: 'EUR',
        },
      },
    })
  }
  // async function getAccessToken(clientId, clientSecret) {
  //   const response = await fetch(
  //     "https://api-m.sandbox.paypal.com/v1/oauth2/token",
  //     {
  //       method: "POST",
  //       body: "grant_type=client_credentials",
  //       headers: {
  //         Authorization: `Basic ${clientId + ":" + clientSecret}`,
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     }
  //   );

  //   const data = await response.json();
  //   return data.access_token;
  // }

  const getAccessToken = async () => {
    setLoading(true)
    // Use your client ID and secret here
    // const clientId =
    //   "AWEamBFzvOzMA6E8w5Se7LJiQ0H2rL19RVlVbC7KcEn77uAbG7F6WrMdvMvBreCrtzkYiabXzrT3KiMw";
    // const clientSecret =
    //   "EGp8-fwfhnaIknyTX8ExlFXEm24_fHJsy9sbP1OcgMRzDdP1ihJIhP1Q1l7vEfjbiRzqnzsEcF2Y-U9v";

    const base64Credentials = Buffer.from(
      `${process.env.REACT_APP_PAYPAL_CLIENT_ID}:${process.env.REACT_APP_PAYPAL_SECRET_ID}`
    ).toString('base64')

    try {
      // Get Access Token
      const response = await fetch(`${process.env.REACT_APP_PAYPAL_TOKEN_API}`, {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      const tokenData = await response.json()

      if (response.ok) {
        // Create Product
        const prodRes = await fetch(`${process.env.REACT_APP_PAYPAL_PRODUCT_API}`, {
          method: 'POST',
          body: JSON.stringify({
            name: cartItems && cartItems[0].name,
            description: cartItems && cartItems[0].short_detail,
            type: 'PHYSICAL', // Can be PHYSICAL, DIGITAL, or SERVICE
            category: 'FOOD_DRINK_AND_NUTRITION', // Choose the category that fits your product
            // Other optional fields...
          }),
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
            'Content-Type': 'application/json',
          },
        })
        const prodResData = await prodRes.json()
        // console.log("Paypal Product Response ", prodResData);
        if (prodRes.ok) {
          // Create Plan
          const planRes = await fetch(`${process.env.REACT_APP_PAYPAL_PLAN_API}`, {
            method: 'POST',
            body: JSON.stringify({
              ...dataForPlan,
              product_id: prodResData?.id,
            }),
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
              'Content-Type': 'application/json',
            },
          })
          const planResData = await planRes.json()

          // console.log("Plan Res ", planResData);
          if (planRes.ok) {
            // Create Plan Button

            // Subscription on Plan
            const subRes = await fetch(`${process.env.REACT_APP_PAYPAL_SUBSCRIPTION_API}`, {
              method: 'POST',
              body: JSON.stringify({
                plan_id: planResData?.id,
              }),
              headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
                'Content-Type': 'application/json',
              },
            })
            const subResData = await subRes.json()

            // console.log("Sub Res ", subResData);
            if (subRes.ok) {
              setLoading(false)
              window.paypal
                .Buttons({
                  createSubscription: function (data, actions) {
                    return actions.subscription.create({
                      plan_id: planResData?.id, // Replace with your actual plan ID
                    })
                  },
                  onApprove: async function (data, actions) {
                    const orderDetail = await fetch(
                      `${process.env.REACT_APP_PAYPAL_GET_ORDER_API}/${data?.orderID}`,
                      {
                        method: 'GET',
                        headers: {
                          Authorization: `Bearer ${tokenData.access_token}`,
                          'Content-Type': 'application/json',
                        },
                      }
                    )
                    const orderDetailResData = await orderDetail.json()
                    // console.log("Order Detail data ", orderDetailResData);
                    await placeOrder({
                      token: tokenData,
                      product: prodResData,
                      plan: planResData,
                      subscription: subResData,
                      order: data,
                      order_detail: orderDetailResData,
                    })
                    // Capture the subscription details after successful subscription
                    // console.log("Subscription created", data);
                    // You can redirect the user to a thank you page, or update your UI
                  },
                })
                .render('#paypal-button-container')
            }
          }
        }
        return tokenData.access_token
      } else {
        throw new Error(tokenData)
      }
    } catch (error) {
      console.error('Error fetching access token:', error)
      return null
    }
  }

  useEffect(() => {
    getAccessToken()
  }, [])

  return (
    <div className="py-5">
      {/* <button onClick={getAccessToken}>Create Plan</button> */}
      {loading ? (
        <div className="text-center">
          <p className="text-center">Connecting...</p>
          <img
            height="80"
            width="80"
            className="rotate"
            alt="refresh"
            src={'/assets/icon/refresh.png'}
          />
        </div>
      ) : (
        <></>
      )}
      <div id="paypal-button-container"></div>
    </div>
  )
}
