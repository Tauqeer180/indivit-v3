import AboutRecipe from '@/app/(why-indivit)/warum-indivit/AboutRecipe'
import HeroBanner from '@/components/common/HeroBanner'
import VisionRecipeSection from '@/components/section/VisionRecipeSection'
import React from 'react'
import AboutDetails from './AboutDetails'
import { fetcher } from '@/lib/fetcher'
import AboutJSON from './JSONData.json'
import { BreadCrumb } from '@/components/common/Common'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'

// ABout Page

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.AboutUs)

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
async function getAboutDetails() {
  const aboutDetailsData = await fetcher('about_us', { cache: true, revalidate: 86400 })
  return aboutDetailsData
}

export default async function Page() {
  const aboutData = await getAboutDetails()

  return (
    <div>
      <HeroBanner
        data={{
          title: aboutData?.data?.[0].main__title,
          description: aboutData?.data?.[0]?.main_description,
        }}
        breadCrumb={<BreadCrumb name="Über Indivit" />}
        bgImg=" !tw-bg-about"
      />
      <AboutDetails
        data={{
          title: aboutData?.data?.[0]?.section_heading,
          description: aboutData?.data?.[0].section_description,
        }}
      />
      <AboutRecipe data={AboutJSON?.about} color="#F8F9FA" />
      <VisionRecipeSection />
    </div>
  )
}
