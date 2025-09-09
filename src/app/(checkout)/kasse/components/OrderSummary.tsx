import React, { useEffect, useState } from 'react'
import boxImage from '../../../assets/img/ourbox.png'
import { useCart } from 'react-use-cart'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import { getDiscount, getShippingCost } from "../../../services/Orders";
import { useForm } from 'react-hook-form'
// import useVibrate from '../../../hooks/useVibrate'
import { toast } from 'react-toastify'
// import dlvIcon from '../../../assets/icon/deliveryIcon.png'
// import depositIcon from '../../../assets/icon/deposit.png'
import { useDispatch, useSelector } from 'react-redux'
// import { setDcCharges } from '../../../redux/dcCharges'
// import { formatToGerman2 } from '../../../services/utils/germanFormat'
// import { baseURL } from '../../../services/Adapter/customAxios'
// import refreshIcon from '../../../assets/icon/refresh.png'
import { baseURL, fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import useVibrate from '@/hooks/useVibrate'
import { setDcCharges } from '@/redux/dcCharges'
import { formatToGerman2 } from '@/utils/germanFormat'

export default function OrderSummary() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [grandTotal, setGrandTotal] = useState(0)
  const commonImg = useAppSelector((state) => state.settings?.boxImg)
  const token = useAppSelector((state) => state.account?.token)

  const { items: cartItems, cartTotal, metadata, updateCartMetadata } = useCart()
  // const dcCharges = useSelector((state) => state.dcCharges);

  let getShippingCost = async () => fetcher('delivery_cost/list')
  const {
    isLoading: shippingCostLoading,
    error: shippingCostError,
    data: shippingCostData,
  } = useQuery({
    queryKey: ['shippingCost'],
    queryFn: getShippingCost,
  })
  let dcCharges = shippingCostData?.data
  useEffect(() => {
    dispatch(setDcCharges(shippingCostData?.data))
  }, [shippingCostData])

  let basicShipping = shippingCostLoading ? 'Calculating' : parseFloat(dcCharges?.delivery_cost)
  let thresholdCost = parseFloat(dcCharges?.threshold_cost)
  let fastShipCharges = parseFloat(dcCharges?.additional_cost)
  const { vibrate } = useVibrate()
  //free shipping = kostenlos
  let total = cartTotal + metadata?.deposit - (metadata?.promoDiscount || 0)
  let DC = cartTotal - (metadata?.promoDiscount || 0) > thresholdCost ? 'kostenlos' : basicShipping
  useEffect(() => {
    // debugger;
    let tempGrandTotal =
      total +
      (cartTotal - (metadata?.promoDiscount || 0) > thresholdCost ? 0 : basicShipping) +
      (!!metadata?.fastShipping ? parseFloat(metadata?.fastShipping) : 0)
    setGrandTotal(tempGrandTotal)
  }, [basicShipping, thresholdCost, fastShipCharges, metadata?.fastShipping, total])
  let getDiscount = async (data) => await fetcher('discount', { method: 'POST', data, token })
  const mutation = useMutation({
    mutationFn: getDiscount,
    onSuccess: (res) => {
      // console.log('promo Res ', res)
      if (res?.status == 400) {
        vibrate('#orderSummary')
        setError('promo_code', {
          type: 'custom',
          message: res?.message,
        })
        setLoading(false)
      } else if (res?.response?.status == 401 || !res?.data) {
        toast.error('Bitte melden Sie sich an, um fortzufahren') //Login to Proceed
        vibrate('#orderSummary')
      } else {
        promoValidity(res?.data)
      }
      setLoading(false)
      // toast.success(res?.data?.message);
    },
    onError: (err) => {
      // console.log('Error ', err)
      toast.error(
        err.response.status == 401
          ? 'Bitte melden Sie sich an, um fortzufahren' //Login to Proceed
          : err.response.data.message
      )
      setLoading(false)
    },
  })
  let discountData = null
  useEffect(() => {
    updateCartMetadata({
      // to avoid negetive values in case of discounts
      grandTotal: grandTotal > 0 ? grandTotal : 0,
      // fastShipping: fastShipCharges,
    })
  }, [grandTotal])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    setLoading(true)
    mutation.mutate({
      discount_value: data?.promo_code,
    })
  }
  const promoValidity = (data) => {
    let tempDiscount
    let isDiscountAvailable = data ? data[0] : {}
    if (isDiscountAvailable) {
      if (isDiscountAvailable && metadata?.qty >= isDiscountAvailable.minimum_qty) {
        // Type 0 => Flat Discount
        // Type 1 => % Discount
        if (isDiscountAvailable?.type == 0) {
          tempDiscount = isDiscountAvailable?.value
        } else if (isDiscountAvailable?.type == 1) {
          tempDiscount = (isDiscountAvailable?.value / 100) * cartTotal
        }
        updateCartMetadata({
          promoDiscount: tempDiscount,
          discount_id: isDiscountAvailable?.id,
          discount_name: isDiscountAvailable?.name,
        })
      } else {
        vibrate('#orderSummary')
        setError('promo_code', {
          type: 'custom',
          message: `Nicht genügend Menge, es sind mindestens ${isDiscountAvailable?.minimum_qty} erforderlich`,
        })
      }
    } else {
      vibrate('#orderSummary')
      setError('promo_code', { type: 'custom', message: 'Ungültiger Code' })
    }
  }

  // console.log("Grand Total ", grandTotal, dcCharges);
  return (
    <div>
      <div className="p-4" id="orderSummary">
        <h3>Bestellübersicht</h3>
        <hr />

        {cartItems?.map((item, index) => {
          return (
            <div key={index} className="row align-items-center">
              <div className="col-3 col-md-2 pe-0">
                <img
                  src={item?.image ? baseURL + 'smoothie_box/' + item?.image : commonImg}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-9 col-md-8">
                <span className="fs-6 fw-bold">{item?.name}</span> x
                <span className="fw-bold"> {item?.quantity} </span>
                <p className="fs-14">
                  {item?.short_detail} <br />
                  {item?.subscriptionPlan && `Abo | ` + item?.subscriptionObj?.name}
                </p>
              </div>
              <div className="col-9 col-md-2 ps-md-0 offset-3 offset-md-0 text-start text-md-end">
                <span>{formatToGerman2(item?.itemTotal)} €</span>
              </div>
            </div>
          )
        })}

        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 py-4 align-items-baseline">
          <div className="col-md-9">
            <input
              type="text"
              className="form-control shadow-none rounded-3 py-2 border-1 border-secondary"
              id="inputDiscountCode"
              placeholder="Gutscheincode"
              {...register('promo_code', {
                required: 'Required',
              })}
            />
            {errors.promo_code && <p className="text-danger my-1">{errors.promo_code.message}</p>}
          </div>
          <div className="col-md-3 d-grid">
            <button type="submit" className="btn shadow-none py-2 px-3 text-white bg-secondary">
              {loading ? (
                <div className="px-2">
                  <span
                    className="spinner-grow spinner-grow-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </div>
              ) : (
                'Anwenden'
              )}
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-between pt-2">
          <p>Zwischensumme</p>
          {/* SubTotal */}
          <p>{formatToGerman2(cartTotal)} €</p>
        </div>
        <div className="d-flex justify-content-between pt-2">
          <p>
            <img className="img-fluid me-2" src={'/assets/icon/deposit.png'} width="25" />
            Pfand
          </p>
          <p> {formatToGerman2(metadata?.deposit)} €</p>
        </div>
        {metadata?.promoDiscount > 0 && (
          <div className="d-flex justify-content-between pt-2">
            <p>Gutschein</p>
            {/* Promo Discount */}
            <p>- {formatToGerman2(metadata?.promoDiscount)} €</p>
          </div>
        )}
        <div className="d-flex justify-content-between pt-2">
          <p>
            <img className="img-fluid me-2" src={'/assets/icon/deliveryIcon.png'} width="25" />
            Gekühlter Versand
            {/* Shipping */}
          </p>
          <p>{isNaN(DC) ? (DC == 'NaN' ? 'Calculating' : DC) : `${formatToGerman2(DC)} €`} </p>
        </div>
        {
          // total <= thresholdCost &&
          parseFloat(metadata?.fastShipping) > 0 && (
            <div className="d-flex justify-content-between pt-2">
              <p>
                <img className="img-fluid me-2" src={'/assets/icon/deliveryIcon.png'} width="25" />
                Lieferung bis 12:00 Uhr
              </p>
              <p>{formatToGerman2(fastShipCharges)}&nbsp;€</p>
            </div>
          )
        }

        <div className="d-flex justify-content-between pt-2 fw-bold bg-light border-top px-1">
          <p>Gesamtsumme inkl. MwSt.</p>
          <p className="fw-bold">
            {shippingCostLoading ? (
              <img
                height="20"
                width="20"
                className="ms-2 rotate"
                alt="refresh"
                src={'/assets/icon/refresh.png'}
              />
            ) : grandTotal > 0 ? (
              `${formatToGerman2(grandTotal)} €`
            ) : (
              1.0 + ' €'
            )}
            {/* If Grand Total < 0 Due to Flat Discount => negative Values converted into 00 */}
          </p>
        </div>
      </div>
    </div>
  )
}
