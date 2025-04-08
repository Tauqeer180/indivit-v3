import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import React from 'react'
import CustomBox from './components/CustomBox'
import './components/custombox-anim.css'

// Custom Box
export default async function page({ params }) {
  const { slug } = params
  // can be 2 parameters
  let [id, size] = slug
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
  let data = await fetcher(`smoothie_box_description/${id}`, { token })
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
    <div>
      <HeroBanner
        data={{
          title: 'Wähle deine Smoothie Trinkmahlzeiten',
          description:
            'Tausche Smoothies in deiner Box gegeneinander aus. Probiere vorgeschlagene Rezepte. Finde Rezeptideen die zu dir passen.',
          // description2:
          //   "Nimm wieder den leckeren Smoothie aus deiner letzten Bestellung. Verfeinere deine Kreationen. Mix dir deine Smoothies einfach selbst",
        }}
      />

      <CustomBox
        boxSize={boxSizeData?.data}
        wishlistSmoothies={wishlistSmoothies}
        filtSmoothies={filtSmoothies}
        mineSmoothies={mineSmoothies}
        boxDescription={boxDescription}
        boxData={boxData}
        id={id}
        size={Number(size)}
      />
      {JSON.stringify(id)}
      <br />
      {JSON.stringify(size)}
      <br />
      {JSON.stringify(slug)}
      <br />
      {/* Custom Box,*/}
      {JSON.stringify(filtSmoothies[0])}
    </div>
  )
}
