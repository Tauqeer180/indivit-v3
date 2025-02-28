"use client";
import { useTableOfContent } from "@/hooks/useTableofContent";
import React from "react";

export default function BlogContent({ data }: any) {
  const { body, TOC } = useTableOfContent(data);

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: body }}></p>
    </div>
  );
}
