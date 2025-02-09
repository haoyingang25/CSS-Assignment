// TEO WEE CHERNG KYSTON S10270092H

"use client";
import React from "react";
import Link from "next/link";
import { cuisineData } from "app/cuisineData/cuisineData"; // Correct the import path
import styles from "app/style/stylesNav.module.css"; // Import the CSS module
import NavBar from "@/app/NavBar";
import { motion } from "framer-motion"; // Import Framer Motion

const ChineseCuisine = () => {
  const chineseFoods = cuisineData.Chinese;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start with 0 opacity and slightly shifted downward
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition effect
      className={styles.container}
    >
      <NavBar />
      <h1 className={styles.title}>Chinese Cuisine</h1>
      <h1 className={styles.subtitle}>Click on the dishes to find out their history!</h1>
      <ul className={styles.list}>
        {chineseFoods.map((food, index) => (
          <li key={index} className={styles.listItem}>
            <Link href={`/navigation/chinese/${food.alt.toLowerCase().replace(/ /g, "-")}`} passHref>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={food.src}
                    alt={food.alt}
                    className={styles.image}
                  />
                  <div className={styles.overlay}></div>
                </div>
                <div className={styles.content}>
                  <h2 className={styles.label}>{food.alt}</h2>
                  <p className={styles.description}>{food.description}</p>
                  <p className={styles.location}>
                    Location: {food.location}
                  </p>
                  <p className={styles.rating}>
                    Rating: {food.rating.stars} ⭐ ({food.rating.reviews} reviews)
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonsWrapper}>
          <Link href="/navigation" passHref>
            <button className={styles.backButton}>Back</button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        {/* Left side of the footer */}
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerContent}>Sharing the best food experiences from around the world.</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerContent}>Email: contact@foodblog.com</p>
            <p className={styles.footerContent}>Follow us on social media for the latest updates!</p>
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
    </motion.div>
  );
};

export default ChineseCuisine;
