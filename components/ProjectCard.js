function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div 
      className="project-card"
      onClick={() => window.open(github, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="project-card-tech">{tech}</span>
      
      <div className="project-links">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="project-link"
        >
          <strong>GitHub →</strong>
        </a>
        {demo && demo !== "#" && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="project-link"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
