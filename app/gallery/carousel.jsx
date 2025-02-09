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


import React, { useState, useEffect } from "react"; // use React and tools to manage data and actions in the webpage
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper functionalities
import { motion } from "framer-motion";

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
      location: { name: "Din Tai Fung ", address: "China, Bei Jing Shi, Chao Yang Qu. 新源西里中街24号, Postal Code 100027" },
      rating: { stars: 4.5, reviews: 120 },
    },

    { 
      id: 2, 
      src: "/pekingDuck.jpg", 
      alt: "Peking Duck", 
      description: "Crispy duck served with pancakes and hoisin sauce.",
      location: { name: "QuanJude Roast Duck ", address: " 9 Shuaifuyuan Hu Tong, Wangfujing, Dongcheng, Beijing China 100005 " },
      rating: { stars: 4.0, reviews: 1302 },
    },
    
    { 
      id: 3, 
      src: "/carrotcake.jpg", 
      alt: "Carrot Cake", 
      description: "Sweet, Soft, Savoury.",
      location: { name: "Lau Pa Sat", address: "18 Raffles Quay, Singapore 048582" },
      rating: { stars: 4.4, reviews: 2445 },
    },

    { 
      id: 4, 
      src: "/dimsum.jpg", 
      alt: "Dim Sum", 
      description: "Be spoilt for the wide variety of choices.",
      location: { name: "Jade Garden", address: "1121 Yan an Rd (M), Jing An, Shanghai, China, 200041 " },
      rating: { stars: 4.7, reviews: 2000 },
    },

    {
      id: 5, 
      src: "/popiah.JPG", 
      alt: "Popiah", 
      description: "Traditional chinese snack.",
      location: { name: "Old Airport Road Food Center ", address: "51 old airport road. Singapore 390051" },
      rating: { stars: 4.3, reviews: 658 },
    }

  ],
  Italian: [
    { 
      id: 6, 
      src: "/lasanga.png", 
      alt: "Lasagna", 
      description: "Enjoy it layer by layer. Flavourful.",
      location: { name: "Trattoria Da Enzo al 29", address: "Via Dei Vascellari, 29, 00153 Roma RM Italy" },
      rating: { stars: 4.4, reviews: 5382 },
    },
    { 
      id: 7, 
      src: "/pizza.jpg", 
      alt: "Pizza", 
      description: "Thin and crispy golden crust and it comes with cheese pull.",
      location: { name: "L'antica Pizzeria Da Michele", address: "Via Cesare Sersale, 1, 80139 Napoli NA, Italy " },
      rating: { stars: 4.4 , reviews: 1201 },
    },

    { 
      id: 8, 
      src: "/pasta.jpg", 
      alt: "Pasta", 
      description: "Savoury.",
      location: { name: "De Oscar", address: "Via Lazzaro Palazzi, 4, 20124 Milano MI, Italy " },
      rating: { stars: 4.3, reviews: 1203 },
    },

    { 
      id: 9, 
      src: "/Tiramisu.jpg", 
      alt: "Tiramisu Cake", 
      description: "Suitable for coffee lovers. Alcohol-free!",
      location: { name: "Le Volpi e l'Uva", address: "Piazza dei Rossi, 1R, 50125 Firenze Fl, Italy " },
      rating: { stars: 4.7, reviews: 1250 },
    },
  ],
  
  Korean: [
    { 
      id: 10, 
      src: "/bibimbap.jpg", 
      alt: "Bibimbap", 
      description: "Hearty bowl of rice.",
      location: { name: "Myeondong Joomak ", address: "25-1 Myeondong 10-Gil, Jung District Seoul, South Korea" },
      rating: { stars: 4.9 , reviews: 1206 },
    },
    { 
      id: 11, 
      src: "/tteokbooki.jpg", 
      alt: "Korean Rice Cake", 
      description: "Slightly Spicy and Chewy.",
      location: { name: "Bunsigdang", address: "192 Jungang-Daero, Dong-Gu, Busan, South Korea" },
      rating: { stars: 4.7, reviews: 1270 },
    },

    { 
      id: 12, 
      src: "/kbbq.jpg", 
      alt: "Korean BBQ", 
      description: "Hear the sizzling sound?",
      location: { name: "Daejeon Korean BBQ Chicken Restaurant Hoyeonjae", address: "South Korea, Bongmyeon-dong 623-3 KR" },
      rating: { stars: 4.9, reviews: 1210 },
    }
  ],
  Japanese: [
    { 
      id: 13, 
      src: "/japanese food.jpg", 
      alt: "Sushi", 
      description: "Freshly made sushi.",
      location: { name: "Sukiyabashi Jiro", address: "104-0061 Tokyo, Chuo city, Ginza, 4 Chome-2-15" },
      rating: { stars: 3.9, reviews: 1290 },
    },
    { 
      id: 14, 
      src: "/ramen.jpg", 
      alt: "Ramen", 
      description: "Slup Slup Slup. Enjoy the soup and noodles together",
      location: { name: "Ichiran Ramen", address: "1 Chome-4-16 Dotonburi, Chuo Ward, Osaka, 542-0071" },
      rating: { stars: 4.3, reviews: 3000 },
    },

    { 
      id: 15, 
      src: "/tonkatsu.jpg", 
      alt: "Tonkatsu", 
      description: "Japanese fried chicken/pork/beef.",
      location: { name: "Tonkatsu KATSUKURA", address: "530-8350 Osaka, Kita ward, Kakudacho, 8-7" },
      rating: { stars: 4.1, reviews: 5020 },
    },

    { 
      id: 16, 
      src: "/Onigiri.jpg", 
      alt: "Onigiri", 
      description: "Japanese rice ball.",
      location: { name: "Gochisou Yakimusubi Onimaru Kyoto Shijo Kawaramachi", address: "7 otabimiyamotocho, Shimogyo Ward, Kyoto, 600-8004" },
      rating: { stars: 4.5, reviews: 1209 },
    },

    { 
      id: 17, 
      src: "/pancakes.jpeg", 
      alt: "Japanese Pancake", 
      description: "Soft and Fluffy, topped with sweet fruits and cream.",
      location: { name: "A Happy Pancake Shinsaibashi ", address: "542-0086 Osaka, Chuo ward, Nishishinsaibashi, 2 Chome-10-32" },
      rating: { stars: 4.4, reviews: 1209 },
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
      {/* Footer Section */}
      <div className={styles.footer}>
        
        {/* Left side of the footer */}
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3> {/* Title for 'About' section */}
            <p className={styles.footerContent}>Sharing the best food experiences from around the world.</p> {/* Content under 'About' section */}
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3> {/* Title for 'Contact' section */}
            <p className={styles.footerContent}>Email: contact@foodblog.com</p> {/* Content for email */}
            <p className={styles.footerContent}>Follow us on social media for the latest updates!</p> {/* Social media content */}
          </div>
        </div>

        {/* Right side of the footer */}
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3> {/* Title for 'Follow Us' section */}
            <p className={styles.footerContent}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a> 
              |
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a> 
              |
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter 
              </a>
            </p>{/* Social media platforms with links */}

          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
              <p className={styles.footerContent}>Stay updated with the latest food news.</p>
                <form className={styles.newsletterForm}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={styles.newsletterInput}
                    />
                    <button type="submit" className={styles.newsletterButton}>
                      Sign Up
                    </button>
                </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Carousel; // Export the Carousel component