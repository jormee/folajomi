import { Link } from "react-router-dom"

import Portfolio from '../portfolio'
import Caret from '../../vectors/caret.svg'

const Home = () => {

  return(
    <div className="homepage">

      <section className="hero">
        <div className="container hero-text">
          <p>DO</p>
          <p className="gradient-text">&nbsp; &nbsp; AWESOME</p>
          <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;EVERYDAY</p>
        </div>
        
        <a href="#portfolio"> <img className="scroll" src={Caret} /> </a>
      </section>

      <section id="portfolio">
        <div className='container'>
          <h3 className='section-title'>Portfolio</h3>         
          <Portfolio />            
        </div>
      </section>
    </div>
  )
}

export default Home