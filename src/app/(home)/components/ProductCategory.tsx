import React from 'react'
// import Image from "next/image";
// import smoothieImage from '../../assets/NewAssets/img/smothipro1.png'
// import { CheckIcon } from '@/assets/NewAssets/svg/Icons'
import { baseURL } from '@/lib/fetcher'
import Link from 'next/link'
import { CheckIcon } from '@/assets/svgIcons'
import Image from 'next/image'
// import { Link } from "react-router-dom";
// import { baseURL } from "../../services/Adapter/customAxios";
// import { Check, ArrowRight } from "lucide-react";

export default function ProductCategory({ data = [] }) {
  return (
    <div className="tw-min-h- tw-py-12 " id="uebersicht-smoothie-produkte">
      {/* {JSON.stringify(data)} */}
      <div className="container mx-auto">
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold  tw-text-gray-800 tw-mb-12 tw-font-Epilogue-bold">
          Entdecke unsere Produktlinien
        </h2>

        <div className=" tw-grid tw-grid-cols-1 md:tw-grid-cols-2  tw-gap-6 xl:tw-gap-10 2xl:tw-gap-6">
          {data?.map((cat, index) => (
            <div
              key={index}
              className="tw-items-end tw-grid tw-grid-cols-3 tw-shadow-lg 2xl:tw-p-5 xl:tw-p-5 lg:tw-px-20 lg:tw-py-10 tw-px-10 tw-py-8 tw-rounded-2xl shadow-theme-lg tw-shadow-[#CCCCCC]"
              style={{ backgroundColor: cat?.color }}
            >
              {/* Content */}
              <div className="tw-col-span-2 tw-flex tw-flex-col tw-justify-between  tw-h-[-webkit-fill-available] ">
                <div>
                  <h3 className="tw-text-[26px] tw-font-bold tw-font-Epilogue-bold tw-mb-3 tw-text-gray-800 ">
                    {cat?.name}
                  </h3>
                  <div
                    className="tw-text-gray-600 tw-text-sm tw-mb-6  tw-line-clamp-[8]"
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof cat.detail_landing_page === 'string' ? cat.detail_landing_page : '',
                    }}
                  ></div>

                  {/* Benefits */}
                  {cat?.box_category_benefit_landing_pages?.length > 0 && (
                    <div className="tw-space-y-3 tw-mb-6">
                      {/* <hr className="tw-w-1/3 tw-mx-auto tw-my-16 2xl:tw-my-10 tw-opacity-100 tw-bg-[#707070]" /> */}

                      {cat?.box_category_benefit_landing_pages?.length > 0 &&
                        JSON.parse(cat?.box_category_benefit_landing_pages[0]?.benefits)?.map(
                          (benefit, idx) => (
                            <div key={idx} className="tw-flex tw-items-center tw-gap-2">
                              <span className="tw-bg-white tw-rounded-full tw-w-5 tw-h-5  shadow-theme-sm tw-shadow-dark tw-flex tw-items-center tw-justify-center">
                                <CheckIcon className="tw-w-5 tw-h-5 tw-text-theme tw-flex-shrink-0" />
                              </span>

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
                  href={`/${cat?.slug || cat?.name + '_' + cat?.id}`}
                  className="btn-theme !tw-bg-white !tw-text-black tw-font-Epilogue-bold tw-font-black tw-leading-none"
                >
                  {cat?.button_label}
                  {/* <ArrowRight className="tw-w-4 tw-h-4" /> */}
                </Link>
              </div>

              {/* Image Section */}
              <div className="tw-flex tw-justify-center ">
                <div className=" tw-relative tw-w-full  tw-rounded-t-full   ">
                  <Image
                    src={
                      cat?.image
                        ? baseURL + 'box-category/' + cat?.image
                        : '/assets/NewAssets/img/smothipro1.png'
                    }
                    alt={cat?.name}
                    className="tw-rounded-t-full  tw-w-full tw-max-h-96 tw-object-cover tw-aspect-[206/288]"
                    // placeholder="blur"
                    // blurDataURL="/assets/NewAssets/img/smothipro1.png"
                    height={288}
                    width={206}
                    // fill
                    sizes="(min-width: 808px) 100px, 50px"
                    // objectFit="contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
