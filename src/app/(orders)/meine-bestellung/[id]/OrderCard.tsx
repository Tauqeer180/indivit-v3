import { baseURL } from '@/lib/fetcher'
import { formatToGerman2 } from '@/utils/germanFormat'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function OrderCard({ boxData, orderData }) {
  // console.log("Data From Order Card ", boxData);
  const commonImg = useSelector((state) => state?.settings?.smoothieImg)

  return (
    <div>
      <div className="flx-box-shopping p-4 rounded-3 bg-light">
        <div className="row">
          <div className="col-8 col-md-6">
            <h5 className="lh-sm">
              {boxData?.smoothie_box?.box?.name} x {boxData?.qty}
            </h5>
            <p className="my-2">
              {/* Order Number: */}
              Bestellnummer
              <Link
                className="text-decoration-none text-theme-success"
                href={`/meine-bestellung/${orderData?.unique_id}`}
              >
                {' '}
                &nbsp; #{orderData?.order_id}
              </Link>
            </p>
            <p className="my-2">
              Lieferdatum: {moment(orderData?.date).format('DD-MM-YYYY')}
              {/* Date */}
            </p>
          </div>
          <div className="col-4 col-md-6 text-end">
            <p className="text-theme-success fw-bold">
              {formatToGerman2(boxData?.smoothie_box?.smoothie_box_size?.price)}
              &nbsp;€
            </p>
            <p className="text-secondary text-capitalize">{orderData?.order_status}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 my-2 my-sm-0">
            <div className="flx-csmoothies-style py-3">
              {boxData?.smoothie_box?.smoothie_box_size?.size} Smoothies (
              {boxData?.smoothie_box?.smoothie_box_size?.variant})s
            </div>
          </div>
          <div className="col-12 col-sm-6  my-2 my-sm-0">
            <div className=" flx-csmoothies-style py-3 text-capitalize">
              {!orderData?.subscriptionName
                ? 'Einmaliger Kauf | Kein Abo' //one time | no subscription
                : orderData?.subscriptionName}
            </div>
          </div>
        </div>
        <div className="row pt-4">
          {boxData?.smoothie_box?.smoothie_box.map((smoothie, index) => {
            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
                <div className="row align-items-center">
                  <div className="col-sm-4 col-3">
                    <img
                      src={
                        smoothie?.smoothie?.smoothie_picture?.picture
                          ? baseURL + 'smoothie/' + smoothie?.smoothie?.smoothie_picture?.picture
                          : commonImg
                      }
                      alt=""
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                  <div className=" col-sm-8 col-9">
                    <h5 className="m-0 text-truncate">{smoothie?.smoothie?.name}</h5>
                    <p className="m-0">{smoothie?.qty} x</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
