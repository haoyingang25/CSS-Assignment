// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Popiah = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Popiah</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/popiah.jpg"
            alt="Popiah"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Popiah is a Fujian/Chaozhou-style fresh spring roll filled with a variety of ingredients such as jicama, carrots, bean sprouts, and shrimp. It is typically served with a sweet sauce and wrapped in a thin, crepe-like skin.
        </p>
        <p className={styles.description}>
          Popiah is a popular dish in Southeast Asia, particularly in Malaysia, Singapore, and Thailand. It is often enjoyed as a snack or appetizer and is a staple at family gatherings and celebrations.
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

export default Popiah;