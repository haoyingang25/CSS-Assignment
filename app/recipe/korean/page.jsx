// Ayden Chionh S10266744
// app/recipe/korean/page.jsx

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "app/style/styleMainRecipe.module.css";
import NavBar from "app/NavBar";
import { motion } from "framer-motion"; // Import Framer Motion

const koreanRecipes = [
    {
        label: "Bibimbap",
        image: "/bibimbap.jpg",
        link: "/recipe/korean/bibimbap",
    },
    {
        label: "Korean Barbeque",
        image: "/kbbq.jpg",
        link: "/recipe/korean/korean-barbeque",
    },
    {
        label: "Korean Rice Cake",
        image: "/tteokbooki.jpg",
        link: "/recipe/korean/tteokbokki",
    },
];

const KoreanRecipePage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }} // Fade in and slide up
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                className={styles.container}
            >
                <h1 className={styles.title}>Delicious Korean Recipes</h1>
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2, // Stagger animation for children
                            },
                        },
                    }}
                >
                    {koreanRecipes.map((recipe, index) => (
                        <Link href={recipe.link} key={index} passHref>
                            <motion.div
                                className={styles.card}
                                whileHover={{ scale: 1.05 }} // Scale effect on hover
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
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
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
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

export default KoreanRecipePage;
