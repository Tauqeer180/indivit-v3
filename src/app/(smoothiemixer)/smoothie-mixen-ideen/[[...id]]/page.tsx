import React from 'react'
// Smoothie Mixer
export default async function page({ params }) {
  const { id } = await params

  return (
    <div>
      Smoothie Mixer
      {JSON.stringify(id)}
    </div>
  )
}
