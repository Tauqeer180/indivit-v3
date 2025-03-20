import React, { useEffect, useState } from "react";

export default function RadialProgressBar({
  totalTime = 0,
  remainingTime = 0,
  label,
}) {
  const [circleDasharray, setCircleDasharray] = useState();

  useEffect(() => {
    // setRemainingPathColor(remainingTime);
    handleCircleDasharray();
  }, [remainingTime]);

  // const setRemainingPathColor = (timeLeft) => {
  //   if (timeLeft <= COLOR_CODES.alert.threshold) {
  //     setPathColor(COLOR_CODES.alert.color);
  //   } else if (timeLeft <= COLOR_CODES.warning.threshold) {
  //     setPathColor(COLOR_CODES.warning.color);
  //   } else {
  //     setPathColor(COLOR_CODES.info.color);
  //   }
  // };

  const handleCircleDasharray = () => {
    const circleDasharray = `${(remainingTime / totalTime) * 283} 283`;
    setCircleDasharray(circleDasharray);
    // console.log("Calculate Time Function ", calculateTimeFraction());
    // console.log("Full Dash Array ", FULL_DASH_ARRAY);
    // document
    //   .getElementById("base-timer-path-remaining")
    //   .setAttribute("stroke-dasharray", circleDasharray);
  };

  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle
            className="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="45"
          ></circle>
          <path
            id="base-timer-path-remaining"
            strokeDasharray={circleDasharray}
            className={`base-timer__path-remaining yellow text-theme-success`}
            // className={`base-timer__path-remaining ${pathColor}`}
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span className="base-timer__label">
        <div className="fs-18 lh-1 fw-500">{remainingTime}</div>
        <div className="lh-sm text-uppercase text-truncate"> {label} </div>
      </span>
    </div>
  );
}
