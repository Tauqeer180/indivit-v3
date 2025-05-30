import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import React from 'react'
import CustomBox from './components/CustomBox'
import './components/custombox-anim.css'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

// Custom Box

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.CustomBox)

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
export default async function page({ params, searchParams }) {
  const { slug = [] } = params
  // can be 2 parameters
  let [id, size] = slug
  const add_me = searchParams?.add_me

  // slug[0] = smoothie box id
  // slug[1] = smoothie box size
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''

  let customSmoothiesData = await fetcher('get_smoothies', { token, cache: true })

  let wishListingData = await fetcher('get_wishlist', { token, cache: true })
  const wishlistIds = wishListingData?.data?.wishlist_smoothie

  let boxSizeData = await fetcher('get_smoothie_box_size', {
    token,
    cache: true,
    revalidate: 86400,
  })
  // BoxByID
  let data = await fetcher(`smoothie_box_description/${id}`, { token, cache: true })
  const boxData = data?.data
  const boxDescription = boxData?.smoothie_box_descriptions

  // Data Calculations
  let filtSmoothies = customSmoothiesData?.smoothies?.filter(
    (d) => parseInt(d.smoothie_status) == 0 && d?.created_by == '0'
    // Only instock Data and Created By Admin
  )
  let wishlistSmoothies = filtSmoothies?.filter((item1) => {
    return wishlistIds?.some((item2) => parseInt(item2.smoothie_id) == item1.id)
  })
  let mineSmoothies = customSmoothiesData?.smoothies?.filter((d) => d.created_by == '1')
  return (
    <>
      {/* {add_me} */}
      <HeroBanner
        data={{
          title: 'Wähle deine Smoothie Trinkmahlzeiten',
          description:
            'Tausche Smoothies in deiner Box gegeneinander aus. Probiere vorgeschlagene Rezepte. Finde Rezeptideen die zu dir passen.',
          // description2:
          //   "Nimm wieder den leckeren Smoothie aus deiner letzten Bestellung. Verfeinere deine Kreationen. Mix dir deine Smoothies einfach selbst",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.CustomBox?.schema],
            null,
            2
          ),
        }}
      />
      <CustomBox
        boxSize={boxSizeData?.data}
        wishlistSmoothies={wishlistSmoothies}
        filtSmoothies={filtSmoothies}
        mineSmoothies={mineSmoothies}
        boxDescription={boxDescription}
        boxData={boxData}
        add_me={add_me}
        size={Number(size)}
      />
      {/* {JSON.stringify(id)}
      <br />
      {JSON.stringify(size)}
      <br />
      {JSON.stringify(slug)}
      <br />
      {JSON.stringify(filtSmoothies[0])} */}
      {/* Custom Box,*/}
    </>
  )
}
