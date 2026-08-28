import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2>
            <span className="logo-red">REAL</span> BIRD NETTING
          </h2>

          <p>
            Real Bird Netting is Gurugram&apos;s trusted bird
            netting and safety solution provider, offering
            premium bird nets, invisible grills, balcony
            safety nets, and professional installation.
          </p>

          <p>
            High-quality, UV-resistant materials with
            professional installation.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <span>Balcony Safety Nets</span>
          <span>Pigeon Safety Nets</span>
          <span>Monkey Safety Nets</span>
          <span>Children Safety Nets</span>
          <span>Cricket Practice Nets</span>
          <span>Invisible Grills</span>
          <span>Ceiling Pulley Cloth Hangers</span>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>

          <p>
            Shop No. 165F, Gali No. 7,
            Hans Enclave, Sector-33,
            Near Rajiv Chowk,
            Gurugram, Haryana - 122001
          </p>

          <a href="tel:+919354254539">
            +91 9354254539
          </a>

          <a href="mailto:sachin2006simra@gmail.com">
            sachin2006simra@gmail.com
          </a>

          <span>Open 24 Hours / 7 Days</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Real Bird Netting.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}