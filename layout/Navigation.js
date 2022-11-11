import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top mb-5'>
      <div className='container'>
        <Link legacyBehavior href='/'>
          <a className='navbar-brand'>chrisDevCode</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <Link legacyBehavior href='/talk-to-me'>
                <a className='nav-link'>Talk to Me</a>
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='https://github.com/achingachris/'>
                GitHub
              </a>
            </li>
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
                Categories
              </a>
              <div
                className='dropdown-menu dropdown-menu-end animate slideIn'
                aria-labelledby='navbarDropdown'
              >
                <a className='dropdown-item' href='#'>
                  React
                </a>
                <a className='dropdown-item' href='#'>
                  Docker
                </a>
                <div className='dropdown-divider' />
                <a
                  className='dropdown-item'
                  href='https://app.netlify.com/sites/codefather/deploys'
                >
                  <picture>
                    <img
                      alt='Netlify Status'
                      src='https://api.netlify.com/api/v1/badges/6a769aea-36f4-45f3-a317-166ca9adcb2c/deploy-status'
                    />
                  </picture>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
