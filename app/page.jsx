/*Ang Hao Ying S10270430*/
/*Ayden S10266744*/
/*Kyston S10270092*/
"use client"; // Indicates that this file uses client-side features of Next.js

import React from "react"; // Importing React to use JSX and React components
import Link from "next/link"; // Importing Link component for navigation in Next.js
import Image from "next/image"; // Importing Image component for optimized image handling in Next.js
import styles from "./style/styleMain.module.css"; // Importing the CSS module for styling
import NavBar from "app/NavBar";

const HomePage = () => {
  return (
    <div className={styles.mainPage}> {/* Main container for the homepage, applying styles from the CSS module */}
      <NavBar /> {/* Add the NavBar component here */}
      


      {/* Main title */}
      <h1 className={styles.title}><center>Ready To Explore?</center></h1> {/* Main title for the homepage */}
      <hr className={styles.horizontalLine} /> {/* Horizontal line for visual separation */}
      
      {/* Navigation Tabs with Individual Shadow Containers */}
      <div className={styles.tabsContainer}>
        
        {/* Link to 'Cuisine' section with an image and description */}
        <Link href="/cuisine">
          <div className={styles.tabContainerWithShadow}>
            <div className={styles.tab}>
              <Image src="/bibimbap.jpg" alt="Cuisine" className={styles.tabImage} fill style={{ objectFit: "cover" }} /> {/* Image for the cuisine tab */}
              <div className={styles.overlay}></div> {/* Overlay effect on hover */}
              <span className={styles.tabText}>Top Rated Cuisines in Singapore</span> {/* Tab text */}
            </div>
            <p className={styles.tabDescription}>Discover the finest cuisines in Singapore, from traditional dishes to contemporary fusion.</p> {/* Description for the tab */}
          </div>
        </Link>
        
        {/* Link to 'Recipe' section with an image and description */}
        <Link href="recipe">
            <div className={styles.tabContainerWithShadow}>
                <div className={styles.tab}>
                    <Image src="/carrotcake.jpg" alt="Recipe" className={styles.tabImage} fill style={{ objectFit: "cover" }} />
                    <div className={styles.overlay}></div>
                    <span className={styles.tabText}>Recipe</span>
                </div>
                <p className={styles.tabDescription}>Get the best recipes to try at home, from desserts to main courses.</p>
            </div>
        </Link>

        
        {/* Link to 'Navigation' section with an image and description */}
        <Link href="/navigation">
          <div className={styles.tabContainerWithShadow}>
            <div className={styles.tab}>
              <Image src="/burger.jpg" alt="Navigation" className={styles.tabImage} fill style={{ objectFit: "cover" }} /> {/* Image for the navigation tab */}
              <div className={styles.overlay}></div> {/* Overlay effect on hover */}
              <span className={styles.tabText}>Navigation</span> {/* Tab text */}
            </div>
            <p className={styles.tabDescription}>Explore different locations for food lovers in various cities and regions.</p> {/* Description for the tab */}
          </div>
        </Link>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        
        {/* Left side of the footer */}
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3> {/* Title for 'About' section */}
            <p className={styles.footerContent}>Sharing the best food experiences from around the world.</p> {/* Content under 'About' section */}
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3> {/* Title for 'Contact' section */}
            <p className={styles.footerContent}>Email: contact@foodblog.com</p> {/* Content for email */}
            <p className={styles.footerContent}>Follow us on social media for the latest updates!</p> {/* Social media content */}
          </div>
        </div>

        {/* Right side of the footer */}
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3> {/* Title for 'Follow Us' section */}
            <p className={styles.footerContent}>Instagram | Facebook | Twitter</p> {/* Social media platforms */}
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Newsletter</h3> {/* Title for 'Newsletter' section */}
            <p className={styles.footerContent}>Stay updated with the latest food news.</p> {/* Newsletter content */}
            <p className={styles.footerContent}>Sign up for our newsletter!</p> {/* Call to action for the newsletter */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; // Exporting HomePage component for use in other parts of the application
