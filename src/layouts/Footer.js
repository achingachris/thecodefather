const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='bg-white py-4 mt-auto'>
      <div className='container px-5'>
        <div className='row align-items-center justify-content-between flex-column flex-sm-row'>
          <div className='col-auto'>
            <div className='small m-0'>Copyright © Your Website 2023</div>
          </div>
          <div className='col-auto'>
            <a className='small' href='#!'>
              Privacy
            </a>
            <span className='mx-1'>·</span>
            <a className='small' href='#!'>
              Terms
            </a>
            <span className='mx-1'>·</span>
            <a className='small' href='#!'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
