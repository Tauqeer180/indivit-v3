import React from 'react'

// import { baseURL } from "../services/Adapter/customAxios";
// import { Link } from "react-router-dom";
// import { HeroSkelton } from "./Cards";
// import { ScrollToDiv } from './common/Common'
// import { HashLink } from 'react-router-hash-link'
import { baseURL } from '@/lib/fetcher'
import { HeroSkelton } from '@/components/Cards'
import Link from 'next/link'

export default function HomeCarousel({ data, isLoading }) {
  return (
    <div className="home-hero-bg- position-relative ">
      <section id="flx-here-section" className="fade-in ">
        {/* <!-- hero banner start--> */}
        <div className="container lg:tw-pt-24 xs:tw-pt-16 tw-pt-10 position-relative sm:!tw-px-0">
          {/* New Hero Section */}
          <div>
            <div className=" m-auto position-relative tw-py-16 ">
              {data ? (
                <div
                  // key={index}
                  //   data-aos="fade-up"
                  //   data-aos-duration="1000"
                  className=" -tw-z-10 tw-grid md:tw-grid-cols-2 tw-items-center lg:tw-gap-12 tw-gap-8 tw-px-1 "
                >
                  <div className=" md:tw-order-1 tw-order-2">
                    <h1 className="tw-text-[calc(1.3rem+.6vw)]"> {data?.heading} </h1>
                    <p className="pt-3 pb-3">{data?.description}</p>
                    <div className="tw-flex tw-flex-wrap lg:tw-gap-2 tw-gap-1">
                      <Link
                        href={data?.link}
                        // target="_blank"
                        // onClick={() => ScrollToDiv("category_section")}
                        type="button"
                        className="btn btn-primary btn-solid-success"
                      >
                        Jetzt starten
                      </Link>
                      <Link
                        href={data?.mehr_erfahren_link}
                        // target="_blank"
                        type="button"
                        className="btn btn-primary btn-outline-success !tw-bg-white "
                      >
                        Mehr erfahren
                      </Link>
                    </div>
                  </div>
                  <div className=" md:tw-order-2 tw-order-1">
                    <div className="flx-animate-relative lg:tw-min-h-96">
                      <img
                        src={baseURL + 'slider/' + data?.slide_thumbnail}
                        className="img-fluid flx-oneabsolute- top-animate max-md-5:tw-mx-auto md-5:tw-ml-auto  tw-shadow tw-rounded-3xl 2xl:tw-w-[500px] 2xl:tw-h-[500px] xl:tw-w-[400px] xl:tw-h-[400px] lg:tw-w-96 lg:tw-h-96 tw-border-solid tw-border-0 tw-border-b-4 tw-border-r-4 tw-border-theme "
                        alt={data?.heading}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={1} className="px-md-5 tw-py-16">
                  <HeroSkelton />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
