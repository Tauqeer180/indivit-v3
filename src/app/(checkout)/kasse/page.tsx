import React from 'react'
import Content from './components/content'
import Head from 'next/head'
import { SEOSchema } from '@/constant/SEOSchema'
// Checkout Page

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Checkout?.schema],
            null,
            2
          ),
        }}
      />
      {/* <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head> */}
      <div className="pt-140 bg-white">
        {/* <CheckoutHeader /> */}
        <section id="flx-checkout1" className="bg-white  pb-5">
          <div className="container">
            {/* {process.env.NEXT_STRIPE_KEY} */}
            {/*  */}
            <Content />
          </div>
        </section>
      </div>
    </>
  )
}
