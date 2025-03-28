import HeroBanner from '@/components/common/HeroBanner'
import React from 'react'
import SustainabilityDetails from './SustainabilityDetails'

// Sustainability Page
export default function Page() {
  return (
    <div>
      <HeroBanner
        data={{
          title: 'Nachhaltigkeit liegt uns am Herzen',
          description:
            'Vieles von dem, was wir täglich umsetzen, möchten wir auch in den nächsten Jahren weiterführen. Daher liegt uns ein nachhaltiges Handeln sehr nahe. Das bedeutet für uns ganz konkret, wir positionieren uns für einen umfassenden Umweltschutz, ein vollständiges Recycling, einen sinnvollen Ressourceneinsatz und minimale Verschwendung.',
        }}
      />
      <SustainabilityDetails />
    </div>
  )
}
