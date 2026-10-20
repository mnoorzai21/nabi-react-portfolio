import React from "react";
import "../../index.css";
import myPhoto from "../../images/myphoto.jpg";

export default function AboutMe() {
  return (
    <div className="container container-fluid text-light flex-row flex-wrap justify-content-center page-content">
      <div className="text-center col-3">
        <h1>About Me</h1>
        <div className="myphotoContainer">
          <img
            src={myPhoto}
            className="my-photo justify-content-center"
            alt="Mohammad Nabi Noorzai"
          />
        </div>
      </div>

      <div className="load about-me p-4">
        <p className="about-lead">
          Software engineer in San Diego who builds full-stack web applications
          with React, Node.js and GraphQL.
        </p>

        <p>
          I graduated from San Diego State University with a B.S. in Computer
          Science in December 2024. Before that I earned an Associate's degree in
          Computer Science from San Diego Mesa College and a certificate in Web
          Development from UC San Diego.
        </p>

        <p>
          I enjoy turning ideas into real applications that people use. My
          favorite project is a real-time stock scanner I built for my own day
          trading: it checks about 10,000 U.S. stocks every minute and alerts me
          when one matches my strategy. I also built Book Search, a full-stack
          GraphQL app, and keep my projects tested and automatically deployed.
        </p>

        <p>
          I learn new technologies quickly, I care about writing clean, reliable
          code, and I work well on teams. I'm currently looking for software
          engineering, frontend or full-stack roles, remote or in San Diego.
        </p>

        <div className="about-actions">
          <a className="btn btn-success m-1" href="#projects">
            View My Projects
          </a>
          <a className="btn btn-light m-1" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
