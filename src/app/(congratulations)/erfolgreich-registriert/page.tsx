import { SEOSchema } from '@/constant/SEOSchema'
import Image from 'next/image'
import React from 'react'
// Congratulations Page
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Congratulations?.schema],
            null,
            2
          ),
        }}
      />
      <div className="pt-140 tw-max-w-7xl tw-mx-auto">
        <div className="container text-center">
          <Image
            src="/assets/img/congratulations.png"
            alt="congratulations"
            height={500}
            width={500}
            className="img-fluid mt-5"
          />
        </div>
        <p className="tw-max-w-4xl tw-mx-auto tw-text-center tw-text-lg tw-font-medium">
          Du hast dich erfolgreich registriert. Bitte prüfe deine E-Mails, um dein Kundenkonto zu
          aktivieren. Du kannst diese Seite jetzt schließen. Deine Kreation findest du im vorherigen
          Tab.
        </p>
      </div>
    </>
  )
}
