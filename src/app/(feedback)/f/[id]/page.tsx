import { fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import React from 'react'
import PageContent from './PageContent'
// FeedBack

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params
  return {
    alternates: { canonical: `https://indivit.de/f/${id}` },
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
