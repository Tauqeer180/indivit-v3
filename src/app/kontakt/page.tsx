'use client'
import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import HeroBanner from '../../components/common/HeroBanner'
import Map from './Map'
import { useMutation } from '@tanstack/react-query'
import { fetcher } from '@/lib/fetcher'
import Image from 'next/image'

export default function Contact() {
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(false)
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const contactFormMutation = useMutation({
    mutationFn: (data) => {
      return fetcher('contact', { method: 'POST', data: data })
    },
    onSuccess: (res) => {
      console.log('Success response:', res)

      setLoading(true)
      if (res.status === 200) {
        toast.success('Email wurde erfolgreich Versendet')
        reset()
      } else {
        res?.errors?.map((err) => {
          return toast.error(err)
        })
        if (res?.data?.message) {
          toast.error(res?.response?.data?.message)
        }
      }
      setLoading(false)
    },
    onError: (err: any) => {
      err?.errors?.map((e) => {
        return toast.error(e)
      })
      setLoading(false)
    },
  })

  const onSubmit = (data) => {
    setLoading(true)
    contactFormMutation.mutate({ ...data, status: 1 })
  }
  return (
    <div>
      <HeroBanner
        data={{
          title: 'Kontaktiere uns',
          description:
            'Hast Du eine Frage, eine Anregung oder ein Feedback? Setze Dich mit uns in Verbindung - wir freuen uns immer, von Dir zu hören',
        }}
        bgImg=" !tw-bg-contact"
      />

      {/* <!-- contact us Form--> */}
      <section id="contant" className="!tw-pt-10 ">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="contact-wrap w-100">
                <h3>
                  Du brauchst Hilfe?
                  {/* Need Help? */}
                </h3>
                <p className="pb-4">
                  {/* Get in touch with us and let's start a conversation about how
                  we can help you. */}
                  Setze Dich mit uns in Verbindung und lass uns darüber sprechen, wie wir Dir helfen
                  können.
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="contactForm"
                  name="contactForm"
                  className="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6 pt-4">
                      <div className="form-group shadow-sm">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          {...register('name', {
                            required: 'Angabe notwendig',
                          })}
                        />
                        {errors.name && (
                          <p className="text-danger my-1">{String(errors.name.message)}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 pt-4">
                      <div className="form-group shadow-sm">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="E-Mail"
                          {...register('email', {
                            required: 'Must be Valid Email',
                            pattern:
                              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                        {errors.email && (
                          <p className="text-danger my-1">{String(errors.email.message)}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 pt-4">
                      <div className="form-group shadow-sm">
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Telefonnummer"
                          {...register('phone', {
                            required: 'Angabe notwendig',
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pt-4">
                      <div className="form-group shadow-sm">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Nachricht"
                          {...register('message', {
                            required: 'Angabe notwendig',
                          })}
                        ></textarea>
                        {errors.message && (
                          <p className="text-danger my-1">{String(errors.message.message)}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 pt-4">
                      <div className="form-group d-grid gap-2">
                        <button className="btn btn-solid-success" type="submit">
                          Senden
                        </button>
                        <div className="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 contant-info">
              <ul className="nav nav-tabs flx-tabs-nav" role="tablist">
                <li className="nav-item">
                  <a
                    role="button"
                    onClick={() => setActiveTab(0)}
                    className={`nav-link  border-top-0 border-end-0 border-start-0 ${
                      activeTab == 0 ? 'flx-tabs-style' : ''
                    } `}
                  >
                    {/* Address */}
                    <h3>Kontakt</h3>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    role="button"
                    onClick={() => setActiveTab(1)}
                    className={`nav-link border-top-0 border-end-0 border-start-0 ${
                      activeTab == 1 ? "flx-tabs-style" : ""
                    } `}
                  >
                    <h3>Google Map</h3>
                  </a>
                </li> */}
              </ul>
              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div className={`tab-pane ${activeTab == 0 ? 'active' : ''}  pt-5`}>
                  <div className="flx-iconbox ">
                    <ul>
                      <li>
                        <Image
                          src="/assets/icon/icon.png"
                          alt=""
                          className="img-fluid flx-email"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li className="ps-3">
                        <h4>Schreib uns einen Brief</h4>
                        <p>Kiefholzstr. 25, 12435 Berlin, Deutschland</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Image
                          src="/assets/icon/icon1.png"
                          alt=""
                          className="img-fluid flx-email"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li className="ps-3">
                        <h4>Schreib uns eine E-Mail</h4>
                        <p>smoothie@indivit.de</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Image
                          src="/assets/icon/icon2.png"
                          alt=""
                          className="img-fluid flx-email"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li className="ps-3">
                        <h4>Ruf uns an</h4>
                        <p>030 53010813</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`tab-pane ${activeTab == 1 ? 'active' : ''}  pt-5`}>
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
