"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import styles from "./style/styleMain.module.css"; // Path to your main CSS file

const HomePage = () => {

  return (
    <div className={styles.mainPage}>
      {/* Subheaders aligned horizontally at the top */}
      <div className={styles.subheaderContainer}>
        <Link href="/about">
          <h2 className={styles.subheader}>About Us</h2>
        </Link>
        <Link href="/history">
          <h2 className={styles.subheader}>History</h2>
        </Link>
      </div>

      {/* Logo at the top left */}
      <div className={styles.logoContainer}>
        <Image
          src="/logo.jpeg" // Ensure logo is in the public folder
          alt="Logo"
          className={styles.logo}
          width={200} // Set width of the logo
          height={200} // Set height of the logo
        />
      </div>

      {/* Main title */}
      <h1 className={styles.title}>Ready To Explore?</h1>

      {/* Three Square Images, Centered */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/dimsum.jpg"  // Ensure these images are in the public folder
            alt="Image 1"
            width={200}  // Square size
            height={200} // Square size
            className={styles.squareImage}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image 
            src="/burger.jpg"  // Ensure these images are in the public folder
            alt="Image 2"
            width={200}  // Square size
            height={200} // Square size
            className={styles.squareImage}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image 
            src="/bibimbap.jpg"  // Ensure these images are in the public folder
            alt="Image 3"
            width={200}  // Square size
            height={200} // Square size
            className={styles.squareImage}
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={styles.tabsContainer}>
        <Link href="/cuisine">
          <div className={styles.tab}>Cuisine</div>
        </Link>
        <Link href="/calculation">
          <div className={styles.tab}>Calculation</div>
        </Link>
        <Link href="/navigation">
          <div className={styles.tab}>Navigation</div>
        </Link>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        {/* Left Side: call to action */}
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerContent}>
              Sharing the best food experiences from around the world.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerContent}>
              Email: contact@foodblog.com
            </p>
            <p className={styles.footerContent}>
              Follow us on social media for the latest updates!
            </p>
          </div>
        </div>

        {/* Right Side: call to action */}
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3>
            <p className={styles.footerContent}>
              Instagram | Facebook | Twitter
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <p className={styles.footerContent}>
              Stay updated with the latest food news.
            </p>
            <p className={styles.footerContent}>
              Sign up for our newsletter!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
