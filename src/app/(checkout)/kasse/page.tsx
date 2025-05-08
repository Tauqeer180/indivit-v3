import React from 'react'
import Content from './components/content'
import Head from 'next/head'
// Checkout Page

export default function page() {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
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
    </div>
  )
}
