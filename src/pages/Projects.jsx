import { projects } from "../data/portfolio";

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

export default Projects;
