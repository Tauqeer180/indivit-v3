'use client'
import { Heart } from '@/assets/svgIcons'
import { TextSkelton } from '@/components/common/Common'
import ConfirmWishModal from '@/components/Modal/ConfirmWishModal'
import ModalContainer from '@/components/Modal/ModalContainer'
import useAddWishlist from '@/hooks/useAddWishlist'
import useIngredientStatus from '@/hooks/useIngredientStatus'
import { baseURL, fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { formatToGerman1 } from '@/utils/germanFormat'
import { IsWishlist } from '@/utils/IsWishlist'
import { useEffect, useState } from 'react'

export default function IngredientBasicInfoSection({ data, loading }) {
  const [modalVisible, setModalVisible] = useState(false)
  let token = useAppSelector((state) => state?.account?.token)
  let addWishlistIngredient = async (d) =>
    await fetcher('wishlist_ingredient', { data: d, token, method: 'POST' })
  const { isLoading, isDone, addWishlist } = useAddWishlist(addWishlistIngredient)
  const { setStatusId, statusLabel, statusColor } = useIngredientStatus(data?.ingredient_status)
  const wishlist = useAppSelector((state) => state?.wishlist)
  useEffect(() => {
    setStatusId(data?.ingredient_status)
  }, [data])

  const handleWishlist = (id) => {
    IsWishlist(2, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ ingredient_id: id })
  }
  useEffect(() => {
    if (isDone) {
      setModalVisible(false)
    }
  }, [isDone])

  return (
    <div>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={() => addWishlist({ ingredient_id: data?.unique_id })}
          isLoading={isLoading}
          innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
          okLabel="Klingt gut"
        />
      </ModalContainer>
      <div className="row d-flex  align-items-center">
        <div className="col-">
          <div className="d-flex align-items-center">
            <h1 className="fs-2 fw-bolder">{loading ? <TextSkelton /> : data?.name}</h1>
            {statusLabel && (
              <span className={`badge rounded-pill text-uppercase ms-2 ${statusColor} `}>
                {statusLabel}
              </span>
            )}
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 ">
          <div className="text-center">
            <img
              src={
                data?.picture
                  ? `${baseURL}/integredient/${data?.picture}`
                  : 'assets/icon/img-icon.png'
              }
              className="img-fluid flx-rdetailed-animation max-h-460"
              alt=""
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className=" fs-3 fw-bold mb-3">{data?.key_factor_headline}</div>
          <div className="text-left">
            <p>
              <span className="fw-bold">Geschmack:</span> &nbsp;
              {/* taste */}
              {loading ? <TextSkelton /> : data?.taste_description}
            </p>
            <p>
              <span className="fw-bold">Bio:</span> &nbsp;
              {loading ? <TextSkelton /> : data?.organic_certificate}
            </p>
            <p>
              <span className="fw-bold">Herkunft:</span> &nbsp;
              {loading ? <TextSkelton /> : data?.origin}
            </p>
            <p>
              <span className="fw-bold">Energie:</span> &nbsp;
              {loading ? (
                <TextSkelton />
              ) : (
                formatToGerman1(data?.energy_kcl) + ' kcal pro 100g                '
              )}
            </p>
            <p>
              <span className="fw-bold">Fußabdruck:</span> &nbsp;
              {loading ? (
                <TextSkelton />
              ) : loading ? (
                <TextSkelton />
              ) : (
                data?.carbon_footprint_g_per_100g + `g CO`
              )}
              <sub>2</sub>
              &nbsp; pro 100g
            </p>
          </div>

          <button
            className="btn btn-outline-success shadow-none rounded-pill"
            onClick={() => handleWishlist(data?.unique_id)}
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
                <Heart filled={IsWishlist(2, data?.id, wishlist)} />
              </span>
            )}
            {IsWishlist(2, data?.id, wishlist) ? 'Auf' : 'Auf'} den Merkzettel
          </button>
        </div>
      </div>
    </div>
  )
}
