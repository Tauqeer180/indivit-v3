import { useMemo } from "react";

export const useTableOfContent = (html) => {
  return useMemo(() => {
    if (!html) return { body: "", TOC: [] };

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    let tocItems = [];
    let counter = {};
    const headers = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
    console.log("headers ", headers);
    headers.forEach((header, index) => {
      const headerText = header?.innerText.trim();
      let idText = `section-${index}`;

      counter[idText] = (counter[idText] || 0) + 1;
      const uniqueId =
        counter[idText] > 1 ? `${idText}-${counter[idText]}` : idText;

      header.id = uniqueId; // Set unique ID
      tocItems.push({ id: uniqueId, text: headerText });
    });

    return {
      body: doc.body.innerHTML,
      TOC: tocItems, // Return as structured data instead of raw HTML
    };
  }, [html]); // Memoize to prevent recalculating unless HTML changes
};
