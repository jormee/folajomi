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
              <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a href="https://blog.folajomi.dev">Blog</a></li>
              <li className="nav-item"><a href="#contact-me">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </Headroom>
  )
}

export default Header