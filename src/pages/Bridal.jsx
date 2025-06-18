import React, { useState } from "react";
import "./Bridal.css"

const clothItems = [
  {
    id: 1,
    images: [
      "../../images/favourbride1.png",
      "../../images/favbride.png",
    
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },

 
];

const Bespoke = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewMore = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0); 
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const showNextImage = () => {
    if (!selectedItem) return;
    setCurrentImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const showPrevImage = () => {
    if (!selectedItem) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bespoke-gallery">
      {clothItems.map((item) => (
        <div className="gallery-item" key={item.id}>
          <img src={item.images[0]} alt={item.name} className="dress-img" />
          <button className="view-btn" onClick={() => handleViewMore(item)}>
            View More
          </button>
        </div>
      ))}

      {selectedItem && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.name}</h2>

            <div className="carousel">
              <img
                src={selectedItem.images[currentImageIndex]}
                alt={`Dress View ${currentImageIndex + 1}`}
                className="carousel-img"
              />

              <div className="carousel-controls">
                <button onClick={showPrevImage}>❮ Prev</button>
                <button onClick={showNextImage}>Next ❯</button>
              </div>
            </div>

            <p>{selectedItem.description}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bespoke;
