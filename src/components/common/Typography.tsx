import { cn } from '@/lib/utils'
import React from 'react'

export function H1({ className, children }: any) {
  return (
    <h1
      className={cn(
        'tw-text-[calc(2rem+1.3vw)] tw-font-black tw-mb-0 sm:tw-leading-[60px]',
        className
      )}
    >
      {children}
    </h1>
  )
}
