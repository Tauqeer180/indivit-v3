import React, { useState } from 'react'
// import productImage from "../../assets/img/products-popup.png";

// import ModalContainer from "../../components/Modal/ModalContainer";
// import ConfirmWishModal from "../../components/Modal/ConfirmWishModal";
import { useRouter } from 'next/navigation'
import ModalContainer from '@/components/Modal/ModalContainer'
import ConfirmWishModal from '@/components/Modal/ConfirmWishModal'
import { baseURL } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'

export default function CustomBoxCard({
  data,
  handleRemove,
  setModalData,
  handleQuantity,
  selectedBoxSize,
  quantity,
}) {
  const [modalVisible, setModalVisible] = useState(false)
  const { push } = useRouter()
  // console.log("Data from Box Card ", data);
  const commonImg = useAppSelector((state) => state.settings?.smoothieImg)

  return (
    <>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          title="Box Baukasten verlassen?"
          setModalVisible={setModalVisible}
          fun={() => push(`/smoothie-mixen-ideen/${data?.unique_id}`)}
          innerHtml="Du verlässt den Boxbaukasten, um dein ausgewähltes Rezept mit dem Online Smoothie Mixer zu konfigurieren. Deine Box wird nicht gespeichert."
        />
      </ModalContainer>
      <div id={`box-mixer-card-${data?.id}`} className="text-center flx-customdetailed-box">
        <img
          src={
            data?.smoothie_picture?.picture
              ? baseURL + '/smoothie/' + data?.smoothie_picture?.picture
              : commonImg
          }
          className="img-fluid w-75 pb-3"
        />
        <h4>{data?.name}</h4>
        <p className="p5 text-truncate">{data?.headline}</p>
        <button
          // to={`/smoothie-mixen-ideen/${data?.id}`}
          onClick={() => setModalVisible(true)}
          type="button"
          className="btn btn-primary btn-outline-success"
        >
          Customize
        </button>
        <div className="flx-cross-div">
          <button
            onClick={handleRemove}
            className="p-0 border-0 flx-cross-btn text-danger tw-flex tw-items-center tw-justify-center"
          >
            <span>&#10006;</span>
            {/* Cross Icon */}
          </button>
        </div>
        <div className="flx-cross-div mt-5 pt-0">
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
            onClick={setModalData}
            className="p-0 border-0 flx-cross-btn text-danger tw-flex tw-items-center tw-justify-center"
          >
            <i className={`fa fa-solid fa-eye text-theme-success `}></i>
            {/* Info Icon */}
          </button>
        </div>
        <div className="flx-quantity-btn">
          <button
            disabled={selectedBoxSize && quantity == selectedBoxSize}
            className="p-0 bg-transparent border-0"
            onClick={() => handleQuantity(data?.id, 1)}
          >
            <img src={'/assets/object/puls.png'} alt="" className="img-fluid" />
          </button>
          <p>{data?.quantity}</p>
          <button
            className="p-0 bg-transparent border-0"
            disabled={data?.quantity == 1}
            onClick={() => handleQuantity(data?.id, -1)}
          >
            <img src={'/assets/object/minus.png'} alt="" className="img-fluid" />
          </button>
        </div>
      </div>
    </>
  )
}
