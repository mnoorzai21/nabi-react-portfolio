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
      "Fitness App, that generates a workout session with exercises/set/reps",
    deployedLink: "https://peaceful-dusk-53929.herokuapp.com/",
    github: "https://github.com/ShawnArgent/Git-Fit",
  },
  {
    id: 2,
    title: "Golfapedia",
    image: `${golfapedia}`,
    details: "Golfing App, that finds nearby golf courses",
    deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  {
    id: 3,
    title: "book-searchjet",
    image: `${bookSearchjet}`,
    details:
      "Book Search App allows a user to sign up, login, save searched book and remove saved book",
    deployedLink: "https://book-searchjet-mnn.herokuapp.com/",
    github: "https://github.com/mnoorzai21/book-searchjet-mnn",
  },
  {
    id: 4,
    title: "monitor-list",
    image: `${monitorList}`,
    details:
      "Monitor List App allows the user to sign up, login, search for favorite Movie, TV-Shows and save it in watchlist",
    deployedLink: "https://monitor-list.herokuapp.com/",
    github: "https://github.com/mnoorzai21/monitor-list",
  },
  {
    id: 5,
    title: "weather-dashboard",
    image: `${weatherDashboard}`,
    details: "Weather Dashboard App, shows weather forcast for a searched city",
    deployedLink: "https://mnoorzai21.github.io/weather-dashboard-mnn/",
    github: "https://github.com/mnoorzai21/weather-dashboard-mnn",
  },
  {
    id: 6,
    title: "password-generator",
    image: `${passwordGeneratorImage}`,
    details: "Password Generator App, generates a random password",
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
