import React, { useState } from "react";
import { validateEmail } from "../../utils/validator";

// FormSubmit forwards messages to this inbox. No account or server needed;
// the very first message sends a one-time activation email to this address.
const CONTACT_EMAIL = "mnoorzai21@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const EMPTY_FORM = { name: "", email: "", message: "", website: "" };

function validate(form) {
  if (!form.name.trim()) return "Please enter your name.";
  if (!validateEmail(form.email)) return "Please enter a valid email address.";
  if (form.message.trim().length < 10)
    return "Please enter a message (at least 10 characters).";
  return "";
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    if (error) setError("");
    if (status !== "idle" && status !== "sending") setStatus("idle");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const problem = validate(form);
    if (problem) {
      setError(problem);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _replyto: form.email.trim(),
          _subject: `Portfolio message from ${form.name.trim()}`,
          _template: "table",
          _captcha: "false",
          _honey: form.website, // filled only by spam bots
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || String(data.success) === "false") {
        throw new Error(data.message || `Request failed (${response.status})`);
      }

      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("failed");
    }
  }

  const sending = status === "sending";

  return (
    <section className="row text-light justify-content-center page-content">
      <div className="col-12 col-md-8 col-lg-6">
        <form className="p-4 rounded contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Contact</h2>
          <p className="contact-intro">
            I'm open to software engineering, frontend and full-stack roles,
            remote or in San Diego. Send me a message and I'll reply within a
            day or two.
          </p>

          <div className="form-group mb-3">
            <label htmlFor="contact-name" className="mb-1">
              Name
            </label>
            <input
              id="contact-name"
              className="form-control"
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="contact-email" className="mb-1">
              Email address
            </label>
            <input
              id="contact-email"
              className="form-control"
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="contact-message" className="mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              className="form-control"
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help?"
              required
            />
          </div>

          {/* Honeypot: hidden from people, filled in by spam bots. */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {error && (
            <div className="my-2 p-2 bg-warning text-dark rounded" role="alert">
              {error}
            </div>
          )}

          {status === "sent" && (
            <div className="my-2 p-2 bg-success text-white rounded" role="status">
              Thank you! Your message was sent. I'll get back to you soon.
            </div>
          )}

          {status === "failed" && (
            <div className="my-2 p-2 bg-danger text-white rounded" role="alert">
              Sorry, the message couldn't be sent. Please email me directly at{" "}
              <a className="text-white" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </div>
          )}

          <button type="submit" className="btn btn-success mt-3 w-100" disabled={sending}>
            {sending ? "Sending…" : "Send Message"}
          </button>

          <div id="email-link" className="mt-3">
            Or email me at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </form>
      </div>
    </section>
  );
}
