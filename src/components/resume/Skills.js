const Skills = () => {
  return (
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
                    Front-End Development
                </div>
              </div>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Statistical Analysis
                </div>
              </div>
              <div className='col'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Back-End Development
                </div>
              </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3'>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Dev Ops
                </div>
              </div>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Technical Writing
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
                <span className='text-gradient d-inline'>
                  Languages and Tools
                </span>
              </h3>
            </div>
            <div className='row row-cols-1 row-cols-md-3 mb-4'>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  JavaScript
                </div>
              </div>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Python
                </div>
              </div>
              <div className='col'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  APIs and Documentation
                </div>
              </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3'>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Node.js
                </div>
              </div>
              <div className='col mb-4 mb-md-0'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  React/Next.js
                </div>
              </div>
              <div className='col'>
                <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>
                  Django
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
