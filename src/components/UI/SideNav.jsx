import React, { useState, useEffect } from "react";
import "../../styles/SideNav.css";

export default function SideNav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";
    
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });
    
            if (currentSection) setActiveSection(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="side-nav">
            <ul>
                <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
                <li><a href="#resume" className={activeSection === "resume" ? "active" : ""}>Resume</a></li>
                <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
                <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
            </ul>
        </nav>
    );
}