import React from "react";
import myPhoto from "../../images/myphoto.jpg";

export default function AboutMe() {
  return (
    <div className="container container-fluid d-flex flex-row flex-wrap justify-content-center">
      <div className="text-center col-3 ">
        <h1>About</h1>
        <img
          src={myPhoto}
          className="img-fluid my-photo rounded-circle"
          alt="MyPhoto"
        />
      </div>
      <p className="load about-me p-3">
        Full Stack Web Developer with an Associates's in computer science from
        San Diego Mesa College and a certificate in development from the
        University of California, San Diego. Know for problem-solving, learning
        quickly, and a strong ability to work in stressful situations.
        Passionate to develop real-world projects from conception. and Java
      </p>
    </div>
  );
}
