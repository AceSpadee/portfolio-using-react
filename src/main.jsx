// Import creatRoot and BrowserRouter from react-dom/client and react-router-dom.
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import bootstrap.min.css and main.css.
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
// Import App, About components.
import App from "./App";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// import About from "./pages/About";
// Render the App component inside the Router component.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> 
    </Router>
  </React.StrictMode>
);