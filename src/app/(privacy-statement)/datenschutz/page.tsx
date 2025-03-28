import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import React from 'react'
import DataPrivacyDetails from './DataPrivacyDetails'
// Privacy Statement Page

async function getPrivacyDetails() {
  const data = await fetcher('data_privacy')
  return data
}

export default async function Page() {
  const data = await getPrivacyDetails()
  const res = data?.data?.length > 0 ? data?.data[0] : {}

  return (
    <div>
      <HeroBanner
        data={{
          title: res?.title,
          description: res?.title_text,
        }}
      />

      <DataPrivacyDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
