import React from 'react';
import './DressGrid.css';


const DressGrid = ({ dresses }) => {
  if (!dresses || !Array.isArray(dresses)) {
    return ;
  }

  return (
    <div className="dress-grid">
      {dresses.map((dress) => (
        <div key={dress.id} className="dress-card">
          <img src={dress.image} alt={dress.name} />
          <h3>{dress.name}</h3>
          <p>{dress.price}</p>
        </div>
      ))}
    </div>
  );
};

export default DressGrid;
