import Image from 'next/image'
import React from 'react'

export default function StoryDetails({ data }) {
  return (
    <div>
      {/* <!-- about section --> */}
      <section id="flx-about">
        <div className="container">
          <div className="row">
            <div className="col-12  flx-about-col pe-5">
              <div className="text-left">
                <span className="flx-about-stock">Smoothies</span>
                <h1 className="hsn-smoothies"> {data?.title} </h1>
                <div className="float-end col-6 flx-forever-object">
                  <div className="text-left flx-img-position">
                    <Image
                      src="/assets/img/Custom_Box.png"
                      width={500}
                      height={500}
                      className="img-fluid z-3"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: typeof data?.description === 'string' ? data?.description : '',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section --> */}
    </div>
  )
}
