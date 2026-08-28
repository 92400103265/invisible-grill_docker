const images = [
  {
    src: "/images/balcony.jpg",
    title: "Invisible Balcony Grill",
  },
  {
    src: "/images/invisible-grill.jpg",
    title: "Invisible Safety Grill",
  },
  {
    src: "/images/window.jpg",
    title: "Invisible Window Grill",
  },
  {
    src: "/images/terrace.jpg",
    title: "Terrace Safety Grill",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">INVISIBLE SAFETY GRILL</p>

          <h1>
            Safe Balconies.
            <br />
            Beautiful Views.
          </h1>

          <p className="description">
            Premium invisible safety grills for balconies, windows and
            terraces.
          </p>

          <div className="buttons">
            <button>Get Free Quote</button>
            <button className="secondary">View Projects</button>
          </div>
        </div>

        <div className="image-circle">
          <img
            src={images[0].src}
            alt={images[0].title}
          />
        </div>
      </section>

      <section className="projects">
        <h2>Our Solutions</h2>

        <div className="project-grid">
          {images.map((image) => (
            <div className="project-card" key={image.src}>
              <img src={image.src} alt={image.title} />
              <h3>{image.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}