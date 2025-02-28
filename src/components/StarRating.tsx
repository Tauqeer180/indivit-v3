import React, { useState } from "react";

export default function StarRating({ value, onChange, color }) {
  const handleStarClick = (index) => {
    onChange(index + 1);
  };

  const Star = ({ isFilled, onClick }) => (
    <span
      onClick={onClick}
      className={`fs-1 tw-text-[#ffc107] ${!onChange && "pe-none"} ${color}`}
      style={{ cursor: "pointer" }}
      disabled={true}
      aria-disabled={true}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          isFilled={index < value}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
}
