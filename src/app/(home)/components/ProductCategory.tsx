import React from 'react'
// import Image from "next/image";
// import smoothieImage from '../../assets/NewAssets/img/smothipro1.png'
// import { CheckIcon } from '@/assets/NewAssets/svg/Icons'
import { baseURL } from '@/lib/fetcher'
import Link from 'next/link'
import { CheckIcon } from '@/assets/svgIcons'
import Image from 'next/image'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { cn } from '@/lib/utils'
// import { Link } from "react-router-dom";
// import { baseURL } from "../../services/Adapter/customAxios";
// import { Check, ArrowRight } from "lucide-react";

export default function ProductCategory({ data = [] }) {
  return (
    <div className="tw-min-h- tw-py-12 lg:tw-py-24" id="uebersicht-smoothie-produkte">
      {/* {JSON.stringify(data)} */}
      <div className="container mx-auto">
        <h2 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold  tw-text-gray-800 tw-mb-12 tw-font-Epilogue-bold">
          Entdecke unsere Produktlinien
        </h2>

        <div className=" tw-grid tw-grid-cols-1 xl:tw-grid-cols-2  tw-gap-6 xl:tw-gap-10 2xl:tw-gap-6">
          {data?.map((cat, index) => (
            <div
              key={index}
              className="tw-group tw-items-end tw-grid tw-grid-cols-3 group-hover:tw-grid-cols-1 tw-gap-4 tw-shadow-lg 2xl:tw-p-[30px] xl:tw-p-6 lg:tw-px-20 lg:tw-py-10 tw-px-10 tw-py-8 tw-rounded-2xl shadow-theme-lg tw-shadow-[#CCCCCC]"
              style={{ backgroundColor: cat?.color }}
            >
              {/* Content */}
              <div
                className={cn(
                  'tw-col-span-2  tw-flex tw-flex-col tw-justify-between  tw-h-[-webkit-fill-available] md:tw-gap-4 tw-gap-2',
                  cat?.detail_landing_page && 'group-hover:tw-col-span-3'
                )}
              >
                <div>
                  <h3
                    className={cn(
                      'tw-text-[26px] tw-font-bold tw-font-Epilogue-bold tw-mb-3 tw-text-gray-800 tw-uppercase tw-block ',
                      cat?.detail_landing_page && 'group-hover:tw-hidden'
                    )}
                  >
                    {cat?.name}
                  </h3>
                  {/* <div
                    className="tw-text-gray-600 tw-text-2xl tw-mb-6 tw-font-Epilogue-bold tw-font-extrabold tw-line-clamp-[8] tw-hidden-group-hover:tw-block"
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof cat.detail_landing_page === 'string' ? cat.detail_landing_page : '',
                    }}
                  ></div> */}
                  <MarkdownDisplay className="tw-text-xl tw-font-Epilogue-bold tw-font-extrabold tw-hidden group-hover:tw-block">
                    {cat?.detail_landing_page}
                  </MarkdownDisplay>

                  {/* Benefits */}
                  <div
                    className={cn('tw-block ', cat?.detail_landing_page && 'group-hover:tw-hidden')}
                  >
                    {cat?.box_category_benefit_landing_pages?.length > 0 && (
                      <div className="tw-space-y-3 tw-mb-6">
                        {/* <hr className="tw-w-1/3 tw-mx-auto tw-my-16 2xl:tw-my-10 tw-opacity-100 tw-bg-[#707070]" /> */}

                        {cat?.box_category_benefit_landing_pages?.length > 0 &&
                          JSON.parse(cat?.box_category_benefit_landing_pages[0]?.benefits)?.map(
                            (benefit, idx) => (
                              <div key={idx} className="tw-flex tw-items-center tw-gap-2.5">
                                <span className="tw-bg-white tw-rounded-full tw-w-5 tw-h-5  shadow-theme-sm tw-shadow-dark tw-flex tw-items-center tw-justify-center">
                                  <CheckIcon className="tw-w-3 tw-h-3  tw-flex-shrink-0" />
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
              <div
                className={cn(
                  'tw-flex tw-justify-center ',
                  cat?.detail_landing_page && 'tw-block group-hover:tw-hidden'
                )}
              >
                <Image
                  src={
                    cat?.image
                      ? baseURL + 'box-category/' + cat?.image
                      : '/assets/NewAssets/img/smothipro1.png'
                  }
                  alt={cat?.name}
                  className="tw-rounded-t-full   tw-max-h-96 tw-object-cover tw-aspect-[206/288] tw-border tw-border-t-2 tw-border-l-2 tw-border-r-4 tw-border-b-4 tw-border-solid tw-border-white"
                  // placeholder="blur"
                  // blurDataURL="/assets/NewAssets/img/smothipro1.png"
                  height={288}
                  width={206}
                  // fill
                  // sizes="(min-width: 808px) 100px, 50px"
                  // objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
