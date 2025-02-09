//Ayden Chionh S10266744
// recipe/japanese/page.jsx

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "app/style/styleMainRecipe.module.css";
import { motion } from "framer-motion"; // Import Framer Motion

const japaneseRecipes = [
    {
        label: "Sushi",
        image: "/japanese food.jpg",
        link: "/recipe/japanese/sushi",
    },
    {
        label: "Ramen",
        image: "/ramen.jpg",
        link: "/recipe/japanese/ramen",
    },
    {
        label: "Tonkatsu",
        image: "/tonkatsu.jpg",
        link: "/recipe/japanese/tonkatsu",
    },
    {
        label: "Onigiri",
        image: "/Onigiri.jpg",
        link: "/recipe/japanese/onigiri",
    },
    {
        label: "Japanese Pancake",
        image: "/pancakes.jpeg",
        link: "/recipe/japanese/japanese-pancakes",
    },
];

const JapaneseRecipePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and below position
            animate={{ opacity: 1, y: 0 }} // Fade in and slide to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            className={styles.container}
        >
            <h1 className={styles.title}>Explore Japanese Recipes</h1>
            <motion.div
                className={styles.grid}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2, // Stagger animation for each child
                        },
                    },
                }}
            >
                {japaneseRecipes.map((recipe, index) => (
                    <Link href={recipe.link} key={index} passHref>
                        <motion.div
                            className={styles.card}
                            whileHover={{ scale: 1.05 }} // Hover animation
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
                        <p className={styles.footerContent}>Sharing the best food experiences from around the world.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Contact</h3>
                        <p className={styles.footerContent}>Email: contact@foodblog.com</p>
                        <p className={styles.footerContent}>Follow us on social media for the latest updates!</p>
                    </div>
                </div>
                {/* Right side of the footer */}
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
        </motion.div>
    );
};

export default JapaneseRecipePage;

