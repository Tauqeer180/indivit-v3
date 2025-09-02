import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarFishShape } from '@/assets/svgIcons'

export default function VisionRecipeSection() {
  return (
    <div>
      <section className=" tw-py-24 md:tw-py-16 lg:tw-py-24 xl:tw-py-32 container tw-space-y-24 ">
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-24 md:tw-gap-16 lg:tw-gap-20 xl:tw-gap-36 2xl:tw-gap-48 tw-items-center">
          {/* Left text block */}
          <div>
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
            <div className="tw-absolute -tw-top-20  tw-left-20  -tw-z-10 tw-w-12 tw-h-12 tw-opacity-70">
              <StarFishShape />
            </div>

            <Image
              src="/assets/img/vision.png"
              className=" md:tw-rounded-t-[155px] tw-rounded-t-[100px] tw-object-cover tw-aspect-[5/6] tw-w-full tw-h-auto tw-border-t-2 tw-border-l-2 tw-border-b-[6px] tw-border-r-[6px] tw-border-solid tw-border-[#FC5000]"
              alt="Wir hatten eine Vision"
              loading="lazy"
              width={533}
              height={600}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-16 lg:tw-gap-20 xl:tw-gap-36 2xl:tw-gap-48 tw-items-center">
          {/* Left image */}
          <div className="tw-relative">
            <div className="tw-absolute md:-tw-top-32 -tw-top-20  tw-left-20  -tw-z-10 tw-w-12 tw-h-12 tw-opacity-70">
              <StarFishShape fill="#F7B6C0" />
            </div>{' '}
            <Image
              src="/assets/img/recipes.png"
              className=" md:tw-rounded-t-[155px] tw-rounded-t-[100px] tw-object-cover tw-aspect-[5/6] tw-w-full tw-h-auto tw-border-t-2 tw-border-l-2 tw-border-b-[6px] tw-border-r-[6px] tw-border-solid tw-border-[#FC5000]"
              loading="lazy"
              width={533}
              height={600}
              alt="Wir haben vielfältige"
            />
          </div>

          {/* Right text block */}
          <div>
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
