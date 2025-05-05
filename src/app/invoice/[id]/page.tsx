'use client'
import OrderCard from '@/app/(orders)/meine-bestellung/[id]/OrderCard'
import HeroBanner from '@/components/common/HeroBanner'
import Loader from '@/components/common/Loader'
import { fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const params = useParams()
  const user = useAppSelector((state) => state.account.user)
  const [loading, setLoading] = useState(false)

  const { isLoading: orderLoading, data: orderData } = useQuery({
    queryKey: ['orderById', params?.id],
    queryFn: () => fetcher(`bestellung/${params?.id}`),
  })
  const orders = orderData?.data?.data
  // let page = searchParams.get("page");

  return (
    <div>
      {orderLoading && loading && <Loader />}

      <HeroBanner
        data={{
          title: 'Welcome',
          title2: user?.name,
          description:
            ' Unsere FAQs machen es Dir leicht, sich in der Welt der Smoothies zurechtzufinden - finde schnelle und hilfreiche Antworten auf alle Deine Fragen an einem Ort',
        }}
        bgImg=" !tw-bg-faq"
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
                    Order Details
                  </h4>
                  <p>
                    Get ready to refresh your taste buds with our delicious smoothies! Here are the
                    details of your order.
                  </p>
                </div>
                {orders?.map((data) => {
                  return data?.order_box?.map((d) => {
                    return (
                      <div key={data?.unique_id} className="col-12 col-lg-8 offset-lg-2 mb-3">
                        <OrderCard
                          boxData={d}
                          orderData={{
                            date: data?.shipping_date,
                            time: data?.shipping_time,
                            order_id: data?.order_number,
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
                  <p className="pb-3">You don't have any orders.</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
