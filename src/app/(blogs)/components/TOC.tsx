'use client'
import { CollapseIcon } from '@/assets/svgIcons'
import { useTableOfContent } from '@/hooks/useTableofContent'
import React from 'react'

type TOCItem = {
  id: string
  text: string
  level: number
  children: TOCItem[]
}
export default function TOC({ data }: any) {
  const { TOC } = useTableOfContent(data)
  // console.log('TOC', TOC)
  const renderTOC = (items: TOCItem[]) => (
    <ul className="tw-list-none tw-space-y-1">
      {items?.map(({ id, text, children }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="tw-text-gray-700 hover:tw-text-theme tw-no-underline hover:tw-underline"
          >
            <strong>
              {`>`}&nbsp;{text}
            </strong>
          </a>
          {children.length > 0 && renderTOC(children)}
        </li>
      ))}
    </ul>
  )
  console.log('TOC from component', TOC)
  if (!TOC || TOC.length === 0) return null
  return (
    <>
      {TOC?.length === 0 ? null : (
        <div className="tw-max-w-3xl tw-mx-auto ">
          <h2 className="tw-text-3xl tw-flex tw-items-center tw-justify-between">
            Inhaltsverzeichnis{' '}
            <button
              className=" tw-border-0  !tw-shadow-none tw-rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#TocCollapse"
              aria-expanded="false"
              aria-controls="TocCollapse"
            >
              <CollapseIcon className="tw-w-8 tw-h-8" />
            </button>
          </h2>
          <div className="collapse" id="TocCollapse">
            {renderTOC(TOC)}
          </div>
        </div>
      )}
    </>
  )
}
