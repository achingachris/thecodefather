import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>the CodeFather</title>
      </Head>
      <Navigation />
      <main className='mt-5'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
