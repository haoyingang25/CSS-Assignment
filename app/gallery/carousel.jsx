import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import styles from "../style/styleGallery.module.css";

const images = [
  { 
    id: 1, 
    src: "/burger.jpg", 
    alt: "Burger", 
    description: "A delicious beef burger with fresh lettuce, cheese, and a soft bun.",
    location: { name: "Burger King", address: "123 Jurong Point St, Jurong West" }
  },
  { 
    id: 2, 
    src: "/japanese food.jpg", 
    alt: "Japanese Food", 
    description: "A variety of traditional Japanese dishes including sushi and ramen.",
    location: { name: "Sushi Express ver 2", address: "789 Westgate Blvd, Jurong" }
  },
  { 
    id: 3, 
    src: "/chicken rice.jpg", 
    alt: "Chicken Rice", 
    description: "Fragrant chicken rice served with tender, flavorful chicken pieces.",
    location: { name: "Chicken Rice", address: "456 China Town ave 3, ChinaTown" }
  },
  { 
    id: 4, 
    src: "/pancakes.jpeg", 
    alt: "Pancakes", 
    description: "Fluffy pancakes served with syrup and fresh berries.",
    location: { name: "Pancake Cafe", address: "789 Bugis Ave, Bugis+" }
  },
  { 
    id: 5, 
    src: "/korean.jpg", 
    alt: "Korean Food", 
    description: "A spicy Korean dish with bulgogi, kimchi, and rice.",
    location: { name: "Korean BBQ King", address: "123 BBQ Blvd, Cityville" }
  },
  { 
    id: 6, 
    src: "/pizza.jpg", 
    alt: "American Food", 
    description: "Crispy crust with sweet and savory sauce.",
    location: { name: "Pizza Paradise", address: "567 Pizza Rd, Townsville" }
  }
];

const Carousel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const favoritesRef = useRef(null);
  const galleryRef = useRef(null);

  // Fetch favorites from localStorage when the component is mounted
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const filteredImages = images.filter((image) =>
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    // Update state and save to localStorage
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const favoriteImages = images.filter((image) => favorites.includes(image.id));

  const scrollToFavorites = () => {
    if (favoritesRef.current) {
      favoritesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goBackToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearFavorite = (id) => {
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites"); // Clear all favorites from localStorage
  };

  return (
    <div className={styles.carouselContainer} ref={galleryRef}>
      <h1 className={styles.cuisineGalleryTitle}>Cuisine Gallery</h1>

      <input
        type="text"
        placeholder="Search for dishes..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.buttonContainer}>
        <button className={styles.viewFavoritesButton} onClick={scrollToFavorites}>
          View Favorites ({favorites.length})
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className={styles.swiper}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className={styles.slide}>
                <img src={image.src} alt={image.alt} className={styles.image} />
                <p className={styles.caption}>{image.alt}</p>
                <p className={styles.description}>{image.description}</p>

                {/* Display location information */}
                {image.location && (
                  <div className={styles.locationSection}>
                    <h3>Where to Try It:</h3>
                    <p>{image.location.name}</p>
                    <p>{image.location.address}</p>
                  </div>
                )}

                <div className={styles.favoriteIcon} onClick={() => toggleFavorite(image.id)}>
                  {favorites.includes(image.id) ? "★" : "☆"}
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

      {favorites.length > 0 && (
        <div ref={favoritesRef} className={styles.favoritesSection}>
          <h2>Favorite Dishes</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.backToGalleryButton} onClick={goBackToGallery}>
              Back to Gallery
            </button>
            <button className={styles.clearAllFavoritesButton} onClick={clearAllFavorites}>
              Clear All Favorites
            </button>
          </div>

          <div className={styles.favoritesGrid}>
            {favoriteImages.map((image) => (
              <div key={image.id} className={styles.favoriteItem}>
                <img src={image.src} alt={image.alt} className={styles.favoriteImage} />
                <p>{image.alt}</p>
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

      <div className={styles.backToHomeButtonContainer}>
        <Link href="/">
          <button className={styles.backToHomeButton}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
