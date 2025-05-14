import ConfirmWishModal from '@/components/Modal/ConfirmWishModal'
import ModalContainer from '@/components/Modal/ModalContainer'
import { baseURL, fetcher } from '@/lib/fetcher'
import { formatToGerman2 } from '@/utils/germanFormat'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useCart } from 'react-use-cart'

export default function CartCard({ box, subscriptionPlan }) {
  const [modalVisible, setModalVisible] = useState(false)
  const commonImg = useSelector((state) => state?.settings?.smoothieImg)

  const { removeItem } = useCart()

  const {
    isLoading: boxSizeLoading,
    error: boxSizeError,
    data: boxSizeData,
  } = useQuery({
    queryKey: ['getBoxSize'],
    queryFn: () => fetcher('get_smoothie_box_size', { cache: true, revalidate: 86400 }),
  })
  const handleRemove = () => {
    setModalVisible(false)
    removeItem(box?.id)
  }
  const boxSize = boxSizeData?.data?.find((d, i) => d.id == box?.box_size)
  // console.log(
  //   subscriptionPlan,
  //   subscriptionPlan?.find((d) => d.id == box?.subscription_id)
  // );
  return (
    <div>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={handleRemove}
          innerHtml={'Möchtest du wirklich diese Box aus dem Warenkorb löschen?'}
          okLabel="Ja, Box aus dem Warenkorb entfernen"
          // isLoading={isLoading}
        />
      </ModalContainer>
      <div className="flx-box-shopping p-4 rounded-3 bg-light">
        <div className="row">
          <div className="col-8 col-md-6">
            <span className="fs-5 fw-bold">{box?.name}</span> x
            <span className="fw-bold">{box?.quantity}</span>
            <p>
              <span className={`${box?.discounted && 'text-decoration-line-through'}`}>
                {formatToGerman2(
                  box?.discounted ? box?.actualPrice * box?.quantity : box?.itemTotal
                )}
                &nbsp;€
              </span>
              {box?.discounted && (
                <>
                  <span className="ms-2">
                    {formatToGerman2(
                      (parseFloat(box?.actualPrice) - (box?.discounted / 100) * box?.actualPrice) *
                        box?.quantity
                    )}
                    &nbsp;€
                  </span>
                  <span className="ms-2">({box?.discounted}% Rabatt auf dein Abo )</span>
                </>
              )}
            </p>
          </div>
          <div className="col-4 col-md-6 text-end">
            {/* <img
              height="30px"
              width="30px"
              src={editIcon}
              alt=""
              className="img-fluid"
            />
            &nbsp; */}
            <Image
              onClick={() => setModalVisible(true)}
              height={30}
              width={30}
              src="/assets/icon/Recycle-Bin.png"
              alt="recycle bin"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 my-1">
            <div className="flx-csmoothies-style py-3 text-truncate">
              {boxSize?.size} Smoothies ( {boxSize?.variant} )
            </div>
          </div>
          <div className="col-12 col-sm-6 my-1">
            <div className=" flx-csmoothies-style py-3 text-capitalize text-truncate">
              {box?.subscriptionPlan
                ? 'Abo | ' + subscriptionPlan?.find((d) => d.id == box?.subscription_id)?.name
                : 'Einmaliger Kauf | Kein Abo'}
              {/* one time | no subscription */}
            </div>
          </div>
        </div>
        <div className="row pt-4">
          {box?.boxSmoothies?.map((item, index) => {
            // console.log("Order Item ", item);
            return (
              <div key={index} className="col-6 col-md-4 mb-3">
                <div className="row align-items-center">
                  <div className=" col-4">
                    <Image
                      src={
                        item?.smoothie?.smoothie_picture?.picture
                          ? baseURL + 'smoothie/' + item?.smoothie?.smoothie_picture?.picture
                          : commonImg
                      }
                      width={500}
                      height={500}
                      alt={item?.smoothie?.name}
                      title={item?.smoothie?.name}
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                  <div className=" col-8">
                    <h5 className="m-0 text-truncate">{item?.smoothie?.name}</h5>
                    <p className="m-0">{item?.qty} x</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
