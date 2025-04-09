'use client'
import BoxUiBanner from '@/app/(boxes)/produkte/components/BoxUiBanner'
import AllNutrientsPopup from '@/app/(ingredients)/beste-smoothie-zutaten-plant-based/ernaehrung/[slug]/AllNutrientsPopup'
import TasteSection from '@/app/(ingredients)/beste-smoothie-zutaten-plant-based/ernaehrung/[slug]/TasteSection'
import { BgSmoothieMixer, Heart } from '@/assets/svgIcons'
import { BoxCard, IngrListforReci, RecipeCard, SkeltonCard } from '@/components/Cards'
import { TextSkelton } from '@/components/common/Common'
import Loader from '@/components/common/Loader'
import ShareButtons from '@/components/common/ShareButtons'
import ConfirmWishModal from '@/components/Modal/ConfirmWishModal'
import ModalContainer from '@/components/Modal/ModalContainer'
import StarRating from '@/components/StarRating'
import useAddWishlist from '@/hooks/useAddWishlist'
import useCheckStock from '@/hooks/useCheckStock'
import { baseURL, fetcher } from '@/lib/fetcher'
import { addWishlistSmoothie } from '@/services/Wishlist'
import { formatToGerman1 } from '@/utils/germanFormat'
import { IsWishlist } from '@/utils/IsWishlist'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// Recipe Detail Page

export default function Page() {
  const [loading, setLoading] = useState(false)
  const { isLoading, isDone, addWishlist } = useAddWishlist(addWishlistSmoothie)
  const { isOutofStock, checkStock } = useCheckStock()

  const [modalVisible, setModalVisible] = useState(false)
  const queryClient = useQueryClient()
  const closeRef = useRef()
  const params = useParams()
  const router = useRouter()
  const smoothieId = params?.slug // `slug` should match the dynamic folder name

  // const params = useParams()

  const {
    isLoading: smoothieLoading,
    error: smoothieError,
    data: smoothieData,
  } = useQuery({
    queryKey: ['smoothieListing'],
    queryFn: () => fetcher('get_smoothie'),
  })
  const smoothiesListing = smoothieData?.smoothies
  const {
    isLoading: smoothieByIdLoading,
    error: smoothieByIdError,
    data: smoothieByIdData,
  } = useQuery({
    queryKey: ['smoothieById', smoothieId],
    queryFn: () => fetcher(`r/${smoothieId}`),
  })
  useEffect(() => {
    if (smoothieByIdData?.response?.status == 404) {
      toast.error('Keine Daten gefunden')
      router.push('/gesunde-smoothies-rezepte-selber-machen')
    }
  }, [smoothieByIdData])

  const data = smoothieByIdData?.smoothie
  const relative_boxes = smoothieByIdData?.smoothie_box
  const wishlist = useSelector((state) => state?.wishlist)

  const {
    isLoading: benefitsLoading,
    error: benefitsError,
    data: benefitsData,
  } = useQuery({
    queryKey: ['boxBenefits'],
    queryFn: () => fetcher('benefits'),
  })

  const handleDelete = (id) => {
    setLoading(true)
    fetcher('del_smoothie', { method: 'POST', data: id })
      .then((res) => {
        // console.log(res);
        if (res?.status == 200) {
          closeRef.current.click()
          toast.success('Dein Smoothie wurde gelöscht')
          queryClient.invalidateQueries([
            'customSmoothieListing',
            'smoothieListing',
            'limitedSmoothieListing',
            'smoothieById',
          ])
          router.push('/gesunde-smoothies-rezepte-selber-machen')
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err?.data)
      })
  }
  const handleWishlist = (id) => {
    IsWishlist(0, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ smoothie_id: id })
  }
  useEffect(() => {
    if (isDone) {
      setModalVisible(false)
    }
  }, [isDone])
  const ingredients_suggestion = data?.smoothie_ingredient.map((e) => e.ingredient)
  // useEffect(() => {
  //   console.log("Is Out Of Stock -> ", isOutofStock);
  // }, [isOutofStock]);
  useEffect(() => {
    // check
    checkStock(ingredients_suggestion)
  }, [data])
  // console.log("Data --->>", data);

  const commonImg = useSelector((state) => state.settings?.smoothieImg)

  return (
    <>
      <div>
        <AllNutrientsPopup data={data?.smoothie_nutrients} />
        <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
          <ConfirmWishModal
            setModalVisible={setModalVisible}
            fun={() => addWishlist({ smoothie_id: data?.unique_id })}
            innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
            okLabel="Klingt gut"
          />
        </ModalContainer>
        {(loading || smoothieLoading || smoothieByIdLoading) && <Loader />}
        <div className="container">
          <div className="">
            <nav aria-label="breadcrumb" className="px-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/gesunde-smoothies-rezepte-selber-machen">Smoothie</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {smoothieByIdLoading ? <TextSkelton /> : data?.name}
                </li>
              </ol>
            </nav>
          </div>

          <div className="row d-flex pt-0 pt-md-5">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="text-center  position-relative min-h-blender">
                <div className="w-100 position-absolute">
                  <BgSmoothieMixer />
                  <div className="z-index-10 position-absolute top-0 start-0 end-0 ">
                    <Image
                      src={
                        data?.smoothie_picture?.picture
                          ? baseURL + 'smoothie/' + data?.smoothie_picture?.picture
                          : commonImg
                      }
                      width={500}
                      height={500}
                      className="img-fluid flx-rdetailed-animation max-h- w-100 !tw-duration-500"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flx-rdetailed-leave">
              <div className="text-left">
                <div className="d-flex align-items-center ">
                  <h1 className="fw-bold fs-2">
                    {smoothieByIdLoading ? <TextSkelton /> : data?.name}
                  </h1>
                  {data?.created_by == 1 && (
                    <span className={`badge rounded-pill   text-uppercase bg-info ms-2`}>
                      Customized
                    </span>
                  )}
                </div>
                {data?.counts > 0 && (
                  <h6 className="d-flex">
                    <StarRating value={data?.ratings} />
                    &nbsp;
                    {formatToGerman1(data?.ratings)} / 5,0&nbsp;(
                    {data?.counts}&nbsp;Bewertungen)
                  </h6>
                )}
                {/* Rating Here END */}
                {isOutofStock && (
                  <span className={`badge rounded-pill text-uppercase bg-danger mb-2`}>
                    derzeit nicht verfügbar
                  </span>
                )}
                <p>{data?.headline}</p>
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
                      <Heart filled={IsWishlist(0, data?.id, wishlist)} />
                    </span>
                  )}
                  {IsWishlist(0, data?.id, wishlist)
                    ? 'Zur Wunschliste hinzugefügt'
                    : 'Auf den Merkzettel'}
                </button>
                <div className="d-flex">
                  <h5 className="pt-4 hsn-smoothies">Zutaten</h5>

                  <button
                    type="button"
                    className="btn btn-link btn-solid-success-color mt-3 fs-14 ms-md-3 ms-0"
                    data-bs-toggle="modal"
                    data-bs-target="#nutrientsModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Durchschnittliche Nährwerte
                  </button>
                </div>
                <div className="custom-scroll max-h-410 overflow-auto">
                  {smoothieByIdLoading ? (
                    <>
                      <TextSkelton /> <br />
                      <TextSkelton /> <br />
                      <TextSkelton />
                    </>
                  ) : (
                    data?.smoothie_ingredient
                      ?.sort(
                        (a, b) =>
                          parseFloat(b.value_in_percentage) - parseFloat(a.value_in_percentage)
                      )
                      ?.map((ing, index) => {
                        return (
                          <div key={index}>
                            <IngrListforReci data={ing} />
                          </div>
                        )
                      })
                  )}
                </div>
                <div className="mt-3">
                  <Link
                    href={`/smoothie-mixen-ideen/${data?.unique_id}`}
                    className="btn btn-outline-success"
                  >
                    Customize
                  </Link>
                  {data?.created_by == '1' && (
                    <ConfirmModal
                      action={() => handleDelete(data?.id)}
                      closeRef={closeRef}
                      isLoading={loading}
                      innerHtml="Bist du dir sicher, dass du dein Rezept löschen möchtest?"
                    />
                  )}
                </div>
                <div className="mt-3">
                  {!isOutofStock && (
                    <Link
                      href={`/meine-smoothie-box`}
                      className="btn !tw-bg-theme !tw-text-white !tw-font-bold tw-decoration-transparent tw-w-fit !tw-py-[10px] !tw-px-8"
                    >
                      <span>Pack mich in eine Box!</span>
                    </Link>
                  )}
                </div>
                {data?.created_by == '0' && <ShareButtons />}
              </div>
            </div>
            {data?.created_by != 1 && (
              <div className="col-12 text-center my-4 tw-pt-14">
                <h5> {data?.headline} </h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.smoothie_recipe_text?.recipe_text,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <BoxUiBanner
          // data={benefitsData?.data?.data}
          benefits={benefitsData?.data?.benefits && JSON.parse(benefitsData?.data?.benefits)}
          isHeading={false}
        />
        {/* <!-- progressbar section --> */}
        <section id="flx-rdetailed-bar">
          <div className="container">
            <div className="row d-flex pt-0 pt-md-5">
              <div className="col-12  col-md-6 ">
                <h3>Wie schmeckt der Smoothie?</h3>
                <TasteSection data={data?.smoothie_recipe_taste} suggest="no" basiColor={'green'} />
              </div>
              <div className="col-12  col-md-5 offset-lg-1 my-5 my-md-0">
                <div className="text-left ">
                  <h2 className="flx-rdetailed-leaves">
                    Du willst es ganz &nbsp;
                    <span className="hsn-smoothies">genau</span>&nbsp; wissen?
                  </h2>
                  <p>Hier kannst du alles über die Inhaltstoffe dieses Smoothies herausfinden</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-outline-success mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#nutrientsModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Mehr anzeigen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- progressbar section --> */}
        {/* <!------Our boxes start------> */}
        <section id="flx-discover-recipes" className="pb-0">
          <div className="container">
            <h3 className="py-5" data-aos="fade-up" data-aos-duration="1000">
              Boxen, die diesen Smoothie enthalten...
            </h3>
            <div className="row">
              {smoothieByIdLoading || relative_boxes?.length == 0
                ? Array.from(Array(3))?.map((box, index) => {
                    return (
                      <div
                        key={index}
                        className="col-12 col-md-4  hsn-box-bg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <SkeltonCard />
                      </div>
                    )
                  })
                : relative_boxes?.map((box, index) => {
                    return (
                      <div key={index} className="col-12 col-md-4  p-3">
                        <div className="  hsn-box-bg" data-aos="fade-up" data-aos-duration="1000">
                          <BoxCard data={box} />
                        </div>
                      </div>
                    )
                  })}
            </div>
          </div>
        </section>
        {/* <!------Our boxes end------> */}
        <section id="flx-discover-recipes">
          <div className="container">
            <h3 className="py-5" data-aos="fade-up" data-aos-duration="1000">
              Weitere Smoothies, die dir gefallen könnten...
            </h3>
            <div className="row">
              {smoothiesListing?.slice(0, 3)?.map((smooth, index) => {
                return (
                  <div
                    className="col-12 col-md-4 my-3 my-md-0"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    key={smooth?.unique_id}
                  >
                    <RecipeCard
                      isButton={true}
                      data={smooth}
                      actionTitle="Mehr anzeigen"
                      action={`/rezepte/${smooth?.unique_id}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
