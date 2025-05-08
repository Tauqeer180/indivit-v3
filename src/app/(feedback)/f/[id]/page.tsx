import { fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import React from 'react'
import PageContent from './PageContent'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
// FeedBack

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.Feedback)

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
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''
  let dataByProdID = await fetcher(`smoothie_rating?id=${id}`, { token })
  return (
    <div>
      {/* {id}
      {JSON.stringify(dataByProdID)} */}
      <PageContent dataByProdID={dataByProdID} id={id} />
    </div>
  )
}
