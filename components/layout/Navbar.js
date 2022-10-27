import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>chrisdevcode</a>
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
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link href='/articles'>
                <a className='nav-link'>Articles</a>
              </Link>
            </li>

            {/* Tags Drop Down */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Tags
              </a>
              {/* Here's the magic. Add the .animate and .slideIn classes to your .dropdown-menu and you're all set! */}
              <div
                className='dropdown-menu dropdown-menu-end animate slideIn'
                aria-labelledby='navbarDropdown'
              >
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider' />
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
