"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../style/styleGallery.module.css"; // Adjust to your CSS path

const images = [
  { src: "/burger.jpg", alt: "Burger", description: "A delicious beef burger with fresh lettuce, cheese, and a soft bun." },
  { src: "/japanese food.jpg", alt: "Japanese Food", description: "A variety of traditional Japanese dishes including sushi and ramen." },
  { src: "/chicken rice.jpg", alt: "Chicken Rice", description: "Fragrant chicken rice served with tender, flavorful chicken pieces." },
  { src: "/pancakes.jpeg", alt: "Pancakes", description: "Fluffy pancakes served with syrup and fresh berries." },
  { src: "/korean.jpg", alt: "Korean Food", description: "A spicy Korean dish with bulgogi, kimchi, and rice." },
];

const Carousel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredImages = images.filter(image =>
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.carouselContainer}>
      {/* Header for Cuisine Gallery */}
      <h1 className={styles.cuisineGalleryTitle}>Cuisine Gallery</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for dishes..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        className={styles.swiper}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <img src={image.src} alt={image.alt} className={styles.image} />
                <p className={styles.caption}>{image.alt}</p>
                <p className={styles.description}>{image.description}</p> {/* Display the description */}
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No results found</p>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;
