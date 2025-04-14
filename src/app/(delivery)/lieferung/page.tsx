import React from 'react'
import { fetcher } from '@/lib/fetcher'
import HeroBanner from '@/components/common/HeroBanner'
import DeliveryDetails from './DeliveryDetails'

async function getDeliveryData() {
  const data = await fetcher('delivery', { cache: true, revalidate: 86400 }) // Fetching from your utility function
  return data?.data?.length > 0 ? data.data[0] : {}
}
export async function generateMetadata() {
  const res = await getDeliveryData()

  return {
    alternates: { canonical: 'https://indivit.de/lifferung' },
    title: `Indivit | ${res?.[0]?.title}`,
    description: res?.[0]?.title_text,
  }
}
export default async function Delivery() {
  const res = await getDeliveryData()

  return (
    <div>
      {' '}
      <HeroBanner
        data={{
          title: res?.title,
          description: res?.title_text,
        }}
      />
      <DeliveryDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
