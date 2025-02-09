/*Ang Hao Ying S10270430*/
/*Ayden S10266744*/
/*Kyston*/

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the logo
import styles from "app/style/styleAbout.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            {/* Navigation Bar */}
            <div className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.jpeg" alt="Logo" className={styles.logo} width={200} height={200} />
                </div>
                <div className={styles.navLinks}>
                    <Link href="/cuisine">
                        <button className={styles.navButton}>Food Gallery</button>
                    </Link>
                    <Link href="/recipe">
                        <button className={styles.navButton}>Recipes</button>
                    </Link>
                    <Link href="/navigation">
                        <button className={styles.navButton}>Navigation</button>
                    </Link>

                </div>
            </div>

            <div className={styles.contentWrapper}>
                <h1 className={styles.heading}>About Us</h1>
                <p className={styles.description}>
                    Welcome to our food blog! Our mission is to bring you the best food experiences from
                    around the world, whether it is a treasured family recipe, a unique culinary adventure,
                    or a modern twist on a classic dish.
                </p>
                <p className={styles.description}>
                    We believe food has the power to bring people together, spark creativity, and create
                    unforgettable memories. Join us as we explore the diverse and delicious world of food,
                    sharing tips, recipes, and stories along the way.
                </p>
            </div>

            <Link href="/" passHref>
                <button className={styles.backButton}>Back to Home</button>
            </Link>

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
                        <p className={styles.footerContent}>Instagram | Facebook | Twitter</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Newsletter</h3>
                        <p className={styles.footerContent}>
                            Stay updated with the latest food news.
                        </p>
                        <p className={styles.footerContent}>Sign up for our newsletter!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

