import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Resume from './components/Resume'

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main className="main-content">
        <About />
        <Education />
        <Skills/>
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App