import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import StoryDetails from './StroyDetails'
import { fetcher } from '@/lib/fetcher'
// Cancelation Policy Page

async function getCancellationPolicyDetails() {
  const cancellationDetails = await fetcher('story_page')
  return cancellationDetails?.data
}

export default async function Page() {
  const res = await getCancellationPolicyDetails()
  return (
    <div>
      <HeroBanner
        data={{
          title: res?.[0].title,
          description: res?.[0].title_text,
        }}
      />
      <StoryDetails
        data={{
          title: res?.[0].heading,
          description: res?.[0].content,
        }}
      />
    </div>
  )
}
