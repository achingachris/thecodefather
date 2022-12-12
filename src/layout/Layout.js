import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ChrisDevCode</title>
        <script
          data-search-pseudo-elements
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js'
          crossorigin='anonymous'
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js'
          crossorigin='anonymous'
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
          crossorigin='anonymous'
        ></script>
      </Head>
      <Navbar />
      <main>
        {children}
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Layout
