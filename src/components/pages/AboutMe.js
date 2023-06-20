import React from "react";
import "../../index.css";
import myPhoto from "../../images/nabi.jpg";

export default function AboutMe() {
  return (
    <div className="container container-fluid text-light flex-row flex-wrap justify-content-center">
      <div className="text-center col-3 ">
        <h1>About Me</h1>
        <div className="myphotoContainer">
          <img
            src={myPhoto}
            className="my-photo justify-content-center"
            alt="MyPhoto"
          />
        </div>
      </div>
      <p className="load about-me p-4">
        I am a Computer Science student at San Diego State University, equipped
        with an Associate's degree in computer science from San Diego Mesa
        College and a certificate in web development from the University of
        California, San Diego. Known for my exceptional problem-solving skills,
        quick learning abilities, and a strong aptitude for working in
        high-pressure situations, I am driven by a deep passion to bring
        real-world projects to life from their conceptual stages. With a
        commitment to continuous growth and a relentless pursuit of excellence,
        I am dedicated to making a meaningful impact in the field of computer
        science.
      </p>
    </div>
  );
}
