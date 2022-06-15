import React from "react";
import "../../index.css";
import myPhoto from "../../images/myphoto.jpg";

export default function AboutMe() {
  return (
    <div className="container container-fluid text-light flex-row flex-wrap justify-content-center">
      <div className="text-center col-3 ">
        <h1>About Me</h1>
        <div className="myphotoContainer">
          <img src={myPhoto} className="my-photo " alt="MyPhoto" />
        </div>
      </div>
      <p className="load about-me p-4">
        Full Stack Web Developer with an Associates's in computer science from
        San Diego Mesa College and a certificate in development from the
        University of California, San Diego. Know for problem-solving, learning
        quickly, and a strong ability to work in stressful situations.
        Passionate to develop real-world projects from conception.
      </p>
    </div>
  );
}
