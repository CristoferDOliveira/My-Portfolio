import '../style.css';
import './Home.css';
import icon from '../assets/FotoCris.jpg';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const programming = [
  { name: "GML", level: "●●●○○" },
  { name: "HTML/CSS", level: "●●●○○" },
  { name: "JavaScript (React)", level: "●●○○○" },
  { name: "C", level: "●●○○○" },
  { name: "Python (Flask)", level: "●○○○○" },
  { name: "Python", level: "●○○○○" },
];

const languages = [
  { name: "Portuguese", level: "●●●●●" },
  { name: "English", level: "●●●●○" },
];

const Systems = [
  { name: "Windows", level: "●●●○○" },
  { name: "Linux", level: "○○○○○" },
  { name: "MacOS", level: "○○○○○" },
];

function Home() {
  return (
    <main>
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

      <div className='Principal'>
        <div className='MainInformation'>
          <div className='coreinfo'>
            <img src={icon} alt="Cristofer Foto" className='icon' />
            <div className='txtinfo'>
              <h1>Cristofer D. Oliveira</h1>
              <p>Web development student</p>
            </div>
          </div>
        </div>
        <div className='SocialLinks'>
          <a href="mailto:cristoferdvoliveira@gmail.com" title='E-Mail'>
            <IoMdMail size={20} color="#EA4335" />
          </a>
          <a href="https://www.instagram.com/cristofer_dvo/" target='_blank' rel="noreferrer" title='Instagram'>
            <FaInstagram size={20} style={{ fill: "url(#insta-gradient)" }} />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="insta-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop stopColor="#285AEB" offset="0%" />
                  <stop stopColor="#d6249f" offset="60%" />
                  <stop stopColor="#fdf497" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="https://github.com/CristoferDOliveira" target='_blank' rel="noreferrer" title='GitHub'>
            <FaGithub size={20} color="#ffffff" />
          </a>
          <a href="https://www.linkedin.com/in/cristofer-dvorecky-oliveira-306a49404/" target='_blank' rel="noreferrer" title='Linkedin'>
            <FaLinkedin size={20} color="#0077B5" />
          </a>
        </div>
      </div>

      <div className='AboutMe'>
        <h2>About Me</h2>
        <h3><strong className='log'>console.log</strong>(<strong className='Hello'>"Hello, World!"</strong>);</h3>
        <p>My name is Cristofer Dvorecky Oliveira! I am a Web Development student from Brazil.</p>
        <p>I'm focused on programming with JavaScript (React) and HTML/CSS.</p>
        <p>However, my main goal is to become a game developer.</p>

        <h3>Skills</h3>
        <div className="skills-list">
          <h4>Programming</h4>
          {programming.map((prog, index) => (
            <div key={index} className="skill-item">
              <span>{prog.name}</span>
              <span className="skill-dots">{prog.level}</span>
            </div>
          ))}
          <h4>Operational Systems</h4>
          {Systems.map((sys, index) => (
            <div key={index} className="skill-item">
              <span>{sys.name}</span>
              <span className="skill-dots">{sys.level}</span>
            </div>
          ))}
          <h4>Languages</h4>
          {languages.map((lang, index) => (
            <div key={index} className="skill-item">
              <span>{lang.name}</span>
              <span className="skill-dots">{lang.level}</span>
            </div>
          ))}
        </div>

        <div className="current-path">
          <h3>Current Path</h3>
          <p>
            At the moment, I am a student without a formal job or major projects yet,
            but I am working to join the <strong>WebGis</strong> extension project at UEPG.
            This is my first step toward a long-term career in software development.
          </p>
          <p>
            My first perspective is to be a game developer. I've been
            experimenting with <strong>game programming</strong> recently.
          </p>
          <p>
            At university, I am currently studying <strong>C</strong>, and I consider
            myself to be at an entry to intermediate level in the language.
          </p>
        </div>

        <div className="journey-section">
          <h3>My Journey</h3>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">2022</div>
                <h4>RPG Maker</h4>
                <p>First steps into game logic and event-based programming.</p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">2023</div>
                <h4>GameMaker (GML)</h4>
                <p>Started coding with GML, building more complex game prototypes.</p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">23/02/2026</div>
                <h4>University & C</h4>
                <p>Began my formal education at UEPG, mastering C and low-level concepts.</p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">23/03/2026</div>
                <h4>Web Development</h4>
                <p>Started studies from JavaScript(React), HTML/CSS, Python (Flask), SQL and HTTPS protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className='Contact'>
          <h3>Contact Me</h3>
          <p>E-mail: 
            <a href="mailto:cristoferdvoliveira@gmail.com" target='_blank' rel="noreferrer"> cristoferdvoliveira@gmail.com</a>
          </p>
          <p>Linkedin: 
            <a href="https://www.linkedin.com/in/cristofer-dvorecky-oliveira-306a49404/" target='_blank' rel="noreferrer"> Cristofer Dvorecky Oliveira</a>
          </p>
          <p>GitHub: 
            <a href="https://github.com/CristoferDOliveira" target='_blank' rel="noreferrer"> CristoferDOliveira</a>
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
    </main>
  );
}

export default Home;