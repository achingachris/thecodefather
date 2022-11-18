const Footer = () => {
  // get the current year
  const year = new Date().getFullYear()
  return (
    <footer className='py-3 bg-dark'>
      <div className='container px-4 px-lg-5'>
        <p className='m-0 text-center text-white'>
          Copyright © Chris Achinga {year} | Deployed on Netlify
        </p>
        <p></p>
      </div>
    </footer>
  )
}

export default Footer
