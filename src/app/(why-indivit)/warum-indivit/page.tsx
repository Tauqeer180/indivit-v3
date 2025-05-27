import AboutRecipe from './AboutRecipe'
import WhyDetails from './WhyDetails'
import WhyIndivitHero from './WhyIndivitHero'
import WhyIndivitData from './JSONData.json'
import RecipeBanner from './RecipeBanner'
import VisionRecipeSection from '@/components/section/VisionRecipeSection'
import { fetcher } from '@/lib/fetcher'
import Image from 'next/image'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.WhyIndivit)

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

async function getWhyIndivitData() {
  const data = await fetcher('why_indivit', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}

export default async function WhyIndivit() {
  const res = await getWhyIndivitData()

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.WhyIndivit?.schema],
            null,
            2
          ),
        }}
      />
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
          alt="comparison chart"
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
