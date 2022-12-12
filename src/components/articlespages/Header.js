const Header = () => {
  return (
    <header
      className='page-header-ui page-header-ui-dark bg-img-cover overlay overlay-60'
      style={{
        backgroundImage:
          'url(https://source.unsplash.com/PTRzqc_h1r4/1600x900)',
      }}
    >
      <div className='page-header-ui-content position-relative'>
        <div className='container px-5 text-center'>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='page-header-ui-title mb-3'>
                ChrisDevCode Articles and Tutorials
              </h1>
              <p className='page-header-ui-text mb-0'>
                Technical Articles and Tutorials
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
  )
}

export default Header
