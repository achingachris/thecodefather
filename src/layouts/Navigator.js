import Link from 'next/link'

const Navigator = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white py-3'>
      <div className='container px-5'>
        <Link href='/' legacyBehavior>
          <a className='navbar-brand'>
            <span className='fw-bolder text-primary'>Chris Achinga</span>
          </a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder'>
            <li className='nav-item'>
              <Link href='/' legacyBehavior>
                <a className='nav-link'>Home</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/resume' legacyBehavior>
                <a className='nav-link'>Resume</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/sessions' legacyBehavior>
                <a className='nav-link'>Sessions</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/projects' legacyBehavior>
                <a className='nav-link'>Projects</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/articles' legacyBehavior>
                <a className='nav-link'>Articles</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/contact' legacyBehavior>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigator
