'use client'
import Loader from '@/components/common/Loader'
import { fetcher } from '@/lib/fetcher'
import { loginAction } from '@/redux/account'
import { fetchWishlist } from '@/redux/wishlist'
import session from '@/services/session'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

interface LoginCardProps {
  redirect?: boolean
  title: string
  isCloseBtn?: boolean
  onClose?: () => void
  newTab?: boolean
  fromMixer?: boolean
}

const queryKeys = ['wishListing', 'smoothieListing', 'boxListing', 'customSmoothieListing']

export default function LoginCard({
  redirect,
  title,
  isCloseBtn,
  onClose,
  newTab,
  fromMixer,
}: LoginCardProps) {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisibile] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  let loginMutation = () => fetcher('login', { method: 'POST', data: data })
  // const loginMutation = useMutation({
  //   mutationFn: (data) => {
  //     return fetcher('login', { method: 'POST', data: data })
  //   },
  //   onSuccess: (res) => {
  //     console.log('Success response:', res)

  //     // if (res?.status == 200) {
  //     toast.success('Du bist jetzt angemeldet')
  //     // Success
  //     dispatch(loginAction(res?.data))
  //     dispatch(fetchWishlist())
  //     session.set('token', res?.token)
  //     session.set('user', res)
  //     queryClient.invalidateQueries([
  //       'wishListing',
  //       'smoothieListing',
  //       'boxListing',
  //       'customSmoothieListing',
  //     ])
  //     // Invalidate and refetch

  //     redirect && router.back()
  //     // } else {
  //     //   toast.error(res)
  //     // }
  //     setLoading(false)
  //   },
  //   onError: (err) => {
  //     console.error('Error occurred during login:', err)
  //     console.log('Error ', err)
  //     session.clear()
  //     toast.error(err)
  //     setLoading(false)
  //   },
  // })

  const onSubmit = (data) => {
    setLoading(true)
    // loginMutation.mutate(data)
    fetcher('login', { method: 'POST', data: data })
      .then((res) => {
        // console.log('Success response:', res)
        if (res?.token) {
          toast.success('Du bist jetzt angemeldet')
          // Success
          session.set('token', res?.token)
          session.set('user', res)
          dispatch(loginAction(res))
          queryClient.invalidateQueries([
            'wishListing',
            'smoothieListing',
            'boxListing',
            'customSmoothieListing',
          ]) // Invalidate and refetch
          dispatch(fetchWishlist())
          redirect && router.back()
        } else {
          toast.error(res)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error occurred during login:', err)
        console.log('Error ', err)
        session.clear()
        toast.error(err)
        setLoading(false)
      })
  }
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-6">
          {loading && <Loader />}
          <div className="card" style={{ borderRadius: '3rem' }}>
            {isCloseBtn && (
              <div className=" btn text-end fw-bold me-3 mt-2 p-2" onClick={onClose}>
                &#10006;
              </div>
            )}
            <div className={`card-body p-5 ${isCloseBtn && ' pt-0'}`}>
              <div className="mb-md-5">
                <h3 className="mb-2 text-center">{title}</h3>
                <p className="text-center pb-4">
                  {/* Ready to drink in all the benefits? Log in now! */}
                  Melde dich einfach in deinem indivit Konto an
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
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
                        aria-label="Search"
                        aria-describedby="search-addon"
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
                  <div>
                    <label className="form-label" htmlFor="typePasswordX">
                      Passwort
                    </label>
                    <div className="flx-login-icons pb-3 position-relative ">
                      <i className="fa fa-solid fa-key flx-icon"></i>
                      <input
                        type={isVisible ? 'text' : 'password'}
                        id="typePasswordX"
                        className="form-control rounded"
                        placeholder="Gib hier dein Passwort ein"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        {...register('password', {
                          required: true,
                          minLength: 6,
                        })}
                      />
                      <i
                        className={`fa fa-solid  ${
                          isVisible ? 'fa-eye' : 'fa-eye-slash'
                        }  flx-icon top-0 end-0 cursor-pointer text-black-50  `}
                        style={{ color: 'var(--green)' }}
                        onClick={() => setIsVisibile(!isVisible)}
                      ></i>
                      <button className="btn position-absolute top-0 end-0"></button>
                      {errors?.password?.type === 'required' && (
                        <p className="text-danger my-1">* Angabe notwendig</p>
                      )}
                      {errors?.password?.type === 'minLength' && (
                        <p className="text-danger my-1">Min Length should be 6</p>
                      )}
                    </div>
                  </div>

                  <p className="text-end">
                    <Link href="/passwort-vergessen" className=" text-dark text-decoration-none">
                      {/* Forgot Password */}
                      Passwort vergessen?
                    </Link>
                  </p>

                  <button className=" btn-solid-success w-100" type="submit">
                    Anmelden
                    {/* Login */}
                  </button>
                </form>
              </div>
              <p className="mb-0 text-center">
                Du hast noch keinen Account?
                {/* Don't have an account yet? */}
                <Link
                  href={`/signup?fromMixer=${fromMixer}`}
                  target={newTab ? '_blank' : null}
                  rel={newTab ? 'noopener noreferrer' : null}
                  className="text-theme-success"
                >
                  &nbsp; &nbsp;Jetzt Registrieren
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
