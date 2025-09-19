import VATModal from '@/components/Modal/VATModal'
import { baseURL, fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import React, { Suspense } from 'react'
import BoxUiBanner from '../components/BoxUiBanner'
import ViewBoxPopup from '../components/ViewBoxPopup'
import StarRating from '@/components/StarRating'
import { formatToGerman1 } from '@/utils/germanFormat'
import { AvailabilityBadge, BoxForm, PriceSection, WishlistButton } from '../components/ui'
import ShareButtons from '@/components/common/ShareButtons'
// import ProductCarousel from '../components/ProductCarousel'
const ProductCarousel = dynamic(() => import('../components/ProductCarousel'), {
  // This is the key. It prevents the component from being rendered on the server.
  ssr: false,
})
import dynamic from 'next/dynamic'
import SmoothiesCarousel from '../components/SmoothiesCarousel'
import Link from 'next/link'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import SEOSchema, { generateWebPageSchema } from '../components/SEOSchema'
import Head from 'next/head'
import Script from 'next/script'
import { BreadCrumb } from '@/components/common/Common'
import { H1 } from '@/components/common/Typography'
import Image from 'next/image'

// const ProductCarousel = dynamic(() => import("../components/ProductCarousel"), { ssr: false });
export const revalidate = 72000
export const dynamicParams = true // or false, to 404 on unknown paths

// async function getBoxList() {
//   const data = await fetcher('smoothie_box_description', { cache: true, revalidate: 3600 })
//   return data
// }
export async function generateStaticParams() {
  const posts = await fetcher('smoothie_box_description')
  // console.log('Posts in generateStaticParams: ', JSON.stringify(posts?.ingredient))
  return posts?.data?.map((post: any) => ({
    slug: post?.slug || post?.unique_id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  // const decodedSlug = decodeURIComponent(slug)

  const id = slug?.split('_').pop()
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''

  let data
  data = await fetcher(`smoothie_box_description_slug/${slug}`, { token, cache: true })
  if (!data?.data) {
    data = await fetcher(`smoothie_box_description/${id}`, { token, cache: true })
  }
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
  let { slug } = params
  const id = slug?.split('_').pop()
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''

  let subscriptionRes = await fetcher(`subscription/period`, {
    token,
    cache: true,
    revalidate: 86400,
  })
  let subscriptionData = subscriptionRes?.data

  //   let smoothieres = await fetcher(`get_smoothie`, { token, cache: true, revalidate: 86400 })
  //   let smoothieData = smoothieres?.data

  // let benefitsData = await fetcher(`benefits`, { token, cache: true, revalidate: 86400 })
  //   let smoothieData = smoothieres?.data

  //   Box By ID
  let data
  data = await fetcher(`smoothie_box_description_slug/${slug}`, { token, cache: true })
  if (!data?.data) {
    data = await fetcher(`smoothie_box_description/${id}`, { token, cache: true })
  }
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
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: 'tauqeer',
  //   image: 'tauqeer',
  //   description: 'tauqeer',
  // }
  return (
    <>
      <SEOSchema data={boxData} />
      <ViewBoxPopup />
      <VATModal />

      <section className="tw-pt-36 tw-bg-green tw-pb-4">
        <div className="container">
          <section className="">
            <div className="">
              <BreadCrumb
                name={boxData?.name}
                list={[{ name: boxCategory?.name, link: '/' + boxCategory?.slug }]}
              />
            </div>
            <div className="tw-pt-5  lg:tw-max-w-[1091px]">
              {boxData?.heading && <H1 className=" ">{boxData?.heading}</H1>}{' '}
            </div>
          </section>

          {/* {JSON.stringify(boxData?.smoothie_box_descriptions?.[0], null, 2)} */}
          <div className="tw-bg-white tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-[22px] xl:tw-gap-8 tw-mt-4 tw-py-14 tw-px-10 tw-rounded-2xl shadow-theme-lg tw-shadow-[#ccc]">
            <div className="">
              <div className="carousel-inner tw-bg-theme tw-rounded-2xl ">
                <Suspense fallback={<div className="p-4">Loading profile...</div>}>
                  <ProductCarousel boxImage={boxImage} />
                </Suspense>
              </div>

              {Number(boxCategory?.is_subscription) === 0 && (
                <div className="tw-flex tw-mt-2 md:tw-mt-4 tw-items-center tw-gap-2 tw-bg-[#DCE9C7] shadow-theme-md tw-shadow-[#ccc] tw-rounded-[20px] tw-py-4 tw-px-3">
                  <Image
                    className="img-fluid tw-w-10 xxs:tw-w-16 sm:tw-w-20 lg:tw-w-24"
                    src={'/assets/icon/discount.png'}
                    width={70}
                    height={50}
                    alt="discount"
                  />
                  <div className="">
                    <h4 className="tw-mb-0 sm:!tw-text-lg  !tw-text-base fw-bold">
                      Jetzt Smoothie-Abo abschließen
                    </h4>
                    <div className="tw-text-xs xxs:tw-text-sm text-muted tw-mb-0">
                      Abonnement kann jederzeit pausiert oder gekündigt werden
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <div className="text-left">
                <div className="d-flex align-items-center">
                  <span className="fs-2 fw-bold">{boxData?.name}</span>
                  {boxDescription?.length > 0 && boxDescription?.[0]?.created_by == 1 && (
                    // Means Created By User
                    <span
                      className={`tw-rounded-full tw-text-sm tw-font-bold tw-text-white tw-px-2 tw-py-0.5 tw-ms-2 tw-uppercase  tw-bg-cyan-400 shadow-theme-sm tw-shadow-dark`}
                    >
                      {/* Customized */}
                      Maßgeschneidert
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

                <AvailabilityBadge boxDescription={boxDescription} />
                <PriceSection />
                <BoxForm
                  boxDescription={boxDescription}
                  boxCategory={boxCategory}
                  boxData={boxData}
                  subscriptionData={subscriptionData}
                  boxImage={boxImage}
                />

                {/*  */}
                <ShareButtons />
              </div>
            </div>
          </div>
          <div className="my-4"></div>
          {/* <h5> {boxDescription?.length > 0 && boxDescription?.[0]?.short_detail} </h5> */}
          <MarkdownDisplay>
            {boxDescription?.length > 0 && boxDescription?.[0]?.detail}
          </MarkdownDisplay>
        </div>
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
    </>
  )
}
