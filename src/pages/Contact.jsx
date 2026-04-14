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

export default Contact;
