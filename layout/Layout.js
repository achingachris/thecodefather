import Navigation from './Navigation'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className='bg-dark text-white'>
      <Navigation />
      <main className='container'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
