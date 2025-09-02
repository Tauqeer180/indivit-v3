import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarFishShape } from '@/assets/svgIcons'

export default function VisionRecipeSection() {
  return (
    <div>
      <section className=" tw-py-24 md:tw-py-20 lg:tw-py-24 xl:tw-py-32 container tw-space-y-24 ">
        <div className="tw-grid sm:tw-grid-cols-2 tw-gap-24 md:tw-gap-16 lg:tw-gap-20 xl:tw-gap-36 2xl:tw-gap-48 tw-items-center">
          {/* Left text block */}
          <div className="">
            <h2
              className="tw-text-2xl lg:tw-text-3xl xl:tw-text-[40px] tw-font-bold tw-mb-4 tw-font-Epilogue-bold"
              data-aos="fade-up"
            >
              Wir hatten eine Vision: <br />
              Den besten Smoothie der Welt kreieren.
            </h2>
            <p className="tw-text-gray-600 tw-mb-6 lg:tw-text-lg" data-aos="fade-up">
              Smoothies sind nicht nur unser Produkt, sondern unsere große Leidenschaft
            </p>
            <Link
              href="/wir-sind-die-smoothie-ninjas"
              className="btn-theme"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Erfahre mehr über uns
            </Link>
          </div>

          {/* Right image */}
          <div className="tw-relative">
            <div className="tw-absolute -tw-top-4 sm:-tw-top-10 md:-tw-top-20  md:tw-left-10 lg:tw-left-20 tw-left-0  -tw-z-10 ">
              <StarFishShape className=" tw-w-24 tw-h-28 sm:tw-w-40 sm:tw-h-52 md:tw-w-60 md:tw-h-72  xl:tw-w-[270px] xl:tw-h-[331px]" />
            </div>

            <Image
              src="/assets/img/vision.png"
              className=" lg:tw-rounded-t-[155px] tw-rounded-t-[100px] tw-object-cover tw-aspect-[5/6] tw-w-full tw-h-auto tw-border-t-2 tw-border-l-2 tw-border-b-[6px] tw-border-r-[6px] tw-border-solid tw-border-[#FC5000]"
              alt="Wir hatten eine Vision"
              loading="lazy"
              width={533}
              height={600}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="tw-grid sm:tw-grid-cols-2 tw-gap-16 lg:tw-gap-20 xl:tw-gap-36 2xl:tw-gap-48 tw-items-center">
          {/* Left image */}
          <div className="tw-relative tw-order-2 sm:tw-order-1">
            <div className="tw-absolute -tw-top-4 sm:-tw-top-10  md:-tw-top-20 lg:-tw-top-32 lg:tw-left-20 max-lg:tw-right-0 max-xs:tw-rotate-45  -tw-z-10">
              <StarFishShape
                fill="#F7B6C0"
                className="tw-w-24 tw-h-28 sm:tw-w-40 sm:tw-h-52 md:tw-w-60 md:tw-h-72  xl:tw-w-[270px] xl:tw-h-[331px]"
              />
            </div>{' '}
            <Image
              src="/assets/img/recipes.png"
              className=" lg:tw-rounded-t-[155px] tw-rounded-t-[100px] tw-object-cover tw-aspect-[5/6] tw-w-full tw-h-auto tw-border-t-2 tw-border-l-2 tw-border-b-[6px] tw-border-r-[6px] tw-border-solid tw-border-[#FC5000]"
              loading="lazy"
              width={533}
              height={600}
              alt="Wir haben vielfältige"
            />
          </div>

          {/* Right text block */}
          <div className="tw-order-1 sm:tw-order-2">
            <h2
              className="tw-text-2xl lg:tw-text-3xl xl:tw-text-[40px] tw-font-bold tw-mb-4"
              data-aos="fade-up"
            >
              Wir haben vielfältige <br />
              Smoothie Rezepte entwickelt
            </h2>
            <p className="tw-text-gray-600 tw-mb-6 lg:tw-text-lg" data-aos="fade-up">
              Mit über 78 Milliarden möglichen Variationen bietet dir unser Online Smoothie Mixer
              zusätzliche Freiheit für eine ganz persönliche Gestaltung deines Smoothies
            </p>
            <Link
              href="/gesunde-smoothies-rezepte-selber-machen"
              className="btn-theme"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              Mehr anzeigen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
