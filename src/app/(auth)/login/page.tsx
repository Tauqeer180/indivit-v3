import React from 'react'
import LoginCard from '../components/LoginCard'
export async function generateMetadata() {
  return {
    alternates: { canonical: 'https://indivit.de/login' },
  }
}
export default function Page() {
  return (
    <>
      <LoginCard title="Wilkommen" redirect={true} />
    </>
  )
}
