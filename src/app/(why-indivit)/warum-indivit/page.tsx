import AboutRecipe from './AboutRecipe'
import WhyDetails from './WhyDetails'
import WhyIndivitHero from './WhyIndivitHero'
import WhyIndivitData from './JSONData.json'
import RecipeBanner from './RecipeBanner'
import VisionRecipeSection from '@/components/section/VisionRecipeSection'
import { fetcher } from '@/lib/fetcher'
import Image from 'next/image'

async function getWhyIndivitData() {
  const data = await fetcher('why_indivit')
  return data?.data?.length > 0 ? data.data[0] : {}
}

export default async function WhyIndivit() {
  const res = await getWhyIndivitData()

  return (
    <div>
      <WhyIndivitHero
        data={{
          title: res?.main_title,
          description: res?.main_description,
        }}
      />

      <div className="flx-hero-about !tw-h-auto max-md:!tw-px-4">
        <p className="text-center pb-2">{res?.main_description}</p>
      </div>

      <WhyDetails
        data={{
          title: res?.section_heading,
          description: res?.section_description,
        }}
      />
      <AboutRecipe data={WhyIndivitData?.indivit} color="#f5eac9" />

      <div className="text-center py-5">
        <Image
          alt=""
          src="/assets/object/Chart.png"
          className="img-fluid"
          width={600}
          height={600}
        />
      </div>
      <RecipeBanner />
      <VisionRecipeSection />
    </div>
  )
}
