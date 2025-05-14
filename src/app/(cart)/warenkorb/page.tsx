'use client'
import { fetcher } from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import CartCard from './CartCard'
import CartSidebar from './CartSidebar'
import Head from 'next/head'
// Cart Page
export default function Page() {
  const { isEmpty, items: cartItems, clearCartMetadata } = useCart()

  const {
    // isLoading: subscriptionLoading,
    // error: subscriptionError,
    data: subscriptionRes,
  } = useQuery({
    queryKey: ['subscriptionPlan'],
    queryFn: () => fetcher('subscription/period'),
  })
  const subscriptionData = subscriptionRes?.data?.data
  //console.log("Subscription Data ", subscriptionData);
  const myMixes = cartItems?.filter((d) => d?.smoothie_box_descriptions[0]?.created_by == 1)
  const adminMixes = cartItems?.filter((d) => d?.smoothie_box_descriptions[0]?.created_by == 0)

  useEffect(() => {
    if (isEmpty) clearCartMetadata()
  }, [isEmpty])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="bg-white">
        <section id="flx-shoppingcart-section">
          <div className="container pt-5">
            <div className="flx-hero-shopping text-center">
              <h1 className="text-center pb-2">Warenkorb</h1>
              <p>
                Belebe Deinen Tag mit unseren köstlichen Smoothies! Fülle Deinen Einkaufswagen und
                mach Dich bereit, die Qualität echter, frischer Zutaten zu genießen.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- hero banner end--> */}
        {/* <!-- about section --> */}
        {isEmpty ? (
          <section id="flx-shopping">
            <div className="container pt-5">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                  <Image
                    src="/assets/img/fruits.png"
                    alt="fruits"
                    height={200}
                    width={200}
                    className="img-fluid pb-3"
                  />
                  <p className="pb-3">Du hast im Moment keine Smoothies in Deinem Einkaufswagen.</p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Main Content Start*/

          <section id="flx-shopping">
            <div className="container pt-5">
              <div className="row">
                {/* <!-- Our favorite boxes --> */}
                <div className="col-12 col-lg-8 ">
                  {adminMixes?.length > 0 && (
                    <h3 className="pb-3">Auswahl aus unseren Lieblingsboxen</h3>
                  )}
                  {adminMixes?.map((item, index) => {
                    return (
                      <div key={index} className="mb-5">
                        <CartCard box={item} subscriptionPlan={subscriptionData} />
                      </div>
                    )
                  })}

                  {/* <!-- your favorite boxes --> */}

                  {myMixes?.length > 0 && <h3 className="pb-3 mt-5">Deine selbst erstellte Box</h3>}
                  {myMixes?.map((item, index) => {
                    return (
                      <div className="mb-5" key={item?.id}>
                        <CartCard box={item} subscriptionPlan={subscriptionData} />
                      </div>
                    )
                  })}
                  {/* <!-- name of the box --> */}
                </div>
                <div className="col-12 col-lg-4">
                  <CartSidebar data={cartItems} />
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Main Content End*/}
      </div>
    </>
  )
}
