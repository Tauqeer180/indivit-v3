import { H1 } from '@/components/common/Typography'
import { baseURL } from '@/lib/fetcher'
import React from 'react'
// import tickIcon from "../../assets/object/boxui-icon.png";
// import { baseURL } from "../../services/Adapter/customAxios";

export default function BoxUiBanner({ isHeading, heading, description, benefits }) {
  // console.log(
  //   " Data Box Benefits",
  //   data?.benefits && JSON.parse(data?.benefits)
  // );
  return (
    <div>
      {/* {JSON.stringify(benefits)} */}
      <section id="flx-icon-box-#fe6703" className="tw-bg-light-orange ">
        <div className="tw-py-20">
          <div className="container">
            <div className=" ">
              {isHeading && (
                <div>
                  <H1 className="   tw-pb-3" data-aos="fade-up" data-aos-duration="1000">
                    {heading}
                  </H1>
                  {description && (
                    <p className=" pb-3" data-aos="fade-up" data-aos-duration="1500">
                      {description}
                    </p>
                  )}
                </div>
              )}
              <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 md:tw-gap-10  mb-5">
                {benefits &&
                  benefits?.map((ben, i) => {
                    return (
                      <div
                        className=" tw-bg-white tw-text-lg tw-text-dark shadow-theme-lg tw-shadow-muted tw-border-muted tw-border-1 tw-border-solid tw-rounded-2xl tw-p-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        key={i}
                      >
                        <div className=" ">
                          <img
                            src={baseURL + 'public/' + ben?.icon}
                            alt=""
                            className="img-fluid"
                            // height="50"
                            width="70"
                          />
                          <h3 className="tw-font-extrabold"> {ben?.benifit_heading} </h3>
                          <div dangerouslySetInnerHTML={{ __html: ben?.benefits }}></div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path
              fill="#F8F9FA"
              fillOpacity="1"
              d="M0,128L60,106.7C120,85,240,43,360,58.7C480,75,600,149,720,154.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg> */}
        </div>
      </section>
    </div>
  )
}
