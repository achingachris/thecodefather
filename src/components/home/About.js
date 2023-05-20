const About = () => {
  return (
    <section className='bg-light py-5'>
      <div className='container px-5'>
        <div className='row gx-5 justify-content-center'>
          <div className='col-xxl-8'>
            <div className='text-center my-5'>
              <h2 className='display-5 fw-bolder'>
                <span className='text-gradient d-inline'>About Me</span>
              </h2>
              <p className='lead fw-light mb-4'>
                My name is Chris Achinga, and I make Softwares and websites that
                makes you and your business get known.
              </p>
              <p className='text-muted'>
                Chris is a Software Developer. He makes Software and websites
                solutions using javaScript and Python languages. Chris also
                writes technical articles and tutorials.
              </p>
              <div className='d-flex justify-content-center fs-2 gap-4'>
                <a
                  className='text-gradient'
                  href='https://twitter.com/achinga_chris'
                >
                  <i className='bi bi-twitter' />
                </a>
                <a
                  className='text-gradient'
                  href='https://www.linkedin.com/in/chrisachinga/'
                >
                  <i className='bi bi-linkedin' />
                </a>
                <a
                  className='text-gradient'
                  href='https://github.com/achingachris/'
                >
                  <i className='bi bi-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
