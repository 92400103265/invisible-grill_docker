"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      setSuccess(true);
      setMessage("Login successful! Welcome back.");

      console.log("Logged in user:", result.user);
    } catch (error) {
      setSuccess(false);

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">

      {/* Animated background */}
      <div className="login-bg">
        <span className="floating-circle circle-one"></span>
        <span className="floating-circle circle-two"></span>
        <span className="floating-circle circle-three"></span>
      </div>

      <section className="login-wrapper">

        {/* Left side */}
        <div className="login-info">

          <div className="login-badge">
            <span></span>
            REAL BIRD NETTING
          </div>

          <h1>
            Safe balconies.
            <br />
            Beautiful views.
          </h1>

          <p>
            Premium bird netting, invisible grills and balcony
            safety solutions in Gurugram.
          </p>

          <div className="login-contact">
            <span>Need help?</span>

            <a href="tel:+919354254539">
              +91 9354254539
            </a>
          </div>

        </div>

        {/* Login card */}
        <div className="login-card">

          <div className="login-card-top">
            <div className="login-icon">
              🔐
            </div>

            <div>
              <h2>Welcome Back</h2>

              <p>
                Login to access your account.
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

            </div>

            {/* Password */}
            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

            </div>

            {/* Login button */}
            <button
              className="login-button"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Login
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>

          </form>

          {/* Message */}
          {message && (
            <div
              className={
                success
                  ? "login-message success"
                  : "login-message error"
              }
            >
              {message}
            </div>
          )}

          <div className="back-home">
            <Link href="/">
              ← Back to Home
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}