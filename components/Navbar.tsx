"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link href="/" className="logo">
          <span className="logo-dot"></span>
          REAL BIRD NETTING
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </nav>

        {/* CALL BUTTON */}
        <a
          href="tel:+919354254539"
          className="nav-call"
        >
          Call Now
        </a>

        {/* MOBILE BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="mobile-nav">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <a href="tel:+919354254539">
            Call +91 9354254539
          </a>

        </nav>
      )}
    </header>
  );
}