import PageContent from './PageContent'
import { SWRKeys } from '@/constant/SWRKeys'
import { getSEOData } from '@/services/common'

import React from 'react'
// My Creations

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.MyCreations)

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
export default function Page() {
  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        <div className="container">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">Mein Kreationen</h1>
          </div>
        </div>
      </section>

      <div className="flx-hero-about !tw-h-auto">
        <p className="text-center pb-2">
          Hier findest du alle Smoothies und Smoothie Boxen, die du bisher erstellt hast. Du kannst
          jedes Rezept und jede Box natürlich ganz individuell weiter anpassen – öffne sie einfach
          mit dem Online Smoothie Mixer oder mit dem Box Customizer.
        </p>

        <ul
          className="nav nav-pills mb-5 justify-content-center flx-pils-btn"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link bg-white active shadow"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-smoothies"
              role="tab"
              aria-controls="pills-smoothies"
              aria-selected="true"
            >
              {/* My Smoothies */}
              Meine Smoothies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link bg-white shadow"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-smoothie-boxes"
              role="tab"
              aria-controls="pills-smoothie-boxes"
              aria-selected="false"
            >
              {/* My Smoothie Boxes */}
              Meine Smoothie Boxen
            </button>
          </li>
        </ul>
      </div>
      {/* <!-- hero banner end--> */}

      {/* <!-- hero banner end--> */}
      <PageContent />
    </div>
  )
}
