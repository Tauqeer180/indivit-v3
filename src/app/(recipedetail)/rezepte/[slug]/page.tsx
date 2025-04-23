import React from 'react'
import Content from './Content'
import { fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'

export default async function page({ params }: { params: { slug: string } }) {
  const smoothieId = params?.slug // `slug` should match the dynamic folder name

  let cookieStore = cookies()
  let token = cookieStore.get('token')?.value || ''
  //   Smoothies For Relative Section
  let smoothieData = await fetcher('get_smoothie', { token, tags: ['smoothieListing'] })
  const smoothiesListing = smoothieData?.smoothies
  // Smoothie By ID
  let smoothieByIdData
  smoothieByIdData = await fetcher(`r/slug/${smoothieId}`, {
    token,
    tags: ['smoothieById'],
  })
  //   if data not available on ID then search Slug
  if (!smoothieByIdData?.smoothie) {
    smoothieByIdData = await fetcher(`r/${smoothieId}`, {
      token,
      tags: ['smoothieById'],
    })
  }
  const data = smoothieByIdData?.smoothie
  const relative_boxes = smoothieByIdData?.smoothie_box

  //   Benefits Section
  let benefitsData = await fetcher(`benefits`, {
    token,
    tags: ['smoothieBenefits'],
    cache: true,
    revalidate: 3600 * 24,
  })

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <Content
        smoothiesListing={smoothiesListing}
        data={data}
        relative_boxes={relative_boxes}
        benefitsData={benefitsData}
      />
    </div>
  )
}
