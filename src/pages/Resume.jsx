// Import the styles from resume.css.
import "../styles/Resume.css"
// Import the Skills.
// import Skills from "../components/Skills";
// Export the Resume component to the router in main.jsx.
export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <img className="container" src="https://images.template.net/wp-content/uploads/2015/07/Free-Blank-Resume-Template.jpg"></img>
        <a
          href=""
          download="#"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      {/* <Skills /> */}
    </div>
  );
}