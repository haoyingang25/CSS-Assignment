// TEO WEE CHERNG KYSTON S10270092H

import React from "react";
import Link from "next/link";
import styles from "app/style/stylesNav.module.css"; // Import the CSS module

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <div className={styles.logoText}>SCHUMANN'S</div> {/* Text-based logo */}
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/history">History</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cuisine">Top Rated Foods</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/recipe">Recipes</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/navigation">Food Map</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/favpage">Your Favourites</Link>
        </li>
      </ul>

    </nav>
  );
};

export default NavBar;