import React, { useEffect, useState } from "react";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navigation from "./Navigation";
import Footer from "./Footer";

// Each page has a URL hash, so links like /#projects open that page directly.
const PAGES = {
  aboutme: "AboutMe",
  projects: "Projects",
  contact: "Contact",
  resume: "Resume",
};

function pageFromHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  return PAGES[hash] || "AboutMe";
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(pageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(pageFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
