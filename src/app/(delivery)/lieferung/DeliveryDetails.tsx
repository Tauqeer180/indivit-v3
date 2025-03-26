import { DataProps } from '@/types/data'
import Image from 'next/image'
import React from 'react'

export default function DeliveryDetails({ data }: { data: DataProps }) {
  return (
    <div>
      {/* <!-- about section --> */}
      <section id="flx-about">
        <div className="container">
          <div className="row">
            <div className="col-12  flx-about-col pe-5">
              <div className="text-left">
                <span className="flx-about-stock">Smoothies</span>
                <h1 className="hsn-smoothies">{data?.title} </h1>
                <div className="float-end col-6 flx-forever-object">
                  <div className="disk-container d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                      <p className="fs-5 mb-1 lh-1">
                        schnell <br /> gekühlten <br /> terminiert
                      </p>
                    </div>
                  </div>
                  <div className="text-left flx-img-position">
                    {/* <img src="/assets/img/indivit_delivery.png" className="img-fluid z-3" alt="" /> */}
                    <Image
                      src="/assets/img/indivit_delivery.png"
                      alt="Delivery"
                      width={800}
                      height={800}
                      className="img-fluid z-3"
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
    </div>
  )
}
