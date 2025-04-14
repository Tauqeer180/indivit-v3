import React from 'react'
import { fetcher } from '@/lib/fetcher'
import HeroBanner from '@/components/common/HeroBanner'
import ImprintDetails from './ImprintDetails'

async function getImprintData() {
  const data = await fetcher('imprint', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}

export async function generateMetadata() {
  const res = await getImprintData()
  return {
    alternates: { canonical: 'https://indivit.de/impressum' },
    title: `Indivit | ${res?.title}`,
    description: res?.title_text,
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
