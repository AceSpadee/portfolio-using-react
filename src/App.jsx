import "./styles/App.css";

// Import Header and Footer components.
import SideNav from "./components/UI/SideNav.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div id="app">
      <SideNav />
      <main className="content-container">
        <section id="about" className="about-section">
          <HomePage />
        </section>
        
        <section id="projects" className="placeholder-section">
          <h2>My Projects</h2>
          <Portfolio />
        </section>

        <section id="contact" className="placeholder-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}