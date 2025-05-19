import React from 'react'
import LoginCard from '../components/LoginCard'
import { SEOSchema } from '@/constant/SEOSchema'
export async function generateMetadata() {
  return {
    alternates: { canonical: 'https://indivit.de/login' },
  }
}
export default function Page() {
  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.Login?.schema, null, 2),
        }}
      />
      <LoginCard title="Wilkommen" redirect={true} />
    </>
  )
}
