"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch(
        "http://localhost:4000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send message"
        );
      }

      setSuccess(true);
      setMessage("Your message has been sent successfully.");

      form.reset();
    } catch (error) {
      setSuccess(false);

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">

      {/* =========================
          CONTACT HERO
      ========================= */}

      <section className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <p className="contact-eyebrow">
            CONTACT US
          </p>

          <h1>
            Let&apos;s make
            <br />
            your
            <br />
            space safer.
          </h1>

          <p className="contact-description">
            Contact Real Bird Netting for a free site
            inspection and quotation in Gurugram.
          </p>

          <div className="contact-details">

            <a href="tel:+919354254539">
              +91 9354254539
            </a>

            <a href="mailto:sachin2006simra@gmail.com">
              sachin2006simra@gmail.com
            </a>

            <p>
              Shop No. 165F, Gali No. 7,
              Hans Enclave, Sector-33,
              Near Rajiv Chowk,
              Gurugram, Haryana - 122001
            </p>

            <p>
              Open 24 Hours / 7 Days
            </p>

          </div>

          <a
            className="contact-whatsapp"
            href="https://wa.me/919354254539?text=Hi%20Real%20Bird%20Netting%2C%20I%20am%20looking%20for%20Bird%20Netting%2C%20Invisible%20Grills%2C%20or%20Balcony%20Safety%20Net%20services%20in%20Gurugram."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us →
          </a>

        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-card">

          <div className="contact-form-heading">
            <span className="contact-form-icon">
              ✦
            </span>

            <div>
              <h2>Send us a message</h2>

              <p>
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </div>


          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}
            <div className="contact-form-row">

              <div className="contact-form-group">
                <label htmlFor="name">
                  Name <span>*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>


              <div className="contact-form-group">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>

            </div>


            {/* PHONE + SUBJECT */}
            <div className="contact-form-row">

              <div className="contact-form-group">
                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                />
              </div>


              <div className="contact-form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

            </div>


            {/* MESSAGE */}
            <div className="contact-form-group">
              <label htmlFor="message">
                Message <span>*</span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirement..."
                rows={6}
                required
              />
            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="contact-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span>→</span>
                </>
              )}
            </button>


            {/* RESPONSE */}
            {message && (
              <div
                className={`contact-message ${
                  success
                    ? "contact-success"
                    : "contact-error"
                }`}
              >
                {message}
              </div>
            )}

          </form>

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="contact-bottom">

        <p className="contact-eyebrow">
          REAL BIRD NETTING
        </p>

        <h2>
          Ready to make
          <br />
          your balcony safer?
        </h2>

        <p>
          Premium bird nets, invisible grills and
          balcony safety solutions in Gurugram.
        </p>

        <div className="contact-bottom-buttons">

          <a
            href="tel:+919354254539"
            className="contact-bottom-primary"
          >
            Call +91 9354254539
          </a>

          <a
            href="https://wa.me/919354254539"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-bottom-secondary"
          >
            WhatsApp Us
          </a>

        </div>

      </section>

    </main>
  );
}