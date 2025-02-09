// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const TiramisuCake = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Tiramisu Cake</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/tiramisu.jpg"
            alt="Tiramisu Cake"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Tiramisu is a classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder. It is a rich and creamy dessert that is perfect for any occasion.
        </p>
        <p className={styles.description}>
          The origins of tiramisu are disputed, but it is believed to have been created in the Veneto region of Italy in the 1960s. The name "tiramisu" means "pick me up" in Italian, referring to the energizing effects of the coffee and cocoa.
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

export default TiramisuCake;