// 'use client'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
// import { useTableOfContent } from '@/hooks/useTableofContent'
import React from 'react'

export default function BlogContent({ data }: any) {
  // const { body } = useTableOfContent(data)

  return (
    <div>
      {/* <p dangerouslySetInnerHTML={{ __html: body }}></p> */}
      <MarkdownDisplay>{data}</MarkdownDisplay>
    </div>
  )
}
