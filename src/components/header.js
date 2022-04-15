import Headroom from 'react-headroom'
import { Link } from 'react-router-dom'

const Header = () => {



  return(
    <Headroom>
      <header className={`header`}>
        <div className="container">
          <Link to="/"><h1 className="logo grow">FOLAJOMI</h1></Link>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
              <li className="nav-item"><Link to="/blog">Blog</Link></li>
              <li className="nav-item"><Link to="/contact-me">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </Headroom>
  )
}

export default Header