import React from 'react'
import { DataProps } from '@/types/data'
import Image from 'next/image'

export default function WhyDetails({ data }: { data: DataProps }) {
  return (
    <div>
      {/* <!-- Why Details section --> */}
      <section id="flx-about" className="!tw-pt-10 ">
        <div className="container pt-5">
          <div className="row d-flex align-items-center">
            <div className="col-12 flx-about-col pe-5">
              <div className="text-left">
                <span className="flx-about-stock">Smoothies</span>
                <h1 className="hsn-smoothies"> {data?.title} </h1>
                <div className="col-6 col-sm-6 float-end flx-forever-object">
                  <div className="disk-container d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                      <p className="fs-4 mb-1 lh-1">
                        individuell <br /> vital <br /> nachhaltig
                      </p>
                    </div>
                  </div>
                  <div className="text-left flx-img-position p-md-5">
                    <Image
                      alt=""
                      src="/assets/img/Why_indivit.png"
                      width={500}
                      height={500}
                      className="img-fluid z-3"
                    />
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: typeof data?.description === 'string' ? data.description : '',
                  }}
                ></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why Detail section --> */}
    </div>
  )
}
