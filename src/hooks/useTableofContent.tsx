'use client'

import { useMemo } from 'react'

export const useTableOfContent = (html) => {
  return useMemo(() => {
    if (!html) return []

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    function parseSections(sectionElements) {
      const TOC = []

      sectionElements.forEach((section) => {
        const id = section.id
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6')
        if (!id || !heading) return

        const level = parseInt(heading.tagName.slice(1))
        const text = heading.textContent.trim()

        // Get only direct children sections for nesting
        const directChildSections = Array.from(section.children).filter(
          (el) => (el as HTMLElement)?.tagName?.toLowerCase() === 'section'
        )

        TOC.push({
          id,
          text,
          level,
          children: parseSections(directChildSections),
        })
      })
      return { TOC }
    }

    const rootSections = Array.from(doc.body.children).filter(
      (el) => el.tagName?.toLowerCase() === 'section'
    )

    return parseSections(rootSections)
  }, [html])
}
