import "./styles/App.css";

// Import Header and Footer components.
import SideNav from "./components/UI/SideNav.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <div id="app">
      <SideNav />
      <main className="content-container">
        <section id="about" className="about-section">
          <HomePage />
        </section>

        <section id="resume" className="placeholder-section">
          <h2>My Resume</h2>
          <p>Coming soon...</p>
        </section>

        <section id="projects" className="placeholder-section">
          <h2>My Projects</h2>
          <p>Coming soon...</p>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>Contact Me</h2>
          <p>Let's get in touch!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}