'use client'
import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    function handleResize() {
      const size = window.innerWidth;
      setWidth(size);
    }

    // Initial call to set the device type on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to only run this effect on mount and unmount

  return { width };
}
