import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>the CodeFather</title>
        {/* google adsence */}
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9257433021714216'
          crossorigin='anonymous'
        ></script>
      </Head>
      <Navigation />
      <main className='mt-5'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
