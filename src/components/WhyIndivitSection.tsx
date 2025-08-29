'use client'
import React, { useRef, useState } from 'react'
// import SideImage from "../../assets/NewAssets/img/s6.jpg";
// import { PlayIcon } from "../../assets/icon/svgIcons";
// import { baseURL } from "../../services/Adapter/customAxios";
// import { WhyIndivitSkelton } from "../Cards";
// import { Link } from "react-router-dom";
// import {  ScrollIntoview, ScrollToDiv } from "../common/Common";
import { PlayIcon } from '@/assets/svgIcons'
import { baseURL } from '@/lib/fetcher'
import { ScrollToDiv } from './common/Common'
import { WhyIndivitSkelton } from './Cards'
import Image from 'next/image'

export default function WhyIndivitSection({ data = [] }) {
  const videoRef = useRef()
  const [isPlaying, setIsPlaying] = useState(true)
  const checkVideoStatus = () => {
    let video = videoRef.current
    setIsPlaying(video?.paused)
  }
  let whyData = data?.length > 0 ? data[0] : {}
  let benefits = (whyData?.why_indivit && JSON.parse(whyData?.why_indivit)) || []
  return (
    <div className="tw-bg-[#FAF4D1] ">
      {/* {JSON.stringify(whyData)} */}
      <div className="container tw-py-24">
        {!whyData?.heading && <WhyIndivitSkelton />}

        <h2 className=" tw-text-xl xl:tw-text-5xl 2xl:tw-text-5xl tw-font-bold tw-mb-6">
          {whyData?.heading}
        </h2>
        <p>{whyData?.description}</p>
        <div className="2xl:tw-container tw-mx-auto tw-grid tw-grid-cols-1 xl:tw-grid-cols-2  tw-gap-8 tw-pt-20">
          {/* Left Column - Image */}

          {/* Right Column - Content */}

          <div className="tw-flex tw-flex-col tw-justify-center tw-p-4 xl:tw-p-10 tw-bg-white tw-rounded-2xl shadow-theme-xl tw-shadow-theme ">
            <div className="tw-space-y-4 lg:tw-space-y-8 xl:tw-space-y-10 2xl:tw-space-y-12">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div
                    // key={index}
                    className="tw-flex tw-items-center tw-gap-4 lg:tw-gap-3 2xl:tw-gap-4"
                  >
                    <div className="  tw-flex-shrink-0">
                      <Image
                        src={baseURL + benefit.icon}
                        alt={benefit.title}
                        width={50}
                        height={50}
                        className="tw-text-[#81CA00]"
                      />
                    </div>

                    <h3 className="tw-font-bold tw-mb-1 tw-text-2xl tw-text-dark tw-font-Epilogue-bold">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="tw-text-gray-600 tw-text-lg tw-mb-0 tw-pt-3">{benefit.detail}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => ScrollToDiv('uebersicht-smoothie-produkte')}
              className="tw-mt-8 btn-theme tw-w-max !tw-font-extrabold tw-font-Epilogue-bold"
            >
              Unsere Produkte entdecken
            </button>
          </div>
          <div
            className={` tw-rounded-2xl tw-aspect-[0.7/1]- tw-relative tw-w-full tw-flex tw-items-center tw-justify-center tw-group tw-overflow-visible`}
          >
            {!isPlaying && (
              <div
                className={` tw-hidden sm:tw-block tw-absolute play-btn -tw-translate-x-1/2 -tw-translate-y-1/2  tw-rounded-full tw-shadow-theme-md `}
              >
                <div className="tw-text-2xl tw-leading-6 tw-text-center tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2">
                  <PlayIcon className="tw-h-20 tw-w-20 tw-text-white" />
                </div>
              </div>
            )}
            <div className="tw-w-full tw-h-full ">
              {whyData?.video && (
                <video
                  // onClick={checkVideoStatus}
                  // ref={videoRef}
                  // controls
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="preload"
                  // poster={SideImage}
                  src={whyData?.video ? baseURL + 'whyIndivit/' + whyData?.video : ''}
                  className=" tw-w-full tw-h-full tw-object-cover tw-rounded-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
