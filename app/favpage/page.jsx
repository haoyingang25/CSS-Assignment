// //ANG HAO YING S10270430
'use client';

import React, { useState, useEffect } from 'react';
import { cuisineData } from '../cuisineData/cuisineData'; // Ensure the path to the data is correct
import styles from '../style/styleGallery.module.css'; // Import CSS module for styling
import Link from 'next/link'; // Import Link component for navigation

const FavPage = () => {
  const [favorites, setFavorites] = useState([]);

  // Set background color when the component mounts
  useEffect(() => {
    document.body.style.backgroundColor = "#DED3C2";
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);
  
  // Load favorite dishes from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites); // Set the favorites state with data from localStorage
  }, []);

  // Function to remove a specific dish from the favorites list
  const removeFavorite = (dishId) => {
    const updatedFavorites = favorites.filter((id) => id !== dishId);
    setFavorites(updatedFavorites); // Update the state with the new list
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update localStorage
  };

  // Function to clear all dishes from the favorites list
  const clearAllFavorites = () => {
    setFavorites([]); // Reset the favorites list in the state
    localStorage.setItem('favorites', JSON.stringify([])); // Clear the favorites list in localStorage
  };

  // Show a loading message if the cuisine data is not available or if it's empty
  if (!cuisineData || Object.keys(cuisineData).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.carouselContainer}>
      {/* Page Title */}
      <h1 className={styles.pageTitle}>Your Favorite Dishes</h1>
      <div className={styles.swiper}>
        <div className={styles.favoritesSection}>
          {/* Check if there are any favorite dishes */}
          {favorites.length > 0 ? (
            <div className={styles.favoritesGrid}>
              {/* Map through the favorite dish IDs to display their details */}
              {favorites.map((dishId) => {
                // Safely find the dish details from cuisineData based on the dish ID
                const dish = Object.keys(cuisineData)
                  .flatMap((cuisine) => cuisineData[cuisine] || [])
                  .find((item) => item.id === dishId);

                return dish ? (
                  <div key={dishId} className={styles.favoriteItem}>
                    {/* Display dish image, details, and a button to remove the dish */}
                    <img
                      src={dish.src}
                      alt={dish.alt}
                      className={styles.favoriteImage}
                    />
                    <p className={styles.caption}>{dish.alt}</p>
                    <p className={styles.description}>{dish.description}</p>
                    <p className={styles.location}>
                      Location: {dish.location.name} - {dish.location.address}
                    </p>
                    <p className={styles.rating}>
                      Rating: {dish.rating.stars} ⭐ ({dish.rating.reviews} reviews)
                    </p>
                    <button 
                      className={styles.clearFavoriteButton} 
                      onClick={() => removeFavorite(dishId)} // Remove this specific dish from favorites
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <p key={dishId}>Dish not found</p> // Handle case where dish details are not found
                );
              })}
            </div>
          ) : (
            <p>No favorites added yet!</p> // Message displayed when no favorites are available
          )}

          {/* Button to clear all favorites */}
          <div className={styles.buttonGroup}>
            <button
              className={styles.clearAllFavoritesButton}
              onClick={clearAllFavorites}
            >
              Clear All Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Back to Gallery Button */}
      <div className={styles.buttonGroup}>
        <Link href="/cuisine">
          <button className={styles.backToGalleryButton}>Back to Gallery</button>
        </Link>
      </div>

      {/* Back to Main Page Button */}
      <div className={styles.buttonGroup}>
        <Link href="/">
          <button className={styles.backToMainPageButton}>Back to Main Page</button>
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
            <p className={styles.footerContent}>Instagram | Facebook | Twitter</p> {/* Social media platforms */}
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Newsletter</h3> {/* Title for 'Newsletter' section */}
            <p className={styles.footerContent}>Stay updated with the latest food news.</p> {/* Newsletter content */}
            <p className={styles.footerContent}>Sign up for our newsletter!</p> {/* Call to action for the newsletter */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavPage;

