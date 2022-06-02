import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Portfolio";
// import Contacts from "./pages/Contacts";
// import Resume from "./pages/Resume";
import Navigation from "./Navigation";
// import Footer from "./Footer";
import "../styles/Portfolio.css";

export default function Home() {
  // Declare a new state variable, which we'll call "count"
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      // case "Contacts":
      //   return <Contacts />;
      // case "Resume":
      //   return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={(page) => setCurrentPage(page)}
      />
      {renderPage()}
      {/* <Footer/> */}
    </div>
  );
}
