import HeroBanner from '@/components/common/HeroBanner'
import Loader from '@/components/common/Loader'
import TermsConditionsDetails from './TermsConditionsDetails'
import { fetcher } from '@/lib/fetcher'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

async function getTermsData() {
  const data = await fetcher('terms_condition', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.TermCondition)

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
export default async function TermsConditions() {
  const res = await getTermsData()
  const resd = res?.title_text?.split('||')

  const resdes1 = resd ? resd[0] : ''
  const resdes2 = resd ? resd[1] : ''

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.TermsConditions?.schema],
            null,
            2
          ),
        }}
      />
      {!res && <Loader />}
      <HeroBanner
        data={{
          title: res?.title,
          description: resdes1,
          description2: resdes2,
        }}
      />
      <TermsConditionsDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
