'use client'
import React, { useRef, useState } from 'react'
// import smImg from "../assets/img/products-popup.png";
// import { baseURL } from '../services/Adapter/customAxios'
import Carousel from 'react-multi-carousel'

// import logo from '../assets/icon/logo1.png'
// import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// Adjust the path to your store file
import ModalContainer from './Modal/ModalContainer'
import ConfirmWishModal from './Modal/ConfirmWishModal'
import { useRouter } from 'next/navigation'
import { baseURL } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
export default function CustomSmoothieDetailPopup({ data, ingredients }) {
  const { push } = useRouter()
  // const navigate = useNavigate()
  const closeRef = useRef()
  const [ingred, setIng] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (ingred !== ingredients) {
        setIng(ingredients)
      }
    }, 200)
  }, [ingredients])

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
      <div className="top-0 position-absolute  w-100 ">
        <button
          className=" btn position-absolute start-0 px-0 shadow-none"
          onClick={() => previous()}
        >
          <img height="45px" width="45px" className="img-fluid " src={'/assets/object/left.png'} />
        </button>
        <button className="btn position-absolute end-0 px-0 shadow-none" onClick={() => next()}>
          <img height="45px" width="45px" className="img-fluid " src={'/assets/object/right.png'} />
        </button>
      </div>
    )
  }
  const handleNavigate = () => {
    // closeRef.current.click()
    push(`/smoothiemixer/${data?.unique_id}`)
  }
  const commonImg = useAppSelector((state) => state.settings?.smoothieImg)
  return (
    <div>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={handleNavigate}
          title="Box Baukasten verlassen?"
          innerHtml="Du verlässt den Boxbaukasten, um dein ausgewähltes Rezept mit dem 
          Online Smoothie Mixer zu konfigurieren. Deine Box wird nicht gespeichert.
          "
        />
      </ModalContainer>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <div className="modal-body px-5">
              <div className="px-lg-5 px-0">
                <div className="text-center">
                  <Image
                    alt={data?.name}
                    src={
                      data?.smoothie_picture?.picture
                        ? baseURL + '/smoothie/' + data?.smoothie_picture?.picture
                        : commonImg
                    }
                    width={768}
                    height={768}
                    className="img-fluid tw-w-[300px] tw-h-[325px]"
                  />
                  <h4> {data?.name} </h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.recipe_text || data?.smoothie_recipe_text?.recipe_text,
                    }}
                  ></div>
                </div>
                <div className="text-center py-4">
                  <h4>Zutaten</h4>
                  <div className=" m-auto position-relative ">
                    {ingred?.length > 0 && (
                      <Carousel
                        responsive={responsive}
                        itemclassName="px-0"
                        autoPlay={true}
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={<ButtonGroup />}
                        infinite={true}
                        ssr={true}
                        autoPlaySpeed={2000}
                      >
                        {ingred?.length > 0
                          ? ingred?.map((ingr, index) => {
                              return (
                                <div key={index}>
                                  <Image
                                    className="img-fluid tw-w-12 tw-h-12"
                                    alt={ingr?.ingredient?.name}
                                    width={300}
                                    height={300}
                                    src={
                                      ingr?.ingredient?.picture
                                        ? baseURL + 'integredient/' + ingr?.ingredient?.picture
                                        : '/assets/icon/logo1.png'
                                    }
                                  />
                                  <p>{ingr?.ingredient?.name} </p>
                                </div>
                              )
                            })
                          : [0, 1, 2]?.map((ingr, index) => {
                              return (
                                <div key={index}>
                                  <span className=" placeholder-glow d-inline-flex py-1 py-3">
                                    <span className="placeholder w-100px"></span>{' '}
                                  </span>
                                  <p>
                                    <span className=" placeholder-glow d-inline-flex py-1 ">
                                      <span className="placeholder w-100px"></span>
                                    </span>
                                  </p>
                                </div>
                              )
                            })}
                      </Carousel>
                    )}
                    {/* {[1, 2, 3, 4, 5, 6].map((prod, index) => {
              return <ProductCard />;
            })} */}
                  </div>
                  <button
                    // to={`/smoothiemixer/${data?.id}`}
                    type="button"
                    className="btn  flx-box-btn text-white"
                    // onClick={handleNavigate}
                    onClick={() => setModalVisible(true)}
                    // data-bs-dismiss="modal"
                    // aria-label="Close"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
