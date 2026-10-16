import React from "react";
import "../../index.css";

import stockScannerImage from "../../images/stock-scanner.jpg";
import bookSearchImage from "../../images/book-search.jpg";
import weatherDashboardImage from "../../images/weather-dashboard.jpg";
import passwordGeneratorImage from "../../images/password-generator.png";

const myProjects = [
  {
    id: 1,
    title: "Stock Scanner",
    image: stockScannerImage,
    details:
      "Real-time momentum scanner that checks about 10,000 U.S. stocks every minute against five trading filters (price, % gain, relative volume, share float and fresh news), with sound and desktop alerts.",
    tech: "React · Vite · Node.js · Express · Alpaca & Massive APIs · GitHub Actions",
    deployedLink: "https://mnoorzai21.github.io/stock-scanner/",
    github: "https://github.com/mnoorzai21/stock-scanner",
    alt: "Stock Scanner dashboard showing stocks that matched all five filters",
  },
  {
    id: 2,
    title: "Book Search",
    image: bookSearchImage,
    details:
      "Full-stack reading-list app: search the Google Books catalog, create an account, and save or remove books. Searches run through a cached GraphQL API on the server.",
    tech: "React · Apollo GraphQL · Express · MongoDB Atlas · JWT · Render",
    deployedLink: "https://book-searchjet.onrender.com",
    github: "https://github.com/mnoorzai21/book-searchjet-mnn",
    alt: "Book Search results page showing books matching a search for Dune",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: weatherDashboardImage,
    details:
      "Search any city to see current conditions and a five-day forecast, with saved search history for quick lookups.",
    tech: "JavaScript · Express · OpenWeatherMap API · Bootstrap",
    deployedLink: "https://weather-dashboard-mnn.onrender.com",
    github: "https://github.com/mnoorzai21/weather-dashboard-mnn",
    alt: "Weather Dashboard showing current weather and a five-day forecast",
  },
  {
    id: 4,
    title: "Password Generator",
    image: passwordGeneratorImage,
    details:
      "Generates strong random passwords based on the length and character types the user chooses: lowercase, uppercase, numbers and symbols.",
    tech: "JavaScript · HTML · CSS",
    deployedLink: "https://mnoorzai21.github.io/password-generator-mnn/",
    github: "https://github.com/mnoorzai21/password-generator-mnn",
    alt: "Password Generator with options for password length and character types",
  },
];

export default function Portfolio() {
  return (
    <div className="container-fluid d-flex text-light flex-row flex-wrap justify-content-center page-content">
      {myProjects.map((project) => (
        <article
          key={project.id}
          className="card bg-dark text-white custom-card text-center m-3"
        >
          <img
            src={project.image}
            className="card-img custom-img"
            alt={project.alt}
            loading="lazy"
          />
          <div className="card-img-overlay p-4 custom-card-info">
            <h3 className="card-title h5">{project.title}</h3>
            <p className="card-text">{project.details}</p>
            <p className="card-tech">{project.tech}</p>
            <a
              className="btn btn-success btn-floating m-1"
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo (opens in a new tab)`}
            >
              Live Demo
            </a>
            <a
              className="btn btn-light btn-floating m-1"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
            >
              Code
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
