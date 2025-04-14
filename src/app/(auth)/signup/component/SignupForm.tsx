'use client'
import Loader from '@/components/common/Loader'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import session from '@/services/session'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { fetcher } from '@/lib/fetcher'
export default function SignupForm() {
  const [loading, setLoading] = useState(false)
  const [isVisibile, setIsVisibile] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const isFromMixer = searchParams.get('fromMixer')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const signUpMutation = useMutation({
    mutationFn: async (data) => await fetcher('register', { method: 'POST', data: data }),
    onSuccess: (res) => {
      console.log('Success response:', res)

      if (res?.status == 200) {
        toast.success(
          'Registrierung erfolgreich. Bitte prüfe deine E-Mails, um dein Kundenkonto zu aktivieren'
        )
        setTimeout(() => {
          if (isFromMixer === 'true') {
            router.push('/erfolgreich-registriert')
          } else {
            router.push('/login')
          }
        }, 500)
      } else {
        res?.errors?.forEach((err) => {
          return toast.error(err)
        })
        if (res?.response?.data?.message) {
          return toast.error(res?.response?.data?.message)
        }
      }
      setLoading(false)
    },
    onError: (err: any) => {
      session.clear()
      err?.errors?.map((e) => {
        return toast.error(e)
      })
      setLoading(false)
    },
  })

  const onSubmit = async (data) => {
    setLoading(true)
    const { fName, lName, ...rest } = data
    await fetcher('register', {
      method: 'POST',
      data: {
        ...rest,
        name: `${fName} ${lName}`,
        first_name: fName,
        last_name: lName,
      },
    })
      .then((res) => {
        // console.log('res ', res)
        if (res?.errors) {
          res?.errors?.map((err) => {
            toast.error(err)
          })
          res?.message && toast.error(res?.message)
        } else {
          toast.success(
            'Registrierung erfolgreich. Bitte prüfe deine E-Mails, um dein Kundenkonto zu aktivieren'
          )
          // "Register Successfuly, Please Check your  Email to verify Account"
          setTimeout(() => {
            isFromMixer === 'true' ? router.push('/erfolgreich-registriert') : router.push('/login')
          }, 500)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log('err', err)
        session.clear()
        err?.errors?.map((e) => {
          return toast.error(e)
        })
        setLoading(false)
      })
  }
  return (
    <div>
      {loading && <Loader />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="form-outline flx-login-icons">
              <label className="form-label" htmlFor="form3Example1">
                Vorname
              </label>
              <input
                type="text"
                id="form3Example1"
                className="form-controls"
                placeholder="Vorname"
                {...register('fName', {
                  required: 'Angabe notwendig',
                })}
              />
              {errors.fName && <p className="text-danger my-1">{String(errors.fName.message)}</p>}
            </div>
          </div>
          <div className="col-md-6 mb-4 flx-login-icons">
            <div className="form-outline">
              <label className="form-label" htmlFor="form3Example2">
                Nachname
              </label>
              <input
                type="text"
                id="form3Example2"
                className="form-controls"
                placeholder="Nachname"
                {...register('lName', {
                  required: 'Angabe notwendig',
                })}
              />
              {errors.lName && <p className="text-danger my-1">{String(errors.lName.message)}</p>}
            </div>
          </div>
        </div>
        <label className="form-label" htmlFor="typeEmailX">
          E-Mail
        </label>
        <div className="flx-login-icons pb-3">
          <i className="fa fa-solid fa-envelope-open flx-icon"></i>
          <input
            type="email"
            id="typeEmailX"
            className="form-control rounded"
            placeholder="Gib hier deine E-Mail Adresse ein"
            aria-label="email"
            aria-describedby="email"
            {...register('email', {
              required: 'Must be Valid Email',
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p className="text-danger my-1">{String(errors.email.message)}</p>}
        </div>
        <label className="form-label" htmlFor="typePasswordX">
          Passwort
        </label>
        <div className="flx-login-icons pb-4 position-relative">
          <i className="fa fa-solid fa-key flx-icon"></i>
          <input
            type={isVisibile ? 'text' : 'password'}
            id="typePasswordX"
            className="form-control rounded"
            placeholder="Gib hier dein sicheres Passwort ein"
            aria-label="Search"
            aria-describedby="search-addon"
            {...register('password', {
              required: true,
              // required: "Password length should be minimum 6",
              // pattern: /^[a-zA-Z0-9-]{4,}$/,
              minLength: 6,
            })}
          />
          <i
            className={`fa fa-solid  ${
              isVisibile ? 'fa-eye' : 'fa-eye-slash'
            }  flx-icon top-0 end-0 cursor-pointer text-black-50  `}
            onClick={() => setIsVisibile(!isVisibile)}
          ></i>
          {errors?.password?.type === 'Angabe notwendig' && (
            <p className="text-danger my-1">* Angabe notwendig</p>
          )}
          {errors?.password?.type === 'minLength' && (
            <p className="text-danger my-1">Min Length should be 6</p>
          )}
        </div>
        <label className="form-label" htmlFor="typePasswordX">
          {/* Confirm Password */}
          Passwort bestätigen
        </label>
        <div className="flx-login-icons pb-4 position-relative">
          <i className="fa fa-solid fa-key flx-icon"></i>
          <input
            type={isVisibile ? 'text' : 'password'}
            id="typePasswordX"
            className="form-control rounded"
            placeholder="Bestätige dein Passwort zur Sicherheit"
            aria-label="Search"
            aria-describedby="search-addon"
            {...register('password_confirmation', {
              required: true,
              minLength: 6,
            })}
          />
          <i
            className={`fa fa-solid  ${
              isVisibile ? 'fa-eye' : 'fa-eye-slash'
            }  flx-icon top-0 end-0 cursor-pointer text-black-50`}
            onClick={() => setIsVisibile(!isVisibile)}
          ></i>
          {errors?.password_confirmation?.type === 'Angabe notwendig' && (
            <p className="text-danger my-1">* Angabe notwendig</p>
          )}
          {errors?.password_confirmation?.type === 'minLength' && (
            <p className="text-danger my-1">Min Length should be 6</p>
          )}
        </div>
        <button className="btn-solid-success w-100 mb-4" type="submit">
          {/* Signup */}
          Registrieren
        </button>
      </form>
    </div>
  )
}
