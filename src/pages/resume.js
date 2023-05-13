const resume = () => {
  return (
    <div className='container px-5 my-5'>
      <div className='text-center mb-5'>
        <h1 className='display-5 fw-bolder mb-0'>
          <span className='text-gradient d-inline'>Resume</span>
        </h1>
      </div>
      <div className='row gx-5 justify-content-center'>
        <div className='col-lg-11 col-xl-9 col-xxl-8'>
          {/* Experience Section*/}
          <section>
            <div className='d-flex align-items-center justify-content-between mb-4'>
              <h2 className='text-primary fw-bolder mb-0'>Experience</h2>
              {/* Download resume button*/}
              {/* Note: Set the link href target to a PDF file within your project*/}
              <a className='btn btn-primary px-4 py-3' href='#!'>
                <div className='d-inline-block bi bi-download me-2' />
                Download Resume
              </a>
            </div>
            {/* Experience Card 1*/}
            <div className='card shadow border-0 rounded-4 mb-5'>
              <div className='card-body p-5'>
                <div className='row align-items-center gx-5'>
                  <div className='col text-center text-lg-start mb-4 mb-lg-0'>
                    <div className='bg-light p-4 rounded-4'>
                      <div className='text-primary fw-bolder mb-2'>
                        2019 - Present
                      </div>
                      <div className='small fw-bolder'>Web Developer</div>
                      <div className='small text-muted'>Stark Industries</div>
                      <div className='small text-muted'>Los Angeles, CA</div>
                    </div>
                  </div>
                  <div className='col-lg-8'>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience Card 2*/}
            <div className='card shadow border-0 rounded-4 mb-5'>
              <div className='card-body p-5'>
                <div className='row align-items-center gx-5'>
                  <div className='col text-center text-lg-start mb-4 mb-lg-0'>
                    <div className='bg-light p-4 rounded-4'>
                      <div className='text-primary fw-bolder mb-2'>
                        2017 - 2019
                      </div>
                      <div className='small fw-bolder'>SEM Specialist</div>
                      <div className='small text-muted'>Wayne Enterprises</div>
                      <div className='small text-muted'>Gotham City, NY</div>
                    </div>
                  </div>
                  <div className='col-lg-8'>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Education Section*/}
          <section>
            <h2 className='text-secondary fw-bolder mb-4'>Education</h2>
            {/* Education Card 1*/}
            <div className='card shadow border-0 rounded-4 mb-5'>
              <div className='card-body p-5'>
                <div className='row align-items-center gx-5'>
                  <div className='col text-center text-lg-start mb-4 mb-lg-0'>
                    <div className='bg-light p-4 rounded-4'>
                      <div className='text-secondary fw-bolder mb-2'>
                        2015 - 2017
                      </div>
                      <div className='mb-2'>
                        <div className='small fw-bolder'>Barnett College</div>
                        <div className='small text-muted'>Fairfield, NY</div>
                      </div>
                      <div className='fst-italic'>
                        <div className='small text-muted'>Master's</div>
                        <div className='small text-muted'>Web Development</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-8'>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Education Card 2*/}
            <div className='card shadow border-0 rounded-4 mb-5'>
              <div className='card-body p-5'>
                <div className='row align-items-center gx-5'>
                  <div className='col text-center text-lg-start mb-4 mb-lg-0'>
                    <div className='bg-light p-4 rounded-4'>
                      <div className='text-secondary fw-bolder mb-2'>
                        2011 - 2015
                      </div>
                      <div className='mb-2'>
                        <div className='small fw-bolder'>ULA</div>
                        <div className='small text-muted'>Los Angeles, CA</div>
                      </div>
                      <div className='fst-italic'>
                        <div className='small text-muted'>Undergraduate</div>
                        <div className='small text-muted'>Computer Science</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-8'>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Divider*/}
          <div className='pb-5' />
          {/* Skills Section*/}
          <section>
            {/* Skillset Card*/}
            <div className='card shadow border-0 rounded-4 mb-5'>
              <div className='card-body p-5'>
                {/* Professional skills list*/}
                <div className='mb-5'>
                  <div className='d-flex align-items-center mb-4'>
                    <div className='feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3'>
                      <i className='bi bi-tools' />
                    </div>
                    <h3 className='fw-bolder mb-0'>
                      <span className='text-gradient d-inline'>
                        Professional Skills
                      </span>
                    </h3>
                  </div>
                  <div className='row row-cols-1 row-cols-md-3 mb-4'>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        SEO/SEM Marketing
                      </div>
                    </div>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Statistical Analysis
                      </div>
                    </div>
                    <div className='col'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Web Development
                      </div>
                    </div>
                  </div>
                  <div className='row row-cols-1 row-cols-md-3'>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Network Security
                      </div>
                    </div>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Adobe Software Suite
                      </div>
                    </div>
                    <div className='col'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        User Interface Design
                      </div>
                    </div>
                  </div>
                </div>
                {/* Languages list*/}
                <div className='mb-0'>
                  <div className='d-flex align-items-center mb-4'>
                    <div className='feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3'>
                      <i className='bi bi-code-slash' />
                    </div>
                    <h3 className='fw-bolder mb-0'>
                      <span className='text-gradient d-inline'>Languages</span>
                    </h3>
                  </div>
                  <div className='row row-cols-1 row-cols-md-3 mb-4'>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        HTML
                      </div>
                    </div>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        CSS
                      </div>
                    </div>
                    <div className='col'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        JavaScript
                      </div>
                    </div>
                  </div>
                  <div className='row row-cols-1 row-cols-md-3'>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Python
                      </div>
                    </div>
                    <div className='col mb-4 mb-md-0'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Ruby
                      </div>
                    </div>
                    <div className='col'>
                      <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                        Node.js
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default resume
