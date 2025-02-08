// Ayden Chionh S10266744
// app/recipe/chinese/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "app/style/styleMainRecipe.module.css";

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
                        <h3 className={styles.footerTitle}>About</h3> {/* Title for 'About' section */}
                        <p className={styles.footerContent}>Sharing the best food experiences from around the world.</p> {/* Content under 'About' section */}
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Contact</h3> {/* Title for 'Contact' section */}
                        <p className={styles.footerContent}>Email: contact@foodblog.com</p> {/* Content for email */}
                        <p className={styles.footerContent}>Follow us on social media for the latest updates!</p> {/* Social media content */}
                    </div>
                </div>

                {/* Right side of the footer */}
                <div className={styles.footerRight}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Follow Us</h3> {/* Title for 'Follow Us' section */}
                        <p className={styles.footerContent}>Instagram | Facebook | Twitter</p> {/* Social media platforms */}
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Newsletter</h3> {/* Title for 'Newsletter' section */}
                        <p className={styles.footerContent}>Stay updated with the latest food news.</p> {/* Newsletter content */}
                        <p className={styles.footerContent}>Sign up for our newsletter!</p> {/* Call to action for the newsletter */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChineseRecipePage;
