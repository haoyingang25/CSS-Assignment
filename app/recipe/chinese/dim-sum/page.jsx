//Ayden Chionh S10266744E
//recipe/chinese/dim-sum
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";

const DimSumRecipe = {
    ingredients: [
        { name: "Shrimp (peeled and deveined)", amount: 200, unit: "grams" },
        { name: "Ground Pork", amount: 100, unit: "grams" },
        { name: "Wonton Wrappers", amount: 12, unit: "pieces" },
        { name: "Ginger (grated)", amount: 1, unit: "teaspoons" },
        { name: "Garlic (minced)", amount: 1, unit: "clove" },
        { name: "Soy Sauce", amount: 1, unit: "tablespoons" },
        { name: "Sesame Oil", amount: 1, unit: "teaspoons" },
        { name: "Green Onions (chopped)", amount: 2, unit: "teaspoons" },
        { name: "Sugar", amount: 1, unit: "teaspoons" },
        { name: "Cornstarch", amount: 1, unit: "teaspoons" },
        { name: "Salt", amount: "Pinch", unit: "" },
        { name: "Black Pepper", amount: "Pinch", unit: "" },
        { name: "Water", amount: 1, unit: "tablespoons" },
    ],
    steps: [
        "Preparing Shrimp and Pork Filling: Combine shrimp, ground pork, ginger, garlic, soy sauce, sesame oil, green onions, sugar, cornstarch, salt, black pepper, and water in a bowl. Mix until well combined and smooth.",
        "Prepare Wonton Wrappers: Lay out the wonton wrappers on a clean surface. Spoon a small amount of the shrimp and pork filling into the center of each wrapper.",
        "Forming the Dumplings: Fold the edges of the wonton wrapper over the filling to create a pleated pouch, sealing the edges with a little water. Repeat until all filling is used.",
        "Steaming the Dumplings: Bring a pot of water to boil and place a steaming rack or bamboo steamer over the pot. Lightly oil the steamer to prevent sticking.",
        "Steam the Dim Sum: Place the dumplings in the steamer basket, making sure they don't touch. Steam the dim sum over medium heat for 8-10 minutes, or until the filling is cooked through.",
        "Serving: Serve the steamed dim sum hot with soy sauce or chili oil for dipping.",
    ],
    cookingMethods: {
        SiuMai: [
            "Combine ground pork, shrimp, ginger, soy sauce, sesame oil, and cornstarch in a bowl. Mix thoroughly.",
            "Place a spoonful of the mixture into the center of each wonton wrapper.",
            "Shape the dumpling by folding up the edges and gently pressing, leaving the top open.",
            "Steam the Siu Mai for 8-10 minutes or until the filling is fully cooked."
        ],
        CrystalDumplings: [
            "Mix shrimp, bamboo shoots, and seasoning together.",
            "Prepare translucent dough using wheat starch and boiling water. Roll into thin sheets.",
            "Place filling in the center of the dough and fold into a crescent shape.",
            "Steam for 6-8 minutes until the dough turns transparent."
        ],
        XiaoLongBao: [
            "Prepare the soup gelatin by simmering chicken broth with gelatin powder and letting it cool.",
            "Combine ground pork, soy sauce, sesame oil, and green onions to make the filling.",
            "Wrap the filling and a cube of soup gelatin in thin dumpling wrappers, pleating the edges.",
            "Steam for 10 minutes, ensuring the soup inside is fully melted."
        ],
        BaoZi: [
            "Prepare dough by mixing flour, yeast, sugar, and water. Let it rise.",
            "Make the filling with ground pork, garlic, soy sauce, and sesame oil.",
            "Roll out dough into small circles, add filling, and seal by pinching the edges.",
            "Steam buns for 12-15 minutes until fluffy and cooked through."
        ],
    },
};

const conversions = {
    grams: {
        kilograms: (amount) => amount / 1000,
        pounds: (amount) => amount * 0.00220462,
    },
    kilograms: {
        grams: (amount) => amount * 1000,
        pounds: (amount) => amount * 2.20462,
    },
    pounds: {
        grams: (amount) => amount / 0.00220462,
        kilograms: (amount) => amount / 2.20462,
    },
    tablespoons: {
        teaspoons: (amount) => amount * 3,
        cups: (amount) => amount / 16,
    },
    teaspoons: {
        tablespoons: (amount) => amount / 3,
        cups: (amount) => amount / 48,
    },
    cups: {
        tablespoons: (amount) => amount * 16,
        teaspoons: (amount) => amount * 48,
    },
};

const Timer = () => {
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);

    // Load the audio file for the finish sound
    const timerFinishSound = new Audio("/Classic alarm clock.mp3"); // Replace with your sound file path

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0 && isRunning) {
            setIsRunning(false);
            timerFinishSound.play(); // Play sound when timer finishes
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const handleStartStop = () => {
        if (time === 0) {
            setTime(inputMinutes * 60 + parseInt(inputSeconds || 0));
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setInputMinutes(0);
        setInputSeconds(0);
    };

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div className={styles.timerContainer}>
            <h3>Timer</h3>
            <div className={styles.timerInputContainer}>
                <input
                    type="number"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    placeholder="Minutes"
                    min="0"
                    className={styles.timerInput}
                />
                <input
                    type="number"
                    value={inputSeconds}
                    onChange={(e) => setInputSeconds(e.target.value)}
                    placeholder="Seconds"
                    min="0"
                    max="59"
                    className={styles.timerInput}
                />
            </div>
            <div className={styles.timerDisplay}>{formatTime()}</div>
            <div className={styles.timerButtons}>
                <button onClick={handleStartStop} className={styles.timerButton}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    className={`${styles.timerButton} ${styles.timerButtonReset}`}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

const RecipeCard = ({ recipe }) => {
    const [ingredients, setIngredients] = useState(recipe.ingredients);

    const handleConversion = (targetUnit, ingredient) => {
        const currentConversions = conversions[ingredient.unit];
        if (currentConversions?.[targetUnit]) {
            const convertedAmount = currentConversions[targetUnit](ingredient.amount).toFixed(2);
            setIngredients((prevIngredients) =>
                prevIngredients.map((ing) =>
                    ing.name === ingredient.name
                        ? { ...ing, amount: convertedAmount, unit: targetUnit }
                        : ing
                )
            );
        }
    };

    const uniqueWeightUnits = ["grams", "kilograms", "pounds"];
    const uniqueVolumeUnits = ["tablespoons", "teaspoons", "cups"];

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.card}>
                <h1>Dim Sum Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/dimsum.jpg"
                        alt="Dim Sum"
                        width={600}
                        height={400}
                        className={styles.recipeImage}
                    />
                </div>
                <h2>Ingredients:</h2>
                <div className={styles.ingredientDetailsContainer}>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className={styles.ingredientDetails}>
                            {`${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`}
                        </div>
                    ))}
                </div>

                <h2>Weight Units</h2>
                <div className={styles.conversionCategory}>
                    {uniqueWeightUnits.map((unit) => (
                        <button
                            key={unit}
                            onClick={() => {
                                ingredients.forEach((ingredient) => {
                                    if (uniqueWeightUnits.includes(ingredient.unit)) {
                                        handleConversion(unit, ingredient);
                                    }
                                });
                            }}
                            className={styles.conversionButton}
                        >
                            Convert to {unit}
                        </button>
                    ))}
                </div>

                <h2>Small Volume Units</h2>
                <div className={styles.conversionCategory}>
                    {uniqueVolumeUnits.map((unit) => (
                        <button
                            key={unit}
                            onClick={() => {
                                ingredients.forEach((ingredient) => {
                                    if (uniqueVolumeUnits.includes(ingredient.unit)) {
                                        handleConversion(unit, ingredient);
                                    }
                                });
                            }}
                            className={styles.conversionButton}
                        >
                            Convert to {unit}
                        </button>
                    ))}
                </div>

                <div className={styles.recipeTools}>
                    <Timer />
                </div>

                <h2>Steps:</h2>
                <ol className={styles.steps}>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <h2>Popular Dim Sum dishes:</h2>
                <div className={styles.cookingMethodContainer}>
                    <div className={styles.cookingMethod}>
                        <h3>Siu Mai</h3>
                        <ol>
                            {recipe.cookingMethods.SiuMai.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Crystal Dumplings</h3>
                        <ol>
                            {recipe.cookingMethods.CrystalDumplings.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Soup Dumplings (Xiao Long Bao)</h3>
                        <ol>
                            {recipe.cookingMethods.XiaoLongBao.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Steamed Pork Buns (Bao Zi)</h3>
                        <ol>
                            {recipe.cookingMethods.BaoZi.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                <Link href="/recipe" passHref>
                    <button className={styles.backButton}>Back to recipes</button>
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
                            </a>{" "}  | {" "} 
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a> {" "} | {" "} 
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
        </div>
    );
};


export default function Home() {
    return (
        <div className={styles.container}>
            <RecipeCard recipe={DimSumRecipe} />
        </div>
    );
}