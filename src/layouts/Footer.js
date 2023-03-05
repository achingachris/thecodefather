const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='footer text-center'>
        <div className='container'>
          <div className='row'>
            {/* Footer Location*/}
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Postal Address</h4>
              <p className='lead mb-0'>
                P.O BOX 254740428522
                <br />
                80100 - MOMBASA
              </p>
            </div>
            {/* Footer Social Icons*/}
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Around the Internet</h4>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fab fa-fw fa-facebook-f' />
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fab fa-fw fa-twitter' />
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fab fa-fw fa-linkedin-in' />
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fab fa-fw fa-github' />
              </a>
            </div>
            {/* Footer About Text*/}
            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>About This Website</h4>
              <p className='lead mb-0'>
                A template on steriods. From HTML to NextJS with React Stuff.
                Feel free to ask for a source Code. I do not bite, at all.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className='copyright py-4 text-center text-white'>
        <div className='container'>
          <small>Copyright © Chris Achinga {year}</small>
        </div>
      </div>
    </>
  )
}

export default Footer
