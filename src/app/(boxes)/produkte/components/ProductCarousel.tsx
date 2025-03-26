'use client'
import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'
// import { baseURL } from "../../services/Adapter/customAxios";
// import leftArrow from '../../assets/object/left.png'
// import rightArrow from '../../assets/object/right.png'
import { baseURL } from '@/lib/fetcher'
import { useBoxDetail } from './useBoxDetail'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className=" tw-top-[45%] position-absolute  w-100 ">
      <button
        className=" btn position-absolute md:-tw-start-12 tw-start-0 px-0 shadow-none"
        onClick={() => previous()}
      >
        <img
          height="35px"
          width="35px"
          className="img-fluid  tw-opacity-50 hover:tw-opacity-100 !tw-duration-300"
          src={'/assets/object/left.png'}
        />
      </button>
      <button
        className="btn position-absolute   md:-tw-end-12 tw-end-0 px-0 shadow-none"
        onClick={() => next()}
      >
        <img
          height="35px"
          width="35px"
          className="img-fluid   tw-opacity-50 hover:tw-opacity-100 !tw-duration-300"
          src={'/assets/object/right.png'}
        />
      </button>
    </div>
  )
}
export default function ProductCarousel({ boxImage }) {
  const commonImg = useSelector((state) => state.settings?.boxImg)
  const { selectedBoxData } = useBoxDetail()
  return (
    <div className="tw-relative">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        infinite={true}
        ssr
      >
        {boxImage && boxImage?.length > 0 ? (
          boxImage?.map((e, i) => {
            return (
              <div className={' ' + (i == 0 ? 'active' : '')}>
                <img
                  src={e?.images && e?.images ? baseURL + 'smoothie_box/' + e?.images : commonImg}
                  className="d-block w-100 max-h-600 img-fluid"
                  alt="..."
                />
              </div>
            )
          })
        ) : (
          <img
            src={
              selectedBoxData && selectedBoxData?.picture
                ? baseURL + 'smoothie_box/' + selectedBoxData?.picture
                : commonImg
            }
            className="d-block w-100"
            alt="..."
          />
        )}
      </Carousel>
    </div>
  )
}
