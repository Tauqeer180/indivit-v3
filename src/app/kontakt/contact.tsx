'use client'

import { fetcher } from '@/lib/fetcher'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

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
              {errors.name && <p className="text-danger my-1">{String(errors.name.message)}</p>}
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
              {errors.email && <p className="text-danger my-1">{String(errors.email.message)}</p>}
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
  )
}
