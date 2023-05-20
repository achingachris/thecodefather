import Head from 'next/head'
import Navigator from './Navigator'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chris Achinga | the codeFather</title>
        <meta
          name='description'
          content='Chris Ndanyi Achinga: Experienced Fullstack Developer specializing in NodeJs, React, Next.Js, Python Django, and Angular.'
        />
        <meta name='title' content='Chris Achinga | the codeFather' />
        <meta
          name='description'
          content='Chris Ndanyi Achinga: Experienced Fullstack Developer specializing in NodeJs, React, Next.Js, Python Django, and Angular.'
        />
        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.chrisdevcode.xyz/' />
        <meta property='og:title' content='Chris Achinga | the codeFather' />
        <meta
          property='og:description'
          content='Chris Ndanyi Achinga: Experienced Fullstack Developer specializing in NodeJs, React, Next.Js, Python Django, and Angular.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/chrisdevcode/image/upload/v1684594840/DSC_7787_bxsbx6.jpg'
        />
        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.chrisdevcode.xyz/' />
        <meta
          property='twitter:title'
          content='Chris Achinga | the codeFather'
        />
        <meta
          property='twitter:description'
          content='Chris Ndanyi Achinga: Experienced Fullstack Developer specializing in NodeJs, React, Next.Js, Python Django, and Angular.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/chrisdevcode/image/upload/v1684594840/DSC_7787_bxsbx6.jpg'
        />
        <meta
          name='keywords'
          content='Chris Ndanyi Achinga, Fullstack Developer, Software Engineer, NodeJs, React, Next.Js, Python Django, Angular'
        />
        <meta name='robots' content='index,follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href='https://www.chrisdevcode.xyz/' />
        <link
          rel='alternate'
          hrefLang='en-us'
          href='https://www.chrisdevcode.xyz/'
        />
        <meta
          property='og:title'
          content='Chris Ndanyi Achinga: Fullstack Developer'
        />
        <meta
          property='og:description'
          content='Ambitious and versatile software engineer passionate about full-stack development and technical writing.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/chrisdevcode/image/upload/v1684594840/DSC_7787_bxsbx6.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
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
