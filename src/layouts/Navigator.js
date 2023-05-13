import Link from 'next/link'

const Navigator = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top mb-5'
      id='mainNav'
    >
      <div className='container'>
        <Link href='/' legacyBehavior>
          <a className='navbar-brand'>Achinga, Chris</a>
        </Link>
        <button
          className='navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i className='fas fa-bars' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            {/* <li className='nav-item mx-0 mx-lg-1'>
              <Link href='/my-resume' legacyBehavior>
                <a className='nav-link py-3 px-0 px-lg-3 rounded'>my resume</a>
              </Link>
            </li> */}
            <li className='nav-item mx-0 mx-lg-1'>
              <Link href='/my-articles' legacyBehavior>
                <a className='nav-link py-3 px-0 px-lg-3 rounded'>
                  my articles
                </a>
              </Link>
            </li>
            {/* <li className='nav-item mx-0 mx-lg-1'>
              <a className='nav-link py-3 px-0 px-lg-3 rounded' href='#contact'>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigator
