import { SEOSchema } from '@/constant/SEOSchema'
import SignupForm from './component/SignupForm'
export async function generateMetadata() {
  return {
    alternates: { canonical: 'https://indivit.de/signup' },
  }
}
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.Signup?.schema, null, 2),
        }}
      />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div className="card" style={{ borderRadius: '3rem' }}>
              <div className="card-body p-5">
                <h3 className="mb-2 text-center text-capitalize">indivit Konto erstellen</h3>
                <p className="text-center pb-4">Jetzt anmelden und köstliche Vorteile genießen</p>
                <SignupForm />
                <p className="mb-0 text-center">
                  {/* Already have an account? */}
                  Du hast bereits ein Kundenkonto?
                  <a href="login" className="text-theme-success">
                    &nbsp; &nbsp;Anmelden
                    {/* Login */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
