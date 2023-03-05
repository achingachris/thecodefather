const AboutMe = () => {
  return (
    <section className='page-section mb-0' id='about'>
      <div className='container'>
        {/* About Section Heading*/}
        <h2 className='page-section-heading text-center text-uppercase'>
          who is this guy?
        </h2>
        {/* Icon Divider*/}
        <div className='divider-custom divider-light'>
          <div className='divider-custom-line' />
          <div className='divider-custom-icon'>
            <i className='fas fa-star' />
          </div>
          <div className='divider-custom-line' />
        </div>
        {/* About Section Content*/}
        <div className='row'>
          <div className='col-lg-4 ms-auto'>
            <p className='lead'>
              Chris is a Software Developer. He makes Software and websites
              solutions using javaScript and Python languages. Chris also writes
              technical articles and tutorials.
            </p>
          </div>
          <div className='col-lg-4 me-auto'>
            <p className='lead'>
              Chris has been a freelancer for the last 2 years and is looking to
              get a full time role as a Software Developer. He is active in
              Developer communities and is a regular contributor to minor
              projects on his GitHub account.
            </p>
          </div>
        </div>
        {/* About Section Button*/}
        <div className='text-center mt-4'>
          <a
            className='btn btn-xl btn-outline-dark'
            target={'_blank'}
            href='https://docs.google.com/document/d/14rkWMF1pL1qF5eaQdFS0Na6CP0Y2yEv-1NPsuPOLZa8/edit?usp=sharing'
          >
            <i className='fas fa-download me-2' />
            Get My Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
