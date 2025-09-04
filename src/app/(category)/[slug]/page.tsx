import { BoxCard } from '@/components/Cards'
import { baseURL, fetcher } from '@/lib/fetcher'
// import Head from 'next/head'
import { cookies } from 'next/headers'
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

const BreadCrumb = ({ name }) => {
  return (
    <nav aria-label="breadcrumb" className="px-0">
      <ol className="breadcrumb lg:tw-justify-center">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  )
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
      {/* {data?.seo_scheme} */}
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        <div className="container md:!tw-max-w-3xl tw-mx-auto ">
          <div className="flx-hero-about md:!tw-pt-6 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">{data?.heading}</h1>
            <div className="tw-hidden lg:tw-block">
              <BreadCrumb name={data?.name} />
            </div>
          </div>
        </div>
      </section>
      <div className="container tw-block lg:tw-hidden">
        <BreadCrumb name={data?.name} />
      </div>
      <div className="tw-pt-14 !tw-h-auto   container">
        <p className="tw-text-justify pb-2">{data?.detail}</p>
      </div>
      {/* <!-- hero banner end--> */}

      <section id="flx-nav-pils" className="!tw-py-10">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- All tabs setting --> */}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" tabIndex={0}>
              {/* <!------Our boxes start------> */}
              <div className="row">
                {data?.boxes?.filter((withData) => withData?.smoothie_box_descriptions?.length > 0)
                  ?.length > 0
                  ? data?.boxes
                      ?.filter((withData) => withData?.smoothie_box_descriptions?.length > 0)
                      ?.map((box, index) => {
                        return (
                          <div key={index} className="col-12 col-md-4  p-3">
                            <div
                              className="  hsn-box-bg"
                              data-aos="fade-up"
                              data-aos-duration="1000"
                            >
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
                            <img
                              src={baseURL + 'box-category/' + data?.custom_product_image}
                              className="img-fluid w-100 max-h-350"
                              loading="lazy"
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
      <div className="flx-hero-about !tw-h-auto max-md:tw-px-4 !tw-py-4">
        <p className="text-center pb-2">{data?.description}</p>
      </div>

      <div className="tw-bg-theme-orange lg:tw-py-24  tw-py-16 tw-text-white">
        <div className="container">
          <div className=" tw-max-w-3xl tw-mx-auto tw-space-y-4">
            {keySection?.length > 0 &&
              keySection?.map((b, i) => {
                return (
                  <div key={i} className="tw-flex tw-items-center lg:tw-gap-8 tw-gap-5">
                    {/* {JSON.stringify(b)} */}
                    <img className="tw-h-10 tw-w-10" src={baseURL + b?.icon} />
                    {/* <div>
                      <hr className="md:tw-w-10 tw-w-6  tw-opacity-100 tw-rounded-full max-xxs:tw-hidden" />
                    </div> */}
                    <p className="tw-mb-0 tw-text-2xl tw-font-bold">{b?.detail}</p>
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
