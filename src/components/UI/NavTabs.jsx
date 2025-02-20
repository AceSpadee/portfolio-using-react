// Export the NavTabs component.
export default function NavTabs({ handlePageChange }) {
  return (
    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
      <li className="nav-item">
        About
      </li>
      <li className="nav-item">
        Resume
      </li>
      <li className="nav-item">
        Projects
      </li>  
      <li className="nav-item">
        Contact
      </li>
    </ul>
  );
}