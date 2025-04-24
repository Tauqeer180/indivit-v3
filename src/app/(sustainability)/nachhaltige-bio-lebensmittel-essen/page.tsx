import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import SustainabilityDetails from './SustainabilityDetails'
import Link from 'next/link'

const BreadCrumb = ({ name }) => {
  return (
    <nav aria-label="breadcrumb" className="px-0">
      <ol className="breadcrumb lg:tw-justify-center">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  )
}
// Sustainability Page
export async function generateMetadata() {
  // const data = await fetcher('about_us', { cache: true, revalidate: 86400 })
  // let aboutData = data?.data?.length > 0 ? data?.data[0] : {}

  return {
    alternates: { canonical: 'https://indivit.de/nachhaltige-bio-lebensmittel-essen' },
    title: `Bio-Lebensmittel & Nachhaltigkeit: Indivits ökologischer Weg`,
    description: `Erfahre, wie Indivit mit 100% Bio-Zutaten, Recycling-Systemen und CO₂-optimierter Produktion nachhaltige Ernährung schmackhaft macht. Ökologischer Genuss made in Berlin.`,
    authors: [{ name: 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: `Nachhaltig essen mit Bio-Lebensmitteln: Indivits ganzheitlicher Ansatz`,
      description: `Wie Indivit ökologische Ernährung neu denkt: Von zertifizierten Bio-Zutaten über CO₂-optimierte Logistik bis zur Zero-Waste-Produktion. Erfahre hier, warum jeder Smoothie ein Klimabeitrag ist.`,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Bio-Lebensmittel & Nachhaltigkeit: Indivits ökologischer Weg`,
      description: `Erfahre, wie Indivit mit 100% Bio-Zutaten, Recycling-Systemen und CO₂-optimierter Produktion nachhaltige Ernährung schmackhaft macht. Ökologischer Genuss made in Berlin.`,
    },
  }
}
export default function Page() {
  return (
    <div>
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
