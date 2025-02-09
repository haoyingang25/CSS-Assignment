// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const KoreanRiceCake = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Korean Rice Cake</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/tteokbooki.jpg"
            alt="Korean Rice Cake"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Korean rice cakes, known as tteok, are a traditional Korean dish made from glutinous rice flour. They come in various shapes, sizes, and flavors, and can be enjoyed as a snack, dessert, or part of a meal.
        </p>
        <p className={styles.description}>
          Tteok can be steamed, pounded, or pan-fried, and are often filled with sweet or savory ingredients. Some popular varieties include songpyeon (half-moon shaped rice cakes filled with sweet fillings) and tteokbokki (spicy stir-fried rice cakes).
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

export default KoreanRiceCake;