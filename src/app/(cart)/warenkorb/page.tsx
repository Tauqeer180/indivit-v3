import React from 'react'
import CartPage from './CartPage'
import { SEOSchema } from '@/constant/SEOSchema'
import HeroBanner from '@/components/common/HeroBanner'

export default function page() {
  return (
    <>
      {/* <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Cart?.schema],
            null,
            2
          ),
        }}
      />
      <div className="bg-white">
        <HeroBanner
          data={{
            title: 'Warenkorb',
            description:
              'Belebe Deinen Tag mit unseren köstlichen Smoothies! Fülle Deinen Einkaufswagen und mach Dich bereit, die Qualität echter, frischer Zutaten zu genießen.',
          }}
        />
        {/* <section id="flx-shoppingcart-section">
          <div className="container pt-5">
            <div className="flx-hero-shopping text-center">
              <h1 className="text-center pb-2">Warenkorb</h1>
              <p>
                Belebe Deinen Tag mit unseren köstlichen Smoothies! Fülle Deinen Einkaufswagen und
                mach Dich bereit, die Qualität echter, frischer Zutaten zu genießen.
              </p>
            </div>
          </div>
        </section> */}
        <CartPage />
      </div>
    </>
  )
}
