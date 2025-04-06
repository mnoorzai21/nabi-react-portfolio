import React from "react";
import myResume from "../../images/Nabis_Resume.pdf";

export default function Resume() {
  return (
    <div className="container container-fluid text-center text-light m-6">
      <div className="card-header">
        <h2>Resume and Skills</h2>
      </div>
      <div className="card-body">
        <h4>💻 Technical Skills</h4>

        <p>
          <strong>Programming Languages:</strong> JavaScript, Java, C/C++,
          Python
        </p>
        <p>
          <strong>Development:</strong> HTML5, CSS, Bootstrap, jQuery, React.js,
          Node.js, Express
        </p>
        <p>
          <strong>Databases:</strong> MySQL, MongoDB, GraphQL
        </p>
        <p>
          <strong>Fundamentals:</strong> Data Structures, Algorithms
        </p>
        <p>
          <strong>Tools & Platforms:</strong> Linux/Unix
        </p>
        <p>
          <strong>AI & Data:</strong> Artificial Intelligence, Machine Learning
        </p>

        <a href={myResume} download className="btn btn-success mt-3">
          Download My Resume
        </a>
      </div>
    </div>
  );
}
