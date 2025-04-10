'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useCart } from 'react-use-cart'
import { KlarnaIcon } from '@/assets/svgIcons'
import { fetcher } from '@/lib/fetcher'

export default function KlarnaCheckout({ formData, placeOrder }) {
  const { items: cartItems, emptyCart, cartTotal, metadata, isEmpty } = useCart()
  // console.log("Cart Items ", cartItems);
  const containerRef = useRef(null)
  const [status, setStatus] = React.useState('cart')
  const [tokenData, setTokenData] = useState(null)
  const [authData, setAuthData] = useState(null)
  const [orderData, setOrderData] = useState(null)
  const [widgetLoaded, setWidgetLoaded] = React.useState(false)

  let order_lines = cartItems?.map((d, i) => {
    return {
      type: 'physical',
      reference: d?.unique_id,
      name: d?.name,
      quantity: d?.quantity,
      unit_price: parseFloat(d?.price) * 100,
      tax_rate: 0,
      total_amount: d?.itemTotal * 100,
      total_discount_amount: 0,
      total_tax_amount: 0,
      product_url: `https://www.indivit.de/b/${d?.unique_id}`,
      image_url: `https://admin.indivit.de/smoothie_box/${d?.image}`,
      subscription: d?.subscriptionPlan
        ? {
            name: d.subscriptionObj?.name,
            interval:
              d.subscriptionObj?.duration == 1
                ? 'DAY'
                : cartItems[0]?.subscriptionObj?.duration == 7
                  ? 'WEEK'
                  : 'MONTH',
            interval_count: 1,
          }
        : null,
    }
  })
  let tokenPostData = {
    acquiring_channel: 'ECOMMERCE',
    purchase_country: 'DE',
    auto_capture: true,
    locale: 'de-DE',
    intent: 'buy_and_tokenize',
    purchase_currency: 'EUR',
    order_amount: metadata?.grandTotal * 100,
    order_tax_amount: 0,
    // 840,
    // parseInt((parseFloat(metadata?.grandTotal) - cartTotal) * 100),
    order_lines: [
      ...order_lines,
      {
        type: 'shipping_fee',
        // reference: d?.unique_id,
        name: 'Delivery',
        quantity: 1,
        unit_price: parseInt((parseFloat(metadata?.grandTotal) - cartTotal) * 100),
        tax_rate: 0,
        total_amount: parseInt((parseFloat(metadata?.grandTotal) - cartTotal) * 100),
        total_discount_amount: 0,
        total_tax_amount: 0,
      },
    ],
    // order_lines: [
    //   {
    //     type: "physical",
    //     reference: "19-402",
    //     name: "Battery Power Pack",
    //     quantity: 1,
    //     unit_price: 53.9,
    //     tax_rate: 0,
    //     total_amount: 53.9,
    //     total_discount_amount: 0,
    //     total_tax_amount: 0,
    //     image_url: "https://www.exampleobjects.com/logo.png",
    //     product_url: `https://www.indivit.de/b/4545`,
    //   },
    // ],
    merchant_urls: {
      confirmation: 'https://indivit.de/orders',
    },
  }
  let getKlarnaToken = async (data) => await fetcher('klarna/token', { method: 'POST', data })

  const pay = async (e) => {
    // e.preventDefault();
    setStatus('0')
    getKlarnaToken(tokenPostData).then(
      (res) => {
        // console.log("Token Res => ", res);
        setStatus('paying')
        const { client_token } = res
        setTokenData(res)
        const Klarna = window.Klarna
        // debugger;
        Klarna.Payments.init({
          // client_token: ex_token,
          client_token: client_token,
        })
        // debugger;
        Klarna.Payments.load(
          {
            container: containerRef.current,
            // payment_method_category: "pay_later",
          },
          (res) => {
            setWidgetLoaded(true)
          }
        )
      }
      // [setStatus, products]
    )
  }

  let createKlarnaOrder = async (data) => fetcher('klarna/order', { method: 'POST', data })
  const authorize = async (e) => {
    e.preventDefault()
    const Klarna = window.Klarna
    Klarna.Payments.authorize(
      {
        payment_method_category: 'pay_later',
        auto_finalize: true,
      },
      async (authD) => {
        const { authorization_token } = authD
        setAuthData(authD)
        // console.log("Klarna Auth ", authD);
        // debugger;
        if (authD?.approved) {
          const response = await createKlarnaOrder({
            authorization_token,
            order_lines: tokenPostData,
          })

          // console.log("Order Response ", response);
          setOrderData(response.data)
          if (response?.data?.order_id) {
            placeOrder({
              tokenData,
              authData: authD,
              orderData: response.data,
            })
          }
          setStatus('completed')
        }
      }
    )
  }

  useEffect(() => {
    pay()
  }, [])
  return (
    <div>
      <div className="py-4">
        {/* // disabled={products.length < 1} */}
        {/* Pay with Klarna */}
        {/* {status === "cart" && (
          <>
            <button
              className="btn btn-solid-success mt-4"
              onClick={pay}
              >
              Mit Klarna bezahlen
            </button>
          </>
        )} */}
        {status == 0 && (
          <div className="tw-text-center">
            <span className="tw-bg-yellow-500 tw-px-4 tw-py-1 tw-rounded-2xl tw-text-white">
              Klarna Connecting . . .
            </span>
          </div>
        )}
        <div ref={containerRef} id="klarna-payments-container"></div>
        {status === 'paying' && (
          <>
            <button
              className="btn btn-solid-success mt-4 tw-w-full tw-flex tw-items-center"
              onClick={authorize}
              disabled={!widgetLoaded}
            >
              {/* Continue */}
              <div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
                <span className="tw-h-6 tw-border-0 tw-pe-2 tw-border-e-2 hover:tw-border-e-theme tw-border-solid">
                  <KlarnaIcon />
                </span>
                <span className="tw-h-6 tw-leading-loose">Weiter zu Klarna</span>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
