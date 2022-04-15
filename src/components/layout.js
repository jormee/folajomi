import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {

  return(
    <div className="layout">
      <div className='grow'>
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout