import React from 'react'
import Content from './components/content'
// Checkout Page
export default function page() {
  return (
    <div>
      <div className="pt-140 bg-white">
        {/* <CheckoutHeader /> */}
        <section id="flx-checkout1" className="bg-white  pb-5">
          <div className="container">
            {/* {process.env.NEXT_STRIPE_KEY} */}
            {/*  */}
            <Content />
          </div>
        </section>
      </div>
    </div>
  )
}
