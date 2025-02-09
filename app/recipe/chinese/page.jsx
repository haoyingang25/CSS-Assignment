// Ayden Chionh S10266744
// app/recipe/chinese/page.jsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "app/style/styleMainRecipe.module.css";
import NavBar from "app/NavBar";
import { motion } from "framer-motion"; // Import Framer Motion

const chineseRecipes = [
    {
        label: "Chinese Dumplings",
        image: "/chinese dumplings.jpg",
        link: "/recipe/chinese/chinese-dumplings",
    },
    {
        label: "Peking Duck",
        image: "/pekingDuck.jpg",
        link: "/recipe/chinese/peking-duck",
    },
    {
        label: "Carrot Cake",
        image: "/carrotcake.jpg",
        link: "/recipe/chinese/carrot-cake",
    },
    {
        label: "Dim Sum",
        image: "/dimsum.jpg",
        link: "/recipe/chinese/dim-sum",
    },
    {
        label: "Popiah",
        image: "/popiah.JPG",
        link: "/recipe/chinese/popiah",
    },
];

const ChineseRecipePage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slide down
                animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
                className={styles.container}
            >
                <h1 className={styles.title}>Delicious Chinese Recipes</h1>
                <div className={styles.grid}>
                    {chineseRecipes.map((recipe, index) => (
                        <Link href={recipe.link} key={index} passHref>
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={recipe.image}
                                        alt={recipe.label}
                                        width={300}
                                        height={200}
                                        className={styles.image}
                                    />
                                    <div className={styles.overlay}></div>
                                </div>
                                <h2 className={styles.label}>{recipe.label}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <Link href="/recipe" passHref>
                        <button className={styles.backToHomeButton}>Back to Recipes</button>
                    </Link>
                </div>
                {/* Footer Section */}
                <div className={styles.footer}>
                    {/* Left side of the footer */}
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
                    {/* Right side of the footer */}
                    <div className={styles.footerRight}>
                        <div className={styles.footerSection}>
                            <h3 className={styles.footerTitle}>Follow Us</h3>
                            <p className={styles.footerContent}>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>{" "}
                                |{" "}
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>{" "}
                                |{" "}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
            </motion.div>
        </div>
    );
};

export default ChineseRecipePage;
