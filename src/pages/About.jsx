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

export default About;
