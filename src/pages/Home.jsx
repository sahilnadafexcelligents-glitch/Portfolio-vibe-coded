import { stats } from "../data/portfolio";

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

export default Home;
