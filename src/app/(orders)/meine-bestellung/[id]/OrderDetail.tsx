'use client'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { fetcher } from '@/lib/fetcher'
import Loader from '@/components/common/Loader'
import HeroBanner from '@/components/common/HeroBanner'
import moment from 'moment'
import { formatToGerman2 } from '@/utils/germanFormat'
import OrderCard from './OrderCard'
import { useAppSelector } from '@/redux/hooks'

export default function OrderDetail({ id }) {
  const user = useAppSelector((state) => state.account.user)
  const [loading, setLoading] = useState(false)
  const token = useAppSelector((state) => state.account.token)
  const {
    isLoading: orderLoading,
    error: orderByIdError,
    data: orderByIdData,
  } = useQuery({
    queryKey: ['orderById', id],
    queryFn: () => fetcher(`bestellung/${id}`, { token }),
  })
  const orders = orderByIdData?.data
  return (
    <div>
      {orderLoading && loading && <Loader />}

      <HeroBanner
        data={{
          title: user?.name,
        }}
        bgImg=" !tw-bg-faq"
      />

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
                  <p>Hier findest du alle Details zu deinen letzten Bestellungen</p>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-4 offset-lg-2 ">
                    <div>
                      <span className="fw-bold">Name: </span>
                      <span> {orders?.name} </span>
                    </div>
                    <div>
                      <span className="fw-bold">
                        {/* apartment:  */}
                        Adresszusatz:
                      </span>
                      <span> {orders?.apartment} </span>
                    </div>
                    <div>
                      <span className="fw-bold">Adresse: </span>
                      <span> {orders?.address} </span>
                    </div>
                    <div>
                      <span className="fw-bold">Ort: </span>
                      <span> {orders?.city} </span>
                    </div>
                  </div>

                  <div className="col-lg-4 offset-lg-2">
                    <div>
                      <span className="fw-bold text-capitalize">
                        Bestellnummer:
                        {/* Order Number */}
                      </span>
                      <span> #{orders?.order_number} </span>
                    </div>
                    <div>
                      <span className="fw-bold text-capitalize">
                        {/* Shipping Date: */}
                        Lieferdatum
                      </span>
                      <span> {moment(orders?.shipping_date).format('DD-MM-YYYY')}</span>
                    </div>
                    {/* <div>
                      <span className="fw-bold text-capitalize">
                        subscription:
                      </span>
                      <span>
                        {" "}
                        {orders?.order_box?.user_subscription[0]?.duration
                          ? orders?.order_box?.user_subscription[0]?.duration + " Days"
                          : " No Subscription"}{" "}
                      </span>
                    </div> */}
                    <div>
                      <span className="fw-bold text-capitalize">
                        {/* total price: */}
                        Gesamtsumme:
                      </span>
                      <span> {formatToGerman2(orders?.total_price)} €</span>
                    </div>
                    <div>
                      <span className="fw-bold text-capitalize">
                        Status:
                        {/* Bestellt */}
                      </span>
                      <span> {orders?.order_status}</span>
                    </div>
                  </div>
                </div>
                {orders?.order_box?.map((data, i) => {
                  return (
                    <div key={data?.unique_id} className="col-12 col-lg-8 offset-lg-2 mb-3">
                      <OrderCard
                        boxData={data}
                        orderData={{
                          date: orders?.shipping_date,
                          time: data?.shipping_time,
                          order_id: orders?.order_number,
                          unique_id: orders?.unique_id,
                          subscriptionName: data?.user_subscription[0]?.subscription?.name,
                        }}
                      />
                    </div>
                  )
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
