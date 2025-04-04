import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import PaymentDetails from './PaymentDetails'
import { fetcher } from '@/lib/fetcher'

async function getPaymentDetails() {
  const data = await fetcher('payment_policy')
  return data?.data
}

export default async function Page() {
  const res = await getPaymentDetails()

  return (
    <div>
      <HeroBanner
        data={{
          title: res?.[0]?.title,
          description: res?.[0]?.title_text,
        }}
      />
      <PaymentDetails
        data={{
          title: res?.[0]?.heading,
          description: res?.[0]?.content,
        }}
      />
    </div>
  )
}
