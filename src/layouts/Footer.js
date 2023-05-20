const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='bg-white py-4 mt-auto'>
      <div className='container px-5'>
        <div className='row align-items-center justify-content-between flex-column flex-sm-row'>
          <div className='col-auto'>
            <div className='small m-0'>Copyright © Chris N. Achinga {year}</div>
          </div>
          <div className='col-auto'>
            <a
              className='small'
              href='https://www.linkedin.com/in/chrisachinga/'
            >
              LinkedIn
            </a>
            <span className='mx-1'>·</span>
            <a className='small' href='https://twitter.com/achinga_chris'>
              Twitter
            </a>
            <span className='mx-1'>·</span>
            <a
              className='small'
              href='https://stackoverflow.com/users/11450095/achinga'
            >
              StackOver Flow
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
