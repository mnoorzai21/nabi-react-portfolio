import React from "react";
import "../styles/Project.css";

export default function Project(id, image, alt, title, details, demo, repo) {
  return (
    <div className="container-fluid d-flex flex-row flex-wrap justify-content-center">
      return (
      <div
        key={id}
        className="card bg-dark text-white custom-card text-center m-3"
      >
        <img src={image} className="card-img custom-img" alt={alt} />
        <div className="card-img-overlay p-4 custom-card-info">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{details}</p>
          <a
            className="btn btn-success btn-floating m-1"
            href={demo}
            role="button"
          >
            Demo
          </a>
          <a
            className="btn btn-dark btn-floating m-1"
            href={repo}
            role="button"
          >
            Repo
          </a>
        </div>
      </div>
      );
    </div>
  );
}
