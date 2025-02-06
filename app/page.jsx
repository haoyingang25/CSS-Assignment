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
        <Image src="/logo.jpeg" alt="Logo" className={styles.logo} width={200} height={200} />
      </div>

      {/* Main title */}
      <h1 className={styles.title}><center>Ready To Explore?</center></h1>
      <hr className={styles.horizontalLine} />
      {/* Navigation Tabs with Individual Shadow Containers */}
      <div className={styles.tabsContainer}>
        <Link href="/cuisine">
          <div className={styles.tabContainerWithShadow}>
            <div className={styles.tab}>
              <Image src="/bibimbap.jpg" alt="Cuisine" className={styles.tabImage} fill style={{ objectFit: "cover" }} />
              <div className={styles.overlay}></div>
              <span className={styles.tabText}>Top Rated Cuisines in Singapore</span>
            </div>
            <p className={styles.tabDescription}>Discover the finest cuisines in Singapore, from traditional dishes to contemporary fusion.</p>
          </div>
        </Link>
        <Link href="/calculation">
          <div className={styles.tabContainerWithShadow}>
            <div className={styles.tab}>
              <Image src="/carrotcake.jpg" alt="Recipe" className={styles.tabImage} fill style={{ objectFit: "cover" }} />
              <div className={styles.overlay}></div>
              <span className={styles.tabText}>Receipe</span>
            </div>
            <p className={styles.tabDescription}>Get the best recipes to try at home, from desserts to main courses.</p>
          </div>
        </Link>
        <Link href="/navigation">
          <div className={styles.tabContainerWithShadow}>
            <div className={styles.tab}>
              <Image src="/burger.jpg" alt="Navigation" className={styles.tabImage} fill style={{ objectFit: "cover" }} />
              <div className={styles.overlay}></div>
              <span className={styles.tabText}>Navigation</span>
            </div>
            <p className={styles.tabDescription}>Explore different locations for food lovers in various cities and regions.</p>
          </div>
        </Link>
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerContent}>Sharing the best food experiences from around the world.</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <p className={styles.footerContent}>Email: contact@foodblog.com</p>
            <p className={styles.footerContent}>Follow us on social media for the latest updates!</p>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3>
            <p className={styles.footerContent}>Instagram | Facebook | Twitter</p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <p className={styles.footerContent}>Stay updated with the latest food news.</p>
            <p className={styles.footerContent}>Sign up for our newsletter!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;