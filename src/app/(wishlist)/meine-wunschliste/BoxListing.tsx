import { BoxCard } from '@/components/Cards'
import React from 'react'

export default function BoxListing({ data }) {
  const yourMixes = data?.filter((d) => d?.box?.smoothie_box_descriptions[0]?.created_by == 1)
  const fromCookBook = data?.filter((d) => d?.box?.smoothie_box_descriptions[0]?.created_by != 1)
  return (
    <div>
      <section id="flx-discover-recipes" className="!tw-pt-10 ">
        <div className="container">
          {yourMixes.length > 0 && (
            <div>
              <h3 className="py-5" data-aos="fade-up" data-aos-duration="1000">
                {/* Your mixes */}
                Deine eigenen Kreationen
              </h3>
              <div className="row">
                {yourMixes.map(({ box }, index) => {
                  return (
                    <div
                      key={index}
                      className="hsn-box-bg col-12 col-md-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <BoxCard data={box} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {fromCookBook?.length > 0 && (
            <div>
              <h3 className="pt-5 pt-md-5 " data-aos="fade-up" data-aos-duration="1000">
                {/* From the Individual Cookbook */}
                Aus der indivit Zusammenstellung
              </h3>
              <div className="row pt-4">
                {fromCookBook?.map(({ box }, index) => {
                  return (
                    <div
                      key={index}
                      className="col-12 col-md-4 hsn-box-bg"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <BoxCard data={box} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
