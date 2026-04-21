import { Link } from 'react-router-dom';
import '../style.css'
import './Projects.css'
import { FaGithub } from 'react-icons/fa';
function Projects() {
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
        <div className='Pmain'>
          <h1>Projects Collection</h1>
          <p>On this page, you will find a collection of my completed projects along with those currently under development.</p>
          <p className='p2'>Important: Only finished projects will have their respective dates.</p>
        </div>
        <div className='PList'>
          <div>
            <h2>Login Test</h2>
            <p><strong>Status:</strong> Ongoing</p>
            <p><strong>Description:</strong> This is a project developed to train my programming skills, using JavaScript and Python to create a simple login system. The site does not feature password encryption because I only learned about security standards after the project's creation.</p>
            <p>
            </p>
            <p className='DevP'>
              <strong>Repository</strong><br />
              <a href="https://github.com/CristoferDOliveira/ProjExtensao.Teste3" className='TeamDev' target='_blank' rel="noreferrer" title='GitHub'>
              <FaGithub size={20} color="#ffffff" />Link</a><br />
              <strong>Development Team</strong><br />
              <a href="https://github.com/CristoferDOliveira" target='_blank' rel="noreferrer" title='GitHub' className='TeamDev'>
                <FaGithub size={20} color="#ffffff" /><strong className='TeamName'>CristoferDOliveira</strong></a>
            </p>
          </div>
          <div>
            <h2>Portfolio</h2>
            <p><strong>Status:</strong> Ongoing</p>
            <p><strong>Description:</strong> This project was created to refine my React skills. I enjoyed the process so much that I plan to update it continuously. Here, you can find my goals, projects, resume, and a section about myself. Ultimately, this site serves as a live demonstration of my evolution in software engineering.</p>
            <p>
            </p>
            <p className='DevP'>
              <strong>Repository</strong><br />
              <a href="https://github.com/CristoferDOliveira/ProjExtensao.Teste3" className='TeamDev' target='_blank' rel="noreferrer" title='GitHub'>
              <FaGithub size={20} color="#ffffff" />Link</a><br />
              <strong>Development Team</strong><br />
              <a href="https://github.com/CristoferDOliveira" target='_blank' rel="noreferrer" title='GitHub' className='TeamDev'>
                <FaGithub size={20} color="#ffffff" /><strong className='TeamName'>CristoferDOliveira</strong></a>
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div className='Contact'>
          <h3>Contact Me</h3>
          <p>E-mail:
            <a href="mailto:cristoferdvoliveira@gmail.com" target='_blank'>cristoferdvoliveira@gmail.com</a>
          </p>
          <p>Linkedin:
            <a href="https://www.linkedin.com/in/cristofer-dvorecky-oliveira-306a49404/" target='_blank'>Cristofer Dvorecky Oliveira</a>
          </p>
          <p>GitHub:
            <a href="https://github.com/CristoferDOliveira" target='_blank'>CristoferDOliveira</a>
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
export default Projects;