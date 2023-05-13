import Navigator from './Navigator'

const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column h-100'>
      <Navigator />
      <main className='flex-shrink-0'>{children}</main>
    </div>
  )
}

export default Layout
