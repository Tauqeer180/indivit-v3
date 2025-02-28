import { useEffect, useState } from "react";

export default function useReadingTime() {
  const checkReadingTime = (text) => {
    const wordCount = text.trim().split(/\s+/).length;

    // Assume an average reading speed of 200 words per minute (WPM)
    const readingSpeed = 200; // WPM

    // Calculate the approximate reading time
    const readingTimeMinutes = Math.ceil(wordCount / readingSpeed);

    // console.log(`Approximate reading time: ${readingTimeMinutes} minutes`);
    return `${readingTimeMinutes} min  Lesezeit`;
  };
  return {
    checkReadingTime,
  };
}
