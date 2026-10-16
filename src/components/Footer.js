import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: "https://www.linkedin.com/in/mnoorzai21/",
    label: "LinkedIn",
    className: "btn-primary",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/mnoorzai21",
    label: "GitHub",
    className: "btn-dark",
    icon: <FaGithub />,
  },
  {
    href: "mailto:mnoorzai21@gmail.com",
    label: "Email",
    className: "btn-success",
    icon: <FaEnvelope />,
  },
];

export default function Footer() {
  return (
    <footer className="text-center text-white fixed-bottom">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {links.map((link) => (
            <a
              key={link.label}
              className={`btn ${link.className} btn-floating m-1`}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.icon}
            </a>
          ))}
        </section>
      </div>
    </footer>
  );
}
