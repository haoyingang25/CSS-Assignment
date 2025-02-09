//Ayden Chionh S10266744E
//app/recipe/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "app/style/styleMainRecipe.module.css";
import NavBar from "../NavBar";

const recipes = [
    {
        label: "Korean",
        image: "/tteokbooki.jpg",
        link: "/recipe/korean",
    },
    {
        label: "Chinese",
        image: "/pekingDuck.jpg",
        link: "/recipe/chinese",
    },
    {
        label: "Italian",
        image: "/pasta.jpg",
        link: "/recipe/italian",
    },
    {
        label: "Japanese",
        image: "/japanese food.jpg",
        link: "/recipe/japanese",
    },
];

const MainRecipePage = () => {
    const [favoriteCount, setFavoriteCount] = useState(0);

    // Retrieve the number of favorites from local storage
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoriteCount(favorites.length);
    }, []);

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }} // Start with 0 opacity
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 1 }} // Duration of the animation
        >
            <NavBar />
            <h1 className={styles.title}>Explore Recipes from Around the World</h1>
            <div className={styles.grid}>
                {recipes.map((recipe, index) => (
                    <Link href={recipe.link} key={index} passHref>
                        <motion.div
                            className={styles.card}
                            whileHover={{ scale: 1.05 }} // Add hover effect to scale the card
                            transition={{ duration: 0.3 }}
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
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonsWrapper}>
                    <Link href="/favorite-page" passHref>
                        <motion.button
                            className={styles.viewFavoritesButton}
                            whileHover={{ scale: 1.1 }} // Hover effect on button
                            whileTap={{ scale: 0.95 }} // Click effect
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            View Favorites ({favoriteCount})
                        </motion.button>
                    </Link>
                    <Link href="/" passHref>
                        <motion.button
                            className={styles.backToHomeButton}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Back to Home
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Footer Section */}
            <motion.div
                className={styles.footer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
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
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> {" "}|{" "}
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> {" "}|{" "}
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Newsletter</h3>
                        <p className={styles.footerContent}>Stay updated with the latest food news.</p>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.newsletterInput}
                            />
                            <button type="submit" className={styles.newsletterButton}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MainRecipePage;
