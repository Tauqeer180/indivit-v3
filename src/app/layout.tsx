import type { Metadata } from 'next'
import './globals.css'
import 'react-multi-carousel/lib/styles.css'
// import "bootstrap/dist/js/bootstrap.js";
import 'aos/dist/aos.css'
// import "aos/dist/aos.js";
import '../assets/css/style.css'
import '../assets/css/countdown.css'
import '../assets/css/bootstrap.css'
import '../assets/fontawesome/css/all.css'
// import "./App.css";
import { ToastContainer } from 'react-toastify'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import AllProviders from '../providers/AllProviders'
import CookiesComponent from '@/components/CookiesBanner/Cookies'
export const metadata: Metadata = {
  title: 'Indivit: Gesunde Smoothies & Clean Eating für individuelle Ziele | Bio',
  description:
    'Entdecke gesunde Bio-Smoothies für Clean Eating, Intervallfasten & Genuss. Jetzt im Smoothie-Test deinen besten Mix finden & gratis Versand sichern!',
  keywords:
    'indivit, smoothie mixer, smoothie selber mixen, smoothie selber machen, smoothie online bestellen, smoothie lieferung, smoothie box, smoothie subscription',
  openGraph: {
    title:
      'Indivit Bio-Smoothies: Deine Clean Eating-Lösung mit persönlicher Smoothiebar & Frische-Garantie',
    description:
      'Erlebe natürliche Ernährung mit frischen Bio-Smoothies für Fastenkur, Genuss oder Mahlzeitenersatz. Konfiguriere deinen perfekten Mix im Online-Smoothie-Test und profitiere von schonender HPP-Verarbeitung. Gesundes Genießen made easy!',
    siteName: 'Indivit',
    type: 'website',
  },
  twitter: {
    site: '@indivitsmoothie',
    creator: '@indivitsmoothie',
    title: 'Indivit: Gesunde Smoothies & Clean Eating für individuelle Ziele | Bio',
    description:
      'Entdecke gesunde Bio-Smoothies für Clean Eating, Intervallfasten & Genuss. Jetzt im Smoothie-Test deinen besten Mix finden & gratis Versand sichern!',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Entdecke gesunde Bio-Smoothies für Clean Eating, Intervallfasten & Genuss. Jetzt im Smoothie-Test deinen besten Mix finden & gratis Versand sichern!"
        />
        <script
          src="https://x.klarnacdn.net/kp/lib/v1/api.js"
          async
          crossOrigin="anonymous"
        ></script>
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PAYPAL_CLIENT_ID}&currency=EUR&components=buttons&vault=true`}
          crossOrigin="anonymous"
        ></script>
        {/* <!-- Google Tag Manager --> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefor;
        e(j, f);
      })(window, document, "script", "dataLayer", "GTM-KTDZQPSZ");`,
          }}
        ></script>

        {/* <!-- End Google Tag Manager --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L6Q6F1V68P"></script>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "pnnv80bdnp");`,
          }}
        ></script>

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-L6Q6F1V68P");`,
          }}
        >
          {/* // G-1M0EJW71XL -> mine */}
          {/* // G-L6Q6F1V68P -> Indivit */}
        </script>

        {/* <title>Indivit | Smoothies zum selber Mixen</title> */}
      </head>
      <body className={` antialiased bg-light`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KTDZQPSZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <AllProviders>
          <ToastContainer />
          <Navbar />
          <CookiesComponent />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </AllProviders>
        <script async src="https://code.jquery.com/jquery-3.5.1.js"></script>
        <script async src="../assets/js/bootstrap.bundle.min.js"></script>
        <script async src="../assets/js/bootstrap.js"></script>
        <script async src="../assets/js/main.js"></script>
        <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        ></script>
      </body>
    </html>
  )
}
