const Experience = () => {
  return (
    <section>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h2 className='text-primary fw-bolder mb-0'>Slides and Presentations</h2>
        {/* Download resume button*/}
        {/* Note: Set the link href target to a PDF file within your project*/}

      </div>
      <div className='card shadow border-0 rounded-4 mb-5'>
        <div className='card-body p-5'>
          <div className='row align-items-center gx-5'>
            <div className='col text-center text-lg-start mb-4 mb-lg-0'>
              <div className='bg-light p-4 rounded-4'>
                <div className='text-primary fw-bolder mb-2'>
                  October 14, 2023
                </div>
                <div className='small fw-bolder'>GDSC Strathmore</div>
                <div className='small text-muted'>Virtual</div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div>
                <h1>Introduction To Git and GitHub</h1>
                <p>Link: <a href="https://docs.google.com/presentation/d/1qk59BvtqkeU6sthYGqidfmQmXhnFbxxFluwkzN094Lo/edit?usp=sharing">View Slides Here</a></p>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
