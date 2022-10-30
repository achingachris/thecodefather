const Footer = () => {
  // get the current year
  const year = new Date().getFullYear()
  return (
    <footer className='py-3 bg-dark'>
      <div className='container px-4 px-lg-5'>
        <p className='m-0 text-center text-white'>
          Copyright © Chris Achinga {year} | Deployed on Netlify
          <a href='https://app.netlify.com/sites/codefather/deploys'>
            <picture>
              <img
                alt='Netlify Status'
                src='https://api.netlify.com/api/v1/badges/6a769aea-36f4-45f3-a317-166ca9adcb2c/deploy-status'
              />
            </picture>
          </a>
        </p>
        <p></p>
      </div>
    </footer>
  )
}

export default Footer
