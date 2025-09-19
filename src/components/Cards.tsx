'use client'
import React, { useEffect, useState } from 'react'
import imgIcon from '../assets/icon/img-icon.png'
import { useAppSelector } from '@/redux/hooks'

// import {
//   addWishlistBox,
//   addWishlistIngredient,
//   addWishlistSmoothie,
// } from "../services/Wishlist";
// import { useSelector } from "react-redux";
import {
  ArrowOutIcon,
  CloudShape,
  CrossBoxIcon,
  Heart,
  PlusBoxIcon,
  QuotationIcon,
  QuoteUpIcon,
} from '@/assets/svgIcons'
// import { IsWishlist } from "./common/utils";
import useIngredientType from '@/hooks/useIngredientType'
import useIngredientStatus from '@/hooks/useIngredientStatus'
// import ConfirmWishModal from "./Modal/ConfirmWishModal";
import useAddWishlist from '@/hooks/useAddWishlist'
// import ModalContainer from "./Modal/ModalContainer";
// import useCategoryCount from "@/hooks/useCategoryCount";
import RangeSteps from './RangeSteps'
import useCategoryShare from '@/hooks/useCategoryShare'
import { formatToGerman, formatToGerman1 } from '@/utils/germanFormat'
import moment from 'moment'
import useReadingTime from '@/hooks/useReadingTime'
import StarRating from './StarRating'
import { IsWishlist } from '@/utils/IsWishlist'
import useCategoryCount from '@/hooks/useCategoryCount'
import { baseURL, fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import ModalContainer from './Modal/ModalContainer'
import ConfirmWishModal from './Modal/ConfirmWishModal'
// import { addWishlistIngredient, addWishlistSmoothie } from '@/services/Wishlist'
import useCheckStock from '@/hooks/useCheckStock'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
let profileIconStyle =
  'lg:tw-w-48 lg:tw-h-48 md:tw-w-40 md:tw-h-40 tw-w-32 tw-h-32 lg:-tw-mt-24 md:-tw-mt-20 -tw-mt-16 tw-rounded-full tw-object-cover tw-object-center tw-border-solid tw-border-[10px] tw-border-white'
export function BoxCard({ data }) {
  const token = useAppSelector((state) => state?.account?.token)

  let addWishlistBox = (d) => fetcher('wishlist_smoothie_box', { token, method: 'POST', data: d })
  const { isLoading, addWishlist, isDone } = useAddWishlist(addWishlistBox)
  const [modalVisible, setModalVisible] = useState(false)
  const wishlist = useAppSelector((state) => state?.wishlist)
  const commonImg = useAppSelector((state) => state.settings?.boxImg)

  const handleWishlistBox = (id) => {
    IsWishlist(1, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ box_id: id })
  }
  useEffect(() => {
    if (isDone) {
      setModalVisible(false)
    }
  }, [isDone])

  // const filterData = IsWishlist()

  const boxData =
    data?.smoothie_box_descriptions?.length > 0 ? data?.smoothie_box_descriptions[0] : {}
  const boxImages = data?.smoothie_image

  return (
    <>
      {/* {JSON.stringify(token)} */}
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={() => addWishlist({ box_id: data?.unique_id })}
          isLoading={isLoading}
          innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
          okLabel="Klingt gut"
        />
      </ModalContainer>
      {/* {modalVisible && <ConfirmWishModal setModalVisible={setModalVisible} />} */}
      <div className="tw-relative tw-bg-white tw-rounded-[20px] tw-p-5 xl:tw-p-[30px] shadow-theme-lg tw-shadow-[#CCC]">
        {boxData?.created_by == 1 && (
          <span className={`badge rounded-pill text-uppercase bg-info position-absolute start-10`}>
            Customized
          </span>
        )}

        <div className="">
          <Link href={`/produkte/${data?.slug || data?.unique_id}`}>
            <Image
              src={
                boxImages?.length > 0 ? baseURL + 'smoothie_box/' + boxImages[0]?.images : commonImg
              }
              className="img-fluid w-100 tw-max-h-[240px] aspect-auto tw-mb-4"
              // fill={true}
              width={366}
              height={240}
              loading="lazy"
              alt={data?.name}
            />
          </Link>

          <h4 className="flx-hide-title tw-text-xl tw-font-extrabold">{data?.name}</h4>
          <p className="p5 flx-hide-paragh">{data?.smoothie_box_descriptions[0]?.short_detail}</p>
        </div>
        <div className="tw-flex tw-items-center tw-gap-6">
          <Link
            href={`/produkte/${data?.slug || data?.unique_id}`}
            className="btn-theme !tw-py-3 !tw-px-6"
          >
            Box öffnen
          </Link>{' '}
          <button
            type="button"
            className="  tw-w-12 tw-h-12 tw-rounded-full tw-border-solid tw-border-b-3 tw-border-r-3 tw-border-t-1 tw-border-l-1 tw-bg-white  tw-border-[#CCCCCC] "
            onClick={() => handleWishlistBox(data?.unique_id)}
          >
            {/* Type  0 => Recipe, 1 => Box , 2=> Ingredient */}
            {isLoading ? (
              <Image
                width={50}
                height={50}
                alt="whishlst loader"
                src={'/assets/icon/loader.gif'}
                className="img-fluid"
                loading="lazy"
              />
            ) : (
              <Heart filled={IsWishlist(1, data?.id, wishlist)} />
            )}
          </button>
        </div>
      </div>
    </>
  )
}
// export function ProductCard() {
//   const commonImg = useSelector((state) => state.settings?.smoothieImg);

//   return (
//     <div className="card">
//       <div className="text-center">
//         <img src={commonImg} className="img-fluid" loading="lazy" />
//         <h4>Athlete smoothie box</h4>
//         <p className="p5">
//           This is information about the box and could be over two lines.
//         </p>
//         <button type="button" className="btn btn-secondary hsn-box-btn">
//           Box öffnen
//         </button>
//       </div>
//     </div>
//   );
// }

export function RecipeCard({
  isButton,
  data,
  hideWishIcon,
  action,
  actionTitle,
  className,
}: {
  isButton: boolean
  data: any
  hideWishIcon?: boolean
  action: any
  actionTitle: any
  className: any
}) {
  const token = useAppSelector((state) => state?.account?.token)

  const addWishlistSmoothie = async (data) =>
    await fetcher(`wishlist_smoothie`, { data, token, method: 'POST' })

  const { isLoading, addWishlist, isDone } = useAddWishlist(addWishlistSmoothie)
  const [modalVisible, setModalVisible] = useState(false)
  const wishlist = useAppSelector((state) => state?.wishlist)
  const { isOutofStock, checkStock } = useCheckStock()
  const commonImg = useAppSelector((state) => state.settings?.smoothieImg)

  // const { isOutofStock, checkStock } = useCheckStock();
  const handleWishlistRecipe = (id) => {
    IsWishlist(0, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ smoothie_id: id })
  }
  useEffect(() => {
    if (isDone) {
      setModalVisible(false)
    }
  }, [isDone])
  useEffect(() => {
    if (data) {
      let tempIng = data?.smoothie_ingredient?.map((ing) => {
        return { ...ing, ...ing?.ingredient }
      })
      checkStock(tempIng)
    }
  }, [data])

  return (
    <>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={() => addWishlist({ smoothie_id: data?.unique_id })}
          isLoading={isLoading}
          innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
          okLabel="Klingt gut"
        />
      </ModalContainer>
      <div
        className={cn(
          'tw-bg-white tw-rounded-[20px] tw-p-5 xl:tw-p-[30px] shadow-theme-lg tw-shadow-[#CCC]',
          className
        )}
      >
        {data?.created_by == 1 && (
          <span className={`badge rounded-pill text-uppercase bg-info position-absolute start-10`}>
            Customized
          </span>
        )}

        <div className="">
          <Link
            href={action || '#'}
            className="tw-border-none tw-bg-transparent tw-cursor-pointer "
          >
            <div className="position-relative">
              <Image
                alt={data?.name}
                width={768}
                height={768}
                src={
                  data?.smoothie_picture?.picture
                    ? baseURL + 'smoothie/' + data?.smoothie_picture?.picture
                    : commonImg
                }
                className=" tw-max-h-60 w-100 hover:tw-scale-95 tw-duration-300 tw-object-contain"
                loading="lazy"
              />
              {isOutofStock && (
                <div className="position-absolute bottom-0 start-0 end-0">
                  <span className={`badge rounded-pill text-uppercase bg-danger mb-2`}>
                    derzeit nicht verfügbar
                  </span>
                </div>
              )}
            </div>
          </Link>

          <h4 className="tw-text-xl tw-font-extrabold tw-mt-5">{data?.name}</h4>
          <p className="p5 text-truncate tw-text-sm">{data?.headline}</p>
          {isButton && (
            <div className="tw-flex tw-items-center tw-gap-6">
              <Link href={action} type="button" className="btn-theme !tw-py-3 !tw-px-6">
                {actionTitle}
              </Link>
              <button
                // type="button"
                disabled={isLoading}
                hidden={hideWishIcon}
                className="  tw-w-12 tw-h-12 tw-rounded-full tw-border-solid tw-border-b-3 tw-border-r-3 tw-border-t-1 tw-border-l-1 tw-bg-white  tw-border-[#CCCCCC] "
                onClick={() => handleWishlistRecipe(data?.unique_id)}
              >
                {isLoading ? (
                  <Image
                    width={50}
                    height={50}
                    alt="whishlst loader"
                    src={'/assets/icon/loader.gif'}
                    className="img-fluid"
                    loading="lazy"
                  />
                ) : (
                  <Heart
                    filled={IsWishlist(0, data?.id, wishlist)}
                    // className={cn(filled && 'tw-text-theme')}
                  />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export function IngredientCard({ data, className }: { data: any; className: string }) {
  const wishlist = useAppSelector((state) => state?.wishlist)
  let token = useAppSelector((state) => state?.account?.token)
  let addWishlistIngredient = async (d) =>
    await fetcher('wishlist_ingredient', { data: d, token, method: 'POST' })
  const { isLoading, addWishlist, isDone } = useAddWishlist(addWishlistIngredient)
  const [modalVisible, setModalVisible] = useState(false)
  const commonImg = useAppSelector((state) => state.settings?.smoothieImg)

  const { badgeLabel, badgeColor } = useIngredientType(data?.ingredient_filling_types_id)
  const { statusLabel, statusColor } = useIngredientStatus(data?.ingredient_status)

  const handleWishlistIngredient = (id) => {
    IsWishlist(2, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ ingredient_id: id })
  }

  useEffect(() => {
    if (isDone) {
      setModalVisible(false)
    }
  }, [isDone])
  return (
    <>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={() => addWishlist({ ingredient_id: data?.unique_id })}
          isLoading={isLoading}
          innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
          okLabel="Klingt gut"
        />
      </ModalContainer>
      <div
        className={cn(
          'tw-rounded-2.5xl tw-bg-white shadow-theme-lg tw-shadow-[#ccc] tw-p-7 tw-h-full',
          className
        )}
      >
        {badgeLabel && (
          <div className="ribbon">
            <span className={`ribbon__content  ${badgeColor} `}>{badgeLabel}</span>
          </div>
        )}
        {statusLabel && (
          <span
            className={`badge rounded-pill text-uppercase ${statusColor} position-absolute end-22px`}
          >
            {statusLabel}
          </span>
        )}

        <Link href={`/ernaehrung/${data?.slug || data?.unique_id}`} className="!tw-w-full tw-block">
          <Image
            src={data?.picture ? baseURL + 'integredient/' + data?.picture : commonImg}
            className="tw-object-contain tw-w-full"
            alt={data?.name}
            loading="lazy"
            height={300}
            width={300}
          />
        </Link>
        <div className="">
          <h5 className="tw-text-xl tw-font-extrabold">{data?.name}</h5>
          <p className="">{data?.taste_description}</p>
          <div className="tw-flex tw-items-center tw-gap-6">
            <Link
              href={`/ernaehrung/${data?.slug || data?.unique_id}`}
              type="button"
              className="btn-theme !tw-py-3 !tw-px-6"
            >
              Mehr erfahren
            </Link>
            <button
              className="  tw-w-12 tw-h-12 tw-rounded-full tw-border-solid tw-border-b-3 tw-border-r-3 tw-border-t-1 tw-border-l-1 tw-bg-white  tw-border-[#CCCCCC] "
              onClick={() => handleWishlistIngredient(data?.unique_id)}
            >
              {/* Type  0 => Recipe, 1 => Box , 2=> Ingredient */}
              {isLoading ? (
                <Image
                  width={50}
                  height={50}
                  alt="loader"
                  src={'/assets/icon/loader.gif'}
                  className="img-fluid"
                  loading="lazy"
                />
              ) : (
                <Heart filled={IsWishlist(2, data?.id, wishlist)} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export function SelectListCard({
  data,
  list,
  handleAdd,
  handleIngredientView,
  suggest,
  modelView,
  catCount,
}) {
  const { setStatusId, statusLabel, statusColor } = useIngredientStatus(
    parseInt(data?.ingredient_status)
  )
  useEffect(() => {
    setStatusId(parseInt(data?.ingredient_status))
  }, [data])

  let isSelected = list?.some((x) => x?.id == data?.id)
  const { limitText, limitDisable } = useCategoryCount(list, data, isSelected)

  return (
    <div className="pb-4">
      <div className="d-flex align-items-center">
        <div className="me-1 me-md-2 align-items-center ">
          <img
            src={
              data?.picture ? baseURL + 'integredient/' + data.picture : '/assets/icon/logo1.png'
            }
            alt={data?.name}
            title={data?.name}
            className=" img-fluid "
            width="40px"
            loading="lazy"
          />
        </div>
        <div className="w-100 ">
          <div className=" d-flex justify-content-between align-items-center text-center">
            <div className="d-flex gap-1">
              <span>
                <h6 className="mb-0 text-truncate">{data?.name}</h6>
                {/* {(
                  data?.ingredient_category?.name == "Liquids" ||
                  data?.ingredient_category?.name == "Zitrus" ||
                  data?.ingredient_category?.name == "Extras"
                  || data?.ingredient_category?.name == "Blattgemüse"
                  ) && (
                  <span className="fs-10">
                    {data?.ingredient_category?.name}
                  </span>
                )} */}
              </span>
              {modelView ? (
                <button
                  className="btn p-0 shadow-none"
                  onClick={handleIngredientView}
                  data-bs-toggle="modal"
                  data-bs-target="#ingredientDetailPopup"
                  data-bs-whatever="@getbootstrap"
                >
                  <img
                    src={'/assets/icon/allingredientsinfo.png'}
                    alt=""
                    className="img-fluid"
                    width="20"
                    loading="lazy"
                  />
                </button>
              ) : (
                ''
              )}
            </div>

            {parseInt(data?.ingredient_status) == 0 ? (
              <button
                className={
                  'btn p-0 shadow-none tw-w-6 tw-h-6' +
                  (data?.ingredient_status == 0 ? '' : 'disabled')
                }
                onClick={() => handleAdd({ ...data, filling_index: 2 })}
                disabled={limitDisable}
              >
                {isSelected ? <CrossBoxIcon /> : <PlusBoxIcon />}
              </button>
            ) : (
              <>
                {statusLabel && (
                  <span className={`badge rounded-pill text-uppercase fs-10 ${statusColor} `}>
                    {statusLabel}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {limitText && (
        <p className="fs-12 lh-1 mb-0 mt-1 text-center text-danger ">
          <span>*</span>
          {limitText}
        </p>
      )}
    </div>
  )
}
export function Badge({ data, list, handleAdd, handleNavigate }) {
  let isSelected = list?.some((x) => x.id == data?.id)
  return (
    <div>
      <span
        type="button"
        className={`m-1 badge rounded-pill ${isSelected ? 'bg-dark' : 'bg-theme-success'}`}
        // onClick={() => handleAdd({ ...data, filling_index: 2 })}
        onClick={() => handleNavigate(data?.id)}
      >
        {data?.name}
        {isSelected ? (
          <span className="ms-2"> &#10006; </span>
        ) : (
          <span className="ms-2">&#10010;</span>
        )}
      </span>
    </div>
  )
}

export function BoxListCard({ data, handleModal, handleAdd, isDisable }) {
  const commonImg = useAppSelector((state) => state.settings?.smoothieImg)
  return (
    <div className="d-flex justify-content-between pb-3 page-wrapper">
      <div
        className="d-flex justify-content-between  align-items-center bg-transprent p-2 rounded-3 border border-dark w-100 me-2"
        role="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        onClick={handleModal}
      >
        <div className=" d-flex align-items-center">
          <img
            height="56px"
            width="50px"
            src={
              data?.smoothie_picture?.picture
                ? baseURL + 'smoothie/' + data?.smoothie_picture?.picture
                : commonImg
            }
            alt={data?.name}
            className="img-fluid"
            loading="lazy"
          />
          &nbsp;&nbsp;&nbsp;
          <p className="m-0"> {data?.name} </p>
        </div>
        <span>&#10095;</span>
      </div>
      <button
        id={`box-mixer-list-${data?.id}`}
        disabled={isDisable}
        type="button"
        className="btn flx-custom-btn"
        onClick={handleAdd}
      >
        Zur Box zufügen
        {/* <span className="cart-item-anim"></span> */}
      </button>
    </div>
  )
}

export function SmoothieSelectListCard({ data }) {
  const commonImg = useAppSelector((state) => state.settings?.smoothieImg)
  // Smoothie Selection in Smoothie Mixer
  return (
    <div className="d-flex justify-content-between pb-4">
      <div className="  d-flex align-items-center gap-2">
        <img
          src={
            data?.smoothie_picture?.picture
              ? baseURL + 'smoothie/' + data?.smoothie_picture?.picture
              : commonImg
          }
          alt={data?.name}
          className=" img-fluid "
          width="40px"
          loading="lazy"
        />
        <h6 className="m-0">{data?.name}</h6>
      </div>
      <div className="col-2 align-items-center text-end">
        <Link href={`/smoothie-mixen-ideen/${data?.unique_id}`} className="btn px-0 shadow-none">
          <PlusBoxIcon width="24px" />
        </Link>
      </div>
    </div>
  )
}
export function MixerSelectedListCard({
  index,
  data,
  handleIngredientView,
  handleSelectedData,
  handleRangeChange,
  selectedData,
}) {
  // Selected Ingredient List in Smoothie Mixer
  const { limitText, limitDisable } = useCategoryShare(selectedData, data)
  const { setStatusId, statusLabel, statusColor } = useIngredientStatus(
    parseInt(data?.ingredient_status)
  )

  useEffect(() => {
    if (parseInt(data?.ingredient_status) != 0) {
      setStatusId(parseInt(data?.ingredient_status))
    }
  }, [data])
  return (
    <div className="row min-h-105 align-items-center" key={index}>
      <div className="col-2">
        <img
          src={data?.picture ? baseURL + 'integredient/' + data?.picture : '/assets/icon/logo1.png'}
          alt={data?.name}
          title={data?.name}
          height="87px"
          width="87px"
          className=" img-fluid "
        />
      </div>
      <div className="col-8">
        <div className="text-start">
          <div className="d-flex justify-content-start align-items-center">
            <label htmlFor="customRange1" className="form-label fw-bold mt-3 me-3 fs-18mb-0">
              <span
              //  className="notranslate"
              >
                {data?.name} ({formatToGerman1(data?.value_in_percentage)}
                %)
              </span>
            </label>
            <button
              className="btn p-0 shadow-none"
              onClick={handleIngredientView}
              data-bs-toggle="modal"
              data-bs-target="#ingredientDetailPopup"
              data-bs-whatever="@getbootstrap"
            >
              <img
                src={'/assets/icon/allingredientsinfo.png'}
                alt=""
                className="img-fluid"
                width="18"
                loading="lazy"
              />
            </button>
            {statusLabel && parseInt(data?.ingredient_status) != 0 && (
              <span className={`badge rounded-pill text-uppercase mt-2 ms-3 fs-10 ${statusColor} `}>
                {statusLabel}
              </span>
            )}
          </div>
          <RangeSteps
            key={index}
            value={data?.filling_index}
            data={{ mlValue: data?.value_in_ml, name: data?.name }}
            // filling={d?.ingredient_filling}
            onChange={handleRangeChange}
          />
          {limitText && (
            <p className="fs-12 lh-1 mb-0 mt-1 text-center text-danger ">
              <span className="">*</span> {limitText}
            </p>
          )}
        </div>
      </div>
      <div className="col-2">
        <button className="btn p-0" onClick={handleSelectedData}>
          <img src={'/assets/icon/Recycle-Bin.png'} width="30px" className="img-fluid" />
        </button>
      </div>
    </div>
  )
}

export function IngrListforReci({ data }) {
  const { setStatusId, statusColor, statusLabel } = useIngredientStatus()

  useEffect(() => {
    setStatusId(data?.ingredient_status)
  }, [data])
  return (
    <div className="d-flex align-items-center">
      <p>
        <Link
          href={`/ernaehrung/${data?.ingredient?.slug || data?.ingredient?.unique_id}`}
          className="tw-text-dark tw-decoration-transparent hover:!tw-text-theme"
        >
          <ChevronRight strokeWidth={3} /> {data?.ingredient?.name} &nbsp;
          {formatToGerman1(data?.value_in_percentage)}%
        </Link>
        {statusLabel && parseInt(data?.ingredient_status) != 0 && (
          <span className={`badge rounded-pill text-uppercase ms-3 fs-10 ${statusColor} `}>
            {statusLabel}
          </span>
        )}
      </p>
    </div>
  )
}

export function SkeltonCard({ profileStyle = false }) {
  return (
    <div className="card border-0 shadow-sm rounded-8 text-center tw-relative" aria-hidden="true">
      <span
        data-aos="fade-up"
        data-aos-duration="2000"
        className={
          profileStyle
            ? profileIconStyle + ' tw-mx-auto tw-bg-white tw-shadow-lg'
            : 'md:tw-h-48 tw-h-40 md:tw-w-48 tw-w-40 tw-mx-auto'
        }
      >
        <img
          src={'/assets/icon/img-icon.png'}
          width=""
          className="w-100 my- mx-auto img-fluid"
          alt="..."
        />
      </span>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <a
          href="#"
          // tabIndex="-1"
          className="btn btn-solid-success disabled placeholder col-6"
        ></a>
      </div>
    </div>
  )
}

export function HeroSkelton() {
  return (
    <div className="tw-flex tw-gap-4 tw-p-6 tw-items-center  tw-rounded-lg ">
      <div className="tw-flex tw-flex-col tw-gap-4 tw-flex-1">
        <div className="tw-w-3/4 tw-h-6 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>

        <div className="tw-w-full tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
        <div className="tw-w-5/6 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
        <div className="tw-w-4/5 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>

        <div className="tw-flex tw-gap-4">
          <div className="tw-w-28 tw-h-10 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
          <div className="tw-w-32 tw-h-10 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
        </div>
      </div>

      <div className="tw-w-40 tw-h-40 lg:tw-w-96 lg:tw-h-96 tw-bg-gray-300 tw-animate-pulse tw-rounded-lg"></div>
    </div>
  )
}

export function BlogCard({ data }) {
  const { checkReadingTime } = useReadingTime()
  let title_slug = data?.title?.split(' ')?.join('-')
  // let slug = title_slug?.concat(`_${data?.id}`);
  return (
    <>
      <figure className="tw-rounded-xl tw-shadow md:tw-p-0 tw-rounded-b-xl max-sm:tw-max-w-[90vw]">
        <Link href={`/blog/${data?.slug}`}>
          <Image
            width={405}
            height={225}
            className="tw-mx-auto tw-aspect-video tw-h-auto  tw-rounded-t-xl tw-w-full "
            src={
              baseURL + 'blogs/' + data?.image ||
              'https://www.cleverelements.com/wp-content/uploads/2024/04/Top-EMailMarketingLoesungen-fuer-Ihr-Unternehmen.png'
            }
            alt={data?.title}
          />
        </Link>
        <div className="tw-space-y-2 md:tw-px-3 tw-px-2 tw-pb-6 tw-pt-3 tw-text-start ">
          {/* <figcaption className="tw-flex tw-justify-end tw-gap-4 tw-items-center">
            <div className=" tw-text-gray-500 sm:tw-text-xs tw-text-[10px] tw-font-bold ">
              {moment(data?.created_at).format("MMM DD, YYYY")}
            </div>

            <div className=" tw-text-gray-500 sm:tw-text-xs tw-text-[10px] ">
              {checkReadingTime(data?.body)}
            </div>
          </figcaption> */}
          <blockquote>
            <Link href={`/blog/${data?.slug}`} className=" tw-decoration-transparent ">
              <h1
                title={data?.title}
                className="  lg:!tw-text-xl md:!tw-text-lg sm:!tw-text-base xxs:tw-text-sm tw-text-xs tw-font-extrabold tw-decoration-transparent tw-text-black hover:tw-text-theme tw-duration-300"
              >
                {data?.title}
              </h1>
            </Link>
            <p title={data?.short_text} className="sm:tw-text-sm tw-text-xs tw-text-gray-500 ">
              {data?.short_text || data?.title}
            </p>
          </blockquote>
          <figcaption className="tw-flex max-xxs:tw-flex-wrap tw-justify-between xxs:tw-gap-4 tw-items-center">
            <Link
              href={`/blog/${data?.slug}`}
              className="sm:tw-text-base tw-text-xs tw-text-theme tw-decoration-transparent hover:tw-font- hover:tw-text-theme hover:tw-ps-2 tw-duration-1000"
            >
              Artikel lesen
              {/* Read More */}
              <span>
                <ArrowOutIcon />
              </span>
            </Link>
            <div className=" tw-text-gray-500 sm:tw-text-xs tw-text-[10px] ">
              {checkReadingTime(data?.body)}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export function TestimonialCard({ data }) {
  const { comment, image, designation, rating, name } = data
  return (
    <div
      // key={index}
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" tw-h-full shadow-theme-xl tw-shadow-[#4B5563] tw-rounded-2xl tw-relative "
    >
      <div className="tw-rounded-2xl tw-p-4 lg:tw-p-8  xl:tw-p-9 tw-bg-white tw-flex tw-flex-col tw-justify-between tw-items-center tw-text-center tw-transition hover:-translate-y-1 tw-h-full">
        {/* Avatar and Text Container */}
        <div className="tw-text-start">
          <div className="tw-w-16 tw-h-16">
            <Image
              src={`${
                image
                  ? baseURL + 'testimonials/' + image
                  : 'https://pretty-girls.net/wp-content/uploads/2018/09/moisrgo.jpg'
              } `}
              alt={`${name}'s avatar`}
              width={64}
              height={64}
              className="tw-w-12 tw-h-12 tw-object-cover tw-border tw-border-solid tw-border-theme tw-border-b-2 tw-border-r-[6px] tw-rounded-sm"
            />
          </div>
          <QuotationIcon />
          {/* Testimonial Text */}
          <p className="tw-text-gray-600 2xl:tw-mt-10 2xl:tw-mb-14 xl:tw-mt-8 xl:tw-mb-10 lg:tw-text-xl  tw-mt-6 tw-mb-8  tw-leading-normal tw-line-clamp-6 tw-text-start">
            "{comment}"
          </p>{' '}
        </div>
      </div>{' '}
      <CloudShape
        className="tw-absolute tw-right-0 tw-left-0 tw-bottom-0 tw-translate-y-2/3 tw-mx-auto  "
        label={`- ${name}, ${designation}`}
      />
    </div>
  )
}

export function WhyIndivitSkelton() {
  return (
    <div className="tw-space-y-6 tw-p-6  tw-rounded-lg ">
      <div className="tw-w-3/4 tw-h-6 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>

      <div className="tw-w-full tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
      <div className="tw-w-5/6 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
      <div className="tw-w-4/5 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>

      <div className="tw-space-y-4">
        <div className="tw-flex tw-items-start tw-gap-4">
          <div className="tw-w-12 tw-h-12 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
          <div className="tw-flex-1">
            <div className="tw-w-1/2 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
            <div className="tw-w-3/4 tw-h-3 tw-bg-gray-300 tw-animate-pulse tw-rounded tw-mt-2"></div>
          </div>
        </div>

        <div className="tw-flex tw-items-start tw-gap-4">
          <div className="tw-w-12 tw-h-12 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
          <div className="tw-flex-1">
            <div className="tw-w-1/2 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
            <div className="tw-w-3/4 tw-h-3 tw-bg-gray-300 tw-animate-pulse tw-rounded tw-mt-2"></div>
          </div>
        </div>

        <div className="tw-flex tw-items-start tw-gap-4">
          <div className="tw-w-12 tw-h-12 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
          <div className="tw-flex-1">
            <div className="tw-w-1/2 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
            <div className="tw-w-3/4 tw-h-3 tw-bg-gray-300 tw-animate-pulse tw-rounded tw-mt-2"></div>
          </div>
        </div>

        <div className="tw-flex tw-items-start tw-gap-4">
          <div className="tw-w-12 tw-h-12 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
          <div className="tw-flex-1">
            <div className="tw-w-1/2 tw-h-4 tw-bg-gray-300 tw-animate-pulse tw-rounded"></div>
            <div className="tw-w-3/4 tw-h-3 tw-bg-gray-300 tw-animate-pulse tw-rounded tw-mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
