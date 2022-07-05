import "../../index.css";

import passwordGeneratorImage from "../../images/password-generator.png";
import golfapedia from "../../images/project-1.png";
import gitFit from "../../images/project-2.jpeg";
import weatherDashboard from "../../images/weather-dashboard.png";
import bookSearchjet from "../../images/bookSearch-screenshot.png";
import monitorList from "../../images/monitorList-screenshot.png";

const myPorjects = [
  {
    id: 1,
    title: "Git-Fit",
    image: `${gitFit}`,
    details:
      "Technology used: Interact with the Wger APIs and collect the required data Used JavaScript, MySQL, Node.js, Express.js, Sequelize, Wger REST APIs, and Heroku",
    deployedLink: "https://peaceful-dusk-53929.herokuapp.com/",
    github: "https://github.com/ShawnArgent/Git-Fit",
  },
  {
    id: 2,
    title: "Golfapedia",
    image: `${golfapedia}`,
    details:
      "Used HTML, CSS, JavaScript, and GoogleA PIs,and Open Weather APIs",
    deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  {
    id: 3,
    title: "book-searchjet",
    image: `${bookSearchjet}`,
    details:
      "Used JavaScript, React, GraphQL, Mongoose, Node.js, Express.js, Google Books APIs, and Heroku",
    deployedLink: "https://book-searchjet-mnn.herokuapp.com/",
    github: "https://github.com/mnoorzai21/book-searchjet-mnn",
  },
  {
    id: 4,
    title: "monitor-list",
    image: `${monitorList}`,
    details:
      "Used JavaScript, React, GraphQL, Mongoose, Node.js, Express.js, Google Books APIs, and Heroku",
    deployedLink: "https://monitor-list.herokuapp.com/",
    github: "https://github.com/mnoorzai21/monitor-list",
  },
  {
    id: 5,
    title: "weather-dashboard",
    image: `${weatherDashboard}`,
    details: "Used HTML, CSS, JavaScript, and Open Weather APIs",
    deployedLink: "https://mnoorzai21.github.io/weather-dashboard-mnn/",
    github: "https://github.com/mnoorzai21/weather-dashboard-mnn",
  },
  {
    id: 6,
    title: "password-generator",
    image: `${passwordGeneratorImage}`,
    details: "Used HTML, CSS, and JavaScript",
    deployedLink: "https://mnoorzai21.github.io/password-generator-mnn/",
    github: "https://github.com/mnoorzai21/password-generator-mnn",
  },
];

export default function Portfolio() {
  return (
    <div className="container-fluid d-flex text-light flex-row flex-wrap justify-content-center">
      {myPorjects.map((project) => {
        return (
          <div
            key={project.id}
            className="card bg-dark text-white custom-card text-center m-3"
          >
            <img
              src={project.image}
              className="card-img custom-img"
              alt={project.alt}
            />
            <div className="card-img-overlay p-4 custom-card-info">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.details}</p>
              <a
                className="btn btn-success btn-floating m-1"
                href={project.deployedLink}
                role="button"
              >
                deployedLink
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href={project.github}
                role="button"
              >
                github
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
