'use client'
import { Heart } from '@/assets/svgIcons'
import useAddWishlist from '@/hooks/useAddWishlist'
import { fetcher } from '@/lib/fetcher'
import { IsWishlist } from '@/utils/IsWishlist'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useBoxDetail } from './useBoxDetail'
import ModalContainer from '@/components/Modal/ModalContainer'
import ConfirmWishModal from '@/components/Modal/ConfirmWishModal'
import { formatToGerman2 } from '@/utils/germanFormat'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { IsInCart } from '@/components/common/utils'
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify'
import { useAppSelector } from '@/redux/hooks'

export function WishlistButton({ boxData }) {
  const token = useAppSelector((state) => state?.account?.token)
  const addWishlistBox = (d) => fetcher('wishlist_smoothie_box', { data: d, token, method: 'POST' })
  const wishlist = useAppSelector((state) => state?.wishlist)

  const { isLoading, isDone, addWishlist } = useAddWishlist(addWishlistBox)

  const [modalVisible, setModalVisible] = useState(false)

  const handleWishlist = (id) => {
    IsWishlist(1, boxData?.id, wishlist) ? setModalVisible(true) : addWishlist({ box_id: id })
  }
  return (
    <>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={() => addWishlist({ box_id: boxData?.unique_id })}
          isLoading={isLoading}
          innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
          okLabel="Klingt gut"
        />
      </ModalContainer>
      <button
        className="btn btn-outline-success shadow-none rounded-pill mb-2"
        onClick={() => handleWishlist(boxData?.unique_id)}
      >
        {/* Type  0 => Recipe, 1 => Box , 2=> Ingredient */}
        {isLoading ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          <span className="me-2">
            <Heart filled={IsWishlist(1, boxData?.id, wishlist)} />
          </span>
        )}
        {IsWishlist(1, boxData?.id, wishlist) ? 'Auf' : 'Auf'} den Merkzettel
      </button>
    </>
  )
}

export function AvailabilityBadge({ boxDescription }) {
  const { selectedBoxData, setSelectedBoxData, setSelectedQty, selectedSize, setSelectedSize } =
    useBoxDetail()
  useEffect(() => {
    if (boxDescription && boxDescription?.length > 0) {
      setSelectedSize(boxDescription[0]?.smoothie_box_size_id)
    }
  }, [boxDescription])
  useEffect(() => {
    if (selectedSize) {
      let filt = boxDescription?.find((d, i) => selectedSize == d.smoothie_box_size_id)
      setSelectedBoxData(filt)
      let filtQty = boxDescription?.find((d) => d.smoothie_box_size?.id == selectedSize)
        ?.smoothie_box_size?.size
      setSelectedQty(filtQty)
    }
  }, [selectedSize, boxDescription])
  console.log('Box Descriptoon ', boxDescription)
  return (
    <div>
      {selectedBoxData &&
        parseInt(selectedBoxData?.box_status) !== 0 &&
        selectedBoxData?.box_status != null && (
          <div className={`badge rounded-pill text-uppercase bg-danger mb-2`}>
            derzeit nicht verfügbar
            {/* Currently not available */}
          </div>
        )}
    </div>
  )
}

export function PriceSection() {
  const { discount, selectedBoxData, selectedQty, selectedSize, perLitterPrice, tempPrice } =
    useBoxDetail()

  return (
    <div>
      {selectedSize && (
        <>
          <span className=" d-flex align-items-baseline">
            <span className={`fs-3 ${discount && 'text-decoration-line-through'} `}>
              {formatToGerman2(tempPrice)}
              &nbsp;€
            </span>
            {discount > 0 && (
              <span className=" fs-3 ms-2">
                {formatToGerman2(tempPrice - (discount / 100) * tempPrice)}
                &nbsp;€
              </span>
            )}
          </span>
          {/* Price Section */}
          <span className=" d-flex align-items-baseline text-muted mb-3">
            <span className={`${discount && 'text-decoration-line-through'} `}>
              {formatToGerman2(perLitterPrice)}&nbsp;€
            </span>
            {discount && (
              <span className="ms-2">
                {formatToGerman2(perLitterPrice - (discount / 100) * perLitterPrice)}
                &nbsp;€
              </span>
            )}
            <span>
              /Liter, inkl. MwSt, zzgl.&nbsp;
              <span
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#VATModal"
                data-bs-whatever="@getbootstrap"
                className="text-decoration-underline"
              >
                Versand
              </span>
              &nbsp;+ Pfand
            </span>
          </span>
        </>
      )}
    </div>
  )
}

export function BoxForm({ boxDescription, boxCategory, boxData, subscriptionData, boxImage }) {
  const { addItem } = useCart()
  const {
    discount,
    selectedBoxData,
    selectedQty,
    selectedSize,
    setSelectedSize,
    subscriptionPlan,
    setDiscount,
    setSubscriptionPlan,
    setSubscription,
    subscription,
    perLitterPrice,
  } = useBoxDetail()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleSubscriptionId = (val) => {
    let objSubscription = subscriptionData?.find((d) => d.id == val)
    setSubscription(objSubscription)
    setDiscount(objSubscription?.discount)
  }

  const handleCart = (data) => {
    // console.log("Box Data ", selectedBoxData, data);

    let tempPrice =
      !selectedBoxData?.price || selectedBoxData?.price == 0
        ? selectedBoxData?.smoothie_box_size?.price
        : selectedBoxData?.price
    addItem({
      ...data,
      ...boxData,
      id: `${boxData?.id}${selectedSize}${subscriptionPlan}`,
      box_size: selectedSize,
      price: discount ? tempPrice - (discount / 100) * tempPrice : tempPrice,
      actualPrice: tempPrice,
      discounted: discount,
      boxSmoothies: selectedBoxData?.smoothie_box,
      short_detail: boxData?.smoothie_box_descriptions[0]?.short_detail,
      subscriptionPlan,
      subscription_id: subscription?.id,
      duration: subscription?.duration,
      subscriptionObj: subscription,
      perLitterPrice,
      image: boxImage[0]?.images,
    })
    toast.success('Deine Box liegt jetzt im Warenkorb')
    // Added to Cart Successfuly
  }
  const handleSubscriptionDiscount = (val, plan) => {
    if (!plan) {
      setSubscriptionPlan(false)
    }
    let objSubscription = subscriptionData?.find((d) => d.duration == val)
    // debugger;
    // setSubscription(objSubscription?.id);
    if (objSubscription && subscriptionPlan) {
      setDiscount(
        (!selectedBoxData?.price || selectedBoxData?.price == 0
          ? selectedBoxData?.smoothie_box_size?.price
          : selectedBoxData?.price) -
          (!selectedBoxData?.price || selectedBoxData?.price == 0
            ? selectedBoxData?.smoothie_box_size?.price
            : selectedBoxData?.price) *
            (objSubscription.discount / 100)
      )
    } else {
      setDiscount(null)
      // setSubscription(null);
      // setSubscriptionPlan(false);
    }
    // setDiscount(objSubscription?.discount);
  }
  return (
    <>
      <select
        className="form-select flx-selectbox-style bg-transparent"
        placeholder="Select Box Size"
        // {...register("box_size", {
        //   required: true,
        // })}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="">Wähle eine Variante aus</option>
        {boxDescription
          ?.sort(
            (a, b) => parseInt(a?.smoothie_box_size?.size) - parseInt(b?.smoothie_box_size?.size)
          )
          ?.map(({ smoothie_box_size }, index) => {
            return (
              <option selected={index == 0 ? true : false} key={index} value={smoothie_box_size.id}>
                {smoothie_box_size.label} ({smoothie_box_size.variant})
              </option>
            )
          })}
      </select>
      {errors?.box_size?.type === 'required' && (
        <div className="text-danger my-1">* Angabe notwendig</div>
      )}

      <h5 className="pt-4">Das steckt drin</h5>
      <div className="d-flex">
        {selectedSize ? (
          <button
            className="flx-selectbox-btn"
            data-bs-toggle="modal"
            data-bs-target="#viewBoxModal"
            data-bs-whatever="@getbootstrap"
          >
            Box öffnen
          </button>
        ) : (
          <button onClick={handleSubmit(handleCart)} className="flx-selectbox-btn">
            Box öffnen
          </button>
        )}

        {Number(boxCategory?.is_customize) === 0 && (
          <Link
            href={
              selectedBoxData &&
              parseInt(selectedBoxData?.box_status) !== 0 &&
              selectedBoxData?.box_status !== null
                ? ''
                : selectedSize
                  ? `/meine-smoothie-box/${boxData?.unique_id}/${selectedBoxData?.smoothie_box_size?.size}`
                  : `/meine-smoothie-box/${boxData?.unique_id}`
            }
            className={`ms-2 btn flx-selectbox-btncustomize ${
              selectedBoxData &&
              parseInt(selectedBoxData?.box_status) !== 0 &&
              selectedBoxData?.box_status !== null
                ? 'pe-disable'
                : ''
            }`}
          >
            Customize
          </Link>
        )}
        {/* Delete Button */}
        {/* {boxData?.smoothie_box_descriptions[0]?.created_by == "1" && (
                    <ConfirmModal
                      className="p-8-20 rounded-2 fs-14 "
                      action={() => handleDelete(boxData?.unique_id)}
                      closeRef={closeRef}
                    />
                  )} */}
      </div>
      {Number(boxCategory?.is_subscription) === 0 && (
        <>
          <h5 className="pt-4">Wähle eine passende Kaufoption</h5>
          <button
            onClick={() => handleSubscriptionDiscount(null, false, subscriptionData)}
            className={` ${subscriptionPlan ? 'flx-selectbox-btncustomize' : 'flx-selectbox-btn'}`}
          >
            Einmaliger Kauf
          </button>
          <button
            onClick={() => setSubscriptionPlan(true)}
            className={`ms-2 ${
              subscriptionPlan ? 'flx-selectbox-btn' : 'flx-selectbox-btncustomize'
            }`}
          >
            Box als Abo
          </button>
        </>
      )}
      <form
        className=""
        // onSubmit={handleSubmit(handleCart)}
      >
        {Number(boxCategory?.is_subscription) === 0 && (
          <>
            {subscriptionPlan && (
              <>
                <select
                  className="form-select flx-selectbox-style bg-transparent mt-4"
                  {...register('subscription', {
                    required: true,
                    onChange: (e) => handleSubscriptionId(e.target.value),
                  })}
                >
                  <option value="">Lieferintervall</option>
                  {subscriptionData?.map((d, i) => {
                    return (
                      <option key={i} value={d?.id}>
                        {d?.name}
                      </option>
                    )
                  })}
                </select>
                {errors?.subscription?.type === 'required' && (
                  <div className="text-danger my-1">* Angabe notwendig</div>
                )}
              </>
            )}{' '}
          </>
        )}
        <div className="d-flex mt-4 ">
          <button
            disabled={
              selectedBoxData &&
              parseInt(selectedBoxData?.box_status) !== 0 &&
              selectedBoxData?.box_status !== null
            }
            onClick={handleSubmit(handleCart)}
            className={`flx-selectbox-style bg-theme-success text-white border-0 fw-bold ${
              selectedBoxData &&
              parseInt(selectedBoxData?.box_status) !== 0 &&
              selectedBoxData?.box_status !== null
                ? 'pe-disable'
                : ''
            }`}
            title="derzeit nicht verfügbar"
          >
            {IsInCart(boxData?.unique_id) && (
              <span className="btn-label">
                <i className="fa fa-check"></i>&nbsp;
              </span>
            )}
            In den Warenkorb legen
          </button>
        </div>
      </form>
    </>
  )
}
