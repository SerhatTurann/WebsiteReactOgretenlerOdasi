// src/components/Carousel.jsx
import { useState, useEffect } from "react";
import "../Css/Carousel.css";
import firstSlide from '../assets/image_1.jpg';
import secondSlide from '../assets/image_2.jpg';
import thirdSlide from '../assets/image_3.jpg';

const Carousel = () => {
  const images = [firstSlide, secondSlide, thirdSlide];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // 3 saniye
    return () => clearInterval(interval);
  }, []); // sadece ilk render

  return (
    <div className="carousel-container">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={prevImage}>❮</button>
      <button className="carousel-next" onClick={nextImage}>❯</button> 
    </div>
  );
};

export default Carousel;
