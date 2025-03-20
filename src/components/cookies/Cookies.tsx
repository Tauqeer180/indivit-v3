"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CookiesSettingModal from "./CookiesSettingModal";
import CookiesModal from "./CookiesModal";
import Cookies from "js-cookie";
import { fetcher } from "@/lib/fetcher";

export default function CookiesComponent() {
  const [cookieModal, setCookieModal] = useState(false);
  const [cookieSettingsModal, setCookieSettingsModal] = useState(false);
  const {
    isLoading: cookiesLoading,
    error: cookiesError,
    data: cookiesData,
  } = useQuery({
    queryKey: ["cookies"],
    queryFn: () => fetcher("cookies", { cache: true }),
  });
  let data = cookiesData?.data?.data;
  // console.log("Cookies ", data);
  // console.log("Cookies Inputs  ", data && JSON?.parse(data?.inputs));


  const handleSettingsModal = (value) => {
    setCookieModal(false);
    setCookieSettingsModal(value);
  };
  const openCookieModal = () => {
    setCookieModal(true);
    setCookieSettingsModal(false);
  };

  useEffect(() => {
    let cookiesState = Cookies.get("cookies_accepted");
    // console.log("cookiesState ", cookiesState);
    {
      if (data) {
        !cookiesState && setCookieModal(true);
      }
    }
  }, [data]);

  const handleAccept = (value) => {
    Cookies.set("cookies_accepted", value);
    setCookieModal(false);
    setCookieSettingsModal(false);
  };

  return (
    <>
      {cookieSettingsModal && (
        <CookiesSettingModal
          openCookieModal={openCookieModal}
          data={data}
          handleAccept={handleAccept}
        />
      )}

      {cookieModal && (
        <CookiesModal
          openSettingsModal={handleSettingsModal}
          handleAccept={handleAccept}
          data={data}
        />
      )}
    </>
  );
}
