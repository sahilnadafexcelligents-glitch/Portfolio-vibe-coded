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

export default Login;
