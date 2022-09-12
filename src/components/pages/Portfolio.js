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
      "Full-stack web application web application using the MVC paradigm, with server-side API, user authentication, and database connection. With the app the user can sign-up, login, and generate a workout with exercises/set/reps, by simply choosing a day of the week and a body part focused workout. Technology used: Interact with the Wger APIs and collect the required data Used JavaScript, MySQL, Node.js, Express.js, Sequelize, Wger REST APIs, and Heroku",
    deployedLink: "https://peaceful-dusk-53929.herokuapp.com/",
    github: "https://github.com/ShawnArgent/Git-Fit",
  },
  {
    id: 2,
    title: "Golfapedia",
    image: `${golfapedia}`,
    details:
      "Golfapedia is an application that renders local golf courses and weather for a city of the user's choice, while allowing them to create a customized list of saved courses that persists in local storage. The user simply types a valid city name into the search input, submits the request, and the page will render the current weather in that city and a list of nearby courses, including their address and rating. Each course listing also features a save button which the user can click to add it to their saved courses list that will still display when the page is refreshed. Used HTML, CSS, JavaScript, and GoogleA PIs,and Open Weather APIs",
    deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  {
    id: 3,
    title: "book-searchjet",
    image: `${bookSearchjet}`,
    details:
      "This is a book search full-stack app which allows the user to search for a book. When the user wants to save the searched book in the list, they needs to sign up and log in first. Then they are able to save and remove the book to/from the saved list. Used JavaScript, React, GraphQL, Mongoose, Node.js, Express.js, Google Books APIs, and Heroku",
    deployedLink: "https://book-searchjet-mnn.herokuapp.com/",
    github: "https://github.com/mnoorzai21/book-searchjet-mnn",
  },
  {
    id: 4,
    title: "monitor-list",
    image: `${monitorList}`,
    details:
      "With this app the user can sign-up, login, search for favorite movies, and TV shows. User can save their favorite movies and TV shows to their watchlist by simply clicking on the save button. User can also see their saved items in the watchlist and can remove and marked items as watched from the watchlist. Used JavaScript, React, GraphQL, Mongoose, Node.js, Express.js, Google Books APIs, and Heroku",
    deployedLink: "https://monitor-list.herokuapp.com/",
    github: "https://github.com/mnoorzai21/monitor-list",
  },
  {
    id: 5,
    title: "weather-dashboard",
    image: `${weatherDashboard}`,
    details:
      "This project is a weather app that the user can search for a city that they want to travel to. This shows the current weather of the searched city and the next five days' weather forecast. Used HTML, CSS, JavaScript, and Open Weather APIs",
    deployedLink: "https://mnoorzai21.github.io/weather-dashboard-mnn/",
    github: "https://github.com/mnoorzai21/weather-dashboard-mnn",
  },
  {
    id: 6,
    title: "password-generator",
    image: `${passwordGeneratorImage}`,
    details:
      "HTML, CSS, and Javascript have been used in this project, which makes it possible to generate combinations of random passwords. At the beginning it asks the user to enter the length of the password they want to generate. After the user enters the password it is asking if the user wants lowercase letters, then uppercase letters, then special characters, and then the number. After the user chooses the categories it generates a random password.",
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
