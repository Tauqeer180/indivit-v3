import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import SustainabilityDetails from './SustainabilityDetails'
import { BreadCrumb } from '@/components/common/Common'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'
import Image from 'next/image'

// Sustainability Page
export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.sustainability)

  return {
    alternates: {
      canonical: data?.canonical || 'https://indivit.de',
    },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description || `Indivit`,
    authors: [{ name: data?.author_name || 'Indivit' }],
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description || `Indivit`,
      publishedTime: data?.created_at,
      modifiedTime: data?.updated_at,
    },
    article: {
      published_time: data?.created_at || new Date(),
      modified_time: data?.updated_at || new Date(),
      authors: [data?.author_name || 'Indivit'],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit`,
      description: data?.meta_description || `Indivit`,
    },
  }
}
export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Sustainability?.schema],
            null,
            2
          ),
        }}
      />
      <div className="tw-bg-light-green">
        <HeroBanner
          data={{
            title: 'Nachhaltigkeit liegt uns am Herzen',
            description:
              'Vieles von dem, was wir täglich umsetzen, möchten wir auch in den nächsten Jahren weiterführen. Daher liegt uns ein nachhaltiges Handeln sehr nahe. Das bedeutet für uns ganz konkret, wir positionieren uns für einen umfassenden Umweltschutz, ein vollständiges Recycling, einen sinnvollen Ressourceneinsatz und minimale Verschwendung.',
          }}
          breadCrumb={<BreadCrumb name="Nachhaltigkeit" />}
        />
        <section id="flx-about" className="!tw-pt-16 ">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 flx-about-col pe-5">
                <div className="text-left">
                  <div className="col-6 float-end flx-forever-object">
                    <div className="disk-container d-flex align-items-center justify-content-center">
                      <div className="text-center">
                        <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                        <p className="fs-6 mb-1 lh-1">
                          Bio-Zutaten <br /> Recycling <br /> Ressourcen <br /> Verschwendung
                        </p>
                      </div>
                    </div>
                    <div className="text-left flx-img-position">
                      <Image
                        src="/assets/img/Sustainable_smoothie.png"
                        alt="sustainable smoothie"
                        height={500}
                        width={500}
                        className="img-fluid z-3"
                      />
                    </div>
                  </div>

                  <div className="no-tailwind">
                    <h2>
                      Mit indivit Smoothies:{' '}
                      <span className="hsn-smoothies">
                        &nbsp;Schluck für Schluck zur Nachhaltigkeit
                      </span>
                    </h2>
                    <p>
                      Du willst dich klimafreundlich ernähren und gleichzeitig auf Bio-Lebensmittel
                      setzen? Indivit verbindet ökologisches Essen mit innovativen Lösungen: Von
                      zertifizierten Bio-Zutaten über umweltfreundliche Verpackungen bis zur
                      ressourcensparenden Produktion. Wir zeigen, wie nachhaltige Ernährung mit
                      recyclingfähigen Materialien, CO₂-optimiertem Versand und
                      Zero-Waste-Philosophie funktioniert. Erfahre hier, warum unsere Smoothies
                      nicht nur deinem Körper, sondern auch dem Planeten guttun.
                    </p>
                    <br />

                    {/* Secondary Text */}
                    <p>
                      🌍 <strong>Warum ökologische Ernährung mehr als ein Trend ist</strong>
                      <br />
                      Immer mehr Menschen fragen sich: Wie kann ich mich{' '}
                      <strong>umweltfreundlich ernähren</strong> und gleichzeitig etwas für meine
                      Gesundheit tun? Die Antwort liegt in der Kombination aus{' '}
                      <strong>Bio-Lebensmitteln</strong>, bewusstem Konsum und innovativen Lösungen.
                      Bei uns findest du nicht nur Smoothies, sondern ein ganzheitliches Konzept für{' '}
                      <strong>nachhaltige Lebensmittel</strong> – von der Zutat bis zur
                      Verpackung.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
      </div>

      <SustainabilityDetails />
    </div>
  )
}
