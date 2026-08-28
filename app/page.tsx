import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Balcony Safety Nets",
    image: "/images/balcony.jpg",
  },
  {
    title: "Pigeon Safety Nets",
    image: "/images/pigeon.jpg",
  },
  {
    title: "Children Safety Nets",
    image: "/images/children.jpg",
  },
  {
    title: "Terrace & Window Nets",
    image: "/images/terrace.jpg",
  },
  {
    title: "Invisible Grills",
    image: "/images/invisible-grill.jpg",
  },
];

export default function HomePage() {
  return (
    <>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            REAL BIRD NETTING
          </p>

          <h1>
            Safe
            <br />
            Balconies.
            <br />
            Beautiful
            <br />
            Views.
          </h1>

          <p className="hero-description">
            Premium invisible safety grills,
            bird nets and balcony safety
            solutions for homes and businesses
            in Gurugram.
          </p>

          <div className="hero-buttons">

            <Link
              href="/contact"
              className="button button-primary"
            >
              Get Free Quote
            </Link>

            <a
              href="#services"
              className="button button-secondary"
            >
              View Services
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-red-circle"></div>

          <div className="hero-image">

            <Image
              src="/images/terrace.jpg"
              alt="Bird safety net installation"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
            />

          </div>

        </div>

      </section>


      {/* INTRO */}
      <section className="intro-section">

        <p className="eyebrow">
          GURUGRAM'S SAFETY SPECIALISTS
        </p>

        <h2>
          Safety without
          <br />
          blocking your view.
        </h2>

        <p>
          Real Bird Netting provides professional
          bird netting, invisible grills and balcony
          safety solutions using high-quality,
          UV-resistant materials.
        </p>

      </section>


      {/* SERVICES */}
      <section
        className="services-section"
        id="services"
      >

        <div className="section-heading">

          <div>
            <p className="eyebrow">
              OUR SERVICES
            </p>

            <h2>
              Complete safety
              <br />
              solutions.
            </h2>
          </div>

          <Link
            href="/contact"
            className="text-link"
          >
            Get a Free Quote →
          </Link>

        </div>


        <div className="service-grid">

          {services.map((service, index) => (
            <div
              className="service-card"
              key={service.title}
            >

              <div className="service-image">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="service-number">
                  0{index + 1}
                </div>

              </div>

              <h3>{service.title}</h3>

            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

        <div>

          <p className="eyebrow">
            READY TO MAKE YOUR BALCONY SAFER?
          </p>

          <h2>
            Get a free site
            <br />
            inspection today.
          </h2>

        </div>

        <div className="cta-buttons">

          <Link
            href="/contact"
            className="button button-white"
          >
            Contact Us →
          </Link>

          <a
            href="https://wa.me/919354254539"
            className="button button-outline-white"
          >
            WhatsApp Us
          </a>

        </div>

      </section>

    </>
  );
}