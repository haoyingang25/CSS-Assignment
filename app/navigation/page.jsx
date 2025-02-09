// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import styles from "../style/stylesNav.module.css"; // Import the CSS module
import InteractiveMap from "./InteractiveMap"; // Import the InteractiveMap component

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Explore Foods Around the World</h1>
      </header>

      <main>
        <section className={styles.mapContainer}>
          <h2>Explore the World Map</h2>
          <div className={styles.mapWrapper}>
            <InteractiveMap />
          </div>
        </section>

        <section className={styles.cuisineSection}>
          <h2>Discover Cuisines</h2>
          <div className={styles.cuisineCards}>
            {/* Displaying cuisines */}
            <div className={styles.cuisineCard}>
              <Link href="../navigation/chinese">
                <img src="/Flag_of_the_People's_Republic_of_China.svg.png" alt="Chinese Food" />
                <p>Chinese Cuisine</p>
              </Link>
            </div>
            <div className={styles.cuisineCard}>
              <Link href="../navigation/italian">
                <img src="/Flag_of_Italy.svg.png" alt="Italian Food" />
                <p>Italian Cuisine</p>
              </Link>
            </div>
            <div className={styles.cuisineCard}>
              <Link href="../navigation/korean">
                <img src="/Flag_of_South_Korea.svg.png" alt="Korean Food" />
                <p>Korean Cuisine</p>
              </Link>
            </div>
            <div className={styles.cuisineCard}>
              <Link href="../navigation/japanese">
                <img src="/Flag_of_Japan.svg.png" alt="Japanese Food" />
                <p>Japanese Cuisine</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 All Rights Reserved | Explore Cuisines Around the World</p>
      </footer>

      <button className={styles.backButton} onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default HomePage;
