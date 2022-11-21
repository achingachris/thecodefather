import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // enable google analytics track each page
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // tag => G-W21XGX4BNB
  // load bootstrap javascript files
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
