import { OctagonShapeIcon, TriShapeIcon } from '@/assets/svgIcons'
import React from 'react'

export default function CustomizeSection() {
  return (
    <div className="tw-py-24 tw-bg-[#DCE9C7] tw-relative tw-z-0">
      <OctagonShapeIcon className="tw-absolute tw-top-7 tw-left-0   tw-opacity-80 tw-rounded-md -tw-z-10" />
      <TriShapeIcon className="tw-absolute tw-top-0 tw-right-0 -tw-translate-y-full  -tw-z-10" />
      <div className="container">
        <section className="tw-relative tw-bg-lime-500 tw-rounded-[30px]  tw-shadow-lg tw-text-center tw-py-10 shadow-theme-xl tw-shadow-dark  ">
          {/* <!-- Background shape --> */}
          {/* <div className="tw-absolute -tw-top-6 -tw-left-6 tw-w-20 tw-h-20 tw-bg-white tw-rotate-45 tw-opacity-80 tw-rounded-md -tw-z-10"></div> */}

          {/* <!-- Kiwi image (left) --> */}
          <img
            src="/assets/NewAssets/img/kiwi.png"
            alt="Kiwi"
            className="tw-absolute tw-bottom-0 tw-left-0 tw-rounded-2xl tw-w-40 tw-h-40 tw-object-contain "
          />

          {/* <!-- Strawberry image (right) --> */}
          <img
            src="/assets/NewAssets/img/strawberry.png"
            alt="Strawberry"
            className="tw-absolute tw-top-0 -tw-right-1 tw-rounded-2xl tw-w-40 tw-h-40 tw-object-contain "
          />

          {/* <!-- Text Content --> */}
          <h2 className="tw-text-white tw-text-2xl md:tw-text-5xl md:tw-leading-normal tw-font-bold tw-leading-snug tw-font-Epilogue-bold">
            Kein Favorit dabei? Mix dir <br className="tw-hidden sm:tw-block" />
            deinen eigenen Smoothie!
          </h2>

          {/* <!-- Button --> */}
          <button className="btn-theme tw-mx-auto !tw-bg-white !tw-text-black">
            Jetzt individualisieren
          </button>
        </section>
      </div>
    </div>
  )
}
