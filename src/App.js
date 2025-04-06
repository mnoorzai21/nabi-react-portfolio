import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Navigation from "./components/Navigation";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="components\pages\AboutMe.js" component={AboutMe} />
          <Route path="components\pages\Portfolio.js" component={Portfolio} />
          <Route path="components\pages\Contact.js" component={Contact} />
          <Route path="components\pages\Resume.js" component={Resume} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
