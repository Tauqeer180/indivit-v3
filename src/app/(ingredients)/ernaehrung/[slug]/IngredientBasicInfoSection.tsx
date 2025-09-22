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
import Image from 'next/image'
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
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-6 md:tw-gap-10  tw-items-center">
        <div className="tw-bg-theme tw-aspect-[57/63] tw-rounded-2.5xl">
          <div className="tw-text-center tw-p-4">
            <Image
              src={
                data?.picture
                  ? `${baseURL}/integredient/${data?.picture}`
                  : 'assets/icon/img-icon.png'
              }
              className="  tw-object-contain tw-w-full"
              alt=""
              width={570}
              height={630}
            />
          </div>
        </div>
        <div className="">
          <div className="tw-flex tw-items-center tw-mb-4">
            <h2 className="fs-2 fw-bolder mb-0">{loading ? <TextSkelton /> : data?.name}</h2>
            {statusLabel && (
              <span className={`badge rounded-pill text-uppercase ms-2 ${statusColor} `}>
                {statusLabel}
              </span>
            )}
          </div>
          <div className="text-left tw-font-normal tw-font-Epilogue-bold">
            <div className="tw-mb-4">
              <span className="tw-text-lg tw-font-extrabold">Geschmack:</span> &nbsp;
              {/* taste */}
              {loading ? <TextSkelton /> : data?.taste_description}
            </div>
            <div className="tw-mb-4">
              <span className="tw-text-lg tw-font-extrabold">Bio:</span> &nbsp;
              {loading ? <TextSkelton /> : data?.organic_certificate}
            </div>
            <div className="tw-mb-4">
              <span className="tw-text-lg tw-font-extrabold">Herkunft:</span> &nbsp;
              {loading ? <TextSkelton /> : data?.origin}
            </div>
            <div className="tw-mb-4">
              <span className="tw-text-lg tw-font-extrabold">Energie:</span> &nbsp;
              {loading ? (
                <TextSkelton />
              ) : (
                formatToGerman1(data?.energy_kcl) + ' kcal pro 100g                '
              )}
            </div>
            <div className="tw-mb-4">
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
            </div>
          </div>

          <button
            className="btn-outline tw-shadow-theme tw-bg-transparent !tw-text-theme shadow-theme-md"
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
