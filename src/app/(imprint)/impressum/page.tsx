import React from 'react'
import { fetcher } from '@/lib/fetcher'
import HeroBanner from '@/components/common/HeroBanner'
import ImprintDetails from './ImprintDetails'
import WithSuspense from '@/providers/SuspenseLoader'

async function getImprintData() {
  const data = await fetcher('imprint')
  return data?.data?.length > 0 ? data.data[0] : {}
}

async function ImprintContent() {
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

export default function Imprint() {
  return <WithSuspense fetchFunction={getImprintData} ContentComponent={ImprintContent} />
}
