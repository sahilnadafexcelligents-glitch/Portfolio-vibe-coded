import { skills } from "../data/portfolio";

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

export default Skills;
