'use client'
import React, { useState } from "react";
import {
  shareOnFacebook,
  shareOnLinkedIn,
  shareOnTwitter,
  shareOnWhatsApp,
} from "./utils";
import { ShareIcon } from "@/assets/svgIcons";

export default function ShareButtons() {
  return (
    <div>
      <div className="pt-3 flx-social-style">
        {/* <!-- Twitter --> */}
        <button
          className="btn border-0 p-0 shadow-none "
          onClick={() => shareOnTwitter(window.location.href)}
        >
          <i className="fab fa-twitter"></i>
        </button>

        {/* <!-- Instagram --> */}
        <button
          className="btn border-0 p-0 shadow-none "
          onClick={() => shareOnFacebook(window.location.href)}
        >
          <i className="fab fa-facebook"></i>
        </button>
        {/* <!-- Linkedin --> */}
        <button
          className="btn border-0 p-0 shadow-none "
          onClick={() => shareOnLinkedIn(window.location.href)}
        >
          <i className="fab fa-linkedin-in"></i>
        </button>
        <button
          className="btn border-0 p-0 shadow-none "
          onClick={() => shareOnWhatsApp(window.location.href)}
        >
          <i className="fab fa-whatsapp"></i>
        </button>
        <button
          className="btn border border-1 border-dark rounded-circle p-2-4 shadow-none cursor-copy ms-2"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          <i className="fa fa-link"></i>
        </button>
      </div>
    </div>
  );
}

// src/components/FAB.jsx

export const FABComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tw-fixed tw-bottom-14 tw-right-14 tw-flex tw-flex-col tw-items-end tw-z-50">
      {isOpen && (
        <ul className=" tw-space-y-4 tw-list-none tw-ps-0 tw-mx-auto">
          <li
            className="btn-floating tw-bg-black tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-cursor-pointer"
            onClick={() => shareOnTwitter(window.location.href)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </li>
          <li
            className="btn-floating tw-bg-[#0077b5] tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-cursor-pointer"
            onClick={() => shareOnLinkedIn(window.location.href)}
          >
            <i className="fab fa-linkedin-in"></i>
          </li>{" "}
          <li
            className="btn-floating tw-bg-[#25d366] tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-cursor-pointer"
            onClick={() => shareOnWhatsApp(window.location.href)}
          >
            <i className="fab fa-whatsapp"></i>
          </li>
          <li
            className="btn-floating tw-bg-[#4267b2] tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-cursor-pointer"
            onClick={() => shareOnFacebook(window.location.href)}
          >
            <i className="fab fa-facebook"></i>
          </li>
          <li
            className="btn-floating tw-border-0 tw-bg-purple-500 tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-cursor-pointer"
            onClick={() =>
              navigator?.clipboard?.writeText(window.location.href)
            }
          >
            <i className="fa fa-link"></i>
          </li>
        </ul>
      )}

      <button
        onClick={toggleFAB}
        className={`btn-large tw-border-0 tw-bg-[#f9d311] tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-shadow-lg tw-transform tw-transition-transform tw-duration-300 ${
          isOpen ? "--tw-rotate-45" : "tw-rotate-0"
        }`}
      >
        <span
          className={`${
            isOpen ? "tw-opacity-0" : "tw-opacity-100"
          } tw-transition-opacity tw-duration-300 tw-w-8 tw-h-8`}
        >
          <ShareIcon />
        </span>
        <span
          className={`tw-absolute tw-block tw-w-6 tw-h-0.5 tw-bg-white tw-transform tw-transition-transform tw-duration-300 ${
            isOpen ? "tw-rotate-45" : "tw-rotate-0"
          } ${isOpen ? "tw-opacity-100" : "tw-opacity-0"}`}
        ></span>
        <span
          className={`tw-absolute tw-block tw-w-6 tw-h-0.5 tw-bg-white tw-transform tw-transition-transform tw-duration-300 ${
            isOpen ? "-tw-rotate-45" : "tw-rotate-0"
          } ${isOpen ? "tw-opacity-100" : "tw-opacity-0"}`}
        ></span>
      </button>
    </div>
  );
};
