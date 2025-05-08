'use client'
import HeroBanner from '@/components/common/HeroBanner'
import Loader from '@/components/common/Loader'
import { fetcher } from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import OrderCard from './[id]/OrderCard'
import { useAppSelector } from '@/redux/hooks'
import Head from 'next/head'

export default function Page() {
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)
  const user = useAppSelector((state) => state.account.user)
  const [loading, setLoading] = useState(false)
  const token = useAppSelector((state) => state.account.token)
  const {
    isLoading: orderLoading,
    error: orderError,
    data: orderData,
  } = useQuery({
    queryKey: ['orderListing', isAuthenticated],
    queryFn: () => fetcher('bestellungs', { token }),
  })
  const orders = orderData?.data
  // let page = searchParams.get("page");

  return (
    <div>
      <Head>
        <title>Meine Bestellung | Indivit</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      {orderLoading && loading && <Loader />}
      <HeroBanner
        data={{
          title: 'Wilkommen',
          title2: user?.name,
        }}
        bgImg="!tw-bg-faq"
      />

      {/* <div className="container mb-5">
        <h3
          className=" pt-md-5 mt-md-5 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Manage Subscriptions
        </h3>
        <div className="">
          <form className="pb-5 mb-5">
            <select
              className="form-select flx-selectbox-style bg-transparent mx-auto"
              aria-label="Default select example"
            >
              <option value="volvo">Delivery interval</option>
              <option value="saab">One time - no subscription</option>
              <option value="opel">One time - no subscription</option>
            </select>
          </form>
        </div>
      </div> */}
      <div className="flx-customcol-bg mt-5">
        <div className="container py-4 ">
          {
            /* if orders */
            orders ? (
              <>
                <div className="text-center mb-5">
                  <h4 className="pt-3 " data-aos="fade-up" data-aos-duration="1000">
                    Deine Bestellungen
                    {/* Order Details */}
                  </h4>
                  <p>
                    Hier findest du alle Details zu deinen letzten Bestellungen
                    {/* Get ready to refresh your taste buds with our delicious
                    smoothies! Here are the details of your order. */}
                  </p>
                </div>
                {orders?.map((data, index) => {
                  return data?.order_box?.map((d, i) => {
                    return (
                      <div key={data?.unique_id} className="col-12 col-lg-8 offset-lg-2 mb-3">
                        <OrderCard
                          boxData={d}
                          orderData={{
                            date: data?.shipping_date,
                            time: data?.shipping_time,
                            order_id: data?.order_number,
                            unique_id: data?.unique_id,
                            subscriptionName: d?.user_subscription[0]?.subscription?.name,
                            order_status: data?.order_status,
                          }}
                        />
                      </div>
                    )
                  })
                })}
              </>
            ) : (
              /* on condition, if no orders */
              <div className=" text-center">
                <div className="py-5">
                  <img
                    src="/assets/img/fruits.png"
                    alt=""
                    width="200px"
                    className="img-fluid pb-3"
                  />
                  <h4 className=" " data-aos="fade-up" data-aos-duration="1000">
                    Order History
                  </h4>
                  <p className="pb-3">You don't have any recipes in your wishlist yet.</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
