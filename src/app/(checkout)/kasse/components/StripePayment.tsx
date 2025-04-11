import React, { useState } from 'react'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { toast } from 'react-toastify'

export default function StripePayment({
  // setPaymentData,
  placeOrder,
  setPaymentCompleted,
  loading,
}) {
  const [errorMsg, setErrorMsg] = useState('')

  const [message, setMessage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsProcessing(true)

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
      },
      redirect: 'if_required',
    })

    console.log('Payment Response ', response)
    // debugger;
    if (
      (response.error && response.error.type === 'card_error') ||
      (response.error && response.error.type === 'validation_error')
    ) {
      setMessage(response.error.message)
      toast.error(response.error.message)
    } else if (response.paymentIntent.status == 'succeeded') {
      //display success message or redirect user
      // console.log("Stripe Res ", response);
      // await setPaymentData(response.paymentIntent);
      toast.success('Zahlung erfolgreich')
      // Payment Successful
      setPaymentCompleted(true)
      placeOrder(response.paymentIntent)
    }

    setIsProcessing(false)
  }

  return (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">
          Zahlung mit Kreditkarte
          {/* Pay with card */}
        </span>
      </h4>
      <form id="payment-form">
        <PaymentElement id="payment-element" />
        <div className="d-flex justify-content-end">
          <button
            disabled={isProcessing || !stripe || !elements || loading}
            id="submit"
            onClick={handleSubmit}
            className="btn btn-solid-success mt-4"
          >
            <span id="button-text">
              {isProcessing
                ? 'Processing ... '
                : loading || !stripe
                  ? 'Submiting'
                  : 'Jetzt bezahlen'}
              {/* Pay now */}
            </span>
            <span className="ps-4">&#10095;</span>
          </button>
        </div>{' '}
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  )
}
