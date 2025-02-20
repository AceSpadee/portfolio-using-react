import "./styles/App.css";

// Import Header and Footer components.
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <div id="app">
      <Header />
      <main className="mx-3">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}