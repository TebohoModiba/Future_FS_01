function Navbar({ page, navigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("system");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    const html = document.documentElement;
    
    if (newTheme === "dark") {
      html.classList.add("dark");
    } else if (newTheme === "light") {
      html.classList.remove("dark");
    } else {
      // System preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    let newTheme;
    if (theme === "system") newTheme = "dark";
    else if (theme === "dark") newTheme = "light";
    else newTheme = "system";

    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const links = ["home", "about", "projects", "contact"];

  const handleNav = (link) => {
    navigate(link);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <button className="navbar-logo" onClick={() => handleNav("home")}>
        Teboho
      </button>
      {/* Desktop links */}
      <nav className="navbar-links">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            className={`navbar-link ${page === link ? "active" : ""}`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </nav>
      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          {theme === "dark" ? "☀️" : theme === "light" ? "🌙" : "🌗"}
        </button>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`mobile-link ${page === link ? "active" : ""}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
