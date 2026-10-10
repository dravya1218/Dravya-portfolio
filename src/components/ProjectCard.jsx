function ProjectCard(props) {
  return (
    <article className="project-card">
      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <p>{props.technologies}</p>

      <div className="project-links">
         <a href={props.github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={props.live} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  )
}

export default ProjectCard