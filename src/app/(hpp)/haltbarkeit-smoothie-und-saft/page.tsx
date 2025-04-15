import React from 'react'
import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import HPPDetails from './HppDetails'

async function getHPPData() {
  const data = await fetcher('hpp_procedure', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}
export async function generateMetadata() {
  // const data = await fetcher('about_us', { cache: true, revalidate: 86400 })
  // let aboutData = data?.data?.length > 0 ? data?.data[0] : {}

  return {
    alternates: { canonical: 'https://indivit.de/haltbarkeit-smoothie-und-saft' },
    title: `Haltbarkeit von Smoothies steigern: Schonende HPP-Methode erklärt`,
    description: `Erfahre, wie HPP-Technologie Smoothies & Säfte natürlich haltbar macht – ohne Vitamine zu zerstören. Inklusive Frische-Tipps für Obst & Gemüse.`,
    authors: [{ name: 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: `Natürliche Haltbarkeit: Wie HPP-Verfahren Vitamine schützt & Lebensmittel konserviert`,
      description: `Wie bleiben Smoothies 6 Wochen frisch? Das HPP-Verfahren revolutioniert das Haltbarmachen ohne Hitze oder Zusatzstoffe. Erhalte bis zu 95% der Vitamine und entdecke nachhaltige Alternativen zum Einkochen. Für alle, die gesunde Ernährung lieben!`,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Haltbarkeit von Smoothies steigern: Schonende HPP-Methode erklärt`,
      description: `Erfahre, wie HPP-Technologie Smoothies & Säfte natürlich haltbar macht – ohne Vitamine zu zerstören. Inklusive Frische-Tipps für Obst & Gemüse.`,
    },
  }
}

export default async function HPP() {
  const res = await getHPPData()

  return (
    <div>
      <HeroBanner
        data={{
          title: res?.title,
          description: res?.title_text,
        }}
      />
      <HPPDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
