import React from 'react'
import { OctagonShapeIcon, RightIcon } from '@/assets/svgIcons'
import { baseURL } from '@/lib/fetcher'
import Link from 'next/link'
import Image from 'next/image'

const initialSteps = [
  {
    image: '/assets/NewAssets/img/1.png',
    title: 'Wähle dein Programm',
    detail:
      'Entscheide dich für eines unserer Smoothie Programme – Fastenkuren, das 5:2 Intervallfasten oder unsere Smoothie Trinkmahlzeiten – alles individuell anpassbar',
    number: 1,
  },
  {
    image: '/assets/NewAssets/img/2.png',
    title: 'Konfiguriere deine Smoothies',
    detail:
      'Wähle aus unseren Bio-Zutaten: Flüssigkeitsbasis, Hydrolysat, Obst, Kokosraspel oder Quellwasser – und stelle dir deine Smoothies nach Geschmack und',
    number: 2,
  },
  {
    image: '/assets/NewAssets/img/3.png',
    title: 'Wir bereiten deine frisch zu',
    detail:
      'Sobald du bestellt hast, mixen wir deine Smoothies in unserer hauseigenen Manufaktur frisch her und schicken sie per gekühltem Versand zu dir',
    number: 3,
  },
  {
    image: '/assets/NewAssets/img/4.png',
    title: 'Genieße deine Smoothies',
    detail:
      'Die frischen Smoothies kommen direkt zu dir ins Büro oder unterwegs. Genieße die einfache, gesunde Ernährung – ohne Mühe, ohne Stress',
    number: 4,
  },
]
let svgColors = ['#C7E6FF', '#F4C7FF', '#C9EBEE', '#FFE5C7']
export default function HowItWorks({ data }) {
  let myData = data?.length > 0 && data[0]
  let steps = myData && myData?.how_it_works && JSON.parse(myData?.how_it_works)
  return (
    <div className="container tw-mx-auto   tw-py-24">
      {/* Section Title */}
      <div className="tw-mb-12">
        <h2 className="tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-extrabold  tw-text-gray-800 tw-font-Epilogue-bold">
          {myData?.heading}
        </h2>
        <p className="tw-font-Epilogue-bold tw-font-medium lg:tw-text-xl xl:tw-text-2xl tw-text-[#4B5563] ">
          {myData?.description}
        </p>
      </div>
      {/* {JSON.stringify(steps)} */}
      {/* Steps Grid */}
      <div className="tw-grid tw-grid-cols-1 md-5:tw-grid-cols-2  tw-gap-[22px] xl:tw-gap-8 tw-relative tw-items-stretch ">
        {/* Connector Line */}
        {/* <div className="tw-hidden lg:tw-block tw-absolute tw-top-24 tw-left-0 tw-right-0 tw-h-0.5 tw-bg-green-200 tw-z-0"></div> */}

        {(steps || initialSteps).map((step, index) => (
          <div key={index} className="tw-relative tw-mb-12">
            {/* Card */}
            <div className="tw-bg-white tw-z-10 tw-rounded-2xl tw-px-3 tw-py-6 lg:tw-px-8 lg:tw-py-[30px] tw-relative  tw-h-full tw-grid tw-grid-cols-4 shadow-theme-xl xl:shadow-theme-2xl tw-shadow-[#4B5563] ">
              {/* Image and Number */}
              <div className="tw-flex tw-flex-col   tw-mb-4 xl:tw-mb-6 tw-col-span-3 ">
                <div className="tw-text-lg xl:tw-text-xl tw-font-extrabold tw-text-gray-800 tw-mb-2 tw-font-Epilogue-bold">
                  {step.title}
                </div>
                <p className="tw-text-gray-600 tw-text-sm xl:tw-text-[15px] tw-leading-loose ">
                  {step.detail}
                </p>
              </div>
              <div className="tw-bg-white tw-rounded-full  tw-mb-3 tw-flex tw-justify-end">
                <Image
                  width={64}
                  height={64}
                  src={data?.length > 0 ? baseURL + step?.icon : step?.image}
                  alt={step.title}
                  className="tw-w-16 tw-h-16"
                />
              </div>

              {/* Description */}

              {/* Number Badge */}
              {/* <div className="tw-flex tw-justify-end">
                <div className="tw-flex tw-gap-3 tw-items-center">
                  {index < 3 && (
                    <div>
                      <RightIcon className="tw-w-6 tw-text-[#81CA00]" />
                    </div>
                  )}
                </div>
              </div> */}
            </div>
            <div className="tw-absolute tw-top-0 -tw-left-2 tw-w-[100px] -tw-translate-y-1/2 tw-h-[100px] ">
              <OctagonShapeIcon className="tw-w-full tw-h-full " fill={svgColors[index]} />
              <span className="tw-absolute tw-top-1/3 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/3 tw-text-[#4B5563] tw-text-2xl tw-font-Epilogue-bold tw-font-extrabold">
                0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className=" tw-pt-[60px]-">
        <Link
          href="#uebersicht-smoothie-produkte"
          //   onClick={() => ScrollToDiv('uebersicht-smoothie-produkte')}
          // target="_blank"
          className="btn-theme"
        >
          Jetzt loslegen
        </Link>
      </div>
    </div>
  )
}
