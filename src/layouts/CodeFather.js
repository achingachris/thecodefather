import Footer from './Footer'
import Navigator from './Navigator'

const CodeFather = ({ children }) => {
  return (
    <div>
      <Navigator />
      {children}
      <Footer />
    </div>
  )
}

export default CodeFather
