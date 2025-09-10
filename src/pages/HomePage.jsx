import Skills from "../components/Skills";
import "../styles/HomePage.css";

import { motion } from "framer-motion";

export default function HomePage() {
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about glass-container">
      <motion.div 
        className="about-description"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Full Stack Web Developer</h2>
        <p>
          I am currently expanding my skills as a Full-Stack Web Developer, specializing in JavaScript, 
          React, and Node.js. I thrive in environments that encourage growth and continuous learning.
          I am dedicated to building responsive and dynamic websites industry. As a collaborative team 
          player, I am eager to learn, adapt, and contribute effectively in any setting.
        </p>
        <button className="cta-button" onClick={() => scrollToSection("projects")}>
          View My Work
        </button>
      </motion.div>
    </div>
  );
}