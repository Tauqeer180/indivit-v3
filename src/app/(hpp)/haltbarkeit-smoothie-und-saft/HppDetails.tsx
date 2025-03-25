import { DataProps } from '@/types/data'
import Image from 'next/image'
import React from 'react'

export default function HPPDetails({ data }: { data: DataProps }) {
  return (
    <div>
      {/* <!-- about section --> */}
      <section id="flx-about">
        <div className="container ">
          <div className="row">
            <div className="col-12  flx-about-col pe-5">
              <div className="text-left">
                <div className="float-end col-6 flx-forever-object">
                  <div className="disk-container d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                      <p className="fs-5 mb-1 lh-1">
                        sicher
                        <br />
                        schonend
                        <br />
                        haltbar
                        <br />
                        vitaminreich
                      </p>
                    </div>
                  </div>
                  <div className="text-left flx-img-position">
                    <Image
                      src="/assets/img/indivit_HPP.png"
                      alt="Delivery"
                      width={500}
                      height={500}
                      className="img-fluid z-3"
                    />
                  </div>
                </div>
                <span className="flx-about-stock">Smoothies</span>
                <h3 className="hsn-smoothies"> {data?.title} </h3>{' '}
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
