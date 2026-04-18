function Projects() {
  const allProjects = [
    {
      title: "Portfolio Website",
      description: "This very portfolio you're looking at — clean, modern, and fully responsive.",
      tech: "React, HTML, CSS, JavaScript",
      github: "https://github.com/TebohoModiba/Portfolio-Website",
      demo: "https://tebohomodiba.github.io/Portfolio-Website/"
    },
    {
      title: "Haven App",
      description: "Mental health app with mood tracking, journaling, and AI chat support.",
      tech: "React Native, Firebase",
      github: "https://github.com/TebohoModiba/Haven"
    },
    {
      title: "NCD React Website",
      description: "Modern business website for Nako Creative Design with smooth animations.",
      tech: "React, HTML, CSS, JavaScript",
      github: "https://github.com/TebohoModiba/NCD-React-Website",
      demo: "https://nakocreativedesigns.co.za/"
    },
    {
      title: "Habit Tracker",
      description: "Beautiful mobile app to build and track daily habits with AI suggestions.",
      tech: "React Native, MongoDB, C#",
      github: "https://github.com/TebohoModiba/Habit-Tracker"
    },
    {
      title: "Mini CRM Website",
      description: "Lightweight Customer Relationship Management web application.",
      tech: "React, MongoDB",
      github: "https://github.com/TebohoModiba/Mini-CRM-website"

  ];

  const [filter, setFilter] = React.useState("All");

  const techs = ["All", "React", "React Native", "Firebase", "C#"];

  const filteredProjects = allProjects.filter(project => 
    filter === "All" || project.tech.includes(filter)
  );

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="projects-subtitle">A collection of things I've built</p>

      {/* Tech Filter */}
      <div className="tech-filters">
        {techs.map(t => (
          <button
            key={t}
            className={`filter-btn ${filter === t ? "active" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tech={p.tech}
            github={p.github}
            demo={p.demo}
          />
        ))}
      </div>
    </div>
  );
}
