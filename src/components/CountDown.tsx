"use client";
import React, { useState, useEffect } from "react";
import RadialProgressBar from "./common/RadialProgressBar";
import { useQuery } from "@tanstack/react-query";
// import { getProdCycle } from "../services/ProductionCycle";
import { ProdCycleIcon } from "@/assets/svgIcons";
import { fetcher } from "@/lib/fetcher";

export default function CountDown() {
  const [timerData, setTimerData] = useState({});

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const endDate = new Date(targetDate);
    const timeDiff = endDate - now; // Difference in milliseconds

    if (timeDiff <= 0) {
      setTimerData({
        days: 0,
        hours: 0,
        minutes: 0,
      });
      return {
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff / 1000) % 60);
    setTimerData({
      days: days < 10 ? `0` + days : days,
      hours: hours < 10 ? `0` + hours : hours,
      minutes: minutes < 10 ? `0` + minutes : minutes,
      seconds: seconds < 10 ? `0` + seconds : seconds,
    });
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["productionCycle"],
    queryFn: () => fetcher("production"),
  });
  let productionTime = data;
  useEffect(() => {
    if (productionTime?.status == 0) {
      setInterval(() => {
        const targetDate = productionTime?.date; // YYYY-MM-DDTHH:MM:SS format
        getTimeRemaining(targetDate);
      }, 1000);
    }
  }, [productionTime]);

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {productionTime?.status == 0 && (
        <>
          <div className="nav-item d-flex align-items-center prod-cycle">
            <a
              className="nav-link dropdown-toggle py-0 d-flex align-items-baseline"
              type="button"
              id="defaultDropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              <span className="d-none d-lg-block">Nächste Produktion</span>
              <span className="d-block d-lg-none">
                <ProdCycleIcon />
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end border-0 shadow position-absolute p-3"
              aria-labelledby="defaultDropdown"
            >
              <div>
                <span
                  className="text-muted fs-14"
                  style={{ maxWidth: "100px" }}
                >
                  Wir beginnen die nächste Produktion von frischen Smoothies in:
                </span>
                <ul className=" d-flex flex-row navbar-nav justify-content-center py-1">
                  <li className="px-1">
                    <RadialProgressBar
                      totalTime={30}
                      remainingTime={timerData?.days}
                      label="Tage"
                    />
                  </li>
                  <li className="px-1">
                    <RadialProgressBar
                      totalTime={24}
                      remainingTime={timerData?.hours}
                      label="Stunden"
                    />
                  </li>
                  <li className="px-1">
                    <RadialProgressBar
                      totalTime={60}
                      remainingTime={timerData?.minutes}
                      label="Minuten"
                    />
                  </li>
                  <li className="px-1">
                    <RadialProgressBar
                      totalTime={60}
                      remainingTime={timerData?.seconds}
                      label="Sekunden"
                    />
                  </li>
                </ul>

                {/* <CountDown /> */}
              </div>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
