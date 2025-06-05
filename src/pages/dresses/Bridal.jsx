// src/dresses/Bridal.jsx

import React from 'react';
import DressGrid from '../../components/DressGrid';
import dressesData from '../../data/dresses'
import './Bridal.css';

const Bridal = () => {
  // Filter dresses that are categorized under Bridal
  const bridalDresses = dressesData.filter(
    dress => dress.category === 'Bridal'
  );

  return (
    <section className="bridal-page">
      <div className="bridal-hero">
        <h1>Bridal Collection</h1>
        <p>Elegant, timeless designs for your special day</p>
      </div>

      <div className="bridal-section">
        <h2>💍 Dream Wedding Dresses</h2>
        <DressGrid dresses={bridalDresses} />
      </div>
    </section>
  );
};

export default Bridal;