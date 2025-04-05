import React from "react";
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
      "Full-stack web application web application using the MVC paradigm, with server-side API, and database connection. Used JavaScript, MySQL, Node.js, Express.js, Sequelize, Wger REST APIs, and Heroku. My role was a back end web developer.",
    deployedLink: "https://peaceful-dusk-53929.herokuapp.com/",
    github: "https://github.com/ShawnArgent/Git-Fit",
  },
  {
    id: 2,
    title: "Golfapedia",
    image: `${golfapedia}`,
    details:
      "Golfapedia is an application that renders local golf courses and weather. Used HTML, CSS, JavaScript, and GoogleA PIs,and Open Weather APIs. My role was a back end web developer",
    deployedLink: "https://nirav-v.github.io/golfapedia/",
    github: "https://github.com/nirav-v/golfapedia",
  },
  {
    id: 3,
    title: "book-searchjet",
    image: `${bookSearchjet}`,
    details:
      "This is a book search full-stack app which allows the user to search for a book. The user sign up first then can save a searched book in the list. Then they are able to save and remove the book to/from the saved list. Used JavaScript, React, GraphQL, Mongoose, Node.js, Express.js, Google Books APIs, and Heroku. I was Full Stack developer of this app.",
    deployedLink: "https://book-searchjet-mnn.herokuapp.com/",
    github: "https://github.com/mnoorzai21/book-searchjet-mnn",
  },
  {
    id: 4,
    title: "monitor-list",
    image: `${monitorList}`,
    details:
      "With this app the user can sign-up, login, search for favorite movies, and TV shows. User can save thier favorite movise and also can see their saved items in the watchlist and can remove and marked items as watched from the watchlist. Used JavaScript, React, GraphQL, Mongoose, Node.js, Express.js, Google Books APIs, and Heroku. My role was back end developer",
    deployedLink: "https://monitor-list.herokuapp.com/",
    github: "https://github.com/mnoorzai21/monitor-list",
  },
  {
    id: 5,
    title: "weather-dashboard",
    image: `${weatherDashboard}`,
    details:
      "This project is a weather app that the user can search for a city that they want to travel to. This shows the current weather of the searched city and the next five days' weather forecast. Used HTML, CSS, JavaScript, and Open Weather APIs. This is my own project",
    deployedLink: "https://mnoorzai21.github.io/weather-dashboard-mnn/",
    github: "https://github.com/mnoorzai21/weather-dashboard-mnn",
  },
  {
    id: 6,
    title: "password-generator",
    image: `${passwordGeneratorImage}`,
    details:
      "HTML, CSS, and Javascript have been used in this project, which makes it possible to generate combinations of random passwords. The user chooses the categories like numbers, special characters, and upper & lower case alphabits then it generates a random password. I was incharge of the whole project",
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
            className="card bg-dark text-white custom-card text-center m-3">
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
                role="button">
                deployedLink
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href={project.github}
                role="button">
                github
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
