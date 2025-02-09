"use client";

import React from "react";
import Link from "next/link";
import styles from "../style/stylesNav.module.css"; // Import the CSS module
import InteractiveMap from "./InteractiveMap"; // Import the InteractiveMap component
import NavBar from "../NavBar"; // Import the NavBar component

const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavBar /> {/* Add the NavBar component here */}
      <header>
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
                <img
                  src="/Flag_of_the_People's_Republic_of_China.svg.png"
                  alt="Chinese Food"
                />
                <p>Chinese Cuisine</p>
              </Link>
            </div>
            <div className={styles.cuisineCard}>
              <Link href="../navigation/italian">
                <img
                  src="/Flag_of_Italy.svg.png"
                  alt="Italian Food"
                />
                <p>Italian Cuisine</p>
              </Link>
            </div>
            <div className={styles.cuisineCard}>
              <Link href="../navigation/korean">
                <img
                  src="/Flag_of_South_Korea.svg.png"
                  alt="Korean Food"
                />
                <p>Korean Cuisine</p>
              </Link>
            </div>
            <div className={styles.cuisineCard}>
              <Link href="../navigation/japanese">
                <img
                  src="/Flag_of_Japan.svg.png"
                  alt="Japanese Food"
                />
                <p>Japanese Cuisine</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <button
        className={styles.backButton}
        onClick={() => window.history.back()}
      >
        Back
      </button>

      {/* Footer Section */}
      <div className={styles.footer}>
        {/* Left side of the footer */}
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerContent}>
              Sharing the best food experiences from around the world.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerContent}>Email: contact@foodblog.com</p>
            <p className={styles.footerContent}>
              Follow us on social media for the latest updates!
            </p>
          </div>
        </div>

        {/* Right side of the footer */}
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3>
            <p className={styles.footerContent}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              |
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              |
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
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

export default HomePage;
