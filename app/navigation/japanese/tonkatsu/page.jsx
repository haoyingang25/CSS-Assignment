// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Tonkatsu = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Tonkatsu</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/tonkatsu.jpg"
            alt="Tonkatsu"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Tonkatsu is a Japanese dish that consists of a breaded, deep-fried pork cutlet. It is typically served with shredded cabbage, rice, and miso soup, and is often accompanied by a tangy tonkatsu sauce.
        </p>
        <p className={styles.description}>
          Tonkatsu was introduced to Japan in the late 19th century and has since become a popular comfort food. It is enjoyed in various forms, including katsudon (tonkatsu served over a bowl of rice with egg) and katsu curry (tonkatsu served with Japanese curry).
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

export default Tonkatsu;