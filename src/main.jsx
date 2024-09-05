// Import creatRoot and BrowserRouter from react-dom/client and react-router-dom.
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import bootstrap.min.css and main.css.
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
// Import App component.
import App from "./App";
// Render the App component inside the Router component.
createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
  </Router>
);