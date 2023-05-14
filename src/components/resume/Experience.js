const Experience = () => {
  return (
    <section>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h2 className='text-primary fw-bolder mb-0'>Experience</h2>
        {/* Download resume button*/}
        {/* Note: Set the link href target to a PDF file within your project*/}
        <a
          className='btn btn-primary px-4 py-3'
          href='https://docs.google.com/document/d/14rkWMF1pL1qF5eaQdFS0Na6CP0Y2yEv-1NPsuPOLZa8/edit?usp=sharing'
          target='_blank'
        >
          <div className='d-inline-block bi bi-download me-2' />
          Download Resume
        </a>
      </div>
      {/* Experience Card 1*/}
      {/* free lancing  */}
      <div className='card shadow border-0 rounded-4 mb-5'>
        <div className='card-body p-5'>
          <div className='row align-items-center gx-5'>
            <div className='col text-center text-lg-start mb-4 mb-lg-0'>
              <div className='bg-light p-4 rounded-4'>
                <div className='text-primary fw-bolder mb-2'>
                  Jan 2020 - Present
                </div>
                <div className='small fw-bolder'>Software/Web Developer</div>
                <div className='small text-muted'>Freelance</div>
                <div className='small text-muted'>Remote</div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                <ol>
                  <li>
                    Built a voting platform for an award scheme in Mombasa
                    County, increasing participation and engagement.
                  </li>
                  <li>
                    Created user-friendly and accessible websites for NGOs,
                    improving their online presence through better SEO.
                  </li>
                  <li>
                    Delivered innovative and effective full-stack applications
                    that drive positive impact and improve business outcomes for
                    various clients.
                  </li>
                  <li>
                    {' '}
                    Strong problem-solving skills, attention to detail, and
                    ability to work collaboratively.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Card 2*/}
      {/* swahilipot */}
      <div className='card shadow border-0 rounded-4 mb-5'>
        <div className='card-body p-5'>
          <div className='row align-items-center gx-5'>
            <div className='col text-center text-lg-start mb-4 mb-lg-0'>
              <div className='bg-light p-4 rounded-4'>
                <div className='text-primary fw-bolder mb-2'>
                  Nov 2020 - Present
                </div>
                <div className='small fw-bolder'>
                  Software and Systems Developer
                </div>
                <div className='small text-muted'>
                  Swahilipot Hub Foundation
                </div>
                <div className='small text-muted'>Mombasa, Kenya</div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                <ol>
                  <li>
                    Raised awareness of tech trends and best practices and
                    fostered the sharing of technical skills among youth.
                  </li>
                  <li>
                    Improved online platform performance and security for the
                    Swahilipot Hub Foundation.
                  </li>
                  <li>
                    Mentored and supervised students from higher education
                    institutes across Kenya, providing practical learning
                    opportunities and real-life experience.
                  </li>
                  <li>
                    Contributed to internal systems and provided software
                    development consultation.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Card 3*/}
      {/* Technical Writer */}
      <div className='card shadow border-0 rounded-4 mb-5'>
        <div className='card-body p-5'>
          <div className='row align-items-center gx-5'>
            <div className='col text-center text-lg-start mb-4 mb-lg-0'>
              <div className='bg-light p-4 rounded-4'>
                <div className='text-primary fw-bolder mb-2'>
                  Jan 2020 - Present
                </div>
                <div className='small fw-bolder'>Technical Writing & Blogs</div>
                <div className='small text-muted'>Contracts, and Personal</div>
                <div className='small text-muted'>Around the World</div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                <ol>
                  <li>
                    Simplifying complex programming concepts and guides to easy
                    short principles in a friendly tone
                  </li>
                  <li>
                    Worked with different companies in Software Development
                    industries to write technical articles and tutorials for
                    their products and marketing tutorials for tools and
                    products.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Card 4*/}
      {/* Uhuru Pies */}
      <div className='card shadow border-0 rounded-4 mb-5'>
        <div className='card-body p-5'>
          <div className='row align-items-center gx-5'>
            <div className='col text-center text-lg-start mb-4 mb-lg-0'>
              <div className='bg-light p-4 rounded-4'>
                <div className='text-primary fw-bolder mb-2'>
                  Aug 2020 - Jul 2021
                </div>
                <div className='small fw-bolder'>Frontend Developer</div>
                <div className='small text-muted'>Uhuru Pies</div>
                <div className='small text-muted'>United States, (Remote)</div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                <ol>
                  <li>
                    Improved eCommerce platform performance and accessibility
                    for Uhuru Pies, resulting in increased customer satisfaction
                    and higher sales.
                  </li>
                  <li>
                    Successfully executed a seamless platform migration,
                    minimizing disruptions and ensuring a positive experience
                    for customers and stakeholders.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
