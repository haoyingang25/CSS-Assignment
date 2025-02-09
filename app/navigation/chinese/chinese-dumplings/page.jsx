// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const ChineseDumplings = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Chinese Dumplings</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/chinese dumplings.jpg"
            alt="Chinese Dumplings"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Chinese dumplings, also known as jiaozi, are a traditional Chinese dish that dates back over 1,800 years. They are typically made with a thin dough wrapper filled with a mixture of ground meat and vegetables. Dumplings can be boiled, steamed, or pan-fried, and are often served with a dipping sauce made from soy sauce, vinegar, and chili oil.
        </p>
        <p className={styles.description}>
          Dumplings are a popular dish during Chinese New Year celebrations, as they symbolize wealth and prosperity. The shape of the dumplings resembles ancient Chinese gold ingots, and it is believed that eating them will bring good fortune in the coming year.
        </p>
        <p className={styles.description}>
          There are many regional variations of dumplings in China, each with its own unique fillings and cooking methods. Some popular variations include pork and cabbage dumplings, shrimp and chive dumplings, and vegetarian dumplings filled with mushrooms and tofu.
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

export default ChineseDumplings;