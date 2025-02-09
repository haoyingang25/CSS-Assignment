// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Lasagna = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Lasagna</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/lasanga.png"
            alt="Lasagna"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Lasagna is a classic Italian dish made with layers of pasta, meat sauce, and cheese. It is baked until bubbly and golden brown, and is often served with a side of garlic bread and a green salad.
        </p>
        <p className={styles.description}>
          The origins of lasagna can be traced back to ancient Greece, but the dish as we know it today was developed in Italy during the Middle Ages. It has since become a beloved comfort food around the world.
        </p>
        <Link href="/navigation/italian" passHref>
          <button className={styles.backButton}>
            Back to Italian Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lasagna;