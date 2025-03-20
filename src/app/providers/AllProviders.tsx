"use client";
import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AOS from "aos";
import { CartProvider } from "react-use-cart";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Provider } from "react-redux";
import store from "@/redux/store";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 Minuts
    },
  },
});

export default function AllProviders({ children }) {
  useEffect(() => {
    if (AOS) {
      AOS.init();
      AOS.refresh();
    }
    let lastScrollY = window.scrollY;
    const threshold = 50;

    window.addEventListener("scroll", () => {
      const header = document.getElementById("header");
      if (!header) return;
      // console.log("*** ", window?.scrollY , lastScrollY)
      const scrollDifference = Math.abs(window.scrollY - lastScrollY);
      if (scrollDifference > threshold) {
        if (window.scrollY > 100 && window.scrollY > lastScrollY) {
          // Scrolling down
          header.classList.add("-tw-translate-y-24");
        } else {
          // Scrolling up
          header.classList.remove("-tw-translate-y-24");
        }

        lastScrollY = window.scrollY;
      }
    });
  }, []);
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            {children}
            <SpeedInsights />
          </CartProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}
