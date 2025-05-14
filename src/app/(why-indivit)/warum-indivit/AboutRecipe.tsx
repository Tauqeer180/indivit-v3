import Image from 'next/image'
import React from 'react'

interface IAboutRecipeData {
  title: string
  description: string
  list: {
    title: string
    description: string
    icon?: string
  }[]
}

export default function AboutRecipe({ color, data }: { color: string; data: IAboutRecipeData }) {
  const icons = {
    icon1: '/assets/icon/frucht.png',
    icon2: '/assets/icon/hand_icon.png',
    icon3: '/assets/icon/diamond_icon.png',
    icon4: '/assets/icon/recycling-zeichen.png',
  }

  return (
    <div>
      {/* <!------full width section text How we make our smoothies start------> */}
      <section id="flx-second-imgbox">
        <div className="container flx-add-leaveobject">
          <div className="row">
            <div className="flx-container-width pt-5 pb-5 text-center text-md-start">
              <h2 className="text-center"> {data?.title} </h2>
              <p className="text-center pb-5">{data?.description}</p>
              {/* <!-- Row 1 --> */}
              {data?.list?.map((d, index) => {
                return (
                  <div className="row d-flex pb-5" key={index}>
                    {d?.icon && (
                      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-1 d-md-block">
                        <div className="d-flex align-items-center h-100 justify-content-center">
                          <Image
                            alt={data?.title}
                            src={icons[d?.icon]}
                            className="img-fluid"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    )}
                    <div
                      className={`col-xs-12 col-sm-12 d-md-block ${
                        d?.icon ? 'col-md-2 col-lg-2' : 'col-md-3 col-lg-3'
                      }`}
                    >
                      <div className="flx-iconbox-about h-100 d-flex align-items-center justify-content-center">
                        <h4> {d?.title} </h4>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                      <div className="">
                        <p>{d?.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill={color}
            fill-opacity="1"
            d="M0,128L60,106.7C120,85,240,43,360,58.7C480,75,600,149,720,154.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  )
}
