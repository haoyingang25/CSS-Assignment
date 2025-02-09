// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css"; 

const DimSum = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Dim Sum</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/dimsum.jpg" // Path to the image
            alt="Dim Sum"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Dim Sum is a traditional Chinese meal made up of small plates of dumplings and other snack dishes and is usually accompanied by tea. It is typically served in the morning through early afternoon and is a popular brunch option in Chinese culture.
        </p>
        <p className={styles.description}>
          The term "dim sum" means "touch the heart," and the dishes are meant to be enjoyed in small portions. Dim Sum includes a variety of dishes such as steamed buns, dumplings, rolls, and other savory and sweet items. Each dish is served in a small steamer basket or on a small plate.
        </p>
        <p className={styles.description}>
          Dim Sum originated in the southern region of China, particularly in the Cantonese-speaking areas. It has since become a beloved tradition worldwide, with many restaurants offering a wide range of dim sum dishes. It is a social meal, often enjoyed with family and friends.
        </p>
        <Link href="/navigation/chinese" passHref>
          <button className={styles.backButton}>
            Back to Chinese Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DimSum;