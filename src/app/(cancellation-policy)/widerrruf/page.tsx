import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import StoryDetails from './StroyDetails'
import { fetcher } from '@/lib/fetcher'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'
// Cancelation Policy Page

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.CancellationPolicy)

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
async function getCancellationPolicyDetails() {
  const cancellationDetails = await fetcher('story_page', { cache: true, revalidate: 86400 })
  return cancellationDetails?.data
}

export default async function Page() {
  const res = await getCancellationPolicyDetails()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Cancellation_policy?.schema],
            null,
            2
          ),
        }}
      />
      <HeroBanner
        data={{
          title: res?.[0].title,
          description: res?.[0].title_text,
        }}
      />
      <StoryDetails
        data={{
          title: res?.[0].heading,
          description: res?.[0].content,
        }}
      />
    </>
  )
}
