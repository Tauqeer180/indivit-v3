'use client'
import { RecipeCard, SkeltonCard } from '@/components/Cards'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { useBoxDetail } from './useBoxDetail'
import CustomSmoothieDetailPopup from '@/components/CustomSmoothieDetailPopup'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="carousel-button-group position-absolute  w-100 ">
      <button
        className=" btn position-absolute start-0 px-0 shadow-none"
        onClick={() => previous()}
      >
        <img height="114px" width="62px" className="img-fluid " src={'/assets/img/right.png'} />
      </button>
      <button className="btn position-absolute end-0 px-0 shadow-none" onClick={() => next()}>
        <img height="114px" width="62px" className="img-fluid " src={'/assets/img/left.png'} />
      </button>
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
      <section id="flx-vue-slider">
        <div className="pt-5">
          <div className="container-fluid px-0">
            <div className="flx-vue-width">
              <h2 className="text-center" data-aos="fade-up" data-aos-duration="1000">
                {/* thant's in it */}
                Das steckt drin
              </h2>
            </div>

            <div className=" m-auto position-relative ">
              <Carousel
                responsive={responsive}
                itemclassName="px-5"
                autoPlay={true}
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
                        >
                          <RecipeCard isButton={false} data={smoothie} />
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
