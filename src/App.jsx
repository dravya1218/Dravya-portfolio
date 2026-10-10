
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Resume from './components/Resume'

function App() {
  const handleMouseMove = (event) => {
    document.documentElement.style.setProperty(
      '--mouse-x',
      `${event.clientX}px`
    )
    document.documentElement.style.setProperty(
      '--mouse-y',
      `${event.clientY}px`
    )
  }

  return (
    <div className="portfolio" onMouseMove={handleMouseMove}>
      <div className="mouse-glow" aria-hidden="true" />

      <Navbar />

      <main className="main-content">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
