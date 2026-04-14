import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "login", label: "Login" }
];

const stats = [
  { value: "Java", label: "Primary language" },
  { value: "OOP", label: "Core strength" },
  { value: "Full stack", label: "Learning path" }
];

const skills = [
  {
    title: "Core Java",
    items: ["OOP", "Collections", "Exception handling", "File handling", "Clean methods"]
  },
  {
    title: "Backend",
    items: ["JDBC", "Servlets", "REST basics", "Authentication flow", "Database logic"]
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Responsive UI", "Forms"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "npm", "Project structure"]
  }
];

const projects = [
  {
    title: "Attendance Management App",
    type: "Java project",
    description:
      "A practical attendance workflow for students, daily records, status tracking, and admin-friendly data handling.",
    stack: ["Java", "JDBC", "MySQL", "Forms"]
  },
  {
    title: "Portfolio Application",
    type: "React project",
    description:
      "A dark, responsive portfolio app with multiple pages, project sections, skill cards, and contact flow.",
    stack: ["React", "Vite", "CSS", "GitHub"]
  },
  {
    title: "Login System",
    type: "Authentication UI",
    description:
      "A backend-ready login interface designed for Java authentication, validation, and dashboard access.",
    stack: ["Java", "Servlets", "HTML", "CSS"]
  }
];

const timeline = [
  {
    year: "Now",
    title: "Building Java and React projects",
    text: "Focused on Java fundamentals, backend workflows, clean UI, and GitHub-ready project delivery."
  },
  {
    year: "Next",
    title: "Spring Boot and APIs",
    text: "Expanding toward production-style REST APIs, layered architecture, and database-backed services."
  },
  {
    year: "Goal",
    title: "Reliable full stack developer",
    text: "Creating complete applications with clear code, strong structure, and user-friendly interfaces."
  }
];

function getInitialPage() {
  const page = window.location.hash.replace("#", "");
  return navItems.some((item) => item.id === page) ? page : "home";
}

function App() {
  const [page, setPage] = useState(getInitialPage);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const activePage = useMemo(
    () => navItems.find((item) => item.id === page) ?? navItems[0],
    [page]
  );

  useEffect(() => {
    function handlePointerMove(event) {
      setCursor({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setPage(getInitialPage());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function navigate(id) {
    window.location.hash = id;
    setPage(id);
  }

  return (
    <div className="app-shell">
      <div
        className="cursor-glow"
        style={{ "--cursor-x": `${cursor.x}px`, "--cursor-y": `${cursor.y}px` }}
      />
      <Header activePage={activePage.id} onNavigate={navigate} />
      <main>
        {page === "home" && <Home onNavigate={navigate} />}
        {page === "about" && <About />}
        {page === "skills" && <Skills />}
        {page === "projects" && <Projects />}
        {page === "experience" && <Experience />}
        {page === "contact" && <Contact />}
        {page === "login" && <Login />}
      </main>
      <Footer />
    </div>
  );
}

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate("home")}>
        <span className="brand-mark">S</span>
        <span>Sahil.dev</span>
      </button>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            className={activePage === item.id ? "nav-link active" : "nav-link"}
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Home({ onNavigate }) {
  return (
    <section className="hero page-grid">
      <div className="hero-copy">
        <p className="eyebrow">Java Developer Portfolio</p>
        <h1>Java apps, clean logic, sharp interfaces.</h1>
        <p className="lead">
          Hi, I am Sahil. I build Java projects, backend flows, and React pages
          with simple structure and polished details.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" type="button" onClick={() => onNavigate("projects")}>
            View Projects
          </button>
          <button className="secondary-btn" type="button" onClick={() => onNavigate("contact")}>
            Contact Me
          </button>
        </div>
        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-label="Developer workspace">
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80"
          alt="Code editor on a laptop"
        />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-card">
          <span>public class Portfolio</span>
          <span>{"  build(\"Java\", \"React\");"}</span>
          <span>{"}"}</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section two-column">
      <div>
        <p className="eyebrow">About</p>
        <h1>Practical developer with a Java-first mindset.</h1>
        <p className="lead">
          I am growing as a Java developer by building complete, useful projects.
          My goal is to write code that is readable, maintainable, and connected
          to real workflows.
        </p>
      </div>
      <div className="panel">
        <h2>What I care about</h2>
        <ul className="check-list">
          <li>Clear object-oriented structure</li>
          <li>Simple backend logic that is easy to debug</li>
          <li>Database flows that match the application needs</li>
          <li>Frontend pages that are readable and fast</li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="page-section">
      <p className="eyebrow">Skills</p>
      <h1>Tools and concepts I use while building.</h1>
      <div className="card-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <h2>{skill.title}</h2>
            <div className="pill-list">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="page-section">
      <p className="eyebrow">Projects</p>
      <h1>Portfolio pieces that show Java thinking and app structure.</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <span className="project-type">{project.type}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="pill-list">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="page-section">
      <p className="eyebrow">Experience</p>
      <h1>Learning path and development direction.</h1>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span>{item.year}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-section contact-layout">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Let us talk about Java projects, internships, or collaboration.</h1>
        <p className="lead">
          Replace these placeholder links with your real email, GitHub, LinkedIn,
          and resume before publishing.
        </p>
        <div className="contact-links">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Tell me about the project" />
        </label>
        <button className="primary-btn" type="button">Send Message</button>
      </form>
    </section>
  );
}

function Login() {
  return (
    <section className="page-section login-layout">
      <div>
        <p className="eyebrow">Demo Page</p>
        <h1>Backend-ready login screen.</h1>
        <p className="lead">
          This page is prepared for a future Java backend, authentication service,
          or private dashboard.
        </p>
      </div>
      <form className="login-form">
        <h2>Login</h2>
        <label>
          Email address
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="current-password" required />
        </label>
        <div className="form-row">
          <label className="inline-label">
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="#contact">Need access?</a>
        </div>
        <button className="primary-btn" type="button">Login</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>Sahil.dev</span>
      <span>Java Developer Portfolio</span>
      <span>GitHub-ready React app</span>
    </footer>
  );
}

export default App;
