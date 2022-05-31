import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/ProjectsContainer";
import Contacts from "./pages/Contacts";
import Resume from "./pages/Resume";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../styles/Portfolio.css";

function Portfolio() {
  // Declare a new state variable, which we'll call "count"
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "Projects":
        return <Projects />;
      case "About Me":
        return <AboutMe />;
      case "Contacts":
        return <Contacts />;
      case "Resume":
        return <Resume />;
      default:
        return <Projects />;
    }
  };

  const switchPage = (page) => setCurrentPage(page);

  return (
    <div className="portfolio">
      <Navigation currentPage={currentPage} handlePageChange={switchPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
