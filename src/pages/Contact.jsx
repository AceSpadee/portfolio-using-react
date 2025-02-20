import "../styles/Contact.css";

// Export the Contact component to the router in main.jsx.
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info-container">
        <h3>Other Ways to Reach Me</h3>
        <div className="contact-info">
          <p>Email: <a href="mailto:ptniversn@gmail.com">ptniversn@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/peyton-iverson/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}