// TEO WEE CHERNG KYSTON S10270092H

"use client";
import React from "react";
import Link from "next/link";
import { cuisineData } from "app/cuisineData/cuisineData"; // Correct the import path
import styles from "app/style/stylesNav.module.css"; // Import the CSS module
import NavBar from "@/app/NavBar";

const KoreanCuisine = () => {
  const koreanFoods = cuisineData.Korean;

  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.title}>Korean Cuisine</h1>
      <h1 className={styles.subtitle}>Click on the dishes to find out their history!</h1>
      <ul className={styles.list}>
        {koreanFoods.map((food, index) => (
          <li key={index} className={styles.listItem}>
            <Link href={`/navigation/korean/${food.alt.toLowerCase().replace(/ /g, "-")}`} passHref>
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
            <p className={styles.footerContent}>Instagram | Facebook | Twitter</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <p className={styles.footerContent}>Stay updated with the latest food news.</p>
            <p className={styles.footerContent}>Sign up for our newsletter!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanCuisine;