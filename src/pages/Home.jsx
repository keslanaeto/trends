import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
<Link to="/dresses" className="hero-btn">Shop Now</Link>


const Home = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/clothing.png')"
      }}
    >
      <div className="hero-content">
        <h1>Discover the Latest Fashion Trends</h1>
        <p>Find the perfect outfit for any occasion at EllaTrends</p>
        <Link to="/Bespoke" className="hero-btn">Shop Now</Link>
      </div>
    </section>
  );
};

export default Home;
