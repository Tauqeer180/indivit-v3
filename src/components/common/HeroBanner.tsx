import { DataProps } from '@/types/data'
import React from 'react'
import { MarkdownDisplay } from './MarkdownDisplay'
import { H1 } from './Typography'
import Image from 'next/image'

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
    <div className="tw-pt-36 tw-bg-green tw-relative tw-overflow-hidden">
      {/* <!-- hero banner start--> */}
      <section className="container">
        {bgImg && <Image
                    alt="red barries"
                    src="/assets/img/smoothie_list_graphics.png"
                    className="tw-absolute -tw-right-6 xl:-tw-right-20 tw-top-52 tw-object-contain  tw-hidden lg:tw-block tw-w-36 tw-h-24  xl:tw-w-[264px] xl-tw-h-[164px]"
                    width={264}
                    height={180}
                    // sizes="(min-width: 1280px) 264px, 164px"
                  />}
        <div className="">
          {breadCrumb}
                  </div>
        <div className="tw-pt-5  lg:tw-max-w-[1091px]">
          <H1 className=" ">{data?.title}</H1>

          {data?.title2 && (
            <h1
              className={` tw-pb-2  ${
                data?.title2?.length > 30 &&
                ' tw-max-w-3xl tw-mx-auto xl:tw-text-[40px] lg:tw-text-4xl md:tw-text-3xl tw-text-2xl'
              } `}
            >
              {data?.title2}
            </h1>
          )}

          {data?.description && (
            <div className=" tw-pt-5 !tw-h-auto tw-text-justify">
              <MarkdownDisplay enableTailwind={true} className="tw-text-justify">
                {data?.description}
              </MarkdownDisplay>

              {data?.description2 && <p className=" tw-pb-3">{data?.description2}</p>}
            </div>
          )}
        </div>
      </section>

      {/* <!-- hero banner end--> */}
    </div>
  )
}
