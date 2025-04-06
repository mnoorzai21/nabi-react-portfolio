import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
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
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
