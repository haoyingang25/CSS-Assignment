// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Ramen = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Ramen</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/ramen.jpg"
            alt="Ramen"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Ramen is a Japanese noodle soup dish that has become popular worldwide. It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and topped with ingredients such as sliced pork, nori (seaweed), menma (bamboo shoots), and scallions.
        </p>
        <p className={styles.description}>
          Ramen has a rich history and has evolved into many regional varieties, each with its own unique flavors and ingredients. Some popular types of ramen include shoyu (soy sauce) ramen, miso ramen, and tonkotsu (pork bone) ramen.
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

export default Ramen;