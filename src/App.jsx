import { useEffect, useMemo, useState } from "react";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { navItems } from "./data/portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

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
      <CursorGlow cursor={cursor} />
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

export default App;
