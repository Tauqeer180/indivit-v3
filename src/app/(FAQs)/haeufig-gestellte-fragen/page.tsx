import HeroBanner from '@/components/common/HeroBanner'
import { SEOSchema } from '@/constant/SEOSchema'
import { SWRKeys } from '@/constant/SWRKeys'
import { fetcher } from '@/lib/fetcher'
import { getSEOData } from '@/services/common'
import React from 'react'
// Subscriptions Page

async function getFaqData() {
  const data = await fetcher('faqs', { cache: true, revalidate: 86400 }) // Fetching from your utility function
  return data
}
export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.FAQ)

  return {
    alternates: {
      canonical: data?.canonical || 'https://indivit.de',
    },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description || `Indivit`,
    authors: [{ name: data?.author_name || 'Indivit' }],
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description || `Indivit`,
      publishedTime: data?.created_at,
      modifiedTime: data?.updated_at,
    },
    article: {
      published_time: data?.created_at || new Date(),
      modified_time: data?.updated_at || new Date(),
      authors: [data?.author_name || 'Indivit'],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit`,

      description: data?.meta_description || `Indivit`,
    },
  }
}
export default async function Page() {
  const res = await getFaqData()
  const faqPage = res?.data || {}
  const faq = faqPage?.faqs ? JSON.parse(faqPage?.faqs) : []
  // console.log('res ---------- ', res)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.FAQ?.schema],
            null,
            2
          ),
        }}
      />
      <HeroBanner
        data={{
          title: faqPage?.heading,
          description: faqPage?.detail,
        }}
        bgImg=" !tw-bg-faq"
      />
      <div className="tw-max-w-3xl tw-px-6 tw-mx-auto">
        {!res?.data && (
          <div className="tw-p-4 tw-border tw-border-gray-200 tw-rounded-md tw-animate-pulse tw-bg-gray-100 tw-mt-12">
            <div className="tw-h-6 tw-w-3/4 tw-bg-gray-300 tw-rounded"></div>
            <div className="tw-mt-2 tw-h-4 tw-w-1/4 tw-bg-gray-300 tw-rounded"></div>
          </div>
        )}
      </div>

      {/* <!-- accordion section --> */}
      <section id="flx-faqs-accordion" className="!tw-pt-10 ">
        <div className="container">
          <div className="accordion" id="accordiion_cont">
            <div className="row">
              {/* <!-- colum one --> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 flx-faqs-col">
                <div className="accordion">
                  {faq?.slice(0, Math?.ceil(faq?.length / 2)).map(({ questions, answers }, i) => {
                    return (
                      <div key={i} className="accordion-item shadow-sm">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button flx-faqs-border ${
                              i !== 0 ? 'collapsed' : ''
                            } `}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse_${i}`}
                            aria-expanded={i == 0 ? true : false}
                            aria-controls="collapseOne"
                          >
                            {questions}
                          </button>
                        </h2>
                        <div
                          id={`collapse_${i}`}
                          className={`accordion-collapse tw-duration-300 collapse ${
                            i == 0 ? 'show' : ''
                          }`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordiion_cont"
                        >
                          <div className="accordion-body">
                            <p>{answers}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 flx-faqs-col">
                <div className="accordion">
                  {faq?.slice(Math?.ceil(faq?.length / 2)).map(({ questions, answers }, i) => {
                    return (
                      <div key={i} className="accordion-item shadow-sm">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button flx-faqs-border collapsed`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse_${i}_${i}`}
                            aria-expanded={i == 0 ? true : false}
                            aria-controls="collapseOne"
                          >
                            {questions}
                          </button>
                        </h2>
                        <div
                          id={`collapse_${i}_${i}`}
                          className={`accordion-collapse collapse`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordiion_cont"
                        >
                          <div className="accordion-body">
                            <p>{answers}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- accordion section --> */}
    </>
  )
}
