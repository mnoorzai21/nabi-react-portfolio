import React from "react";
import myResume from "../../images/Mohammad_Nabi_Noorzai_Resume.pdf";

const skills = [
  { label: "Languages", items: "JavaScript, Java, C/C++, Python, SQL, HTML, CSS" },
  { label: "Frontend", items: "React, Vite, Apollo Client, Bootstrap, responsive design" },
  { label: "Backend", items: "Node.js, Express, REST APIs, GraphQL (Apollo Server), JWT authentication" },
  { label: "Databases", items: "MongoDB (Mongoose, Atlas), MySQL" },
  { label: "Testing & DevOps", items: "Node test runner, GitHub Actions CI/CD, Git, GitHub Pages, Render, Linux" },
  { label: "Foundations", items: "Data structures, algorithms, machine learning, artificial intelligence" },
];

export default function Resume() {
  return (
    <div className="container text-center text-light page-content">
      <div className="card-body resume-card">
        <h2>Resume and Skills</h2>
        <h4 className="mt-4">
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          Technical Skills
        </h4>
        {skills.map((group) => (
          <p key={group.label}>
            <strong>{group.label}:</strong> {group.items}
          </p>
        ))}
        <div className="mt-3">
          <a
            href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light m-1"
          >
            View Resume
          </a>
          <a
            href={myResume}
            download="Mohammad_Nabi_Noorzai_Resume.pdf"
            className="btn btn-success m-1"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
