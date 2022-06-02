import React from "react";
import Resume from "../../../images/MohammadNabiNoorzai_Resume.pdf";

export default function () {
  return (
    <div className="text-center m-3 ">
      <div className="card-header ">
        <h2>Resume</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">Skills</h5>
        <p className="card-text">
          HTML5, CSS, Bootstrap, JavaScript, jQuery, MySQL, MongoDB, Express,
          React.js, Node.js
        </p>
        <a href={Resume} download className="btn btn-success mt-3">
          Download My Resume
        </a>
      </div>
    </div>
  );
}
