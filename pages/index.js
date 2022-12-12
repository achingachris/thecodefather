import Image from 'next/image'

const Home = () => {
  return (
    <>
      <header className='page-header-ui page-header-ui-light bg-white'>
        <div className='page-header-ui-content'>
          <div className='container px-5'>
            <div className='row gx-5 justify-content-center'>
              <div className='col-xl-8 col-lg-10 text-center'>
                <Image
                  className='mb-4'
                  src='/redditavataar.png'
                  style={{ width: '15rem' }}
                  width={200}
                  height={200}
                  alt='...'
                />
                <h1 className='page-header-ui-title'>Chris Achinga</h1>
                <p className='page-header-ui-text'>
                  I write Code on{' '}
                  <a href='https://github.com/achingachris/'>GitHub</a> and
                  <a href='https://chrisdevcode.hashnode.dev/'> articles</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='svg-border-rounded text-light'>
          {/* Rounded SVG Border*/}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 144.54 17.34'
            preserveAspectRatio='none'
            fill='currentColor'
          >
            <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Home
