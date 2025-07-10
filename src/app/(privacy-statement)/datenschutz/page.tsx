import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import React from 'react'
import DataPrivacyDetails from './DataPrivacyDetails'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'
// Privacy Statement Page

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys.DataPrivacy)

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
async function getPrivacyDetails() {
  const data = await fetcher('data_privacy', { cache: true, revalidate: 3600 * 24 })
  return data
}

export default async function Page() {
  const data = await getPrivacyDetails()
  const res = data?.data?.length > 0 ? data?.data[0] : {}

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Privacy?.schema],
            null,
            2
          ),
        }}
      />
      <HeroBanner
        data={{
          title: res?.title,
          description: res?.title_text,
        }}
      />

      <DataPrivacyDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
