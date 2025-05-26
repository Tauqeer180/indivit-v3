import React from 'react'
import PageContent from './PageConent'
import Head from 'next/head'
import { SEOSchema } from '@/constant/SEOSchema'

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Orders?.schema],
            null,
            2
          ),
        }}
      />
      <Head>
        <title>Meine Bestellung | Indivit</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PageContent />
    </div>
  )
}
