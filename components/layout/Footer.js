const Footer = () => {
  // get current year and month
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  return (
    <div className='container'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a
              href='https://docs.google.com/document/d/14rkWMF1pL1qF5eaQdFS0Na6CP0Y2yEv-1NPsuPOLZa8/edit?usp=sharing'
              className='nav-link px-2 text-muted'
            >
              My Resume
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://github.com/achingachris/'
              className='nav-link px-2 text-muted'
            >
              My GitHub
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://www.linkedin.com/in/chrisachinga/'
              className='nav-link px-2 text-muted'
            >
              My LinkedIn
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://twitter.com/achinga_chris'
              className='nav-link px-2 text-muted'
            >
              My Twitter
            </a>
          </li>
        </ul>
        <p className='text-center text-muted'>
          © {month}.{year} chrisdevcode
        </p>
      </footer>
    </div>
  )
}

export default Footer
