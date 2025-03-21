import React from 'react'
// import Image from "next/image";
// import smoothieImage from '../../assets/NewAssets/img/smothipro1.png'
// import { CheckIcon } from '@/assets/NewAssets/svg/Icons'
import { baseURL } from '@/lib/fetcher'
import Link from 'next/link'
import { CheckIcon } from '@/assets/svgIcons'
// import { Link } from "react-router-dom";
// import { baseURL } from "../../services/Adapter/customAxios";
// import { Check, ArrowRight } from "lucide-react";

export default function ProductCategory({ data = [] }) {
  return (
    <div className="tw-min-h- tw-py-12 " id="category_section">
      {/* {JSON.stringify(data)} */}
      <div className="container mx-auto">
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-center tw-text-gray-800 tw-mb-12">
          Entdecke unsere Produktlinien
        </h2>

        <div className=" tw-grid tw-grid-cols-1 md:tw-grid-cols-2 2xl:tw-grid-cols-4 tw-gap-6 xl:tw-gap-10 2xl:tw-gap-6">
          {data?.map((cat, index) => (
            <div
              key={index}
              className=" tw-flex tw-flex-col tw-bg-white tw-shadow-lg 2xl:tw-p-6 xl:tw-px-24 xl:tw-py-14 lg:tw-px-20 lg:tw-py-10 tw-px-10 tw-py-8 tw-border-0 tw-border-t-2 tw-border-solid tw-border-red-500"
              style={{ borderTopColor: cat?.color }}
            >
              {/* Image Section */}
              <div className="tw-flex tw-justify-center tw-mb-6">
                <div className=" tw-relative">
                  <img
                    src={
                      cat?.image
                        ? baseURL + 'box-category/' + cat?.image
                        : '/assets/NewAssets/img/smothipro1.png'
                    }
                    alt="Smoothie"
                    layout="fill"
                    className="tw-rounded-md  tw-w-full tw-max-h-96 tw-object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="tw-flex tw-flex-col tw-justify-between tw-h-[-webkit-fill-available] ">
                <div>
                  <h3 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-800 tw-text-center">
                    {cat?.name}
                  </h3>
                  <hr className="tw-w-1/4 tw-mx-auto tw-my-5 tw-p-[3px] tw-bg-theme tw-opacity-100 tw-rounded-full" />
                  <div
                    className="tw-text-gray-600 tw-text-sm tw-mb-6 tw-text-center tw-line-clamp-[8]"
                    dangerouslySetInnerHTML={{
                      __html: cat.detail_landing_page,
                    }}
                  >
                    {/* {cat.detail_landing_page} */}
                  </div>

                  {/* Benefits */}
                  {cat?.box_category_benefit_landing_pages?.length > 0 && (
                    <div className="tw-space-y-3 tw-mb-6">
                      <hr className="tw-w-1/3 tw-mx-auto tw-my-16 2xl:tw-my-10 tw-opacity-100 tw-bg-[#707070]" />

                      {cat?.box_category_benefit_landing_pages?.length > 0 &&
                        JSON.parse(cat?.box_category_benefit_landing_pages[0]?.benefits)?.map(
                          (benefit, idx) => (
                            <div key={idx} className="tw-flex tw-items-center tw-gap-2">
                              <CheckIcon className="tw-w-5 tw-h-5 tw-text-theme tw-flex-shrink-0" />

                              <span className="tw-text-sm tw-text-gray-600">
                                {benefit?.benifit_heading}
                              </span>
                            </div>
                          )
                        )}
                    </div>
                  )}
                </div>
                {/* CTA ButtonLink*/}
                <Link
                  href={`/category/${cat?.name + '_' + cat?.id}`}
                  className="tw-w-full tw-bg-[#81CA00] hover:tw-bg-[#81CA00] tw-text-white hover:tw-text-white tw-no-underline tw-py-3 tw-px-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-gap-2 tw-transition-colors tw-border-none"
                >
                  {cat?.button_label}
                  {/* <ArrowRight className="tw-w-4 tw-h-4" /> */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
