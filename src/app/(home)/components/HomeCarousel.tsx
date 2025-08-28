import React from 'react'

// import { baseURL } from "../services/Adapter/customAxios";
// import { Link } from "react-router-dom";
// import { HeroSkelton } from "./Cards";
// import { ScrollToDiv } from './common/Common'
// import { HashLink } from 'react-router-hash-link'
import { HeroSkelton } from '@/components/Cards'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function HomeCarousel({ data, isLoading }) {
  return (
    <div
      className="home-hero-bg- position-relative tw-bg-cover tw-bg-center tw-bg-no-repeat "
      style={{ backgroundImage: "url('/assets/NewAssets/img/hero-bg.png')" }}
    >
      <section
        // id="flx-here-section"
        className="fade-in- container sm:tw-min-h-[800px] tw-flex tw-items-center"
      >
        {/* <!-- hero banner start--> */}

        {data ? (
          <div
            // key={index}
            //   data-aos="fade-up"
            //   data-aos-duration="1000"
            className=" tw-grid md:tw-grid-cols-2 tw-items-center  tw-px-1 tw-h-full "
          >
            <div className=" md:tw-order-1 tw-order-2 max-sm:tw-pb-8">
              <h1 className="tw-text-[calc(2rem+1.3vw)] tw-font-black tw-mb-0 sm:tw-leading-[60px]">
                {' '}
                {data?.heading}{' '}
              </h1>
              <p className="tw-pt-3 tw-pb-14 tw-text-lg tw-leading-[30px] xl:tw-pe-10">
                {data?.description}
              </p>
              <div className="tw-flex tw-flex-wrap lg:tw-gap-2 tw-gap-1">
                <Link
                  href={data?.link || '/'}
                  // target="_blank"
                  // onClick={() => ScrollToDiv("uebersicht-smoothie-produkte")}
                  type="button"
                  className={cn('btn-theme ')}
                >
                  Jetzt starten
                </Link>
                <Link
                  href={data?.mehr_erfahren_link || '/'}
                  // target="_blank"
                  type="button"
                  className="btn-outline"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
            <div className=" md:tw-order-2 tw-order-1">
              {/* <div className="flx-animate-relative lg:tw-min-h-96">
                      <Image
                        src={baseURL + 'slider/' + data?.slide_thumbnail}
                        className="img-fluid tw-hidden flx-oneabsolute- top-animate max-md-5:tw-mx-auto md-5:tw-ml-auto  tw-shadow tw-rounded-3xl 2xl:tw-w-[500px] 2xl:tw-h-[500px] xl:tw-w-[400px] xl:tw-h-[400px] lg:tw-w-96 lg:tw-h-96 tw-border-solid tw-border-0 tw-border-b-4 tw-border-r-4 tw-border-theme "
                        alt={data?.heading}
                        width={500}
                        height={500}
                        // loading="lazy"
                        placeholder="blur"
                        blurDataURL="/assets/blur/1.jpeg"
                        // blurDataURL={baseURL + 'slider/' + data?.slide_thumbnail}
                      />
                    </div> */}
            </div>
          </div>
        ) : (
          <div key={1} className="px-md-5 tw-py-16">
            <HeroSkelton />
          </div>
        )}
      </section>
    </div>
  )
}
