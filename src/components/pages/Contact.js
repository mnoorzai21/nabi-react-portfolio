import React, { useState } from "react";
import { validateEmail } from "../../utils/validator";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    // Validate fields
    if (name === "email") {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.trim()) {
        setErrorMessage(`${name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // Always update the form state
    setFormState({ ...formState, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage("All fields are required.");
      return;
    }
    if (errorMessage) {
      return;
    }

    // You can handle actual form submission here
    console.log("Form submitted:", formState);
    alert("Thank you! Your message has been sent.");

    // Reset form
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <section className="row text-light -align-center col-9 justify-content-left">
      <div className="col-12 col-md-6 col-lg-6">
        <form className="p-4 rounded" onSubmit={handleFormSubmit}>
          <h2>Contact</h2>

          <div className="form-group">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue={formState.name}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="mb-1">
              Email address
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              defaultValue={formState.email}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              className="form-control"
              rows="5"
              name="message"
              value={formState.message}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Your message"
            />
          </div>
          {errorMessage && (
            <div className="my-1 p-1 bg-warning text-secondary rounded">
              {errorMessage}
            </div>
          )}
          <div>
          <button type="submit" className="btn btn-success mt-4 w-100">
            Submit
          </button>
          </div>
          <div id="email-link">
            Email me at:{" "}
            <a href="mailto: mnoorzai21@gmail.com">mnoorzai21@gmail.com</a>
          </div>
        </form>
      </div>
    </section>
  );
}
