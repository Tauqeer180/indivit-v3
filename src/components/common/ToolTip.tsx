'use client'
import React, { useState } from 'react'

export default function ToolTip({ children, label, title }) {
  const [showToolTip, setShowToolTip] = useState(false)

  return (
    <div
      className="position-relative"
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      {showToolTip && (
        <div className="popover bs-popover-auto fade shadow show w-200px start-100">
          <div
            className="popover-arrow"
            style={{
              position: 'absolute',
              top: '0px',
              transform: 'translate(0px, 47px)',
            }}
          ></div>
          {title && <h6 className="popover-header text-capitalize"> {title} </h6>}
          <div className="p-2">{label}</div>
        </div>
      )}
      {children}
    </div>
  )
}
