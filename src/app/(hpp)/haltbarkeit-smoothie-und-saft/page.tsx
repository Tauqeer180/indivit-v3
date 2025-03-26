import React from 'react'
import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import HPPDetails from './HppDetails'

async function getHPPData() {
  const data = await fetcher('hpp_procedure')
  return data?.data?.length > 0 ? data.data[0] : {}
}

export default async function HPP() {
  const res = await getHPPData()

  return (
    <div>
      <HeroBanner
        data={{
          title: res?.title,
          description: res?.title_text,
        }}
      />
      <HPPDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
