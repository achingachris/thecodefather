import React from 'react'

const Volunteer = () => {
  return (
    <section>
      <h2 className='text-secondary fw-bolder mb-4'>
        Volunteering And Community
      </h2>
      {/* Education Card 1*/}
      <div className='card shadow border-0 rounded-4 mb-5'>
        <div className='card-body p-5'>
          <div className='row align-items-center gx-5'>
            <div className='col text-center text-lg-start mb-4 mb-lg-0'>
              <div className='bg-light p-4 rounded-4'>
                <div className='text-secondary fw-bolder mb-2'>
                  2020 - Present
                </div>
                <div className='mb-2'>
                  <div className='small fw-bolder'>
                    Green World Campaign Kenya
                  </div>
                  <div className='small text-muted'>Mombasa, Kenya</div>
                </div>
                <div className='fst-italic'>
                  <div className='small text-muted'>Software Engineering</div>
                  <div className='small text-muted'>Technical Consultation</div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                Building and visualizing for the AIRS project that helps reward
                communities that engage in regenrative agriculture in Kenya.
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
                  Aug 2022 - Present
                </div>
                <div className='mb-2'>
                  <div className='small fw-bolder'>OnlyDevs Ke</div>
                  <div className='small text-muted'>Mombasa, Kenya</div>
                </div>
                <div className='fst-italic'>
                  <div className='small text-muted'>Community Lead</div>
                  <div className='small text-muted'>Technical Mentor</div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                Organize Technical meetups and mentorship programs for the local
                community. Give talks and mentorship on various technical topics
                in the tech industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Volunteer
