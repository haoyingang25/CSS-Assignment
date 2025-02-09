// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Sushi = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Sushi</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/japanese food.jpg"
            alt="Sushi"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Sushi is a traditional Japanese dish made with vinegared rice, usually accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi is often served with pickled ginger, wasabi, and soy sauce.
        </p>
        <p className={styles.description}>
          There are many different types of sushi, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish). Sushi has become a popular cuisine worldwide, known for its fresh and delicate flavors.
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

export default Sushi;