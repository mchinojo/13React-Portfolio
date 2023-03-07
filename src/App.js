import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes basename="13React-Portfolio">
          <Route path="/13React-Portfolio/" element={<Home />} />
          <Route
            path="/13React-Portfolio/projects"
            element={<ProjectGallery />}
          />
          <Route path="/13React-Portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
