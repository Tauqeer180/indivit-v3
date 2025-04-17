'use client'
import React from 'react'
// import { SkeltonCard, TestimonialCard } from "../Cards";
import Carousel from 'react-multi-carousel'

// import testimonialAvatar from "../../assets/NewAssets/img/1.jpg";
// import img1 from "../../assets/NewAssets/svg/leave.jpg";
// import img2 from "../../assets/NewAssets/svg/kiwi1.png";
// import img3 from "../../assets/NewAssets/svg/orange.png";
// import { baseURL } from "../../services/Adapter/customAxios";
// import { Link } from "react-router-dom";
import { SkeltonCard } from './Cards'
import { baseURL } from '@/lib/fetcher'
import Link from 'next/link'
import Image from 'next/image'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 676 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 676, min: 0 },
    items: 1,
    arrows: false,
  },
}
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className=" tw-top-1/2 position-absolute  w-100  tw-hidden sm:tw-block">
      <button
        className=" btn position-absolute -tw-left-12 px-0 shadow-none"
        onClick={() => previous()}
        aria-labelledby="testimonial-previous"
      >
        <img
          height="44px"
          width="45px"
          className="img-fluid "
          alt="testimonial-previous"
          src={'/assets/object/left.png'}
        />
      </button>
      <button
        className="btn position-absolute -tw-right-12 px-0 shadow-none"
        onClick={() => next()}
        aria-labelledby="testimonial-next"
      >
        <img height="44px" width="45px" className="img-fluid " alt="testimonial-previous" src={'/assets/object/right.png'} />
      </button>
    </div>
  )
}
// const testimonials = [
//   {
//     name: "Anna",
//     location: "Berlin",
//     age: "32",
//     comment:
//       "Die Smoothie Fastenkur von Indivit hat mein Wohlbefinden deutlich verbessert! Ich habe mich leichter, energiegeladener und konzentrierter gefühlt und das ohne großen Aufwand.",
//     avatar: testimonialAvatar,
//   },
//   {
//     name: "Max",
//     location: "München",
//     age: "41",
//     comment:
//       "Ich mache regelmäßig das 5:2 Intervallfasten mit den Smoothies von Indivit. Es ist super praktisch, für 2 Tage pro Woche meine Ernährung umzustellen, und die Smoothies sind einfach lecker!",
//     avatar: testimonialAvatar,
//   },
//   {
//     name: "Lisa",
//     location: "Hamburg",
//     age: "28",
//     comment:
//       "Die Trinkmahlzeiten sind mein Go-to für unterwegs. Sie sind nicht nur super gesund, sondern auch unglaublich praktisch und halten mich stundenlang satt!",
//     avatar: testimonialAvatar,
//   },
// ];

export default function Testimonials({ data, isLoading }) {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["testmonialsListing"],
  //   queryFn: getTestimonials,

  // });
  // console.log("Dtata ", data);
  return (
    <>
      <div className="tw-bg-[#FE6703] tw-relative">
        <div className="tw-absolute -tw-translate-y-1/2">
          <img
            src={'/assets/NewAssets/svg/leave.jpg'}
            alt="leaf"
            className="2xl:tw-w-24 2xl:tw-h-32 xl:tw-w-20 xl:tw-h-28 tw-w-16 tw-h-26"
          />
        </div>
        <div className=" tw-mx-auto 2xl:tw-py-24 xl:tw-py-20 tw-py-16 ">
          <div className="tw-text-center tw-mb-12">
            <h2 className="tw-text-3xl tw-font-bold tw-text-white tw-mt-4">
              Das sagen unsere Kunden
            </h2>
          </div>
          {/* {JSON.stringify(data)} */}
          {/* Testimonials Grid */}
          <div className="container">
            {/* tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 */}
            <div className="">
              <div className=" m-auto position-relative ">
                <Carousel
                  responsive={responsive}
                  itemclassName=""
                  autoPlay={true}
                  arrows={false}
                  renderButtonGroupOutside={true}
                  customButtonGroup={<ButtonGroup />}
                  infinite={true}
                  showDots={false}
                  containerClass=" tw-items-stretch "
                >
                  {isLoading || data?.length == 0
                    ? Array.from(Array(8))?.map((box, index) => {
                        return (
                          <div
                            key={index}
                            className="px-md-5"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <SkeltonCard profileStyle={true} />
                          </div>
                        )
                      })
                    : data?.map((testimonial, index) => (
                        <div
                          key={index}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="2xl:tw-px-4 xl:tw-px-3 tw-px-2 tw-h-full"
                        >
                          <div className="tw-rounded-2xl tw-p-4 lg:tw-px-8 lg:tw-py-6 xl:tw-px-12 xl:tw-py-10 2xl:tw-px-16 2xl:tw-py-[52px] tw-bg-white tw-flex tw-flex-col tw-justify-between tw-items-center tw-text-center tw-transition hover:-translate-y-1 tw-h-full">
                            {/* Avatar and Text Container */}
                            <div className="tw-text-center">
                              <div className="tw-w-16 tw-h-16 tw-mx-auto">
                                <Image
                                  src={`${
                                    testimonial?.image
                                      ? baseURL + 'testimonials/' + testimonial?.image
                                      : 'https://pretty-girls.net/wp-content/uploads/2018/09/moisrgo.jpg'
                                  } `}
                                  alt={`${testimonial.name}'s avatar`}
                                  width={64}
                                  height={64}
                                  className="tw-rounded-full tw-object-cover tw-border tw-border-solid tw-border-theme tw-border-b-2 tw-border-r-2"
                                />
                              </div>
                              {/* Testimonial Text */}
                              <p className="tw-text-gray-600 2xl:tw-mt-10 2xl:tw-mb-14 xl:tw-mt-8 xl:tw-mb-10  tw-mt-6 tw-mb-8  tw-leading-tight tw-line-clamp-6">
                                "{testimonial.comment}"
                              </p>{' '}
                            </div>

                            {/* Author Info */}
                            <div className="tw-text-sm lg:tw-text-base xl:tw-text-lg 2xl:tw-text-xl  tw-font-black">
                              - {testimonial.name},{/* {testimonial.age}, */}{' '}
                              {testimonial.designation}
                            </div>
                          </div>{' '}
                        </div>
                      ))}
                </Carousel>
              </div>
            </div>

            {/* CTA Button */}
            <div className="tw-text-center tw-mt-12">
              <Link
                target="_blank"
                href={'https://g.page/r/CScP0bps-ENOEBM/review'}
                className="tw-bg-transparent tw-border-solid tw-border tw-border-white hover:tw-text-white tw-text-white tw-px-8 tw-outline-none tw-py-3 tw-rounded-lg tw-no-underline "
              >
                Mehr Kundenstimmen
              </Link>
            </div>
          </div>
        </div>
        <div className="tw-absolute tw-right-0 tw-top-0 max-sm:-tw-translate-y-1/3">
          <img
            src={'/assets/NewAssets/svg/kiwi1.png'}
            alt="img1"
            className="2xl:tw-w-[136px] 2xl:tw-h-40 lg:tw-w-28 lg:tw-h-32 md:tw-w-24 md:tw-h-28 tw-w-20 tw-h-24 tw-object-contain"
          />
        </div>
        <div className="tw-absolute -tw-translate-y-2/3">
          <img
            src={'/assets/NewAssets/svg/orange.png'}
            alt="img1"
            className="2xl:tw-w-[152px] 2xl:tw-h-52  lg:tw-w-28 lg:tw-h-32 md:tw-w-24 md:tw-h-28 tw-w-20 tw-h-24 "
          />
        </div>
      </div>
    </>
  )
}
