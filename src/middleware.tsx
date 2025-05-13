import { NextResponse } from 'next/server'
// import type { Locale } from './routing'
import type { NextRequest } from 'next/server'
const PUBLIC_FILE = /\.(.*)$/i
// export { auth as middleware } from '../auth'
// Protected for Both captain & supplier
let protectedRoutes = [
  '/chat',
  '/dashboard',
  '/dashboard/profile',
  '/dashboard/captain-profile',
  '/dashboard/services',
  '/dashboard/portfolio',
  '/dashboard/manage-supplier-account',
  '/dashboard/manage-captain-account',
]
// supplier should not access to captain routes
// let captainRoutes = ['/category', '/dashboard', '/find-professionals']
export function middleware(request: NextRequest) {
  let {
    pathname,
    // , searchParams
  } = request.nextUrl
  // const locales = routing.locales
  const token = request.cookies.get('token')?.value || null // Example: check if token exists for authentication
  if (pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next()
  }
  // pathname without lang prefixes
  // const isCaptain = request.cookies.get('userType')?.value === 'captain'
  const isCrew = request.cookies.get('userType')?.value === 'crew'

  // const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en'

  if (pathname === '/produkte') {
    return NextResponse.redirect(new URL('/#uebersicht-smoothie-produkte', request.url))
  }

  // Restrict Crew from Dashboard
  if (pathname === '/rezepte') {
    return NextResponse.redirect(new URL('/gesunde-smoothies-rezepte-selber-machen', request.url))
  }
  if (pathname === '/ernaehrung') {
    return NextResponse.redirect(new URL('/beste-smoothie-zutaten-plant-based', request.url))
  }
  if (pathname === '/blog') {
    return NextResponse.redirect(
      new URL('/ernaehrung-fuer-gesundes-leben-gesund-essen', request.url)
    )
  }
  if (pathname === '/discoverrecipes') {
    return NextResponse.redirect(new URL('/gesunde-smoothies-rezepte-selber-machen', request.url))
  }
  // Supplier Protection
  // if (
  //   !isCaptain &&
  //   !isCrew &&
  //   (strippedPathname === '/' || captainRoutes.includes(strippedPathname)) &&
  //   token
  // ) {
  //   return NextResponse.redirect(new URL('/dashboard/home', request.url))
  // }

  // // Detect Browser Language and Switch language
  // const pathnameIsMissingLocale = locales.every(
  //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  // )

  // if (pathnameIsMissingLocale) {
  //   // Detect preferred language from the browser
  //   const acceptLanguage = request.headers.get('accept-language')
  //   console.log('Accept Language : ', acceptLanguage)
  //   const preferredLocale = acceptLanguage
  //     ? acceptLanguage.split(',')[0].split('-')[0]
  //     : routing.defaultLocale
  //   const locale = locales.includes(preferredLocale as Locale)
  //     ? preferredLocale
  //     : routing.defaultLocale

  //   // Redirect to the detected locale
  // return NextResponse.redirect(new URL(`/${pathname}`, request.url))
  // }
  // return NextResponse.next(request)
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // '/',
    '/:path*',
    // '/(en|es)/:path*',
    //   Other Protected Routes Here
  ],
}
