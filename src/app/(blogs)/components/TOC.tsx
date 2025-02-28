"use client";
import { useTableOfContent } from "@/hooks/useTableofContent";
import React from "react";

export default function TOC({ data }: any) {
  const { body, TOC } = useTableOfContent(data);

  return (
    <div>
      <ul className="tw-list-none tw-space-y-1">
        {TOC?.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.id}`}
              className="tw-text-gray-700 hover:tw-text-theme tw-no-underline hover:tw-underline   "
            >
              <strong>
                {">"}&nbsp;
                {item.text}
              </strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
