import React from 'react'
import ForgotPassword from '../components/ForgotPassword'
import { SEOSchema } from '@/constant/SEOSchema'

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://indivit.de/passwort-vergessen',
    },
  }
}
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.ForgotPassword?.schema, null, 2),
        }}
      />
      <ForgotPassword />
    </>
  )
}
