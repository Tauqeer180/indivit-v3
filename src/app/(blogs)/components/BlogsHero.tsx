import React from 'react'

export default function BlogsHero({ data, breadCrumb }: any) {
  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section id="flx-hero-section">
        <div className="container">
          <div className=" md:!tw-pt-10 lg:!tw-pt-20">
            <h1 className="text-center pb-2"> {data?.title} </h1>
            {breadCrumb && <div className="tw-hidden lg:tw-block">{breadCrumb}</div>}

            {/* <p className="text-center pb-2">{data?.description}</p> */}
            {/* <h6 className="text-center flx-subheading-color">So we did it.</h6> */}
          </div>
        </div>
      </section>
      {breadCrumb && <div className="container tw-block lg:tw-hidden">{breadCrumb}</div>}

      {/* <!-- hero banner end--> */}
    </div>
  )
}
