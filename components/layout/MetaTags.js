import Head from 'next/head'

const MetaTags = ({ pageTitle, pageDescription, pageURL, pageImage }) => {
  return (
    <Head>
      <meta property='og:site_name' content='ChrisDevCode' />
      <title>{`${pageTitle}: by Chris Achinga`}</title>
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={pageDescription} />
      <meta name='google' content='nositelinkssearchbox' />
      <meta name='robots' content='all' />
      <meta property='og:description' content={pageDescription} />
      <meta
        property='og:image:alt'
        content={`Image for ${pageTitle} by Chris Achinga`}
      />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:type' content='article' />
      <meta property='og:url' content={pageURL} />
      <meta property='og:image' content={pageImage} />
    </Head>
  )
}

export default MetaTags

MetaTags.defaultProps = {
  pageTitle: 'ChrisDevCode',
  pageDescription:
    'ChrisDevCode is a blog about web development and programming.',
  pageURL: 'https://codefather.netlify.app/',
  pageImage: 'https://chrisdevcode.com/images/chrisdevcode.png',
}
