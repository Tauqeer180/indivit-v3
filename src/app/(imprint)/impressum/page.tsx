import React from 'react'
import { fetcher } from '@/lib/fetcher'
import HeroBanner from '@/components/common/HeroBanner'
import ImprintDetails from './ImprintDetails'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'

async function getImprintData() {
  const data = await fetcher('imprint', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.Imprint)

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
      title: `Indivit`,
      description: `Indivit`,
    },
  }
}
export default async function Imprint() {
  const res = await getImprintData()

  return (
    <div>
      <HeroBanner
        data={{
          title: res?.title,
          description: res?.title_text,
        }}
      />
      <ImprintDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
