'use client';

import React, { useState, useEffect } from 'react';
import { cuisineData } from '../cuisineData/cuisineData'; // Ensure this path is correct
import styles from '../style/styleGallery.module.css';
import Link from 'next/link'; // Import Link for navigation

const FavPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Remove a single dish from favorites
  const removeFavorite = (dishId) => {
    const updatedFavorites = favorites.filter((id) => id !== dishId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Clear all favorites
  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.setItem('favorites', JSON.stringify([]));
  };

  if (!cuisineData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.pageTitle}>Your Favorite Dishes</h1>
      <div className={styles.swiper}>
        <div className={styles.favoritesSection}>
          {favorites.length > 0 ? (
            <div className={styles.favoritesGrid}>
              {favorites.map((dishId) => {
                const dish = Object.keys(cuisineData)
                  .flatMap((cuisine) => cuisineData[cuisine] || [])
                  .find((item) => item.id === dishId);

                return dish ? (
                  <div key={dishId} className={styles.favoriteItem}>
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
                      onClick={() => removeFavorite(dishId)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <p key={dishId}>Dish not found</p>
                );
              })}
            </div>
          ) : (
            <p>No favorites added yet!</p>
          )}
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
    </div>
  );
};

export default FavPage;
