/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Favicon*/}
        <link rel='icon' type='image/x-icon' href='assets/favicon.ico' />
        {/* Custom Google font*/}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        {/* Bootstrap icons*/}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'
          rel='stylesheet'
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href='/css/styles.css' rel='stylesheet' />
      </Head>
      <body id='page-top'>
        <Main />
        <NextScript />
        {/* <!-- Bootstrap core JS--> */}
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'></script>
        {/* <!-- Core theme JS--> */}
        <script src='/js/scripts.js'></script>
      </body>
    </Html>
  )
}
