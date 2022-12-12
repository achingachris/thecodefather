import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container'>
      <header className='d-flex justify-content-center py-3'>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link href='/' legacyBehavior>
            <a className='nav-link active' aria-current='page'>
              Home
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/articles' legacyBehavior>
              <a className='nav-link'>Articles</a>
            </Link>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Resume
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
