// Import React and hooks for state management and references
import React, { useState, useRef } from "react"; //react library

// Import Swiper and its modules for creating a carousel
import { Swiper, SwiperSlide } from "swiper/react";  //swiper is a library
import { Navigation, Pagination, Autoplay } from "swiper/modules"; //additional modules from swiper that provides features 

// Import Swiper's CSS for default styling
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Link component from Next.js for navigation between pages
import Link from "next/link"; //create navigation links, library from next.js

// Import custom CSS module for styling the component
import styles from "../style/styleGallery.module.css"; //own css module used to style the webpage

// Array of images for the carousel
const images = [
  { id: 1, src: "/burger.jpg", alt: "Burger", description: "A delicious beef burger with fresh lettuce, cheese, and a soft bun." },
  { id: 2, src: "/japanese food.jpg", alt: "Japanese Food", description: "A variety of traditional Japanese dishes including sushi and ramen." },
  { id: 3, src: "/chicken rice.jpg", alt: "Chicken Rice", description: "Fragrant chicken rice served with tender, flavorful chicken pieces." },
  { id: 4, src: "/pancakes.jpeg", alt: "Pancakes", description: "Fluffy pancakes served with syrup and fresh berries." },
  { id: 5, src: "/korean.jpg", alt: "Korean Food", description: "A spicy Korean dish with bulgogi, kimchi, and rice." },
  { id: 6, src: "/pizza.jpg", alt: "American Food", description: "Crispy crust with sweet and savoury sauce." },
];

const Carousel = () => {
  // State to track the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // State to track the IDs of favorite images
  const [favorites, setFavorites] = useState([]);

  // References to scroll to specific sections
  const favoritesRef = useRef(null); 
  const galleryRef = useRef(null);

  // Filter images based on the search term
  const filteredImages = images.filter((image) =>
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add or remove an image from favorites
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id)); // Remove from favorites
    } else {
      setFavorites([...favorites, id]); // Add to favorites
    }
  };

  // Get the favorite images from the main image list
  const favoriteImages = images.filter((image) => favorites.includes(image.id)); //images array is being filtered. After filtering, favoriteImages will contain only those images that are in favorites.

  // Scroll to the Favorites section
  const scrollToFavorites = () => {
    if (favoritesRef.current) {
      favoritesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }; 

  // Scroll back to the main gallery section
  const goBackToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Remove a specific image from favorites
  const clearFavorite = (id) => {
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  // //Make the favorites array empty.
  const clearAllFavorites = () => {
    setFavorites([]); 
  }; 

  return (
    <div className={styles.carouselContainer} ref={galleryRef}>
      {/* Header */}
      <h1 className={styles.cuisineGalleryTitle}>Cuisine Gallery</h1>

      {/* Search input to filter images */}
      <input
        type="text"
        placeholder="Search for dishes..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />

      {/* Button to view favorites */}
      <div className={styles.buttonContainer}>
        <button className={styles.viewFavoritesButton} onClick={scrollToFavorites}>
          View Favorites ({favorites.length})
        </button>
      </div>

      {/* Swiper Carousel for displaying images */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable navigation, pagination = dots, and autoplay = every 3 seconds changes to new picture
        navigation // Add navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination dots
        autoplay={{ delay: 3000 }} // Automatically move to the next slide every 3 seconds
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Number of slides visible at a time
        loop={true} // Enable infinite looping -> so that it can move back to the first picture smoothly
        className={styles.swiper}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className={styles.slide}>
               
                <img src={image.src} alt={image.alt} className={styles.image} />  {/* Display image */}
                
                <p className={styles.caption}>{image.alt}</p> {/* Display image caption and description */}
                <p className={styles.description}>{image.description}</p>

                {/* Toggle favorite icon */}
                <div
                  className={styles.favoriteIcon}
                  onClick={() => toggleFavorite(image.id)}
                >
                  {favorites.includes(image.id) ? "★" : "☆"} {/* Filled or empty star */}
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No results found</p>
          </div>
        )}
      </Swiper>

      {/* Favorites Section */} {/*checks if the array is empty, if its not, it will be rendered*/}
      {favorites.length > 0 && (
        <div ref={favoritesRef} className={styles.favoritesSection}> {/*favoritesRef used to interact with the DOM for scrolling*/}
          <h2>Favorite Dishes</h2>
          <div className={styles.buttonContainer}>

            {/* Buttons to go back to gallery or clear all favorites */}
            <button className={styles.backToGalleryButton} onClick={goBackToGallery}>{/* style: is already imported at the start, backToGallery is class name  */}
              Back to Gallery
            </button>
            <button className={styles.clearAllFavoritesButton} onClick={clearAllFavorites}>
              Clear All Favorites
            </button>
          </div>

          {/* Display favorite images */}
          <div className={styles.favoritesGrid}>
            {favoriteImages.map((image) => (
              <div key={image.id} className={styles.favoriteItem}>
                <img src={image.src} alt={image.alt} className={styles.favoriteImage} />
                <p>{image.alt}</p>

                {/* Button to remove a specific image from favorites */}
                <button 
                  className={styles.clearFavoriteButton} 
                  onClick={() => clearFavorite(image.id)}
                >
                  Clear
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Button to navigate back to the homepage */}
      <div className={styles.backToHomeButtonContainer}>
        <Link href="/">
          <button className={styles.backToHomeButton}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
