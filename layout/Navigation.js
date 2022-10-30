const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top mb-5'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          chrisDevCode
        </a>
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
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact
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
                Click Me!
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

export default Navigation
