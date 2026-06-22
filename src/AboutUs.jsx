import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>About Paradise Nursery</h1>
        <p className="tagline">Simple plant care for every home.</p>
        <p className="hero-description">
          Paradise Nursery is a friendly plant shop that helps people choose healthy plants and keep them growing with confidence.
        </p>
        <Link to="/products" className="cta-button">
          Shop Our Plants
        </Link>
      </section>

      <section className="mission-section">
        <h2>Our Story</h2>
        <p>
          We created Paradise Nursery to make plant shopping easy, welcoming, and enjoyable for everyone.
        </p>
      </section>

      <section className="values-section">
        <h2>What We Offer</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Healthy Plants</h3>
            <p>
              We select strong, fresh plants that are ready for your home.
            </p>
          </div>
          <div className="value-card">
            <h3>Easy Care Tips</h3>
            <p>
              Every order includes simple guidance so plant care feels manageable.
            </p>
          </div>
          <div className="value-card">
            <h3>Friendly Support</h3>
            <p>
              We are here to help you pick the right plant and answer basic care questions.
            </p>
          </div>
          <div className="value-card">
            <h3>Careful Delivery</h3>
            <p>
              We package each plant with care so it arrives ready for your space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
