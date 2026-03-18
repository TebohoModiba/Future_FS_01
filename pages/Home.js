function Home({ navigate }) {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-photo-wrap">
          <img
            src="assets/profile.jpg"
            alt="Teboho Modiba"
            className="hero-photo"
          />
        </div>
        <div className="hero-text">
          <h1>Teboho Modiba</h1>
          <h2 className="hero-subtitle">Software Engineer & Web Developer</h2>
          <p>
            I'm Teboho, also known as "Tebza" or "Tee" — an aspiring software
            engineer focused on building modern, high-impact web and mobile
            applications.
          </p>
          <div className="buttons">
            <button className="btn-primary" onClick={() => navigate("projects")}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => navigate("contact")}>
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {["React", "Firebase", "C#", "JavaScript", "HTML & CSS", 
            "Java", "Kotlin", "Typescript"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects-preview">
        <h2>Featured Projects</h2>
        <p>Some of my recent work</p>
        <button className="btn-outline" onClick={() => navigate("projects")}>
          See All Projects →
        </button>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Let's build something great</h2>
        <button className="btn-primary" onClick={() => navigate("contact")}>
          Get In Touch
        </button>
      </section>

    </div>
  );
}
