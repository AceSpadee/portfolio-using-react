// Import Link from react-router-dom.
import { Link, useLocation } from "react-router-dom";
// Export the NavTabs component.
export default function NavTabs({ handlePageChange }) {
  const location = useLocation();
  return (
    <ul className="nav-tabs-container">
      <li className="nav-item">
        <Link
          to="/About"
          className={location.pathname === "/About" ? "nav-link active text-secondary" : "nav-link text-white"}
          onClick={() => handlePageChange("About")}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={location.pathname === "/Resume" ? "nav-link active text-secondary" : "nav-link text-white"}
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={location.pathname === "/Portfolio" ? "nav-link active text-secondary" : "nav-link text-white"}
          onClick={() => handlePageChange("Portfolio")}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={location.pathname === "/Contact" ? "nav-link active text-secondary" : "nav-link text-white"}
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}