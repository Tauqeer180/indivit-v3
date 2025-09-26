'use client'
import { forgotPassword } from '@/services/Account'
import { MailOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setLoading(true)
    forgotPassword(data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success(res?.data?.message)
          router.push('/getreset')
        } else {
          toast.error(res?.response?.data?.message)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log('Error ', err)
        toast.error(err?.data?.message)
        setLoading(false)
      })
  }

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div className="card" style={{ borderRadius: '3rem' }}>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-md-5">
                    <h3 className="mb-2 text-center">
                      Passwort zurücksetzen
                      {/* Reset Password! */}
                    </h3>
                    <p className="text-center pb-4">
                      Bitte gib die E-Mail Adresse ein, die mit Deinem indivit-Konto verknüpft ist.
                      So können wir Dir einen Link zum Zurücksetzen senden.
                      {/* Please enter the email address associated with your
                        Indivit account. This will allow us to send you a reset
                        link. */}
                    </p>

                    <label className="form-label" htmlFor="typeEmailX">
                      E-Mail
                    </label>
                    <div className="flx-login-icons pb-4 tw-relative">
                      <MailOpen
                        size={20}
                        className="tw-absolute  tw-left-3 tw-top-3 tw-text-theme"
                      />
                      <input
                        type="email"
                        disabled={loading}
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
                    <button
                      disabled={loading}
                      className="btn-solid-success w-100 d-flex justify-content-center align-items-center"
                      type="submit"
                    >
                      {/* {loading && (
                          <div
                            class="spinner-border text-warning me-3"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        )} */}
                      {/* Get Reset Link */}
                      Schick mir einen Link
                    </button>
                  </div>
                </form>
                <p className="text-center">
                  <a href="login" className="text-theme-success">
                    &nbsp; &nbsp;Zurück zur Anmeldung
                    {/* Back to Login */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
