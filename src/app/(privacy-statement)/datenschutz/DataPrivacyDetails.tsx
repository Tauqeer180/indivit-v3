import Image from 'next/image'
import React from 'react'

export default function DataPrivacyDetails({ data }) {
  return (
    <div>
      {/* <!-- about section --> */}
      <section id="flx-about" className="!tw-pt-10 ">
        <div className="container ">
          <div className="row">
            <div className="col-12  flx-about-col pe-5">
              <div className="text-left">
                {/*<span className="flx-about-stock">Smoothies</span>*/}
                <h1 className="hsn-smoothies">{data?.title}</h1>
                <div className="float-end col-6 flx-forever-object">
                  <div className="disk-container d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                      <p className="fs-6 mb-1 lh-1">
                        Privatsphäre
                        <br />
                        Datenschutz
                      </p>
                    </div>
                  </div>
                  <div className="text-left flx-img-position">
                    <Image
                      src="/assets/img/indivit_data_privacy.png"
                      alt={data?.title}
                      height={500}
                      width={500}
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
      {/* <!-- about section --> */}
    </div>
  )
}
