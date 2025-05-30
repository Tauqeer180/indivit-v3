import { DataProps } from '@/types/data'
import React from 'react'
import { MarkdownDisplay } from './MarkdownDisplay'

export default function HeroBanner({
  data,
  bgImg,
  breadCrumb,
}: {
  data: DataProps
  bgImg?: string
  breadCrumb?: React.ReactNode
}) {
  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section
        id="flx-hero-section"
        className={`max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none ${bgImg} `}
      >
        <div className="container md:!tw-max-w-3xl tw-mx-auto">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1
              className={`text-center pb-2  ${
                data?.title?.length > 30 &&
                ' tw-max-w-3xl tw-mx-auto xl:tw-text-[40px] lg:tw-text-4xl md:tw-text-3xl tw-text-2xl'
              } `}
            >
              {data?.title}
              {/* {data?.title?.length} */}
            </h1>
            {data?.title2 && (
              <h1
                className={`text-center pb-2  ${
                  data?.title2?.length > 30 &&
                  ' tw-max-w-3xl tw-mx-auto xl:tw-text-[40px] lg:tw-text-4xl md:tw-text-3xl tw-text-2xl'
                } `}
              >
                {data?.title2}
              </h1>
            )}
            {breadCrumb && <div className="tw-hidden lg:tw-block">{breadCrumb}</div>}
          </div>
        </div>
      </section>
      {breadCrumb && <div className="container tw-block lg:tw-hidden">{breadCrumb}</div>}
      {data?.description && (
        <div className="md:!tw-max-w-3xl tw-mx-auto tw-pt-14 !tw-h-auto max-md:!tw-px-4">
          {data?.markdown ? (
            <MarkdownDisplay>{data?.description}</MarkdownDisplay>
          ) : (
            <p className="text-center pb-2">{data?.description}</p>
          )}
          {data?.description2 && <p className="text-center pb-2">{data?.description2}</p>}
        </div>
      )}
      {/* <!-- hero banner end--> */}
    </div>
  )
}
