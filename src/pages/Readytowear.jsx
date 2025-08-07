import React, { useState } from "react";
import "./Readytowear.css"

const clothItems = [
  {
    id: 1,
    images: [
      "../../images/blacksassy.png",
      "../../images/blacksassy2.png",
      "../../images/blacksassy1.png",
    
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },

  {
    id: 2,
    images: [
      "../../images/ella1.png",
      "../../images/ella.png",
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },

  {
    id: 3,
    images: [
      "../../images/reddress.png",
      "../../images/reddress1.png",
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },

  {
    id: 4,
    images: [
      "../../images/kes1.png",
      "../../images/kes2.png",
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },

  {
    id: 5,
    images: [
      "../../images/bettyblac.png",
      "../../images/bettyblac2.png",
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },

  {
    id: 6,
    images: [
      "../../images/ellared.png",
      "../../images/ellared1.png",
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },
  
];

const Bespoke = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("slide-right");
  
  const handleViewMore = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0); 
    setSlideDirection("slide-right");
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
    setSlideDirection("slide-right");
  };

  const showNextImage = () => {
    if (!selectedItem) return;
    setSlideDirection("slide-right");
    setCurrentImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const showPrevImage = () => {
    if (!selectedItem) return;
    setSlideDirection("slide-right");
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
