// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css"; 

const Pizza = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Pizza</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/pizza.jpg" // Path to the image
            alt="Pizza"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          Pizza is one of the most popular and beloved dishes in the world. Originating from Italy, pizza is a flatbread typically topped with tomato sauce, cheese, and various toppings. It is baked in an oven until the crust is crispy and the cheese is melted and bubbly.
        </p>
        <p className={styles.description}>
          The modern pizza as we know it today was invented in Naples, Italy, in the late 18th century. The Margherita pizza, named after Queen Margherita of Savoy, is one of the most famous varieties. It is topped with tomatoes, mozzarella cheese, and fresh basil, representing the colors of the Italian flag.
        </p>
        <p className={styles.description}>
          Pizza has evolved over the years and now comes in many different styles and flavors. Some popular variations include pepperoni pizza, Hawaiian pizza with ham and pineapple, and vegetarian pizza with a variety of vegetables. No matter the toppings, pizza remains a favorite comfort food for people of all ages.
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

export default Pizza;