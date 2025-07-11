import { BoxCard } from '@/components/Cards'
import { SWRKeys } from '@/constant/SWRKeys'
import { fetcher } from '@/lib/fetcher'
import { getSEOData } from '@/services/common'
import { cookies } from 'next/headers'
import React from 'react'
// Boxes Page

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.Products)

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
export default async function page() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  let res = await fetcher(`smoothie_box_description`, { token, cache: true })
  const boxes = res?.data || []

  return (
    <div>
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        <div className="container ">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">Finde deine passende Smoothiebox</h1>
          </div>
        </div>
      </section>

      <div className="flx-hero-about !tw-h-auto max-md:tw-px-4">
        <p className="text-center pb-2">
          Unsere Smoothieboxen enthalten nicht nur köstliche Smoothies, sondern sie sind auch ideal
          an deinen Lifestyle angepasst. Egal, ob Du deine Smoothies gerne zum Sport, zur Arbeit
          oder als Mahlzeitenersatz genießen möchtest – wir haben die passende Box dafür
          zusammengestellt.
        </p>
        <p className="text-center pb-2">
          Du kannst jede Box natürlich ganz individuell an deine Vorlieben anpassen – öffne sie
          einfach mit dem Box Customizer.
        </p>
      </div>
      <section id="flx-nav-pils" className="!tw-pt-10">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- All tabs setting --> */}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
              {/* <!------Our boxes start------> */}
              <div className="row">
                {boxes?.map((box, index) => {
                  return (
                    <div key={index} className="col-12 col-md-4  p-3">
                      <div className="  hsn-box-bg" data-aos="fade-up" data-aos-duration="1000">
                        <BoxCard data={box} />
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* <!------Our boxes end------> */}
            </div>

            {/* <!--Caffeine tabs setting end --> */}
          </div>
        </div>
      </section>
    </div>
  )
}
