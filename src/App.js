import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/pages/AboutMeAboutMe";
import Projects from "./components/pages/PortfolioPortfolio";
import Contact from "./components/pages/ContactContact";
import Resume from "./components/pages/ResumeResume";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="components\pages\AboutMe.js" component={AboutMe} />
          <Route path="components\pages\Portfolio.js" component={Portfolio} />
          <Route path="components\pages\Contact.js" component={Contact} />
          <Route path="components\pages\Resume.js" component={Resume} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
