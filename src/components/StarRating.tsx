'use client'
import { RatingStarIcon } from '@/assets/svgIcons'
import React from 'react'

export default function StarRating({
  value,
  onChange,
  color,
}: {
  value: number
  onChange?: (value: number) => void
  color?: string
}) {
  const handleStarClick = (index) => {
    onChange(index + 1)
  }

  // const Star = ({ isFilled, onClick }) => (
  //   <span
  //     onClick={onClick}
  //     className={`fs-1 tw-text-[#ffc107] ${!onChange && 'pe-none'} ${color}`}
  //     style={{ cursor: 'pointer' }}
  //     // disabled={true}
  //     // as="button"
  //     aria-disabled={true}
  //   >
  //     <RatingStarIcon />
  //     {/* {isFilled ? '' : '☆'} */}
  //   </span>
  // )

  return (
    <div className="tw-flex tw-gap-2 " >
      {[...Array(5)].map((_, index) => (
        // <Star key={index} isFilled={index < value} onClick={() => handleStarClick(index)} />
       <span className={index< value ? 'tw-text-[#ffc107]':'tw-text-transparent'} key={index}>

        <RatingStarIcon
          key={index}
         
          className={`  ${!onChange && ' tw-pointer-events-none'} ${color}`}
          style={{ cursor: 'pointer' }}
          onClick={() => handleStarClick(index)}
        />
       </span>
      ))}
    </div>
  )
}
