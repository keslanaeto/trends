import React, { useState } from "react";
import "./Bespoke.css";

const clothItems = [
  {
    id: 1,
    images: [
      "../../images/imgbetty.PNG",
      "../../images/betty.png",
      "../../images/IMGk.png"
    ],
    description: "A flowing full-length lace bespoke dress for our client.",
  },
  {
    id: 2,
    images: [
      "../../images/cho.png",
      "../../images/chom2.png",
      "../../images/chom3.png"
    ],
    description: "A bold signature beaded lace for client for her event.",
  },
  {
    id: 3,
    images: [
      "../../images/ada.png",
      "../../images/ada1.png",
      "../../images/ada2.png"
    ],
    description: "A sophisticated beaded dress for our client.",
  },
  {
    id: 4,
    images: [
      "../../images/flower.png",
      "../../images/flower1.png",
      "../../images/flower3.png"
    ],
    description: "A sophisticated beaded dress for our client.",
  },
  {
    id: 5,
    images: [
      "../../images/oxblood.png",
      "../../images/oxblood2.png",
      "../../images/oxblood1.png"
    ],
    description: "A sophisticated beaded dress for our client.",
  },
  {
    id: 6,
    images: [
      "../../images/shoot.png",
      "../../images/betwhite.png",
      "../../images/betwhite1.png",
    ],
    description: "A sophisticated beaded dress for our client.",
  },
  {
    id: 7,
    images: [
      "../../images/red.png",
      "../../images/red1.png",
      "../../images/red2.png",
    ],
    description: "A sophisticated beaded dress for our client.",
  },
  {
    id: 8,
    images: [
      "../../images/matric.png",
      "../../images/matric1.png",
    ],
    description: "A sophisticated beaded dress for our client.",
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
    setSlideDirection("slide-left");
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bespoke-gallery">
      {clothItems.map((item) => (
        <div className="gallery-item" key={item.id}>
          <img src={item.images[0]} alt="dress preview" className="dress-img" />
          <button className="view-btn" onClick={() => handleViewMore(item)}>
            View More
          </button>
        </div>
      ))}

      

      {selectedItem && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Bespoke View</h2>

            <div className="carousel">
              <div
                key={`${selectedItem.id}-${currentImageIndex}`}
                className={`carousel-img-wrapper ${slideDirection}`}
              >
                <img
                  src={selectedItem.images[currentImageIndex]}
                  alt={`Dress View ${currentImageIndex + 1}`}
                  className="carousel-img"
                />
              </div>

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
