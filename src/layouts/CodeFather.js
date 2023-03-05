import Head from 'next/head'
import Footer from './Footer'
import Navigator from './Navigator'

const CodeFather = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chris Achinga | the codeFather</title>
      </Head>
      <Navigator />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default CodeFather
