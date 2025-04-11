import React from 'react'
import ForgotPassword from '../components/ForgotPassword'

export async function generateMetadata() {
  return {
    canonical: 'https://indivit.de/passwort-vergessen',
  }
}
export default function Page() {
  return (
    <>
      <ForgotPassword />
    </>
  )
}
