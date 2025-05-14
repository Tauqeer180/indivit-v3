import Image from 'next/image'
import React from 'react'
// Thank You Page
export default function Page() {
  return (
    <div>
      <div className="">
        <div className="container pt-5 text-center">
          <Image
            src="/assets/img/thanku.png"
            alt="Thank You"
            height={500}
            width={500}
            className="img-fluid mt-5"
          />
        </div>
      </div>
    </div>
  )
}
