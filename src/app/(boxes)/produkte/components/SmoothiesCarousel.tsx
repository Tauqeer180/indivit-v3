'use client'
import { RecipeCard, SkeltonCard } from '@/components/Cards'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { useBoxDetail } from './useBoxDetail'
import CustomSmoothieDetailPopup from '@/components/CustomSmoothieDetailPopup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32">
      <div className="tw-flex tw-items-center tw-gap-6">
        <Button variant="none" className=" " onClick={() => previous()}>
          <Image
            height={35}
            width={35}
            className="tw-object-contain tw-invert  tw-rotate-180"
            src={'/assets/icon/arrow-right-theme.png'}
            alt="previous btn"
          />
        </Button>
        <Button variant="none" onClick={() => next()}>
          <Image
            height={35}
            width={35}
            className="tw-object-contain  tw-invert"
            src={'/assets/icon/arrow-right-theme.png'}
            alt="next btn"
          />
        </Button>
      </div>
    </div>
  )
}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 700 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 700, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
export default function SmoothiesCarousel() {
  const { selectedBoxData } = useBoxDetail()
  const [modalData, setModalData] = useState({})

  return (
    <div>
      {modalData && (
        <CustomSmoothieDetailPopup data={modalData} ingredients={modalData?.smoothie_ingredient} />
      )}
      <section>
        <div className="tw-py-28 ">
          <div className="container tw-relative">
            <h2
              className="tw-text-5xl tw-font-extrabold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* thant's in it */}
              Das steckt drin
            </h2>

            <div className=" tw-mt-8 ">
              <Carousel
                responsive={responsive}
                itemClass="tw-px-2"
                autoPlay={false}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                infinite={true}
              >
                {selectedBoxData && selectedBoxData?.smoothie_box?.length > 0
                  ? selectedBoxData?.smoothie_box?.map(({ smoothie }, index) => {
                      return (
                        <div
                          type="button"
                          onClick={() => setModalData(smoothie)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          data-bs-whatever="@getbootstrap"
                          key={index}
                          className="tw-pb-2"
                        >
                          <RecipeCard isButton={false} data={smoothie} className="!tw-bg-tea-green" />
                        </div>
                      )
                    })
                  : Array.from(Array(3)).map((d) => {
                      return (
                        <div className="px-md-5">
                          <SkeltonCard />
                        </div>
                      )
                    })}
              </Carousel>
            </div>
          </div>
          {/* <div className="text-center container">
            <hr />
            <p>
              Still can't find the perfect recipe? Try our recipe finder to find
              the best tastiest recipes using only the Z
            </p>
          </div> */}
        </div>
      </section>
    </div>
  )
}
