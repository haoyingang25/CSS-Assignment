//ANG HAO YING 

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import styles from "../style/styleGallery.module.css";

// Categorized dishes with locations
const cuisineData = {
  Chinese: [
    { 
      id: 1, 
      src: "/chinese dumplings.jpg", 
      alt: "Chinese Dumplings", 
      description: "Steamed or fried dumplings filled with meat and vegetables.",
      location: { name: "Dumpling House", address: "123 Chinatown Rd, Singapore" },
      rating: { stars: 4.5, reviews: 120 },
    },

    { 
      id: 2, 
      src: "/pekingDuck.jpg", 
      alt: "Peking Duck", 
      description: "Crispy duck served with pancakes and hoisin sauce.",
      location: { name: "Peking Delight", address: "456 Orchard Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1200 },
    },
    
    { 
      id: 3, 
      src: "/carrotcake.jpg", 
      alt: "Carrot Cake", 
      description: "Sweet and Savoury.",
      location: { name: "Lau Pa Sat", address: "23 Raffles Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1222 },
    },

    { 
      id: 4, 
      src: "/dimsum.jpg", 
      alt: "Dim Sum", 
      description: "Be spoilt for choices.",
      location: { name: "Crystal Jade", address: "90 ChinaTown Rd, Singapore" },
      rating: { stars: 4.5, reviews: 2000 },
    },

    {
      id: 5, 
      src: "/popiah.JPG", 
      alt: "Popiah", 
      description: "Crunchy and Savoury.",
      location: { name: "Clementi Food Court", address: "12 Clementi Rd, Singapore" },
      rating: { stars: 4.5, reviews: 100 },
    }

  ],
  Italian: [
    { 
      id: 6, 
      src: "/lasanga.png", 
      alt: "lasanga", 
      description: "Layers of Beef.",
      location: { name: "Cafe", address: "789 Marina Bay Dr, Singapore" },
      rating: { stars: 4.5, reviews: 1000 },
    },
    { 
      id: 7, 
      src: "/pizza.jpg", 
      alt: "Pizza", 
      description: "Crispy and golden crust and cheese pull.",
      location: { name: "Pizza Maru", address: "101 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1201 },
    },

    { 
      id: 8, 
      src: "/pasta.jpg", 
      alt: "Pasta", 
      description: "Savoury.",
      location: { name: "Tipo", address: "101 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1203 },
    },

    { 
      id: 9, 
      src: "/tiramisu.jpeg", 
      alt: "Tiramisu", 
      description: "Coffee lover?",
      location: { name: "Cafe", address: "101 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1250 },
    },
  ],
  
  Korean: [
    { 
      id: 10, 
      src: "/bibimbap.jpg", 
      alt: "Bibimbap", 
      description: "Rice topped with vegetables, meat, and a fried egg.",
      location: { name: "Korean Kitchen", address: "404 Tanjong Pagar Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1206 },
    },
    { 
      id: 11, 
      src: "/kimchistew.jpg", 
      alt: "Kimchi Stew", 
      description: "Spicy.",
      location: { name: "Gangnam Corn Dog", address: "505 Clake Quay Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1270 },
    },

    { 
      id: 12, 
      src: "/kbbq.jpg", 
      alt: "Korean BBQ", 
      description: "Hear the sizzling sound?",
      location: { name: "Gangnam KBBQ", address: "505 Tanjong Pagar Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1210 },
    }
  ],
  Japanese: [
    { 
      id: 13, 
      src: "/japanese food.jpg", 
      alt: "Sushi", 
      description: "Fresh sushi rolls with seafood and vegetables.",
      location: { name: "Sushi Bar", address: "606 Clarke Quay, Singapore" },
      rating: { stars: 4.5, reviews: 1290 },
    },
    { 
      id: 14, 
      src: "/ramen.jpg", 
      alt: "Ramen", 
      description: "Japanese noodle soup with broth, meat, and egg.",
      location: { name: "Ramen Street", address: "707 Orchard Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 3000 },
    },

    { 
      id: 15, 
      src: "/tonkatsu.jpg", 
      alt: "Tonkatsu", 
      description: "Japanese fried chicken/pork/beef.",
      location: { name: "Tonkatsu Enbiton", address: "707 Westage Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 5020 },
    },

    { 
      id: 16, 
      src: "/Onigiri.jpg", 
      alt: "Onigiri", 
      description: "Japanese rice ball.",
      location: { name: "Jap shop", address: "8 Westage Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 1209 },
    }

    
  ],
};

const Carousel = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  const favoriteImages = Object.values(cuisineData)
    .flat()
    .filter((image) => favorites.includes(image.id));

  const filteredImages = Object.values(cuisineData)
    .flat()
    .filter((image) =>
      image.alt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const scrollToFavorites = () => {
    document.getElementById("favoritesSection").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Search Bar on the Left and View Favorites Button on the Right */}
      <div className={styles.topBar}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search for a dish..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className={styles.viewFavoritesButton} onClick={scrollToFavorites}>
          View Favorites ({favorites.length})
        </button>
      </div>

      {Object.keys(cuisineData).map((cuisine) => (
        <div key={cuisine} className={styles.cuisineSection}>
          <h2 className={styles.cuisineTitle}>{cuisine} Cuisine</h2>
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
            {cuisineData[cuisine]
              .filter((dish) =>
                dish.alt.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((dish) => (
                <SwiperSlide key={dish.id}>
                  <div className={styles.slide}>
                    <img src={dish.src} alt={dish.alt} className={styles.image} />
                    <p className={styles.caption}>{dish.alt}</p>
                    <p className={styles.description}>{dish.description}</p>
                    {dish.location && (
                      <div className={styles.locationSection}>
                        <h3>Where to Try It:</h3>
                        <p>{dish.location.name}</p>
                        <p>{dish.location.address}</p>
                      </div>
                    )}
                    <div className={styles.ratingSection}>
                      <p>
                        {"★".repeat(Math.floor(dish.rating.stars))}
                        {"☆".repeat(5 - Math.floor(dish.rating.stars))}
                        ({dish.rating.stars.toFixed(1)}/5, {dish.rating.reviews} reviews)
                      </p>
                    </div>
                    <div
                      className={styles.favoriteIcon}
                      onClick={() => toggleFavorite(dish.id)}
                    >
                      {favorites.includes(dish.id) ? "★" : "☆"}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ))}

      {favorites.length > 0 && (
        <div id="favoritesSection" className={styles.favoritesSection}>
          <h2>Favorite Dishes</h2>
          <div className={styles.favoritesGrid}>
            {favoriteImages.map((image) => (
              <div key={image.id} className={styles.favoriteItem}>
                <img src={image.src} alt={image.alt} className={styles.favoriteImage} />
                <p>{image.alt}</p>
                <p>{image.description}</p>
                <div className={styles.ratingSection}>
                  <p>
                    {"★".repeat(Math.floor(image.rating.stars))}
                    {"☆".repeat(5 - Math.floor(image.rating.stars))}
                    ({image.rating.stars.toFixed(1)}/5, {image.rating.reviews} reviews)
                  </p>
                </div>
                {image.location && (
                  <div>
                    <p>{image.location.name}</p>
                    <p>{image.location.address}</p>
                  </div>
                )}
                <button
                  className={styles.clearFavoriteButton}
                  onClick={() => toggleFavorite(image.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Clear All Favorites Button */}
          <button className={styles.clearAllButton} onClick={clearAllFavorites}>
            Clear All Favorites
          </button>
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