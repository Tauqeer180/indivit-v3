import React from 'react'
import Image from 'next/image'

export default async function AboutDetails({ data }) {
  return (
    <div>
      {/* <!-- about section --> */}
      <section id="flx-about" className="!tw-pt-10 ">
        <div className="container pt-5">
          <div className="row d-flex">
            <div className="col-12 flx-about-col pe-5">
              <div className="text-left">
                <div className="col-6 float-end flx-forever-object position-relative">
                  <div className="disk-container d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                      <p className="fs-2 mb-1 lh-1">
                        aus Berlin <br /> seit 2021
                      </p>
                    </div>
                  </div>
                  <div className="text-left flx-img-position">
                    <Image
                      width={500}
                      height={500}
                      src="/assets/img/Jan_Lampe.png"
                      className="img-fluid z-3"
                      alt=""
                    />
                  </div>
                </div>
                <span className="flx-about-stock">Smoothies</span>
                <h3 className="hsn-smoothies"> {data?.title} </h3>
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
