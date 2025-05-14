import React from 'react'
export default function Loader() {
  return (
    <div className="position-absolute start-0 top-0">
      <div className="w-100 h-100 loader">
        <img
          height="100px"
          width="100px"
          alt="Loading..."
          title="Loading..."
          className="img-fluid rotate"
          src={'/assets/icon/logo1.png'}
        />
      </div>
    </div>
  )
}
