import Head from 'next/head'
import Navigator from './Navigator'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chris Achinga | the codeFather</title>
      </Head>
      <div className='d-flex flex-column h-100'>
        <Navigator />
        <main className='flex-shrink-0'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
