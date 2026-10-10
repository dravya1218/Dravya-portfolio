import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa'
import { handleEmailClick, MAILTO_HREF } from '../email'

function Navbar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = document.querySelectorAll('main section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav id="navbar" className="sidebar">

      <div className="sidebar-intro">
        <h1>DRAVYA</h1>

        <h2>Backend-focused software developer.</h2>

        <p>
          I build reliable backend systems, APIs, and production-ready
          applications.
        </p>
      </div>

      <div className="nav-links">

        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
        >
          <span></span>
          ABOUT
        </a>

        <a
          href="#education"
          className={activeSection === 'education' ? 'active' : ''}
        >
          <span></span>
          EDUCATION
        </a>

        <a
          href="#skills"
          className={activeSection === 'skills' ? 'active' : ''}
        >
          <span></span>
          SKILLS
        </a>

        <a
          href="#projects"
          className={activeSection === 'projects' ? 'active' : ''}
        >
          <span></span>
          PROJECTS
        </a>

        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
        >
          <span></span>
          CONTACT
        </a>

      </div>

      <div className="social-links">

        <a
          href="https://github.com/dravya1218"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dravya-vasava-8396362a6/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href={MAILTO_HREF}
          onClick={handleEmailClick}
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.instagram.com/dravya___/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/919925003684"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="tel:+919925003684"
          aria-label="Phone"
        >
          <FaPhone />
        </a>

      </div>

    </nav>
  )
}

export default Navbar