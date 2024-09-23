// Import the styles from resume.css.
import "../styles/Resume.css"
import resume from "../assets/myResume.png"

// Export the Resume component to the router in main.jsx.
export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
      <img className="container" src={resume} alt="Resume" />
        <a
          href="../assets/myResume.png"
          download="My_Resume.png"  
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}