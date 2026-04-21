import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Goals from './Pages/Goals.jsx' 
import Resume from './Pages/Resume.jsx'
import Projects from './Pages/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Goals" element={<Goals />} /> 
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>,
)