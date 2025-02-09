// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const PekingDuck = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Peking Duck</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/pekingDuck.jpg"
            alt="Peking Duck"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Peking Duck is a famous Chinese dish that has been prepared since the Imperial era. The dish is known for its thin, crispy skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook.
        </p>
        <p className={styles.description}>
          The duck is seasoned, air-dried, and roasted until the skin turns crispy and golden brown. It is traditionally served with thin pancakes, hoisin sauce, and julienned scallions. Diners assemble their own wraps by placing a slice of duck, some scallions, and a dab of hoisin sauce on a pancake, then rolling it up.
        </p>
        <p className={styles.description}>
          Peking Duck originated in Beijing (Peking) and has been a staple of Chinese cuisine for centuries. It was first mentioned in a cookbook during the Yuan Dynasty (1271-1368) and became a favorite dish of the imperial court during the Ming Dynasty (1368-1644). Today, it is enjoyed by people all over the world and is a must-try dish for anyone visiting Beijing.
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

export default PekingDuck;