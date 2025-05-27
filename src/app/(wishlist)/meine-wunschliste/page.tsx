import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
// import { useSelector } from 'react-redux'
import ConfirmDeletePopup from './ConfirmDeletePopup'
import PageContent from './PageContent'
import { SEOSchema } from '@/constant/SEOSchema'
export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Whishlist?.schema],
            null,
            2
          ),
        }}
      />
      <ConfirmDeletePopup />
      <HeroBanner
        data={{
          title: 'Merkzettel',
        }}
      />

      {/* <!-- hero banner end--> */}
      {/* <!-- about section --> */}
      <PageContent />
      {/* <!-- about section --> */}
    </div>
  )
}
