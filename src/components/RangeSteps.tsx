import React, { useState } from "react";
import useIngTooltip from "@/hooks/useIngTooltip";

export default function RangeSteps({ onChange, value, data }) {
  const { getTooltip } = useIngTooltip();
  const handleChange = (value) => {
    onChange(value);
  };
  return (
    <div className="d-flex">
      {/* ["Much Less", "Less" , "Medium", "More", "Much More"]*/}
      {["wenig", "Less", "Medium", "More", "viel"].map((d, i) => {
        return (
          <div
            key={i}
            className="w-100 text-center "
            style={{ paddingRight: i == 4 ? "0px" : "2px" }}
          >
            <div
              className={` ${i == 0 || i == 4 ? "visible" : "invisible"} ${
                i == 0 ? "text-start" : i == 4 ? "text-end" : ""
              } fs-10 text-muted`}
            >
              {d}
            </div>
            <div
              onMouseOver={value == i ? (e) => getTooltip(data, e) : null}
              id={`customTooltip-${data?.name}-${i}`}
              onClick={() => handleChange(i)}
              className={`border-theme-success position-relative w-100 ${
                i == 0 && " rounded-start"
              }  ${i == 4 && "rounded-end"} ${
                value >= i && "bg-theme-success"
              }`}
              style={{ height: "20px" }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
