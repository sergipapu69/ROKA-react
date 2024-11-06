import React, { useState } from 'react';
import '../css/Carousel.css'; // Estilos CSS para el carrusel

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button prev">&#10094;</button>
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>
      <button onClick={goToNext} className="carousel-button next">&#10095;</button>
    </div>
  );
};

export default Carousel;
