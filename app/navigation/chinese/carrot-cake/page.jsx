// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";
import styles from "app/style/styleDishes.module.css"; 

const CarrotCake = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Carrot Cake</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/carrotcake.jpg" // Path to the image
            alt="Carrot Cake"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <p className={styles.description}>
          The origins of carrot cake can be traced to a Chinese Teochew dish found in Chaoshan, China, known as mi gao (rice cake) or gao guo (starch cake). Unlike the local version, the Chaoshan rice cake is made only from rice flour and milled puffed rice. Fish sauce and black sweetened soya sauce are used to marinate the rice cake before it is cut and fried with eggs, oysters and prawns. Sometimes a spicy barbecue sauce is added and the dish topped with sugar before serving.
        </p>
        <p className={styles.description}>
          The dish was brought over to Singapore by early Teochew immigrants and as late as the 1950s it was still known as char kueh (fried rice cake), which was simply cubes of rice cakes stir-fried with dark soya sauce. In those days, preparing the core ingredient, the rice cakes, was hard work as the hawkers had to mill broken rice grains into flour. Gradually, more ingredients were added to the dish, including radish for the rice cakes as well as preserved radish, eggs, garlic and soya sauce for extra flavouring.
        </p>
        <p className={styles.description}>
          Teochew hawker Ng Soik Theng claims to be the first to have called this dish chai tow kway (fried carrot cake) in the 1960s when she added radish to it. Another hawker, Lau Goh, claims to be one of the pioneers who converted the dark carrot cake into a white version. He began selling his carrot cake out of a pushcart along Merchant Road in the 1960s before he became famous for his white carrot cake stall at People’s Park in the 1970s. He also mixed radish with his rice flour paste, though he did not use preserved radish while preparing the dish. To save on cost, some of Lau Goh’s customers brought their own duck eggs to be fried with the dish. The cake was cut up with a string into finger-length rectangles before eating.
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

export default CarrotCake;