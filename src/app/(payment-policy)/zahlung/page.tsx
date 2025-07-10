import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import PaymentDetails from './PaymentDetails'
import { fetcher } from '@/lib/fetcher'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.PaymentPolicy)

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
async function getPaymentDetails() {
  const data = await fetcher('payment_policy', { cache: true, revalidate: 3600 * 24 })
  return data?.data
}

export default async function Page() {
  const res = await getPaymentDetails()

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Zahlung?.schema],
            null,
            2
          ),
        }}
      />
      <HeroBanner
        data={{
          title: res?.[0]?.title,
          description: res?.[0]?.title_text,
        }}
      />
      <PaymentDetails
        data={{
          title: res?.[0]?.heading,
          description: res?.[0]?.content,
        }}
      />
    </div>
  )
}
