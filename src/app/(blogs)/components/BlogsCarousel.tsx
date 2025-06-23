'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
// import leftIcon from '../../assets/object/left.png'
// import rightIcon from '../../assets/object/right.png'
import { BlogCard, SkeltonCard } from '@/components/Cards'
// import { BlogCard, SkeltonCard } from "../../components/Cards";

const responsive = {
  '2xl': {
    breakpoint: { max: 4000, min: 1500 },
    items: 4,
  },
  xl: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1500, min: 1280 },
    items: 3,
  },
  lg: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 676 },
    items: 2,
    arrows: false,
  },
  xs: {
    breakpoint: { max: 676, min: 400 },
    items: 2,
    arrows: false,
  },
  xxs: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    arrows: false,
  },
}
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className=" tw-top-1/2 position-absolute  w-100  ">
      <button
        className=" btn position-absolute sm:-tw-left-12 -tw-left-6 px-0 shadow-none"
        onClick={() => previous()}
      >
        <img height="44px" width="45px" className="img-fluid " src={'/assets/object/left.png'} />
      </button>
      <button
        className="btn position-absolute sm:-tw-right-12 -tw-right-6 px-0 shadow-none"
        onClick={() => next()}
      >
        <img height="44px" width="45px" className="img-fluid " src={'/assets/object/right.png'} />
      </button>
    </div>
  )
}

export default function BlogsCarousel({ data, isLoading }:{ data: any, isLoading?: boolean }) {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["testmonialsListing"],
  //   queryFn: getTestimonials,

  // });
  // console.log("Dtata ", data);
  return (
    <>
      <div className=" tw-relative">
        <div className=" tw-mx-auto 2xl:tw-pb-24 xl:tw-pb-20 tw-pb-16 ">
          <div className="tw-text-center tw-mb-12">
            <h2 className="tw-text-3xl tw-font-bold  tw-mt-4">Verwandte Artikel</h2>
          </div>

          <div className="container">
            <div className="">
              <div className=" m-auto position-relative  ">
                <Carousel
                  responsive={responsive}
                  // itemclassName=""
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
                    : data?.map((blog, index) => (
                        <div
                          key={index}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="2xl:tw-px-4 xl:tw-px-3 tw-px-2 tw-h-full max-sm:tw-max-w-[100vw]"
                        >
                          <BlogCard data={blog} />
                        </div>
                      ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
