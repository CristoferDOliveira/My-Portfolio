import { Link } from 'react-router-dom';
import '../style.css'
import './Resume.css'

function Resume() {
  return (
    <>
      <header>
        <nav>
          <div>
            <p>Cristofer</p>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Goals">Goals</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Resume">Resume</Link>
          </div>
        </nav>
      </header>

      <main>
        <div>
          <div className='Warning'>
            <h1>RESUME UNDER CONSTRUCTION</h1>
            <p>The resume for this profile is currently being updated. Please check back soon or contact me for more information.</p>
          </div>
        </div>
      </main>

      <footer>
        <div className='Contact'>
          <h3>Contact Me</h3>
          <p>E-mail:
            <a href="mailto:cristoferdvoliveira@gmail.com" target='_blank' rel="noreferrer">cristoferdvoliveira@gmail.com</a>
          </p>
          <p>Linkedin:
            <a href="https://www.linkedin.com/in/cristofer-dvorecky-oliveira-306a49404/" target='_blank' rel="noreferrer">Cristofer Dvorecky Oliveira</a>
          </p>
          <p>GitHub:
            <a href="https://github.com/CristoferDOliveira" target='_blank' rel="noreferrer">CristoferDOliveira</a>
          </p>
        </div>
        <div className='Map'>
          <h3>Site Map</h3>
          <Link to="/">Home</Link>
          <Link to="/Goals">Goals</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Resume">Resume</Link>
        </div>
      </footer>
    </>
  );
}

export default Resume;