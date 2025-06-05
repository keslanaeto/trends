// src/components/DressCard.jsx
import React from 'react';
import './DressCard.css';

const DressCard = ({ image, name, price }) => {
  return (
    <div className="dress-card">
      <img src={image} alt={name} className="dress-image" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default DressCard;
