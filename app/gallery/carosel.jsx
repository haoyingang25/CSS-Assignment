// app/gallery/carousel.jsx
import React, { useState } from "react";
import styles from "style\styleGallery.css";

const images = [
  "/gallery/dish1.jpg",
  "/gallery/dish2.jpg",
  "/gallery/dish3.jpg",
  "/gallery/dish4.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrev} className={styles.navButton}>
        &#8249;
      </button>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Cuisine ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
      </div>
      <button onClick={handleNext} className={styles.navButton}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
