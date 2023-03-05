import ArticleCard from './ArticleCard'

const Articles = () => {
  return (
    <>
      {/* Page Content */}
      <div className='container mt-5'>
        <ArticleCard />
        {/* Pagination */}
        <ul className='pagination justify-content-center'>
          <li className='page-item'>
            <a className='page-link' href='#' aria-label='Previous'>
              <span aria-hidden='true'>«</span>
              <span className='sr-only'>Previous</span>
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#' aria-label='Next'>
              <span aria-hidden='true'>»</span>
              <span className='sr-only'>Next</span>
            </a>
          </li>
        </ul>
      </div>
      {/* /.container */}
    </>
  )
}

export default Articles


