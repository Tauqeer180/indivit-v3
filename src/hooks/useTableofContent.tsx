// import { useMemo } from 'react'

// export const useTableOfContent = (html) => {
//   return useMemo(() => {
//     if (!html) return { body: '', TOC: [] }

//     const parser = new DOMParser()
//     const doc = parser.parseFromString(html, 'text/html')

//     let tocItems = []
//     const stack = [];
//     const headers = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
//     // console.log('headers ', headers)
//     headers.forEach((header, index) => {
//       const level = parseInt(header.tagName.substring(1))
//       const headerText = header?.innerText.trim()
//       // let idText = `section-${index}`

//       // counter[idText] = (counter[idText] || 0) + 1
//       const slug = headerText
//         .toLowerCase()
//         .trim()
//         .replace(/[^\w\s-]/g, '')
//         .replace(/\s+/g, '-')
//         .replace(/-+/g, '-')
//       // counter[idText] > 1 ? `${idText}-${counter[idText]}` : idText;
//       const item = { id: slug, text: headerText, level, children: [] }
//       while (stack.length && stack[stack.length - 1].level >= level) {
//         stack.pop();
//       }

//       if (stack.length === 0) {
//         tocItems.push(item);
//         stack.push(item);
//       } else {
//         stack[stack.length - 1].children.push(item);
//         stack.push(item);
//       }
//       header.id = slug // Set unique ID
//       // tocItems.push({ id: slug, text: headerText })
//     })

//     return {
//       body: doc.body.innerHTML,
//       TOC: tocItems,
//     }
//   }, [html])
// }

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
