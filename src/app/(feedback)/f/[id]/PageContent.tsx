'use client'
import { TextSkelton } from '@/components/common/Common'
import Loader from '@/components/common/Loader'
import StarRating from '@/components/StarRating'
import { baseURL, fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function PageContent({ dataByProdID, id }: any) {
  let { push } = useRouter()
  const [loading, setLoading] = useState(false)
  const token = useAppSelector((state) => state.account.token)
  const commonImg = useAppSelector((state) => state.settings?.boxImg)
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  useEffect(() => {
    if (dataByProdID && (dataByProdID?.message == 'No Order Found' || !dataByProdID?.data)) {
      toast.error('Für diesen Benutzer wurde keine Bestellung gefunden')
    }
  }, [dataByProdID])

  // debugger;
  let data
  let product_type = dataByProdID?.product_type
  // Product Type 0 == Box
  // Product Type 1 == Smoothie
  if (isAuthenticated) {
    if (product_type == 0) {
      data = dataByProdID?.data?.order_box?.find((d) => d.production_id == id)
    } else if (product_type == 1) {
      data = dataByProdID?.data?.order_box_smoothies?.find((d) => d.production_id == id)
    }
  } else {
    if (product_type == 0) {
      data = dataByProdID?.data?.smoothie_box?.box
    } else if (product_type == 1) {
      data = dataByProdID?.data?.order?.order_box_smoothies?.find((d) => d.production_id == id)
    }
  }

  const onSubmit = (data) => {
    setLoading(true)
    // mutation.mutate({
    //   production_id: id,
    //   ...data,
    // })

    fetcher('smoothie_rating', {
      method: 'POST',
      data: { ...data, production_id: id },
      token,
    }).then((res) => {
      console.log('resss ', res)
      toast.success(res.message)
      push('/danke-fuer-dein-feedback')
      setLoading(false)
    })
  }
  return (
    <div>
      {loading && <Loader />}
      <section id="flx-hero-rdetailed">
        <div className="container">
          <div className="">
            <nav aria-label="breadcrumb" className="px-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                {product_type == 0 && (
                  <li className="breadcrumb-item">
                    <Link href="/boxes">Boxen</Link>
                  </li>
                )}
                {product_type == 1 && (
                  <li className="breadcrumb-item">
                    <Link href="/rightrecipes">Smoothie Rezepte</Link>
                  </li>
                )}
                <li className="breadcrumb-item active" aria-current="page">
                  {isAuthenticated &&
                    (product_type == 0 ? data?.smoothie_box?.box?.name : data?.smoothie?.name)}
                  {!isAuthenticated &&
                    (product_type == 0
                      ? dataByProdID?.data?.smoothie_box?.box?.name
                      : data?.smoothie?.name)}
                </li>
              </ol>
            </nav>
          </div>

          <div className="row d-flex pt-0 pt-md-5 align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="text-center flx-recipes-bg">
                {product_type == 0 && (
                  <img
                    src={
                      data?.smoothie_box?.box.smoothie_image.length > 0
                        ? baseURL +
                          'smoothie_box/' +
                          data?.smoothie_box?.box.smoothie_image[0].images
                        : data?.smoothie_image.length > 0
                          ? baseURL + 'smoothie_box/' + data?.smoothie_image[0]?.images
                          : commonImg
                    }
                    className="img-fluid flx-rdetailed-animation max-h-460 w-100"
                    alt=""
                  />
                )}
                {product_type == 1 && (
                  <img
                    src={
                      data?.smoothie?.smoothie_picture
                        ? baseURL + 'smoothie/' + data?.smoothie?.smoothie_picture?.picture
                        : commonImg
                    }
                    className="img-fluid flx-rdetailed-animation max-h-460 w-100"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 flx-rdetailed-leave">
              <div className="text-left">
                <div className="d-flex align-items-center ">
                  <span className="fw-bold fs-2">
                    {product_type == 0
                      ? data?.smoothie_box?.box?.name || data?.name
                      : data?.smoothie?.name}
                  </span>
                  {(data?.smoothie_box?.created_by == 1 || data?.smoothie?.created_by == 1) && (
                    <span className={`badge rounded-pill   text-uppercase bg-info ms-2`}>
                      Customized
                    </span>
                  )}
                </div>

                <p>
                  {data?.smoothie_box?.short_detail ||
                    dataByProdID?.data?.data?.smoothie_box?.short_detail ||
                    data?.smoothie?.headline}
                </p>
                <p> {data?.recipe_text} </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Haben wir deinen Geschmack getroffen?</label>
                <Controller
                  name="starRating"
                  control={control}
                  defaultValue={0}
                  rules={{
                    validate: (value) => value > 0 || 'Please select.',
                  }}
                  render={({ field }) => (
                    <StarRating value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors?.starRating && <p className="text-danger">{errors?.starRating?.message}</p>}
                {/* <div>
                <label>Wie fandest deinen Smoothie?</label>
                <StarRating rating={rating} onChange={setRating} />
              </div> */}
                <div>
                  <label>Hast du sonst noch Feedback? (optional)</label>
                  <div className="position-relative my-3">
                    <label
                      className="position-absolute bg-light fs-10 px-1"
                      style={{ top: '-10px', left: '10px' }}
                    >
                      Zusätzliches Feedback
                    </label>
                    <textarea
                      name=""
                      className="form-control bg-transparent rounded-3"
                      placeholder="Bitte Feedback hier eingeben..."
                      id=""
                      cols={54}
                      rows={4}
                      {...register('comment')}
                    />
                  </div>
                </div>
                <div className="text-end py-3">
                  <button className="btn btn-success bg-theme-success">Absenden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
