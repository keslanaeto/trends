// src/pages/dresses/ReadyToWear.jsx

import React from 'react';
import DressGrid from '../../components/DressGrid';
import dressesData from '../../data/dresses';
import './Readywear.css'

const ReadyToWear = () => {
  // Filter dresses with category 'readytowear'
  const trendingDresses = dressesData.filter(dress => dress.category === 'Casual' && dress.tag === 'Trending');
  const everydayDresses = dressesData.filter(dress => dress.category === 'Casual' && dress.tag === 'Everyday');
  const africanDresses = dressesData.filter(dress => dress.category === 'Casual' && dress.tag === 'African');
  const affordableDresses = dressesData.filter(dress => dress.category === 'Casual' && dress.tag === 'Affordable');
  return (
    <section className="casual-page">
    <div className="casual-hero">
      <h1>Ready to wear</h1>
      <p>Relax in style. Shop our collection of sophisticated casual wear for every occasion.</p>
    </div>

    <div className="casual-section">
      <h2>🌸 Betty's Set</h2>
      <DressGrid dresses={trendingDresses} />
    </div>

    <div className="casual-section">
      <h2>☀️ Everyday Styles</h2>
      <DressGrid dresses={everydayDresses} />
    </div>

    <div className="casual-section">
      <h2>🌍 African-Inspired Casuals</h2>
      <DressGrid dresses={africanDresses} />
    </div>

    <div className="casual-section">
      <h2>💸 Affordable Chic</h2>
      <DressGrid dresses={affordableDresses} />
    </div>
    </section>
  );
};

export default ReadyToWear;
