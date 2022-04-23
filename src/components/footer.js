import { FaTwitter, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

  return(
    <footer>
      <div className="contact" id="contact-me">
        <h2 className="section-title">Would you like to work togther?</h2>
        <p>Shoot me a message on any of the following</p>
        <ul className="socials">
          <li className="medium">
            <a href="https://twitter.com/folajomi__" target="_blank" rel="noreferer noopener"><FaTwitter style={{color: 'white'}}/></a>
          </li>
          <li className="medium">
            <a href="https://linkedin.com/in/folajomi-shotunde" target="_blank" rel="noreferer noopener"><FaLinkedinIn /></a>
          </li>
          <li className="medium">
            <a href="mailto:folajomi.shotunde@gmail.com" target="_blank" rel="noreferer noopener"><FaEnvelope /></a>
          </li>
        </ul>
      </div>
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer