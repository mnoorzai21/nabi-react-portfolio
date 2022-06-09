import "../../index.css";

import passwordGeneratorImage from "../../images/password-generator.png";
import golfapedia from "../../images/project-1.png";
import gitFit from "../../images/project-2.jpeg";
import weatherDashboard from "../../images/weather-dashboard.png";

const myPorjects = [
  {
    id: 1,
    title: "Git-Fit",
    image: `${gitFit}`,
    details: "Fitness app, that generates a workout with exercises/set/reps",
    deployedLink: "https://peaceful-dusk-53929.herokuapp.com/",
    github: "https://github.com/ShawnArgent/Git-Fit",
  },
  {
    id: 2,
    title: "Golfapedia",
    image: `${golfapedia}`,
    details: "Golfing app, that finds nearby golf courses",
    deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  {
    id: 3,
    title: "weather-dashboard",
    image: `${weatherDashboard}`,
    details: "Weather Dashboard app, shows weather forcast for a searched city",
    deployedLink: "https://mnoorzai21.github.io/weather-dashboard-mnn/",
    github: "https://github.com/mnoorzai21/nabi-portfolio-page-mnn",
  },
  {
    id: 4,
    title: "password-generator",
    image: `${passwordGeneratorImage}`,
    details: "Passwork generator app, generates a random password",
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
