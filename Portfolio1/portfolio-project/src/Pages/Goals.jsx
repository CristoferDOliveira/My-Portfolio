import { Link } from 'react-router-dom';
import './Goals.css';
import '../style.css';
function Goals() {
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
      <main className='G'>
        <div className='GMain'>
          <h2 className='GRoad'>My Professional Roadmap</h2>
          <p className='Gpar'>Here is a look at my primary goals and the steps I am taking to achieve them.</p>
        </div>
        <div className='GoalsList'>
          <div className='CareerList'>
            <h2>Professional Lists</h2>
            <ul className='WebRoad'>
              <h3>🚀 Full-Stack Web Developer</h3>
              <li>🌎 Learn React for frontend (WebGis)</li>
              <li>🌎 Learn Flask for backend (WebGis)</li>
              <li>🌎 Learn SQL in PostgreSQL for database (WebGis)</li>
              <li>💻 Learn Vue in frontend</li>
              <li>💻 Learn NoSQL in MongoDB for database</li>
              <li>💻 Specialization in CSS/HTML 🌎</li>
            </ul>
            <ul className='GameDev'>
              <h3>🎮 Game Developer</h3>
              <li>💻 Specialization in GML</li>
              <li>👾 Learn how to draw in  pixel art</li>
              <li>💻 Learn C#</li>
              <li>📜 Learn bases of story telling</li>
              <li>💻 Learn how to use Unity</li>
              <li>🏰 Learn bases of RPG organization</li>
              <li>💻 Launch my first simple game</li>
            </ul>
          </div>
          <div className='LifeList'>
            <h2>Life lists</h2>
            <ul className='Travel'>
              <h3>✈ Traveling</h3>
              <li>JP Tokyo, Japan</li>
              <li>IT Rome, Italy</li>
              <li>FR Louvre Museum in Paris, France</li>
              <li>BR São Paulo, Brazil</li>
              <li>BR Rio de Janeiro, Brazil</li>
              <li>BR Gramado, Brazil</li>
              <li>CH Anywhere, Switzerland</li>
            </ul>
            <ul className='Life'>
              <h3>❤ Life Goals</h3>
              <li>💍 Get married</li>
              <li>🏠 Own a home</li>
              <li>💻 Build a high-end Gaming PC</li>
              <li>🎮 Collect all Nintendo consoles</li>
            </ul>
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
export default Goals;