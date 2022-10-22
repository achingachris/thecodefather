import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/articles'>
        <a>All Articles</a>
      </Link>
      <a>Tags dropdown</a>
    </div>
  )
}

export default Navbar
