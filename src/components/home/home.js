import Caret from '../../vectors/caret.svg'
import ProjectImg from '../../images/project.png'
import { Link } from "react-router-dom"

const Home = () => {

  return(
    <div className="homepage">

      <section className="hero">
        <div className="container hero-text">
          <p>DO</p>
          <p className="gradient-text">&nbsp; &nbsp; AWESOME</p>
          <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;EVERYDAY</p>
        </div>
        
        <Link to="/#portfolio"> <img className="scroll" src={Caret} /> </Link>
      </section>

      <section id="portfolio">
        <div className='container'>
          <h3 className='section-title'>Portfolio</h3>

          <div className='portfolio'>
            <article className='project-card'>
              <img src={ProjectImg} className='project-img' />
              <div className='project-details'>
                <h5 className='project-name'>Project</h5>
                <p className='project-description'>Facilisi vitae, vel eget id dolor. Massa dui, nisi leo augue viverra bibendum. Turpis semper eget facilisi tellus tellus cras arcu neque quam. Sodales aliquam id tincidunt cras massa rutrum commodo. </p>

                <p className='project-tags'>React, Redux, Styled Components</p>
              </div>
              <span className='project-number'>1</span>          
            </article>

            <article className='project-card'>
              <img src={ProjectImg} className='project-img' />
              <div className='project-details'>
                <h5 className='project-name'>Project</h5>
                <p className='project-description'>Facilisi vitae, vel eget id dolor. Massa dui, nisi leo augue viverra bibendum. Turpis semper eget facilisi tellus tellus cras arcu neque quam. Sodales aliquam id tincidunt cras massa rutrum commodo. </p>

                <p className='project-tags'>React, Redux, Styled Components</p>
              </div>
              <span className='project-number'>2</span>          
            </article>

            <article className='project-card'>
              <img src={ProjectImg} className='project-img' />
              <div className='project-details'>
                <h5 className='project-name'>Project</h5>
                <p className='project-description'>Facilisi vitae, vel eget id dolor. Massa dui, nisi leo augue viverra bibendum. Turpis semper eget facilisi tellus tellus cras arcu neque quam. Sodales aliquam id tincidunt cras massa rutrum commodo. </p>

                <p className='project-tags'>React, Redux, Styled Components</p>
              </div>
              <span className='project-number'>3</span>          
            </article>

            <article className='project-card'>
              <img src={ProjectImg} className='project-img' />
              <div className='project-details'>
                <h5 className='project-name'>Project</h5>
                <p className='project-description'>Facilisi vitae, vel eget id dolor. Massa dui, nisi leo augue viverra bibendum. Turpis semper eget facilisi tellus tellus cras arcu neque quam. Sodales aliquam id tincidunt cras massa rutrum commodo. </p>

                <p className='project-tags'>React, Redux, Styled Components</p>
              </div>
              <span className='project-number'>4</span>          
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home