import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center text-white fixed-bottom">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            href="https://www.linkedin.com/in/mnoorzai21/"
            role="button">
            <FaLinkedin />
          </a>
          <a
            className="btn btn-dark btn-floating m-1"
            href="https://github.com/mnoorzai21"
            role="button">
            <FaGithub />
          </a>
          <a
            className="btn btn-info btn-floating m-1" // You can change this to btn-info or other color if desired.
            href="https://twitter.com/NewCoder2021" // Replace this with your actual Twitter handle
            role="button">
            <FaTwitter />
          </a>
        </section>
      </div>
    </footer>
  );
}
