import { timeline } from "../data/portfolio";

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

export default Experience;
