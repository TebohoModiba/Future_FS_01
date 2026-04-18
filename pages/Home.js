function Home({ navigate }) {
  const [displayText, setDisplayText] = React.useState("");
  const fullText = "Software Engineer & Web Developer";

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "React / React Native", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "C#", level: 75 },
    { name: "Python", level: 70 },
    { name: "HTML & CSS", level: 92 },
  ];

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo-wrap">
          <img src="assets/profile.jpg" alt="Teboho Modiba" className="hero-photo" />
        </div>
        <div className="hero-text">
          <h1>Teboho Modiba</h1>
          <h2 className="hero-subtitle">
            {displayText}<span className="cursor">|</span>
          </h2>
          <p>
            I'm Teboho, also known as "Tebza" or "Tee" — an aspiring software
            engineer focused on building modern, high-impact web and mobile applications.
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
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="bar-bg">
                <div 
                  className="bar-fill" 
                  style={{ 
                    width: `${skill.level}%`, 
                    animationDelay: `${index * 120}ms` 
                  }}
                ></div>
              </div>
            </div>
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
