'use client'
import React, { useRef, useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
// import PaymentFailure from "./PaymentFailure";
// import PaymentSuccess from "./PaymentSuccess";

function PayPalCheckout({ setPaypalRes, placeOrder }) {
  const { items: cartItems, emptyCart, cartTotal, metadata, isEmpty, totalItems } = useCart()
  const paypal = useRef()
  const [transactionStatus, setTransactionStatus] = useState(null)

  useEffect(() => {
    // console.log("cart Items", cartItems);
    const names = cartItems.map((item) => item?.name)
    const ref_id = cartItems.map((item) => item?.unique_id + `(s-${item?.box_size})`)
    const concat_Names = names.join(' + ')
    const concat_refId = ref_id.join(' + ')

    // console.log("concat_Names ", concat_Names);
    // console.log("Concat_refId ", concat_refId);
    // let p_units = cartItems.map((d) => {
    //   return {
    //     description: d?.name,
    //     // PushSubscription: true,
    //     reference_id: d?.unique_id + d?.box_size,
    //     amount: {
    //       currency_code: "EUR",
    //       value:
    //         parseFloat(metadata.grandTotal) > cartTotal
    //           ? d?.price
    //           : parseFloat(
    //               metadata.grandTotal < 1
    //                 ? 1 / totalItems
    //                 : metadata.grandTotal / totalItems
    //             )?.toFixed(2),
    //     },
    //   };
    // });
    // if (parseFloat(metadata.grandTotal) > cartTotal) {
    //   p_units.push({
    //     description: "Other Charges",
    //     // PushSubscription: true,
    //     reference_id: "charges",
    //     amount: {
    //       currency_code: "EUR",
    //       value: (metadata.grandTotal - cartTotal).toFixed(2),
    //       // value: parseFloat(metadata.grandTotal).toFixed(2),
    //     },
    //   });
    // }
    // console.log("Purchase Units ", p_units);
    // debugger;
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: concat_Names,
                // PushSubscription: true,
                reference_id: concat_refId,
                amount: {
                  currency_code: 'EUR',
                  value:
                    parseFloat(metadata.grandTotal) < 1
                      ? 1
                      : parseFloat(metadata.grandTotal)?.toFixed(2),
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()

          setPaypalRes(order)
          placeOrder(order)
          setTransactionStatus('success')
        },
        onError: (err) => {
          console.log(err)
          setTransactionStatus('failure')
        },
      })
      .render(paypal.current)

    // window.paypal
    //   .Buttons({
    //     createSubscription(data, actions) {
    //       return actions.subscription.create({
    //         plan_id: "P-2UF78835G6983425GLSM44MA",
    //       });
    //     },

    //     onApprove(data) {
    //       alert(
    //         "You have successfully created subscription " + data.subscriptionID
    //       );
    //     },
    //   })
    //   .render(paypal.current);
  }, [])

  if (transactionStatus === 'success') {
    // return <PaymentSuccess />;
    console.log('Transaction Status Success', transactionStatus)
  }

  if (transactionStatus === 'failure') {
    // return <PaymentFailure />;
    console.log('Transaction Status Fail', transactionStatus)
  }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

export default PayPalCheckout
