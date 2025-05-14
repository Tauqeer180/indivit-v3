'use client'
import HeroBanner from '@/components/common/HeroBanner'
import Loader from '@/components/common/Loader'
import { baseURL, fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { formatToGerman2 } from '@/utils/germanFormat'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import moment from 'moment'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
// Subscriptions Page

export default function Page() {
  // console.log("Available Dates ", availableDates);

  const commonImg = useAppSelector((state) => state.settings?.boxImg)

  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [ids, setIds] = useState({ id: null, stripe_id: null })
  const {
    isLoading: subscriptionLoading,
    error: subscriptionError,
    data,
  } = useQuery({
    queryKey: ['subscriptionListing'],
    queryFn: () => fetcher('getSubscriptionByUser'),
  })
  const subscriptionData = data?.data?.data

  const {
    isLoading: availDatesLoading,
    error: availDatesError,
    data: availDates,
  } = useQuery({
    queryKey: ['availShipDates'],
    queryFn: () => fetcher('shipping_date'),
  })
  const availableDates = availDates?.data?.data

  const mutation = useMutation({
    mutationFn: (data) => fetcher('cancelSubscriptionByUser', { method: 'POST', data: data }),
    onSuccess: (res) => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['subscriptionListing'])
      toast.success(res.data.message)
      setLoading(false)
      setModalVisible(false)
    },
    onError: (err: any) => {
      toast.error(
        err.response.status == 401 ? 'Please Login to Proceed' : err.response.data.message
      )
    },
  })
  const handleCancelSubscription = (id, stripe_id) => {
    setLoading(true)
    mutation.mutate({
      subscription_id: id,
      stripe_subscription_id: stripe_id,
    })
  }

  const handleModal = (isVis, id, stripe_id) => {
    debugger
    setModalVisible(isVis)
    setIds({ id: id, stripe_id: stripe_id })
  }
  return (
    <div>
      {/* <!-- hero banner start--> */}
      {subscriptionLoading && <Loader />}

      {/* <!-- hero banner start--> */}
      <HeroBanner
        data={{
          title: 'Mein Abo',
          description:
            'Du kannst dein Abo jederzeit kündigen. Bestellungen, die bereits bezahlt sind werden natürlich noch ausgeliefert.',
        }}
        bgImg=" !tw-bg-mixer"
      />

      <section className="my-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <button
                type="button"
                className={`btn shadow-none me-3   ${
                  selectedTab == 0 ? 'bg-theme-success text-white' : ' btn-outline-secondary '
                } `}
                onClick={() => setSelectedTab(0)}
              >
                {/* Active */}
                Aktiv
              </button>
              <button
                type="button"
                className={`btn shadow-none    ${
                  selectedTab == 1 ? 'bg-theme-success text-white' : ' btn-outline-secondary '
                } `}
                onClick={() => setSelectedTab(1)}
              >
                {/* Cancelled */}
                Beendet
              </button>
            </div>

            {selectedTab == 0
              ? subscriptionData?.userSubscription_active?.map((x, i) => {
                  // console.log("Fast Ship ", x?.fast_shipping);
                  return x?.order_box
                    ?.filter((s) => s.subscription !== null)
                    ?.map((y, index) => {
                      return (
                        <div key={index} className="row bg-white p-4 shadow-sm rounded mb-4">
                          <div className="col-md-3 col-sm-6">
                            <Image
                              width={500}
                              height={500}
                              src={
                                y.smoothie_box.box.smoothie_image.length > 0
                                  ? baseURL +
                                    'smoothie_box/' +
                                    y.smoothie_box.box.smoothie_image[0].images
                                  : commonImg
                              }
                              alt={y?.smoothie_box?.box?.name}
                              title={y?.smoothie_box?.box?.name}
                              className="img-fluid w-75"
                            />
                          </div>
                          <div className="col-md-7 d-flex align-items-center">
                            <div>
                              <h4 className="flx-hide-title">{y?.smoothie_box?.box?.name}</h4>
                              <p className="p5 flx-hide-paragh">{y?.smoothie_box?.short_detail}</p>
                              <div>
                                <p className="d-flex  flex-wrap flex-md-nowrap">
                                  {/* <span className="fs-2 me-2  text-decoration-line-through ">
                                    {formatToGerman2(
                                      parseFloat(
                                        y?.smoothie_box?.smoothie_box_size
                                          ?.price
                                      ) +
                                        parseFloat(x?.deposit_price) +
                                        parseFloat(x?.fast_shipping) +
                                        parseFloat(x?.shipping_cost)
                                    )}
                                    €
                                  </span> */}
                                  <span className="fs-2 me-2">
                                    {formatToGerman2(x?.total_price)}€
                                  </span>
                                  {/* incl. VAT plus shipping costs, plus deposit */}
                                  inkl. MwSt, Versand und Pfand
                                </p>
                              </div>
                              <p>
                                Bestelldatum: {/* Subscription date:{" "} */}
                                {y?.user_subscription[0]?.order_date}
                              </p>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-md-6 col-12 offset-md-3">
                              <span className="btn bg-warning-opacity text-theme-success py-0 mb-2">
                                {/* Your upcoming payment is scheduled on{" "} */}
                                Deine bevorstehende Zahlung ist geplant am:{' '}
                                {moment(y?.user_subscription[0]?.order_date)
                                  .add(1, 'M')
                                  .format('DD-MM-YYYY')}
                              </span>
                              <br />
                              <span className="btn bg-success-opacity text-theme-success py-0">
                                {/* Your delivery is upcoming on{" "} */}
                                {/* Die nächste automatische Lieferung erreicht Dich
                                am
                              */}
                                Deine nächste Abo-Lieferung wird bei dir ankommen am:{' '}
                                {/* {checkUpcomingDate(
                                  y?.user_subscription[0]?.next_delivery_date
                                )} */}{' '}
                                {moment().diff(x?.shipping_date) > 0
                                  ? moment(y?.user_subscription[0]?.next_delivery_date).format(
                                      'DD-MM-YYYY'
                                    )
                                  : moment(x?.shipping_date).format('DD-MM-YYYY')}
                                {/* if shipping date is greater then current date, show shipping date */}
                                {/* else show next delivery date */}
                              </span>
                            </div>
                            <div className="col-md-3 col-12 d-flex justify-content-end mt-md-0 mt-3">
                              <button
                                type="button"
                                onClick={() =>
                                  handleModal(
                                    true,
                                    y?.user_subscription[0]?.id,
                                    y?.user_subscription[0]?.stripe_subscription_id
                                  )
                                }
                                className="btn bg-theme-success text-white"
                              >
                                {/* Cancel */}
                                Abo kündigen
                              </button>
                            </div>
                            {/* <ModalContainer
                            isOpen={modalVisible}
                            closeModal={() => setModalVisible(false)}
                            ariaHideApp={false}
                          > */}
                            {modalVisible && ids?.id && (
                              <ConfirmCancelModal
                                setModalVisible={() => handleModal(false, null, null)}
                                fun={() => handleCancelSubscription(ids.id, ids?.stripe_id)}
                                isLoading={loading}
                              />
                            )}
                            {/* </ModalContainer> */}
                          </div>
                        </div>
                      )
                    })
                })
              : subscriptionData?.userSubscription_cancel?.map((x, i) => {
                  return x?.order_box
                    ?.filter((s) => s.subscription !== null)
                    ?.map((y, index) => {
                      return (
                        <div key={index} className="row bg-white p-4 shadow-sm rounded mb-4">
                          <div className="col-md-3">
                            <Image
                              width={500}
                              height={500}
                              src={
                                y.smoothie_box.box.smoothie_image.length > 0
                                  ? baseURL +
                                    'smoothie_box/' +
                                    y.smoothie_box.box.smoothie_image[0].images
                                  : commonImg
                              }
                              alt={y?.smoothie_box?.box?.name}
                              title={y?.smoothie_box?.box?.name}
                              className="img-fluid w-75"
                            />
                          </div>
                          <div className="col-md-7 d-flex align-items-center">
                            <div>
                              <h4 className="flx-hide-title">{y?.smoothie_box?.box?.name}</h4>
                              <p className="p5 flx-hide-paragh">{y?.smoothie_box?.short_detail}</p>
                              <div>
                                <p className="d-flex ">
                                  {/* <span className="fs-2 me-2  text-decoration-line-through ">
                                    {formatToGerman2(
                                      y?.smoothie_box?.smoothie_box_size?.price
                                    )}
                                    €
                                  </span> */}
                                  {/* {formatToGerman2(y?.price)}€ */}
                                  {/* <span className="fs-2 me-2">
                                    {formatToGerman2(
                                      parseFloat(y?.price) +
                                        parseFloat(x?.deposit_price) +
                                        parseFloat(x?.fast_shipping) +
                                        parseFloat(x?.shipping_cost)
                                    )}
                                    €
                                  </span> */}
                                  <span className="fs-2 me-2">
                                    {formatToGerman2(x?.total_price)} €
                                  </span>
                                  {/* incl. VAT plus shipping costs, plus deposit */}
                                  inkl. MwSt, Versand und Pfand
                                </p>
                              </div>
                              <p>
                                {/* Subscription date: */}
                                Bestelldatum: {y?.user_subscription[0]?.order_date}
                              </p>
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-7 offset-md-3">
                              <span className="btn bg-secondary-opacity text-dark py-0">
                                {/* Your subscription is Cancelled */}
                                Dieses Abonnement wurde beendet
                              </span>
                            </div>
                            <div className="col-2 d-flex justify-content-end">
                              <button type="button" className="btn btn-secondary text-white">
                                {/* Cancelled */}
                                Beendet
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                })}
          </div>
        </div>
      </section>
    </div>
  )
}
