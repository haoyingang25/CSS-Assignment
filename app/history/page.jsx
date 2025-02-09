/*Ang Hao Ying S10270430F*/
/*Ayden Chionh S10266744E*/
/*TEO WEE CHERNG KYSTON S10270092H*/

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the logo
import styles from "app/style/styleAbout.module.css";
import NavBar from "../NavBar";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.contentWrapper}>
                <h1 className={styles.heading}>Schumann&#39;s History</h1>
                <p className={styles.description}>
                    With the goal to reunite the world, bring peace and most importantly, get an A for css,
                    the 3 of us, Ayden, Hao Ying and Kyston
                    decided to open a restaurant selling all sorts of food from around the world.
                </p>
                <p className={styles.description}>
                    We believe food has the power to bring people together, spark creativity, and create
                    unforgettable memories. We hope our story will bring joy to Mr Anand,
                    as he joins us to explore the diverse and delicious world of food,
                    learning tips, recipes, and stories along the way about the ancient culinary arts.
                </p>
            </div>

            <Link href="/" passHref>
                <button className={styles.backButton}>Back to Home</button>
            </Link>

                {/* Footer Section */}
                <div className={styles.footer}>
                    <div className={styles.footerLeft}>
                        <div className={styles.footerSection}>
                            <h3 className={styles.footerTitle}>About</h3>
                            <p className={styles.footerContent}>
                                Sharing the best food experiences from around the world.
                            </p>
                        </div>
                        <div className={styles.footerSection}>
                            <h3 className={styles.footerTitle}>Contact</h3>
                            <p className={styles.footerContent}>Email: contact@foodblog.com</p>
                            <p className={styles.footerContent}>
                                Follow us on social media for the latest updates!
                            </p>
                        </div>
                    </div>
                    <div className={styles.footerRight}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Follow Us</h3>
                        <p className={styles.footerContent}>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a> {" "} |{" "}  
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a> {" "} |{" "}  
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                         </p>
                    </div>

                        <div className={styles.footerSection}>
                            <h3 className={styles.footerTitle}>Newsletter</h3>
                            <p className={styles.footerContent}>
                                Stay updated with the latest food news.
                            </p>
                            {/* Text box for email input */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.footerInput}
                            />
                            <button type="submit" className={styles.newsletterButton}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default AboutPage;