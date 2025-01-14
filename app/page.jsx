"use client";

import React from "react";
import Link from "next/link";
import styles from "./style/styleMain.module.css"; // Path to your main CSS file
import Image from "next/image"; // Importing Image from next/image for optimized image handling

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
          src="/logo.jpeg"  // Ensure logo is in the public folder
          alt="Logo"
          className={styles.logo}
          width={200}  // Set width of the logo
          height={200} // Set height of the logo
        />
      </div>

      {/* Main title */}
      <h1 className={styles.title}>Welcome to the Main Page</h1>

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
        {/* Left Side: Reservation & Contact */}
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Reservation</h3>
            <p className={styles.footerContent}>Book your table online or call us at: 123-456-7890</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerContent}>Email: contact@restaurant.com</p>
            <p className={styles.footerContent}>Phone: 123-456-7890</p>
          </div>
        </div>

        {/* Right Side: Opening Hours & Other Branches */}
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Opening Hours</h3>
            <p className={styles.footerContent}>Mon-Fri: 9:00 AM - 10:00 PM</p>
            <p className={styles.footerContent}>Sat-Sun: 10:00 AM - 11:00 PM</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Other Branches</h3>
            <p className={styles.footerContent}>Branch 1: 123 Main St, City</p>
            <p className={styles.footerContent}>Branch 2: 456 Oak St, City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
