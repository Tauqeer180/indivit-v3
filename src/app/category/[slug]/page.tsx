import { BoxCard } from '@/components/Cards'
import { baseURL, fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
// Category Sub Pages
export default async function page({ params }: any) {
  const id = params?.slug?.split('_').pop()
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  let res = await fetcher(`smoothieBoxByCategory/${id}`, { token })
  const data = res?.data || {}
  let keySection =
    data?.box_category_key_sections?.length > 0 &&
    JSON.parse(data?.box_category_key_sections[0]?.key_sections)

  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        {/* {JSON.stringify(data)} */}
        <div className="container ">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">{data?.heading}</h1>
          </div>
        </div>
      </section>
      <div className="flx-hero-about !tw-h-auto max-md:tw-px-4">
        <p className="text-center pb-2">{data?.detail}</p>
      </div>
      {/* <!-- hero banner end--> */}

      <section id="flx-nav-pils" className="!tw-py-10">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- All tabs setting --> */}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" tabIndex="0">
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
                              src={baseURL + '/box-category/' + data?.custom_product_image}
                              className="img-fluid w-100 max-h-350"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      </div>
                      {/* <img src={baseURL+"/box-category/"+data?.custom_product_image} /> */}
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
