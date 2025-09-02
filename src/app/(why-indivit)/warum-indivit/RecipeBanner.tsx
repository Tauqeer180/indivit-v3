import Image from 'next/image'
import React from 'react'

export default function RecipeBanner() {
  let JSONData = [
    {
      icon: '/assets/icon/fruits-and-vegetables_w.png',
      title: 'Echte Smoothies aus ganzen Früchten',
      description:
        'Nutzung ganzer Früchte und Verzicht auf gefilterte Säfte ergeben besonders gesunde, ballast- und vitalstoffreiche Smoothies',
    },
    {
      icon: '/assets/icon/bio_w.png',
      title: '100% frische Bio Zutaten in Rohkostqualität',
      description:
        'Jede Zutat gelangt so frisch und unverarbeitet wie möglich in deinen Smoothies – natürlich in 100% Bio-Qualität',
    },
    {
      icon: '/assets/icon/schutz_w.png',
      title: 'Nie erhitzt & frei von Konservierungsstoffen',
      description:
        'Das schonende HPP Verfahren verlängert die Haltbarkeit – die enthaltenen Vitalstoffe bleiben größtenteils erhalten',
    },
    {
      icon: '/assets/icon/frucht_w.png',
      title: 'Frei von Zusatzstoffen – 100% transparent',
      description:
        'In deinen Smoothies landen keine Pulver und Zusätze – zu allen Zutaten versorgen wir dich mit umfangreichen Informationen',
    },
    {
      icon: '/assets/icon/mixer_w.png',
      title: 'Nachhaltige on-demand Manufaktur',
      description:
        "0% Verschwendung. Das bedeutet, deine Smoothies werden nur auf Bestellung zubereitet – frischer geht's nicht",
    },
    {
      icon: '/assets/icon/recycling-zeichen_w.png',
      title: 'Flasche aus 100% recyceltem PET',
      description:
        'Aufwand von lediglich ca. 10% der Energie für die Herstellung im Vergleich zu herkömmlichen PET-Flaschen',
    },
  ]
  return (
    <section className="tw-bg-gray-100 tw-py-12">
      <div className="container tw-px-6">
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {JSONData?.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="  tw-p-6 tw-flex tw-flex-col tw-items-center tw-text-center"
            >
              <div className="tw-text-4xl tw-mb-4">
                <Image
                  src={icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="tw-w-[60px] tw-h-[60px]"
                />
                {/* {icon} */}
              </div>
              <h3 className="tw-font-semibold tw-text-lg tw-mb-2">{title}</h3>
              <p className="tw-text-gray-600 tw-text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
