// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const KoreanBBQ = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Korean BBQ</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/kbbq.jpg"
            alt="Korean BBQ"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Korean BBQ, also known as gogi-gui, refers to the Korean method of grilling meat, typically beef, pork, or chicken, at the table. The meat is usually marinated in a mixture of soy sauce, sugar, sesame oil, garlic, and pepper before grilling.
        </p>
        <p className={styles.description}>
          Korean BBQ is a social dining experience, often enjoyed with a variety of side dishes (banchan) such as kimchi, pickled vegetables, and rice. It is a popular way to enjoy a meal with family and friends.
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

export default KoreanBBQ;