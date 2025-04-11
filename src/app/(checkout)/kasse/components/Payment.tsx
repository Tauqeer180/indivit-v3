import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import PayPalCheckout from "./Components/PayPalCheckout";
// import infoIcon from '../../assets/icon/allingredientsinfo.png'

import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import StripePayment from './Components/StripePayment'
import { loadStripe } from '@stripe/stripe-js'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { baseURL } from '../../services/Adapter/customAxios'
import { useCart } from 'react-use-cart'
// import useCheckSubscription from '../../hooks/useCheckSubscription'
// import PaypalSubscription from './Components/PaypalSubscription'
// import KlarnaCheckout from './Components/KlarnaCheckout'
// import ToolTip from '../../components/common/ToolTip'
// import { KlarnaIcon, MasterCardIcon, VisaIcon } from '@/assets/icon/svgIcons'
import PayPalCheckout from './PayPalCheckout'
import StripePayment from './StripePayment'
import { fetcher } from '@/lib/fetcher'
import useCheckSubscription from '@/hooks/useCheckSubscription'
import PaypalSubscription from './PaypalSubscription'
import KlarnaCheckout from './KlarnaCheckout'
import { KlarnaIcon, MasterCardIcon, VisaIcon } from '@/assets/svgIcons'
// import { placeOrder } from "../../services/Orders";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY || ''

  // "pk_test_51NkmGrLcM7qwVgNdrRuvoUb2MbX0UHLRydJotyhBWE8HDSdVRXXHmN5xfWGLPJsSqG4bGmt9DDlHYpL9E1bKRBgz00U0Ce05aG"
)

export default function Payment({
  onSubmit,
  register,
  errors,
  formData,
  setPaypalRes,
  placeOrder,
  paymentType,
  setPaymentType,
  loading,
}) {
  const [isCod, setIsCod] = useState(true)
  //  1 => Credit Card
  //  2 => PayPal
  //  3 => Klarna
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [clientSecret, setClientSecret] = useState('')

  const { metadata, items: cartItems, totalItems } = useCart()

  const { isSubAvailable, subscriptionCount } = useCheckSubscription()

  useEffect(() => {
    // 1 mens Stripe
    console.log('Payment Type', paymentType)
    if (paymentType == 1) {
      fetchClientSecret()
    }
  }, [paymentType])
  const items = [
    {
      amount: parseFloat(metadata.grandTotal) > 0 ? parseFloat(metadata.grandTotal)?.toFixed(2) : 1,
    },
  ]
  const fetchClientSecret = async () => {
    console.log('Payment Type 2', paymentType)
    // Stripe client Secret
    const response = await fetcher('pay', {
      data: { items },
      method: 'POST',
    })
    setClientSecret(response.clientSecret)
    try {
    } catch (error) {
      console.log(error)
    }
  }

  // console.log("Subscription count ", subscriptionCount(cartItems));
  return (
    <div>
      {/* {JSON.stringify(clientSecret)}

      <br />
      {JSON.stringify(stripePromise)}
      <br />
      {process.env.NEXT_PUBLIC_STRIPE_KEY || 'tt'} */}
      <form onSubmit={onSubmit}>
        <div className="py-5">
          <div className="border p-4 border-secondary rounded-3">
            <div className="row align-items-center">
              <div className="col-auto col-md-3 col-lg-2">
                <span className=" fw-bold">Kontakt</span>
                {/* Contact */}
              </div>
              <div className="col-auto col-md-9 col-lg-10 border-start border-secondary">
                <span> {formData?.email} </span>
              </div>
            </div>
            <hr className="my-3" />
            <div className="row align-items-center">
              <div className="col-auto col-md-3 col-lg-2">
                <span className=" fw-bold">Lieferung</span>
                {/* Ship to */}
              </div>
              <div className="col-auto col-md-9 col-lg-10 border-start border-secondary">
                {formData?.address} {formData?.appartment} {formData?.city} {formData?.state}{' '}
                {formData?.country}
              </div>
            </div>
            <hr className="my-3" />
            <div className="row align-items-center">
              <div className="col-auto  col-md-3 col-lg-2">
                <span className=" fw-bold">Versand</span>
                {/* Method */}
              </div>
              <div className="col-auto  col-md-9 col-lg-10 border-start border-secondary">
                <span>Gekühlter Express-Versand</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5>Zahlung</h5>
          {/* Payment */}
          {/* <div className="col-12 col-sm-6 col-md-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cod"
                onClick={() => setPaymentType(0)}
                // onClick={() => setIsCod(true)}
                {...register("paymentMethod", {
                  required: "Required",
                })}
              />
              <label className="form-check-label" for="cod">
                Cash on Delivery
              </label>
            </div>
          </div> */}

          <div className="w-72">
            <div>
              <label
                className={`tw-mb-3 tw-relative tw-flex tw-justify-between tw-items-center tw-gap-4 tw-p-5 tw-bg-white tw-border tw-shadow  tw-rounded-lg tw-cursor-pointer  hover:tw-bg-gray-50 tw-border-solid tw-border-gray-100 ${
                  paymentType == 1 ? 'tw-border-theme ' : ''
                } `}
                for="cardPayment"
              >
                <div className="tw-flex tw-items-center tw-gap-2">
                  <input
                    className="form-check-input !tw-mt-0"
                    type="radio"
                    name="paymentMethod"
                    id="cardPayment"
                    onClick={() => setPaymentType(1)}
                    {...register('paymentMethod', {
                      required: 'Required',
                    })}
                  />
                  <div className="">Kreditkarte</div>
                </div>
                <div className="tw-flex">
                  <span className="tw-h-6">
                    <MasterCardIcon />
                  </span>
                  <span className="tw-h-6">
                    <VisaIcon />
                  </span>
                </div>
              </label>
            </div>
            <div>
              {!(
                subscriptionCount(cartItems) > 1 ||
                (totalItems > 1 && isSubAvailable(cartItems))
              ) && (
                <label
                  className={`tw-mb-3 tw-relative tw-flex tw-justify-between tw-items-center tw-gap-4 tw-p-5 tw-bg-white tw-border tw-shadow  tw-rounded-lg tw-cursor-pointer  hover:tw-bg-gray-50 tw-border-solid tw-border-gray-100 ${
                    paymentType == 2 ? 'tw-border-theme ' : ''
                  } `}
                  for="paypal"
                >
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <input
                      className="form-check-input !tw-mt-0"
                      type="radio"
                      name="paymentMethod"
                      disabled={
                        subscriptionCount(cartItems) > 1 ||
                        (cartItems.length > 1 && isSubAvailable(cartItems))
                      }
                      id="paypal"
                      onClick={() => setPaymentType(2)}
                      {...register('paymentMethod', {
                        required: 'Required',
                      })}
                    />
                    <div className="">PayPal</div>
                  </div>
                  <div className="tw-flex">
                    <span className="tw-h-6">
                      <img
                        width="100%"
                        height="100%"
                        src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg"
                      />
                    </span>
                  </div>
                </label>
              )}
            </div>
            <div>
              {((!metadata?.promoDiscount && !isSubAvailable(cartItems)) ||
                (metadata?.promoDiscount && !isSubAvailable(cartItems)) ||
                (!metadata?.promoDiscount && isSubAvailable(cartItems))) &&
                !isSubAvailable(cartItems) && (
                  <label
                    className={`tw-mb-3 tw-relative tw-flex tw-justify-between tw-items-center tw-gap-4 tw-p-5 tw-bg-white tw-border tw-shadow  tw-rounded-lg tw-cursor-pointer  hover:tw-bg-gray-50 tw-border-solid tw-border-gray-100 ${
                      paymentType == 3 ? 'tw-border-theme ' : ''
                    } `}
                    for="klarna"
                  >
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <input
                        className="form-check-input !tw-mt-0"
                        type="radio"
                        name="paymentMethod"
                        disabled={
                          subscriptionCount(cartItems) > 1 ||
                          (cartItems.length > 1 && isSubAvailable(cartItems))
                        }
                        id="klarna"
                        onClick={() => setPaymentType(3)}
                        {...register('paymentMethod', {
                          required: 'Required',
                        })}
                      />
                      <div className="">Klarna</div>
                    </div>
                    <div className="tw-flex">
                      <span className="tw-h-6">
                        <KlarnaIcon />
                      </span>
                    </div>
                  </label>
                )}
              {errors.paymentMethod && (
                <p className="text-danger my-1">Please Select an Option</p>
              )}{' '}
            </div>
          </div>
          {/* 
          <div className="col-12 col-sm-6 col-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cardPayment"
                onClick={() => setPaymentType(1)}
                {...register("paymentMethod", {
                  required: "Required",
                })}
              />
              <label className="form-check-label" for="cardPayment">
                Kreditkarte
              </label>
            </div>
          </div>

          {!(
            subscriptionCount(cartItems) > 1 ||
            (totalItems > 1 && isSubAvailable(cartItems))
          ) && (
            <>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      disabled={
                        subscriptionCount(cartItems) > 1 ||
                        (cartItems.length > 1 && isSubAvailable(cartItems))
                      }
                      id="paypal"
                      onClick={() => setPaymentType(2)}
                      {...register("paymentMethod", {
                        required: "Required",
                      })}
                    />
                    <label className="form-check-label" for="paypal">
                      PayPal{" "}
                    </label>
                  </div>
                </div>
              </div>
              {((!metadata?.promoDiscount && !isSubAvailable(cartItems)) ||
                (metadata?.promoDiscount && !isSubAvailable(cartItems)) ||
                (!metadata?.promoDiscount && isSubAvailable(cartItems))) && (
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        disabled={
                          subscriptionCount(cartItems) > 1 ||
                          (cartItems.length > 1 && isSubAvailable(cartItems))
                        }
                        id="klarna"
                        onClick={() => setPaymentType(3)}
                        {...register("paymentMethod", {
                          required: "Required",
                        })}
                      />
                      <label className="form-check-label" for="klarna">
                        Klarna
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {errors.paymentMethod && (
                <p className="text-danger my-1">Please Select an Option</p>
              )}{" "}
            </>
          )} */}
        </div>
        {/* {!isCod && (
          <>
            <div className="row">
              <div className="col-md-12 pt-4 pb-4">
                <input
                  type="text"
                  className="form-control p-2 shadow-none border-secondary rounded-3"
                  id="cardNumber"
                  placeholder="Card Number"
                  required
                />
              </div>
              <div className="col-md-12 pt-3 pb-4">
                <input
                  type="text"
                  className="form-control p-2 shadow-none border-secondary rounded-3"
                  id="cardHolderName"
                  placeholder="Card Holder Name"
                  required
                />
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control p-2 shadow-none border-secondary rounded-3"
                  id="expirationDate"
                  placeholder="Expiration date (MM/YY)"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control p-2 shadow-none border-secondary rounded-3"
                  id="securityCode"
                  placeholder="Security Code"
                  required
                />
              </div>
            </div>
          </>
        )} */}
        {paymentType == 1 && (
          <>
            {/* <Elements stripe={stripePromise}> */}
            {stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <StripePayment
                  setPaymentCompleted={setPaymentCompleted}
                  // setPaymentData={setPaymentData}
                  placeOrder={placeOrder}
                  loading={loading}
                />
              </Elements>
            )}
            {/* </Elements> */}
            {/* {stripePromise && clientSecret && (
              <form id="payment-form">
                <PaymentElement id="payment-element" />
                <button
                  disabled={isProcessing || !stripe || !elements}
                  id="submit"
                  onClick={handleSubmit}
                >
                  <span id="button-text">
                    {isProcessing || !stripe ? "Processing ... " : "Pay now"}
                  </span>
                </button>
                {message && <div id="payment-message">{message}</div>}
                </form>
              )} */}
          </>
        )}
        {paymentType == 2 && (
          <div>
            {isSubAvailable(cartItems) ? (
              <PaypalSubscription placeOrder={placeOrder} />
            ) : (
              // <>Test Subscription</>
              <PayPalCheckout setPaypalRes={setPaypalRes} placeOrder={placeOrder} />
            )}
          </div>
        )}
        {paymentType == 3 && (
          <div>
            <KlarnaCheckout formData={formData} placeOrder={placeOrder} />
          </div>
        )}
        {paymentType == 0 && (
          <div className="d-flex justify-content-end">
            <button
              disabled={loading}
              // type="submit"
              className="btn btn-solid-success mt-4"
            >
              {loading ? 'Pay Now' : 'Place Order'}
              <span className="ps-4">&#10095;</span>
            </button>
          </div>
        )}{' '}
      </form>
    </div>
  )
}
