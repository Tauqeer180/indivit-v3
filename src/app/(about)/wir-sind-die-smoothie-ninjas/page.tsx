import AboutRecipe from '@/app/(why-indivit)/warum-indivit/AboutRecipe'
import HeroBanner from '@/components/common/HeroBanner'
import VisionRecipeSection from '@/components/section/VisionRecipeSection'
import React from 'react'
import AboutDetails from './AboutDetails'
import { fetcher } from '@/lib/fetcher'
import AboutJSON from './JSONData.json'

// ABout Page

async function getAboutDetails() {
  const aboutDetailsData = await fetcher('about_us')
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
