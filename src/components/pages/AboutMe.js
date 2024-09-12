import React from "react";
import "../../index.css";
import myPhoto from "../../images/myphoto.jpg";

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
        <br>
          As a dedicated Computer Science student at San Diego State University,
          graduating in Spring 2025, I bring a wealth of knowledge and practical
          experience to the field. My educational background includes an
          Associate's degree in Computer Science from San Diego Mesa College and
          a certificate in Web Development from the University of California,
          San Diego.
        </br>
        <br>
          I have developed a strong foundation across various areas of computer
          science, including software developing, software engineering, machine
          learning, artificial intelligence, computer security, and data
          science. My expertise extends to applying advanced algorithms and data
          structures to solve complex challenges.
        </br>
        <br>
          Known for my exceptional problem-solving skills and quick learning
          abilities, I thrive in high-pressure environments and am adept at
          swiftly mastering new concepts and technologies. My commitment to
          excellence is matched by my work ethic; I approach every project with
          dedication, ensuring thorough and high-quality outcomes.
        </br>
        <br>
          I excel in collaborative settings, valuing teamwork and the collective
          input of diverse perspectives to drive innovative solutions. My
          ability to work effectively within teams and engage in constructive
          collaboration enhances my projects and fosters a productive working
          environment.
        </br>
        <br>
          Driven by a passion for transforming conceptual ideas into impactful
          real-world applications, I am committed to continuous growth and
          professional development. I am eager to contribute my skills and
          enthusiasm to advance the field of computer science and make a
          significant impact through my work.
        </br>
      </p>
    </div>
  );
}
