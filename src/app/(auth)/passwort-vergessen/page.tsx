import React from 'react'
import ForgotPassword from '../components/ForgotPassword'

export async function generateMetadata() {
  return {
    alternates: {
      canonical: 'https://indivit.de/passwort-vergessen',
    },
  }
}
export default function Page() {
  return (
    <>
      <ForgotPassword />
    </>
  )
}
