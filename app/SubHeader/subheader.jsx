"use client";
import React from "react";
import Calculation from "./gallery/calculation.jsx"; // Calculation Component
import CuisineGallery from "./gallery/carousel.jsx"; // Cuisine Gallery Component
import NavigationMaps from "./gallery/navigation.jsx"; // Navigation Maps Component
import styles from "../style/stylemain.module.css"; // Your CSS path

const MainComponent = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Main Header */}
      <div className={styles.mainHeader}>
        <h1>Welcome to the Home Page</h1>
      </div>

      {/* Subheader for Calculation */}
      <div>
        <h2 id="calculation" className={styles.subheader}>
          Calculation
        </h2>
      </div>

      {/* Subheader for Cuisine Gallery */}
      <div>
        <h2 id="cuisineGallery" className={styles.subheader}>
          Cuisine Gallery
        </h2>
      </div>

      {/* Subheader for Navigation Maps */}
      <div>
        <h2 id="navigation" className={styles.subheader}>
          Navigation Maps
        </h2>
      </div>

      {/* Sections */}
      <div className={styles.sectionContent} id="calculationSection">
        <h3>Calculation</h3>
        <Calculation />
      </div>

      <div className={styles.sectionContent} id="cuisineGallerySection">
        <h3>Cuisine Gallery</h3>
        <CuisineGallery />
      </div>

      <div className={styles.sectionContent} id="navigationSection">
        <h3>Navigation Maps</h3>
        <NavigationMaps />
      </div>
    </div>
  );
};

export default MainComponent;
