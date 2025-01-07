// app/page.jsx
"use client";

import React from "react";
import Link from "next/link";
import styles from "./style/styleMain.module.css"; // Path to your main CSS file

const HomePage = () => {
  return (
    <div className={styles.mainPage}>
      <h1 className={styles.title}>Welcome to the Main Page</h1>
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
    </div>
  );
};

export default HomePage;
