const Contact = () => {
  return (
    <section className='bg-light py-10'>
      <div className='container px-5'>
        <div className='row gx-5 justify-content-center'>
          <div className='col-lg-8 text-center'>
            <h2>Contact me</h2>
            <p className='mb-5'>
              I am available for contract work, when you are ready - let me
              know!
            </p>
            <div className='row gx-5'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon-stack icon-stack-lg bg-orange text-white mb-3'>
                      <i data-feather='mail' />
                    </div>
                    <div className='small'>
                      <a href='mailto:achinga.chris@gmail.com'>
                        achinga.chris@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='icon-stack icon-stack-lg bg-green text-white mb-3'>
                      <i data-feather='smartphone' />
                    </div>
                    <div className='small'>LinkedIn</div>
                  </div>
                </div>
              </div>
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
    </section>
  )
}

export default Contact
