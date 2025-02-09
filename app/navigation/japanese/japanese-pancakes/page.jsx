// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const JapanesePancakes = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Japanese Pancakes</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/pancakes.jpeg"
            alt="Japanese Pancakes"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Japanese pancakes, also known as soufflé pancakes, are a popular dessert in Japan. They are known for their fluffy and airy texture, achieved by folding whipped egg whites into the batter.
        </p>
        <p className={styles.description}>
          These pancakes are typically served with a variety of toppings, such as fresh fruit, whipped cream, and syrup. They are a delightful treat for breakfast or dessert.
        </p>
        <Link href="/navigation/japanese" passHref>
          <button className={styles.backButton}>
            Back to Japanese Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JapanesePancakes;