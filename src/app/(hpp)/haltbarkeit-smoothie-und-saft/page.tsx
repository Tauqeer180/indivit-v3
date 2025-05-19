import React from 'react'
import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import HPPDetails from './HppDetails'
import { BreadCrumb } from '@/components/common/Common'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

async function getHPPData() {
  const data = await fetcher('hpp_procedure', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}
export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.HPP)

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

export default async function HPP() {
  const res = await getHPPData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.HPP?.schema],
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
        breadCrumb={<BreadCrumb name="HPP Haltbarkeit" />}
      />
      <HPPDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </>
  )
}
