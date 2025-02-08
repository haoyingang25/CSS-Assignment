//Ayden Chionh S10266744
// app/recipe/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "app/style/styleMainRecipe.module.css";

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
        <div className={styles.container}>
            <h1 className={styles.title}>Explore Recipes from Around the World</h1>
            <div className={styles.grid}>
                {recipes.map((recipe, index) => (
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
                <div className={styles.buttonsWrapper}>
                    {/* View Favorites Button */}
                    <Link href="/favorite-page" passHref>
                        <button className={styles.viewFavoritesButton}>
                            View Favorites ({favoriteCount})
                        </button>
                    </Link>
                    <Link href="/" passHref>
                        <button className={styles.backToHomeButton}>Back to Home</button>
                    </Link>
                </div>
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
        </div>
    );
};

export default MainRecipePage;

