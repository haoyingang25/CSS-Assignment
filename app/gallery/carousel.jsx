//ANG HAO YING S10270430
//overview:
//this page is used for displaying images, allowing the images to swipe by importing the swiper library
//it allows users to add to favorites. this page also provides a button which will link them to a new page to view their favorites
//user can select on the star icon to view their favorite 

//This webpage will be categorized dishes with different categories:
//chinese = Chinese cuisine category
//italian = Italian cuisine category
//korean = Korean cuisine category
// Japanese cuisine category
//iiiii

import React, { useState, useEffect } from "react"; // use React and tools to manage data and actions in the webpage
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper functionalities

// Import Swiper styles
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link"; // Import Next.js Link for navigation
import styles from "../style/styleGallery.module.css"; // Import CSS module for styling


// id =  Unique identifier for the dish
// src =  Path to the image of the dish
// alt = Alternative text for the image
// description = describe how the food taste and apperance
// location = Location details for the dish
// rating =  Ratings and reviews for the dish
const cuisineData = {
  Chinese: [
    { 
      id: 1, 
      src: "/chinese dumplings.jpg", 
      alt: "Chinese Dumplings", 
      description: "Steamed or fried dumplings filled with meat and vegetables.",
      location: { name: "Dumpling", address: "1 Chinatown Rd, Singapore" },
      rating: { stars: 4.5, reviews: 120 },
    },

    { 
      id: 2, 
      src: "/pekingDuck.jpg", 
      alt: "Peking Duck", 
      description: "Crispy duck served with pancakes and hoisin sauce.",
      location: { name: "Peking Restaruant", address: "6 Orchard Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1200 },
    },
    
    { 
      id: 3, 
      src: "/carrotcake.jpg", 
      alt: "Carrot Cake", 
      description: "Sweet, Soft, Savoury.",
      location: { name: "Lau Pa Sat", address: "23 Raffles Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1222 },
    },

    { 
      id: 4, 
      src: "/dimsum.jpg", 
      alt: "Dim Sum", 
      description: "Be spoilt for the wide variety of choices.",
      location: { name: "Crystal Jade", address: "90 ChinaTown Rd, Singapore" },
      rating: { stars: 4.5, reviews: 2000 },
    },

    {
      id: 5, 
      src: "/popiah.JPG", 
      alt: "Popiah", 
      description: "Traditional chinese snack.",
      location: { name: "Clementi Food Court", address: "12 Clementi Rd, Singapore" },
      rating: { stars: 4.5, reviews: 100 },
    }

  ],
  Italian: [
    { 
      id: 6, 
      src: "/lasanga.png", 
      alt: "lasanga", 
      description: "Enjoy it layer by layer. Flavourful.",
      location: { name: "Chill Cafe", address: "33 Marina Bay Dr, Singapore" },
      rating: { stars: 4.5, reviews: 1000 },
    },
    { 
      id: 7, 
      src: "/pizza.jpg", 
      alt: "Pizza", 
      description: "Thin and crispy golden crust and it comes with cheese pull.",
      location: { name: "Pizza Heaven", address: "159 City Square, Singapore" },
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
      src: "/Tiramisu.jpg", 
      alt: "Tiramisu Cake", 
      description: "Suitable for coffee lovers. Alcohol-free!",
      location: { name: "Dessert Palace", address: "99 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1250 },
    },
  ],
  
  Korean: [
    { 
      id: 10, 
      src: "/bibimbap.jpg", 
      alt: "Bibimbap", 
      description: "Hearty bowl of rice.",
      location: { name: "Korean", address: "66 Tanjong Pagar Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1206 },
    },
    { 
      id: 11, 
      src: "/kimchistew.jpg", 
      alt: "Kimchi Stew", 
      description: "Spicy.",
      location: { name: "Stew waiting", address: "10 Clake Quay Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1270 },
    },

    { 
      id: 12, 
      src: "/kbbq.jpg", 
      alt: "Korean BBQ", 
      description: "Hear the sizzling sound?",
      location: { name: "Gangnam KBBQ", address: "5 Tanjong Pagar Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1210 },
    }
  ],
  Japanese: [
    { 
      id: 13, 
      src: "/japanese food.jpg", 
      alt: "Sushi", 
      description: "Freshly made sushi.",
      location: { name: "Sushi", address: "66 Clarke Quay, Singapore" },
      rating: { stars: 4.5, reviews: 1290 },
    },
    { 
      id: 14, 
      src: "/ramen.jpg", 
      alt: "Ramen", 
      description: "Slup Slup Slup. Enjoy the soup and noodles together",
      location: { name: "Ramen", address: "7 Orchard Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 3000 },
    },

    { 
      id: 15, 
      src: "/tonkatsu.jpg", 
      alt: "Tonkatsu", 
      description: "Japanese fried chicken/pork/beef.",
      location: { name: "Tonkatsu", address: "70 Westage Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 5020 },
    },

    { 
      id: 16, 
      src: "/Onigiri.jpg", 
      alt: "Onigiri", 
      description: "Japanese rice ball.",
      location: { name: "Japan shop", address: "8 Westage Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 1209 },
    },

    { 
      id: 17, 
      src: "/pancakes.jpeg", 
      alt: "Japanese Pancake", 
      description: "Soft and Fluffy, topped with sweet fruits and cream.",
      location: { name: "Pancake", address: "8 Vivo City, Singapore" },
      rating: { stars: 4.5, reviews: 1209 },
    }

  ],
};

const Carousel = () => {
  // State variables
  const [favorites, setFavorites] = useState([]); // Holds the list of favorite dishes
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the current search query
  const [filteredCuisineData, setFilteredCuisineData] = useState([]); // Stores filtered cuisine data based on the search query

  // Load favorite dishes from local storage on initial render
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites); // Set favorites from local storage
  }, []);

  // Filter cuisine data based on search query
  useEffect(() => {
    const filteredData = Object.keys(cuisineData).map((cuisine) => {
      // If searchQuery matches the cuisine name, return the entire cuisine and its dishes
      if (cuisine.toLowerCase().includes(searchQuery.toLowerCase())) {
        return {
          cuisine,
          dishes: cuisineData[cuisine], // All dishes in the matched cuisine
        };
      }

      // Filter dishes within the cuisine by name if searchQuery matches any dish name
      const dishes = cuisineData[cuisine].filter(
        (dish) => dish.alt.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (dishes.length > 0) {
        return {
          cuisine,
          dishes, // Only return matched dishes
        };
      }

      return null; // Return null if no match found
    }).filter(Boolean); // Filter out null results if no match found for a cuisine

    setFilteredCuisineData(filteredData); // Update the filtered cuisine data
  }, [searchQuery]); // Re-run filtering when searchQuery changes

  // Toggle a dish's favorite status
  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id); // Remove from favorites
    } else {
      updatedFavorites = [...favorites, id]; // Add to favorites
    }
    setFavorites(updatedFavorites); // Update state
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to local storage
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Search bar and view favorites button */}
      <div className={styles.topBar}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search for a dish or cuisine..." // Search input placeholder
            className={styles.searchInput}
            value={searchQuery} // Bind input value to searchQuery state
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery when user types
          />
        </div>
        <Link href="/favpage">
          <button className={styles.viewFavoritesButton}>
            View Favorites ({favorites.length}) {/* Show count of favorites */}
          </button>
        </Link>
      </div>

      {/* Show a "no results" message if no dishes are found */}
      {filteredCuisineData.length === 0 && searchQuery.length > 0 ? (
        <div className={styles.noResults}>
          <p>Search not found!</p>
        </div>
      ) : (
        // Loop through filteredCuisineData and display each cuisine section
        filteredCuisineData.map(({ cuisine, dishes }) => (
          <div key={cuisine} className={styles.cuisineSection}>
            <h2 className={styles.cuisineTitle}>{cuisine} Cuisine</h2>
            {/* Swiper component for displaying dishes as a carousel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Enable navigation, pagination, and autoplay features
              navigation
              pagination={{ clickable: true }} // Make pagination clickable
              autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
              spaceBetween={20}
              slidesPerView={1} // Show one dish at a time
              loop={true} // Enable looping of slides
              className={styles.swiper}
            >
              {/* Display each dish in a Swiper slide */}
              {dishes.map((dish) => (
                <SwiperSlide key={dish.id}>
                  <div className={styles.slide}>
                    <img src={dish.src} alt={dish.alt} className={styles.image} /> {/* Dish image */}
                    <p className={styles.caption}>{dish.alt}</p> {/* Dish name */}
                    <p className={styles.description}>{dish.description}</p> {/* Dish description */}
                    <p className={styles.rating}>
                      Rating: {dish.rating.stars} ⭐ ({dish.rating.reviews} reviews) {/* Dish rating */}
                    </p>
                    <p className={styles.location}>
                      Location: {dish.location.name} <br />{dish.location.address} {/* Location details */}
                    </p>
                    {/* Favorite icon to toggle dish favorite status */}
                    <div
                      className={styles.favoriteIcon}
                      onClick={() => toggleFavorite(dish.id)}
                    >
                      {favorites.includes(dish.id) ? "★" : "☆"} {/* Display filled star if favorite, empty otherwise */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))
      )}

      {/* Back to Home button */}
      <div className={styles.buttonGroup}>
        <Link href="/">
          <button className={styles.backToHomeButton}>Back to Home</button> {/* Navigate back to the home page */}
        </Link>
      </div>
    </div>
  );
};

export default Carousel; // Export the Carousel component
