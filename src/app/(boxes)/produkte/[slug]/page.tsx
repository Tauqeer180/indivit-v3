import VATModal from '@/components/Modal/VATModal'
import { baseURL, fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import React from 'react'
import BoxUiBanner from '../components/BoxUiBanner'
import ViewBoxPopup from '../components/ViewBoxPopup'
import StarRating from '@/components/StarRating'
import { formatToGerman1 } from '@/utils/germanFormat'
import { AvailabilityBadge, BoxForm, PriceSection, WishlistButton } from '../components/ui'
import ShareButtons from '@/components/common/ShareButtons'
import ProductCarousel from '../components/ProductCarousel'
import dynamic from 'next/dynamic'
import SmoothiesCarousel from '../components/SmoothiesCarousel'

// const ProductCarousel = dynamic(() => import("../components/ProductCarousel"), { ssr: false });
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)

  const id = params?.slug?.split('_').pop()
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''

  let data = await fetcher(`smoothie_box_description/${id}`, { token, cache: true })

  let boxImage = data?.data?.smoothie_image

  // let page = searchParams.get("page");
  const boxData = data?.data
  const boxDescription = boxData?.smoothie_box_descriptions
  const title = boxData?.title || 'box'
  const description =
    (boxDescription?.length > 0 && boxDescription[0]?.short_detail) ||
    'Sehen Sie sich unsere neueste Smoothie-Box an.'
  const author = boxData?.auther_name || 'Indivit'
  const image = boxImage ? baseURL + 'blogs/' + boxImage : undefined
  return {
    alternates: { canonical: `https://indivit.de/produkte/${slug}` },
    title: `Indivit | ${title}`,
    description,
    authors: [{ name: author }],
    robots: 'index, follow',
    keywords: boxData?.keywords,
    openGraph: {
      title: `Indivit | ${title}`,
      description,
      image: image,
      url: `https://indivit.de/produkte/${slug}`,
      site_name: 'Indivit',
      locale: 'de_DE',
    },
    article: {
      published_time: boxData?.created_at,
      modified_time: boxData?.updated_at,
      authors: [author],
      tags: boxData?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Indivit | ${title}`,
      description,
      card: 'summary_large_image',
      image: image,
    },
  }
}
export default async function page({ params }: any) {
  const id = params?.slug?.split('_').pop()
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''

  let subscriptionRes = await fetcher(`subscription/period`, {
    token,
    // cache: true,
    revalidate: 86400,
  })
  let subscriptionData = subscriptionRes?.data

  //   let smoothieres = await fetcher(`get_smoothie`, { token, cache: true, revalidate: 86400 })
  //   let smoothieData = smoothieres?.data

  // let benefitsData = await fetcher(`benefits`, { token, cache: true, revalidate: 86400 })
  //   let smoothieData = smoothieres?.data

  //   Box By ID
  let data = await fetcher(`smoothie_box_description/${id}`, { token, cache: true })

  let boxImage = data?.data?.smoothie_image
  // let page = searchParams.get("page");
  const boxData = data?.data
  const boxDescription = boxData?.smoothie_box_descriptions
  const boxCategory = boxData?.box_category
  const boxCategoryBenefits =
    boxCategory?.box_category_benefits?.length > 0 ? boxCategory?.box_category_benefits[0] : {}

  // console.log("Box Image ", boxImage);
  //   let tempPrice =
  //     !selectedBoxData?.price || selectedBoxData?.price == 0
  //       ? selectedBoxData?.smoothie_box_size?.price
  //       : selectedBoxData?.price

  //   let perLitterPrice =
  //     ((!selectedBoxData?.price || selectedBoxData?.price == 0
  //       ? selectedBoxData?.smoothie_box_size?.price
  //       : selectedBoxData?.price) /
  //       selectedQty) *
  //     4

  return (
    <div>
      <ViewBoxPopup />
      <VATModal />
      {/* {JSON.stringify(boxDescription)} */}
      {/* Pending Section */}
      <section id="flx-hero-boxui">
        <div className="container">
          <div className="row d-flex pt-0 pt-md-3">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="carousel-inner pe-0 pe-md-5 ps-0 ps-md-5">
                <ProductCarousel boxImage={boxImage} />
              </div>

              {Number(boxCategory?.is_subscription) === 0 && (
                <div className="d-flex mt-2 mt-md-4 align-items-center">
                  <img
                    className="img-fluid tw-w-10 xxs:tw-w-16 sm:tw-w-20 lg:tw-w-24"
                    src={'/assets/icon/discount.png'}
                  />
                  <div className="ms-2">
                    <h4 className="mb-0 sm:!tw-text-xl xxs:!tw-text-lg !tw-text-base fw-bold">
                      Jetzt Smoothie-Abo abschließen
                    </h4>
                    <p className="tw-text-xs xxs:tw-text-sm text-muted mb-0">
                      Abonnement kann jederzeit pausiert oder gekündigt werden
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="text-left">
                <div className="d-flex align-items-center">
                  <span className="fs-2 fw-bold">
                    {/* {boxLoading ? (
                      <span class=" placeholder-glow d-inline-flex py-1 ">
                        <span class="placeholder w-200px"></span>
                      </span>
                    ) : (
                    )} */}
                    {boxData?.name}
                  </span>
                  {boxDescription?.length > 0 && boxDescription?.[0]?.created_by == 1 && (
                    // Means Created By User
                    <span className={`badge rounded-pill text-uppercase bg-info ms-2`}>
                      Customized
                    </span>
                  )}
                </div>
                {boxData?.counts > 0 && (
                  <h6 className="d-flex">
                    <StarRating value={boxData?.ratings} />
                    &nbsp;
                    {formatToGerman1(boxData?.ratings)} / 5,0&nbsp;(
                    {boxData?.counts}&nbsp;Bewertungen)
                  </h6>
                )}
                {/* {selectedBoxData?.created_by == 0 && (
                )} */}
                {/* <button
                  className="btn btn-success"
                  onClick={() => dummyMutation.mutate()}
                >
                  Dummy Request
                </button> */}
                <div>
                  <WishlistButton boxData={boxData} />
                </div>
                <AvailabilityBadge boxDescription={boxDescription} />
                <PriceSection />
                <BoxForm
                  boxDescription={boxDescription}
                  boxCategory={boxCategory}
                  boxData={boxData}
                  subscriptionData={subscriptionData}
                  boxImage={boxImage}
                />
                {/* <select
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
                      (a, b) =>
                        parseInt(a?.smoothie_box_size?.size) - parseInt(b?.smoothie_box_size?.size)
                    )
                    ?.map(({ smoothie_box_size }, index) => {
                      return (
                        <option
                          selected={index == 0 ? true : false}
                          key={index}
                          value={smoothie_box_size.id}
                        >
                          {smoothie_box_size.label} ({smoothie_box_size.variant})
                        </option>
                      )
                    })}
                </select>
                {errors?.box_size?.type === 'required' && (
                  <p className="text-danger my-1">* Angabe notwendig</p>
                )} */}
                {/*  */}
                <ShareButtons />
              </div>
            </div>
          </div>
          <div className="my-4"></div>
          <h5> {boxDescription?.length > 0 && boxDescription?.[0]?.short_detail} </h5>
          <div
            dangerouslySetInnerHTML={{
              __html: boxDescription?.length > 0 && boxDescription?.[0]?.detail,
            }}
          ></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ background: `linear-gradient(0deg, #FE6703 5%, transparent 5%)` }}
        >
          <path
            fill="#FE6703"
            fillOpacity="1"
            d="M0,224L60,224C120,224,240,224,360,197.3C480,171,600,117,720,112C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Banner Section Start */}
      {/* {JSON.stringify(boxCategoryBenefits)} */}
      <BoxUiBanner
        // data={benefitsData?.data}
        benefits={boxCategoryBenefits?.benefits && JSON.parse(boxCategoryBenefits?.benefits)}
        heading={boxCategoryBenefits?.heading}
        description={boxCategoryBenefits?.description}
        isHeading={true}
      />
      {/* Banner Section END */}

      {/* Smoothie Carousel */}
      <SmoothiesCarousel />
    </div>
  )
}
