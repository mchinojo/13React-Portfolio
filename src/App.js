import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact";

function App() {
  return (
    // Using the Router component from react-router-dom.
    <Router>
      <div>
        {/* Using the NavTabs component to display the links */}
        <NavTabs />
        {/* Defining the routes */}
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
