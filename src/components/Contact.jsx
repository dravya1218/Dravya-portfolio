import { handleEmailClick, MAILTO_HREF } from '../email'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's build something.</h2>

      <p>
        I'm currently looking for backend development opportunities and
        internships.
      </p>

      <p>
        If you're interested in working together, discussing a project, or
        simply connecting, feel free to reach out.
      </p>

      <div className="contact-links">
        <a href={MAILTO_HREF} onClick={handleEmailClick}>
          Email
        </a>

        <a href="tel:+919925003684">Phone</a>

        <a
          href="https://wa.me/919925003684"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a
          href="https://github.com/dravya1218"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dravya-vasava-8396362a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/dravya___/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

      </div>
    </section>
  )
}

export default Contact
