import { navItems } from "../data/portfolio";

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

export default Header;
