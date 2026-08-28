 import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>

      <section className="page-hero">

        <p className="eyebrow">
          ABOUT REAL BIRD NETTING
        </p>

        <h1>
          Safety.
          <br />
          Experience.
          <br />
          Trust.
        </h1>

        <p>
          Professional bird netting and balcony
          safety solutions in Gurugram.
        </p>

      </section>


      <section className="about-section">

        <div className="about-image">

          <Image
            src="/images/invisible-grill.jpg"
            alt="Invisible grill installation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        </div>


        <div className="about-content">

          <p className="eyebrow">
            WHO WE ARE
          </p>

          <h2>
            Gurugram's trusted
            <br />
            safety solution provider.
          </h2>

          <p>
            Real Bird Netting is Gurugram's trusted
            bird netting and safety solution provider.
            We provide premium bird nets, invisible
            grills, balcony safety nets and professional
            installation.
          </p>

          <p>
            Our products are made using high-quality,
            UV-resistant materials designed for long-term
            outdoor use.
          </p>

          <Link
            href="/contact"
            className="button button-primary"
          >
            Contact Us →
          </Link>

        </div>

      </section>


      <section className="about-values">

        <div>
          <strong>01</strong>
          <h3>Quality Materials</h3>
          <p>
            Durable and UV-resistant materials
            designed for Indian weather.
          </p>
        </div>

        <div>
          <strong>02</strong>
          <h3>Professional Installation</h3>
          <p>
            Experienced installation with
            attention to safety and finish.
          </p>
        </div>

        <div>
          <strong>03</strong>
          <h3>Customer First</h3>
          <p>
            Clear communication, reliable service
            and free site inspection.
          </p>
        </div>

      </section>

    </>
  );
}