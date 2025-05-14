import { BoxCard } from '@/components/Cards'
import { fetcher } from '@/lib/fetcher'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function NotFound() {
  let res = await fetcher(`smoothie_box_description`, { cache: true, revalidate: 86400 })
  const boxes = res?.data || []

  return (
    <div>
      <main className="tw-flex-grow tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-py-16 tw-relative tw-overflow-hidden tw-mt-16">
        {/* Decorative palm leaf */}
        <div className="tw-absolute tw-left-0 tw-top-0 tw-opacity-20 -tw-z-10">
          <Image
            src="/assets/object/leave.png"
            alt="leaf"
            title="leaf"
            width={200}
            height={300}
            className="tw-h-auto"
          />
        </div>

        {/* 404 Content */}
        <div className="tw-max-w-2xl tw-w-full tw-text-center tw-z-10">
          <h1 className="tw-text-7xl tw-font-bold tw-mb-6 tw-text-gray-800">404</h1>
          <h2 className="tw-text-3xl tw-font-semibold tw-mb-6 tw-text-gray-800">
            Seite nicht gefunden
          </h2>
          <p className="tw-text-xl tw-mb-10 tw-text-gray-600 tw-max-w-lg tw-mx-auto">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>

          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-mt-8">
            <Link
              href="/"
              className="tw-inline-flex tw-items-center tw-decoration-transparent tw-justify-center tw-gap-2 tw-bg-theme hover:tw-bg-lime-600 tw-text-white hover:tw-text-white tw-font-medium tw-py-3 tw-px-8 tw-rounded-md tw-transition-colors"
            >
              Jetzt starten
            </Link>
            <Link
              href="/shop"
              className="tw-inline-flex tw-items-center tw-decoration-transparent tw-justify-center tw-gap-2 tw-border-2 tw-border-theme tw-text-theme hover:tw-text-lime-600 tw-border-solid hover:tw-bg-lime-50 hover:tw-shadow-sm tw-font-medium tw-py-3 tw-px-8 tw-rounded-md tw-transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Decorative kiwi */}
        <div className="tw-absolute tw-right-0 tw-bottom-0 tw-opacity-30 -tw-z-10">
          <Image
            src="/assets/img/fruits.png"
            alt="fruits"
            title="fruits"
            width={150}
            height={150}
            className="tw-h-auto"
          />
        </div>
      </main>

      {/* Product lines section */}
      <section className="tw-py-16 tw-px-4 tw-text-center">
        <h2 className="tw-text-3xl tw-font-bold tw-mb-12 tw-text-gray-800">
          Entdecke unsere Produktlinien
        </h2>
        {/* This would typically contain product cards */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-max-w-6xl tw-mx-auto">
          {boxes?.map((box, index) => {
            return (
              <div key={index} className=" p-3">
                <div className="  hsn-box-bg" data-aos="fade-up" data-aos-duration="1000">
                  <BoxCard data={box} />
                </div>
              </div>
            )
          })}
          {/* <div className="tw-aspect-square tw-rounded-xl tw-bg-gray-100 tw-flex tw-items-center tw-justify-center">
            <span className="tw-text-gray-400">Produkt 1</span>
          </div>
          <div className="tw-aspect-square tw-rounded-xl tw-bg-gray-100 tw-flex tw-items-center tw-justify-center">
            <span className="tw-text-gray-400">Produkt 2</span>
          </div>
          <div className="tw-aspect-square tw-rounded-xl tw-bg-gray-100 tw-flex tw-items-center tw-justify-center">
            <span className="tw-text-gray-400">Produkt 3</span>
          </div> */}
        </div>
      </section>
    </div>
  )
}
