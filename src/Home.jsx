import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <h1>Welcome to Paradise Nursery</h1>
        <p className="tagline">
          Bringing nature into your home, one plant at a time.
        </p>
        <p className="hero-description">
          Established in 2024, Paradise Nursery is your premier online
          destination for beautiful, healthy plants. We believe everyone
          deserves a touch of green in their life.
        </p>
        <Link to="/products" className="cta-button">
          Explore Our Plants
        </Link>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Paradise Nursery, our mission is to inspire a deeper connection
          with nature by making plants accessible to everyone. We carefully
          select and nurture each plant to ensure it arrives at your doorstep in
          perfect condition.
        </p>
      </section>

      <section className="values-section">
        <h2>Why Choose Us?</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality Plants</h3>
            <p>
              Each plant is hand-picked and inspected for health and quality
              before shipping.
            </p>
          </div>
          <div className="value-card">
            <h3>Expert Care</h3>
            <p>
              Our team of horticulturists provides detailed care instructions
              with every purchase.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainable</h3>
            <p>
              We use eco-friendly packaging and support sustainable growing
              practices.
            </p>
          </div>
          <div className="value-card">
            <h3>Fast Shipping</h3>
            <p>
              Plants are carefully packaged and shipped quickly to minimize
              transit stress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
