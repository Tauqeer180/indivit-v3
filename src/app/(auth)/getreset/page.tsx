import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div className="card" style={{ borderRadius: '3rem' }}>
              <div className="card-body p-5">
                <div className="mb-md-5 ">
                  <div className="text-center">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/img/reset-img.png"
                      alt="Reset Password"
                      className="img-fluid pb-3"
                    />
                  </div>
                  <h3 className="mb-2 text-center pb-2">
                    {/* Reset Password! */}
                    Passwort zurücksetzten
                  </h3>
                  <p className="text-center pb-2">
                    Bitte klicke auf den in der E-Mail enthaltenen Link, um Dein Passwort
                    zurückzusetzen. Wir haben eine E-Mail von der folgenden Adresse gesendet:
                  </p>
                  <h5 className="text-center text-theme-success">smoothie@indivit.de</h5>
                </div>
                <p className="text-center">
                  <Link href="login" className="text-theme-success">
                    &nbsp; &nbsp;Zurück zur Anmeldung
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
