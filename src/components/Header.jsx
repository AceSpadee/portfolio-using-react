// Import the CSS file
import "../styles/Header.css";

// Import the NavTabs component from the NavTabs.jsx file.
import NavTabs from "../components/UI/NavTabs.jsx";

// Export the Header component to the router in main.jsx.
export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header-custom-background">
      <h1 className="nameDisplay">Peyton Iverson</h1>
      <div className="nav-tabs-container">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
}