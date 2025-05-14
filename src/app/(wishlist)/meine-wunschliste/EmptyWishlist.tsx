import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function EmptyWishlist({
  title,
  label1,
  label2,
  link1,
  link2,
}: {
  title: string
  label1?: string
  label2?: string
  link1?: string
  link2?: string
}) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
      <div className="py-5">
        <Image
          src="/assets/img/fruits.png"
          alt="fruits and vegetables"
          width={200}
          height={200}
          className="img-fluid pb-3"
        />
        <p className="pb-3">{title}</p>
        {link1 && (
          <Link href={link1} className="btn btn-primary btn-solid-success">
            {label1}
          </Link>
        )}
        &nbsp;&nbsp;&nbsp;
        {link2 && (
          <Link href={link2} className="btn btn-primary btn-outline-success">
            {label2}
          </Link>
        )}
      </div>
    </div>
  )
}
