'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import OrderSummary from './OrderSummary'
import AddressForm from './AddressForm'
import { useForm } from 'react-hook-form'
import { useCart } from 'react-use-cart'
import ShippingDate from './ShippingDate'
import Payment from './Payment'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fetcher } from '@/lib/fetcher'
import { toast } from 'react-toastify'
import session from '@/services/session'
import { loginAction } from '@/redux/account'
import { fetchWishlist } from '@/redux/wishlist'
import { useRouter } from 'next/navigation'

export default function Content() {
  const { items: cartItems, emptyCart, cartTotal, metadata, isEmpty } = useCart()
  const [steps, setSteps] = useState(0)
  const [formData, setFormData] = useState({})
  const [selectedDate, setSelectedDate] = useState('')
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()
  const [paypalRes, setPaypalRes] = useState({})
  const [paymentType, setPaymentType] = useState(null)
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  let isAuthenticated = useAppSelector((state) => state.account?.isAuthenticated)
  const dcCharges = useAppSelector((state) => state.dcCharges)
const token = useAppSelector((state) => state.account?.token)
  let basicShipping = parseFloat(dcCharges?.delivery_cost)
  let thresholdCost = parseFloat(dcCharges?.threshold_cost)
  let fastShipCharges = parseFloat(dcCharges?.additional_cost)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  let guestLogin = (data) =>
    fetcher('guest_login', {
      method: 'POST',
      data,
    })
  const loginMutation = useMutation({
    mutationFn: guestLogin,
    onSuccess: (res) => {
      if (res?.token) {
        toast.success('Loged in Successfuly')
        dispatch(loginAction(res?.data))
        dispatch(fetchWishlist())
        session.set('token', res?.token)
        session.set('user', res)
        setLoading(false)
        // Invalidate and refetch
        queryClient.invalidateQueries([
          'wishListing',
          'smoothieListing',
          'boxListing',
          'customSmoothieListing',
        ])
      } else {
        setFormData({ ...formData, guest_id: res?.data?.user })
        toast.success(res?.message)
        toast.error(res?.response?.data)
        setSteps(0)
      }
      // redirect && navigate(-1);

      setLoading(false)
    },
    onError: (err) => {
      session.clear()
      toast.error(err?.response.data)
      setLoading(false)
    },
  })
  const onSubmit = (data) => {
    console.log('Form Data ', data)

    setFormData({ ...formData, ...data })
    //  debugger;
    if (steps == 2) {
      setLoading(true)
      let smoothie_box_id = cartItems.map((d) => {
        return {
          qty: d.quantity,
          smoothie_box_id: d?.smoothie_box_descriptions[0]?.box_id,
          subscription: d?.subscriptionPlan ? true : false,
          subscription_id: d?.subscription_id,
          duration: d?.duration,
          size: d?.box_size,
          price: parseFloat(d?.itemTotal).toFixed(2),
          box_name: d?.name,
        }
      })
      handleOrder(smoothie_box_id)
    } else {
      if (steps == 0) {
        if (!isAuthenticated && data?.password) {
          setLoading(true)
          loginMutation.mutate({
            name: data?.fName + ' ' + data?.lName,
            fName: data?.fName,
            lName: data?.lName,
            email: data?.email,
            password: data?.password,
            password_confirmation: data?.password,
          })
        }
      }
      setSteps((prev) => prev + 1)
    }
  }
  let placeOrder = async (data) =>
    await fetcher('kunden/bestellung', {
      method: 'POST',
      data,
      token,
    })
  const mutation = useMutation({
    mutationFn: placeOrder,
    onSuccess: (res) => {
      console.log('place order response ', res)
      // Invalidate and refetch
      // debugger;
      if (res?.status == 200) {
        setLoading(false)
        queryClient.invalidateQueries(['wishListing'])
        toast.success(res?.message)
        emptyCart()
        push(`/meine-bestellung/${res?.data?.order_id}`)
      } else {
        toast.error(res?.response?.data?.message)
        toast.error(res?.message)
      }
    },
    onError: (err) => {
      toast.error(
        err.response.status == 401 ? 'Please Login to Proceed' : err.response.data.message
      )
    },
  })

  let selectDate = selectedDate ? selectedDate?.toLocaleDateString('en-CA') : selectedDate

  const handleOrder = (smoothie_box_id, payData) => {
    const { payer } = paypalRes
    mutation.mutate({
      ...formData,
      total_price:
        (paymentType == 1 || paymentType == 2) && parseFloat(metadata.grandTotal) < 1
          ? 1
          : parseFloat(metadata.grandTotal)?.toFixed(2),
      // if Total Order price is 00 Due to Flat Discount we Will Charge 1 in case of Stripe Because Stripe Doesn't accept Less than 1
      discount_id: metadata.discount_id,
      name: formData.fName + ' ' + formData.lName,
      first_name: formData.fName,
      last_name: formData.lName,
      invoice_name: formData?.invoice_fName
        ? formData?.invoice_fName + ' ' + formData?.invoice_fName
        : null,
      smoothie_box_id,
      shipping_date: selectDate,
      parking_place:
        formData.parking_place == 'false' ? formData.parking_place_2 : formData.parking_place,
      date: new Date()?.toLocaleDateString('en-DE'),
      fast_shipping: cartTotal >= thresholdCost ? 0 : metadata.fastShipping,
      shipping_cost: cartTotal >= thresholdCost ? 0 : basicShipping,
      acceptance: formData?.acceptance == 1 ? 'yes' : 'no',
      newsletter: formData?.newsletter == 1 ? 'yes' : 'no',
      discount_code: metadata?.discount_name,
      discount_price: metadata?.promoDiscount ? parseFloat(metadata?.promoDiscount)?.toFixed(2) : 0,
      deposit_price: metadata?.deposit,
      payment_method:
        paymentType == 0
          ? 'COD'
          : paymentType == 1
            ? 'Stripe'
            : paymentType == 2
              ? 'PayPal'
              : 'Klarna',
      customer_creation: formData?.guest_id ? 'yes' : 'no',

      paypalPayment: {
        id: paypalRes?.id,
        status: paypalRes?.status,
        name: payer?.name?.given_name + ' ' + payer?.name?.surname,
        payer_id: payer?.payer_id,
      },
      payment_data: payData,
    })
  }

  const payPlaceOrder = (payData) => {
    setLoading(true)
    let smoothie_box_id = cartItems.map((d) => {
      return {
        qty: d.quantity,
        smoothie_box_id: d?.smoothie_box_descriptions[0]?.box_id,
        subscription: d?.subscriptionPlan ? true : false,
        subscription_id: d?.subscription_id,
        duration: d?.duration,
        size: d?.box_size,
        price: parseFloat(d?.itemTotal).toFixed(2),
        box_name: d?.name,
      }
    })
    handleOrder(smoothie_box_id, payData)
  }

  const renderSwtich = (steps) => {
    switch (steps) {
      case 0:
        return (
          <div>
            <AddressForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
          </div>
        )
        break
      case 1:
        return (
          <div>
            <ShippingDate
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              formData={formData}
              errors={errors}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              cartItemsLength={cartItems?.length}
            />
          </div>
        )
        break
      case 2:
        return (
          <div>
            <Payment
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              errors={errors}
              formData={formData}
              setPaypalRes={setPaypalRes}
              // setPaymentData={(e) =>
              //   setFormData({ ...formData, payment_data: e })
              // }
              placeOrder={payPlaceOrder}
              paymentType={paymentType}
              setPaymentType={setPaymentType}
              loading={loading}
            />
          </div>
        )
        break

      default:
        break
    }
  }
  return (
    <div className="row">
      <div className="col-12 col-md-7 p-4">
        <div>
          <h2>Kasse</h2>
          {/* Checkout */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="active" href="/cart">
                  Cart
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span
                  onClick={() => setSteps(0)}
                  type="button"
                  className={steps > 0 ? 'active' : 'disable'}
                >
                  Information
                </span>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                <span
                  onClick={() => setSteps(1)}
                  type="button"
                  className={steps > 1 ? 'active' : 'disable'}
                >
                  Shipping
                </span>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span
                  onClick={() => setSteps(2)}
                  type="button"
                  className={steps > 2 ? 'active' : 'disable'}
                >
                  Payment
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <div>{renderSwtich(steps)}</div>
      </div>
      <div className="col-12 col-md-5 col-lg-4 offset-0 offset-lg-1">
        <OrderSummary />
      </div>
    </div>
  )
}
