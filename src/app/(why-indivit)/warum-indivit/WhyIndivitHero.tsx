import { DataProps } from '@/types/data'
import React from 'react'

export default function WhyIndivitHero({ data }: { data: DataProps }) {
  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        <div className="container">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2 tw-max-w-3xl tw-mx-auto xl:tw-text-[40px] lg:tw-text-4xl md:tw-text-3xl tw-text-2xl">
              {' '}
              {data?.title}{' '}
            </h1>
            {/* <p className="text-center pb-2">{data?.description}</p> */}
            {/* <h6 className="text-center flx-subheading-color">So we did it.</h6> */}
          </div>
        </div>
      </section>
      {/* <!-- hero banner end--> */}
    </div>
  )
}
