import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import PageContent from './PageContent'
import { SEOSchema } from '@/constant/SEOSchema'
// Subscriptions Page

export default function Page() {
  // console.log("Available Dates ", availableDates);
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Subscriptions?.schema],
            null,
            2
          ),
        }}
      />
      {/* <!-- hero banner start--> */}
      <HeroBanner
        data={{
          title: 'Mein Abo',
          description:
            'Du kannst dein Abo jederzeit kündigen. Bestellungen, die bereits bezahlt sind werden natürlich noch ausgeliefert.',
        }}
        bgImg=" !tw-bg-mixer"
      />

      <PageContent />
    </div>
  )
}
