import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import SustainabilityDetails from './SustainabilityDetails'
import { BreadCrumb } from '@/components/common/Common'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

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
      <HeroBanner
        data={{
          title: 'Nachhaltigkeit liegt uns am Herzen',
          description:
            'Vieles von dem, was wir täglich umsetzen, möchten wir auch in den nächsten Jahren weiterführen. Daher liegt uns ein nachhaltiges Handeln sehr nahe. Das bedeutet für uns ganz konkret, wir positionieren uns für einen umfassenden Umweltschutz, ein vollständiges Recycling, einen sinnvollen Ressourceneinsatz und minimale Verschwendung.',
        }}
        breadCrumb={<BreadCrumb name="Nachhaltigkeit" />}
      />
      <SustainabilityDetails />
    </div>
  )
}
