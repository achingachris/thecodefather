const Pagination = () => {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination pagination-blog justify-content-center'>
        <li className='page-item disabled'>
          <a className='page-link' href='#!' aria-label='Previous'>
            <span aria-hidden='true'>«</span>
          </a>
        </li>
        <li className='page-item active'>
          <a className='page-link' href='#!'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#!'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#!'>
            3
          </a>
        </li>
        <li className='page-item disabled'>
          <a className='page-link' href='#!'>
            ...
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#!'>
            12
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#!' aria-label='Next'>
            <span aria-hidden='true'>»</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
