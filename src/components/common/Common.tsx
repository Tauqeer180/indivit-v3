'use client'
import Link from 'next/link'
import React from 'react'

export function TextSkelton() {
  return (
    <span class=" placeholder-glow d-inline-flex py-1 ">
      <span class="placeholder w-200px"></span>
    </span>
  )
}
export function ScrollIntoview(divId, duration = 1000) {
  const element = document.getElementById(divId)
  if (!element) {
    console.warn(`Element with ID ${divId} not found.`)
    return
  }
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
export function ScrollToDiv(divId, offset = 50, duration = 1000) {
  const element = document.getElementById(divId)
  console.log('Div ID:', divId)

  if (!element) {
    console.warn(`Element with ID ${divId} not found.`)
    return
  }
  // Get the top position of the element relative to the document
  const elementTop = element.getBoundingClientRect().top + window.scrollY

  // Calculate the scroll position with the offset
  const scrollToPosition = elementTop - offset
  // Smooth scroll to the position
  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth',
  })
}

export function ShowMoreBtn({ show, setShow, list }) {
  return (
    <>
      {list?.length > 3 && (
        <div className="tw-text-center tw-block md:tw-hidden tw-pb-4">
          <button
            onClick={() => setShow((prev) => !prev)}
            className="tw-bg-theme tw-font-bold tw-rounded-3xl tw-border-0 tw-text-white tw-p-x-2 tw-py-1 tw-text-xs"
          >
            {
              show
                ? 'Weniger Anzeigen' // See Less
                : list?.length > 3 && list?.length - 3 + ' Weitere Zutaten' // More Ingredients
            }
          </button>
        </div>
      )}
    </>
  )
}

export const BreadCrumb = ({ name }) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="tw-bg-[#EEF9EB] tw-rounded-full tw-border tw-border-b-3 tw-border-r-3 tw-border-[#4B5563] tw-border-solid tw-max-w-fit tw-px-5 tw-py-2.5"
    >
      <ol className=" tw-justify-center tw-text-sm !tw-m-0 tw-font-semibold tw-flex tw-list-none tw-px-0 tw-gap-[6px]">
        <li className="">
          <Link href="/" className="tw-no-underline tw-text-dark">
            Home
          </Link>
        </li>
        <li className="tw-font-bold">{' >'}</li>
        <li className="tw-text-theme" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  )
}
