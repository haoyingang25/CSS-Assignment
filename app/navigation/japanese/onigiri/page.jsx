// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Onigiri = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Onigiri</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/onigiri.jpg"
            alt="Onigiri"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Onigiri, also known as rice balls, are a popular Japanese snack made from rice formed into triangular or cylindrical shapes and wrapped in nori (seaweed). They can be filled with a variety of ingredients, such as pickled plum, salmon, or tuna.
        </p>
        <p className={styles.description}>
          Onigiri are a convenient and portable snack, often enjoyed as a quick meal or picnic food. They have been a staple of Japanese cuisine for centuries and are loved by people of all ages.
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

export default Onigiri;