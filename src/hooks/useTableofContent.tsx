import { useMemo } from 'react'

export const useTableOfContent = (html) => {
  return useMemo(() => {
    if (!html) return { body: '', TOC: [] }

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    let tocItems = []
    const stack = [];
    const headers = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')
    // console.log('headers ', headers)
    headers.forEach((header, index) => {
      const level = parseInt(header.tagName.substring(1))
      const headerText = header?.innerText.trim()
      // let idText = `section-${index}`

      // counter[idText] = (counter[idText] || 0) + 1
      const slug = headerText
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
      // counter[idText] > 1 ? `${idText}-${counter[idText]}` : idText;
      const item = { id: slug, text: headerText, level, children: [] }
      while (stack.length && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        tocItems.push(item);
        stack.push(item);
      } else {
        stack[stack.length - 1].children.push(item);
        stack.push(item);
      }
      header.id = slug // Set unique ID
      // tocItems.push({ id: slug, text: headerText })
    })

    return {
      body: doc.body.innerHTML,
      TOC: tocItems,
    }
  }, [html])
}
