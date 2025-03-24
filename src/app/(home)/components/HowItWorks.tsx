import React from 'react'
import { RightIcon } from '@/assets/svgIcons'
import { baseURL } from '@/lib/fetcher'
import Link from 'next/link'

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
export default function HowItWorks({ data }) {
  let myData = data?.length > 0 && data[0]
  let steps = myData && myData?.how_it_works && JSON.parse(myData?.how_it_works)
  return (
    <div className="sm:tw-container tw-mx-auto   tw-pt-14 tw-px-8">
      {/* Section Title */}
      <div className="tw-mb-12">
        <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-800">
          {myData?.heading}
        </h2>
        <p className="tw-font-bold tw-text-center">{myData?.description}</p>
      </div>
      {/* {JSON.stringify(steps)} */}
      {/* Steps Grid */}
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-[22px] tw-relative tw-items-stretch ">
        {/* Connector Line */}
        {/* <div className="tw-hidden lg:tw-block tw-absolute tw-top-24 tw-left-0 tw-right-0 tw-h-0.5 tw-bg-green-200 tw-z-0"></div> */}

        {(steps || initialSteps).map((step, index) => (
          <div key={index} className="tw-relative">
            {/* Card */}
            <div className="tw-bg-white tw-rounded-2xl tw-px-3 tw-py-6 tw-relative tw-z-10 tw-h-full">
              {/* Image and Number */}
              <div className="tw-flex tw-flex-col tw-items-center tw-mb-4">
                <div className="tw-bg-white tw-rounded-full tw-p-4 tw-mb-3">
                  <img
                    src={data?.length > 0 ? baseURL + step?.icon : step?.image}
                    alt={step.title}
                    className="tw-w-16 tw-h-16"
                  />
                </div>
                <div className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-2">
                  {step.title}
                </div>
              </div>

              {/* Description */}
              <p className="tw-text-gray-600 tw-text-sm tw-text-center">{step.detail}</p>

              {/* Number Badge */}
              <div className="tw-flex tw-justify-end">
                <div className="tw-flex tw-gap-3 tw-items-center">
                  {index < 3 && (
                    <div>
                      <RightIcon className="tw-w-6 tw-text-[#81CA00]" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="tw-text-center tw-mt-16">
        <Link
          href="#category_section"
          //   onClick={() => ScrollToDiv('category_section')}
          // target="_blank"
          className="tw-bg-[#81CA00] tw-border-none tw-text-white tw-px-8 tw-py-3 tw-rounded-lg hover:tw-bg-[#81CA00] tw-transition-colors tw-decoration-transparent hover:tw-text-white"
        >
          Jetzt loslegen
        </Link>
      </div>
    </div>
  )
}
