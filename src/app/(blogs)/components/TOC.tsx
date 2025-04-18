'use client'
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
      {items.map(({ id, text, children }) => (
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
  return <div>{renderTOC(TOC)}</div>
}
