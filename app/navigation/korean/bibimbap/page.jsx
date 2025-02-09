// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css"; 

const Bibimbap = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Bibimbap</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/bibimbap.jpg" // Path to the image
            alt="Bibimbap"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Bibimbap is a popular Korean dish that consists of a bowl of warm white rice topped with sautéed and seasoned vegetables, gochujang (chili pepper paste), soy sauce, a fried egg, and sliced meat (usually beef). The ingredients are mixed together thoroughly before eating.
        </p>
        <p className={styles.description}>
          Bibimbap is known for its vibrant colors and balanced flavors. It is a versatile dish that can be customized with various ingredients and is enjoyed by people of all ages.
        </p>
        <Link href="/navigation/korean" passHref>
          <button className={styles.backButton}>
            Back to Korean Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bibimbap;