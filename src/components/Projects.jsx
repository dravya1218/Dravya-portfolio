import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <ProjectCard
        name="Task Manager API"
        description="A production-oriented full-stack task management application with authentication, authorization, task management, testing, and deployment."
        technologies="Python · Flask · SQLite · JWT · RBAC · Pytest · JavaScript"
        github="https://github.com/dravya1218/TASK-MANAGER-API1"
        live="https://task-manager-api-1.vercel.app/"
      />

      <ProjectCard
        name="Expense Tracker V2"
        description="A Flask-based personal finance application for managing expenses, user data, filtering, and financial summaries."
        technologies="Python · Flask · SQLite · Jinja · JavaScript"
        github="https://github.com/dravya1218/EXPV2_FLASK"
        live="https://expv-2-flask.vercel.app/"
      />
    </section>
  )
}

export default Projects