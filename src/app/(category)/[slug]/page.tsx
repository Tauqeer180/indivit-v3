import { OctagonShapeIcon, TriShapeIcon } from '@/assets/svgIcons'
import { BoxCard } from '@/components/Cards'
import { BreadCrumb } from '@/components/common/Common'
import { H1 } from '@/components/common/Typography'
import { baseURL, fetcher } from '@/lib/fetcher'
// import Head from 'next/head'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
// import { redirect } from 'next/navigation'
import React from 'react'
// Category Sub Pages

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)
  const id = slug?.split('_').pop()

  let res
  res = await fetcher(`smoothieBoxByCategoryBySlug/${decodedSlug}`, { cache: true })
  if (!res?.data) {
    res = await fetcher(`smoothieBoxByCategory/${id}`, { cache: true })
  }
  const data = res?.data || {}
  const title = data?.name
  const description = data?.description
  const author = data?.author_name || 'Indivit'
  // const image = data?.image ? baseURL + 'blogs/' + data.image : undefined
  return {
    alternates: { canonical: `https://indivit.de/blog/${slug}` },
    title: data?.meta_title || `Indivit | ${title}`,
    description: data?.meta_description || description,
    authors: [{ name: author }],
    robots: 'index, follow',
    keywords: data?.keywords,

    openGraph: {
      title: data?.og_title || `Indivit | ${title}`,
      description: data?.og_description || description,
      // images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
      url: `https://indivit.de/blog/${slug}`,
      type: 'article',
      site_name: 'Indivit',
      locale: 'de_DE',
      publishedTime: data?.created_at,
      modifiedTime: data?.updated_at,
    },
    article: {
      published_time: data?.created_at,
      modified_time: data?.updated_at,
      authors: [author],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Indivit | ${title}`,
      description,
      card: 'summary_large_image',
      // images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
    },
  }
}

export default async function page({ params }: any) {
  const { slug } = params

  const id = slug?.split('_').pop()
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  // let res = await fetcher(`smoothieBoxByCategory/${id}`, { token, cache: true })
  // const data = res?.data || {}
  // let keySection =
  //   data?.box_category_key_sections?.length > 0 &&
  //   JSON.parse(data?.box_category_key_sections[0]?.key_sections)
  let res
  res = await fetcher(`smoothieBoxByCategoryBySlug/${slug}`, { token, cache: true })
  if (!res?.data) {
    res = await fetcher(`smoothieBoxByCategory/${id}`, { token, cache: false })
  }
  const data = res?.data || {}
  let keySection =
    data?.box_category_key_sections?.length > 0 &&
    JSON.parse(data?.box_category_key_sections[0]?.key_sections)

  // if (!data?.name) {
  //   redirect('/')
  // }
  // let parsedSchema = null

  // try {
  //   parsedSchema = data?.seo_scheme && JSON.parse(data.seo_scheme || '{}')
  // } catch (error) {
  //   console.error('Invalid JSON in data.seo_scheme:', error)
  // }
  return (
    <div>
      {/* <Head>
      </Head> */}
      {data?.seo_scheme && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: data?.seo_scheme,
          }}
        />
      )}
      {/* {JSON.stringify(data)} */}
      {/* <!-- hero banner start--> */}
      <div className="tw-bg-[#BFEAB3] tw-pt-[140px] tw-pb-10  tw-relative tw-overflow-hidden">
        <div className="container">
          <Image
            alt="red barries"
            src="/assets/img/smoothie_list_graphics.png"
            className="tw-absolute -tw-right-6 xl:-tw-right-20 tw-top-52 tw-object-contain  tw-hidden lg:tw-block tw-w-36 tw-h-24  xl:tw-w-[264px] xl-tw-h-[164px]"
            width={264}
            height={180}
            // sizes="(min-width: 1280px) 264px, 164px"
          />
          <section className="">
            <div className="">
              <BreadCrumb name={data?.name} />
            </div>
            <div className="tw-pt-5  lg:tw-max-w-[943px]">
              <H1 className=" ">{data?.heading}</H1>
              <p className="tw-text-justify pb-2 tw-pt-5 tw-text-lg tw-text-dark">{data?.detail}</p>
            </div>
          </section>

          {/* <!-- hero banner end--> */}
          <section id="flx-nav-pils" className="!tw-py-10">
            <div className="">
              <div className="tab-content" id="pills-tabContent">
                {/* <!-- All tabs setting --> */}
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  tabIndex={0}
                >
                  {/* <!------Our boxes start------> */}
                  <div className="row">
                    {data?.boxes?.filter(
                      (withData) => withData?.smoothie_box_descriptions?.length > 0
                    )?.length > 0
                      ? data?.boxes
                          ?.filter((withData) => withData?.smoothie_box_descriptions?.length > 0)
                          ?.map((box, index) => {
                            return (
                              <div key={index} className="col-12 col-md-4  tw-p-2.5">
                                <div data-aos="fade-up" data-aos-duration="1000">
                                  <BoxCard data={box} />
                                </div>
                              </div>
                            )
                          })
                      : !data?.custom_product_image && (
                          <div className="tw-text-center tw-text-3xl">
                            Geen gegevens gevonden in deze categorie
                          </div>
                        )}

                    {data?.custom_product_image && (
                      <div className="col-12 col-md-4  p-3">
                        <div className="  hsn-box-bg" data-aos="fade-up" data-aos-duration="1000">
                          <div className="box-card">
                            <div className="text-center">
                              <Link href={`${data?.custom_product_path}`}>
                                <Image
                                  src={baseURL + 'box-category/' + data?.custom_product_image}
                                  className="img-fluid tw-object-contain tw-max-h-[240px]"
                                  loading="lazy"
                                  width={366}
                                  height={240}
                                  alt="custom Product"
                                />
                              </Link>
                            </div>
                          </div>
                          {/* <img src={baseURL+"box-category/"+data?.custom_product_image} /> */}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <!------Our boxes end------> */}
                </div>

                {/* <!--Caffeine tabs setting end --> */}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="tw-py-24 tw-bg-[#FAF4D1] tw-relative tw-z-0">
        <OctagonShapeIcon
          className="tw-absolute tw-top-7 tw-left-0   tw-opacity-80 tw-rounded-md -tw-z-10"
          fill="#DCE9C7"
        />
        <div className="container">
          <section className="tw-relative tw-bg-white tw-rounded-[30px]  tw-shadow-lg tw-py-10 xl:tw-py-14 shadow-theme-xl tw-shadow-dark  ">
            <div className="tw-max-w-[775px] tw-mx-auto tw-text-2xl tw-font-medium tw-text-[#4B5563]">
              {data?.description}
            </div>
          </section>
        </div>
      </div>

      <div className=" lg:tw-py-24  tw-py-16 ">
        <div className="container">
          <div className=" tw-max-w-3xl tw-mx-auto tw-space-y-4">
            {keySection?.length > 0 &&
              keySection?.map((b, i) => {
                return (
                  <div
                    key={i}
                    className="tw-flex tw-items-center lg:tw-gap-8 xl:tw-gap-24 tw-gap-5"
                  >
                    {/* {JSON.stringify(b)} */}
                    <img className="tw-h-10 tw-w-10" src={baseURL + b?.icon} />
                    {/* <div>
                      <hr className="md:tw-w-10 tw-w-6  tw-opacity-100 tw-rounded-full max-xxs:tw-hidden" />
                    </div> */}
                    <p className="tw-mb-0 tw-text-[22px] tw-font-bold">{b?.detail}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>

      {/* {params.slug}
      {JSON.stringify(data)} */}
    </div>
  )
}
