import React from 'react'

interface Props {
  children: string
  className?: string
  enableTailwind?: boolean
}
export const MarkdownDisplay = (props: Props) => {
  return (
    <div className={props.className}>
      {props?.children && (
        <div
          className={props.enableTailwind ? '' : 'no-tailwind'}
          dangerouslySetInnerHTML={{ __html: props.children }}
        />
      )}
    </div>
  )
}
