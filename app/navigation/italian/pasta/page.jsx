// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css";

const Pasta = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Pasta</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/pasta.jpg"
            alt="Pasta"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Pasta is a staple of Italian cuisine, made from unleavened dough of wheat flour mixed with water or eggs, and formed into various shapes. It is typically cooked by boiling and served with a variety of sauces.
        </p>
        <p className={styles.description}>
          There are many different types of pasta, including spaghetti, penne, fusilli, and lasagna. Each type of pasta is best suited to different types of sauces and dishes, making pasta a versatile and beloved food around the world.
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

export default Pasta;