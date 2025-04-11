import React from 'react'
import OrderDetail from './OrderDetail'

export default function page({ params }) {
  const { id } = params
  return (
    <div>
      {/* {id} */}
      <OrderDetail id={id} />
    </div>
  )
}
