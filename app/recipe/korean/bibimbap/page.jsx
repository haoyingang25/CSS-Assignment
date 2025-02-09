//Ayden Chionh S10266744
//recipe/korean/bibimbap/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";

const bibimbapRecipe = {
    ingredients: [
        { name: "Cooked rice", amount: 400, unit: "grams" },
        { name: "Ground beef", amount: 200, unit: "grams" },
        { name: "Spinach", amount: 100, unit: "grams" },
        { name: "Carrot", amount: 1, unit: "large" },
        { name: "Eggs", amount: 2, unit: "pieces" },
        { name: "Soy sauce", amount: 2, unit: "tablespoons" },
        { name: "Sesame oil", amount: 1, unit: "tablespoon" },
        { name: "Garlic", amount: 2, unit: "cloves" },
        { name: "Gochujang (Korean chili paste)", amount: 2, unit: "tablespoons" },
        { name: "Sesame seeds", amount: 1, unit: "teaspoon" },
        { name: "Vegetable oil", amount: 1, unit: "tablespoon" },
        { name: "Salt", amount: 1, unit: "teaspoon" },
    ],
    steps: [
        "Cook rice and set aside.",
        "Sauté ground beef with soy sauce, sesame oil, garlic, and salt until cooked through.",
        "Blanch spinach in boiling water, then rinse in cold water and squeeze out excess water.",
        "Shred the carrot into thin strips and sauté briefly in vegetable oil until soft.",
        "Fry eggs sunny-side-up, with a runny yolk.",
        "Assemble the bibimbap: Place rice in a bowl, top with sautéd vegetables, ground beef, a fried egg, and a dollop of gochujang.",
        "Sprinkle with sesame seeds and serve with additional gochujang on the side if desired.",
    ],
    cookingMethods: {
        Sautéing: [
            "Heat a pan over medium-high heat and add oil.",
            "Sauté the ingredients (ground beef, spinach, carrot) individually until cooked through.",
        ],
        boiling: [
            "Bring a pot of water to a boil and blanch the spinach for 1-2 minutes.",
        ],
        frying: [
            "Heat oil in a frying pan over medium-high heat and fry the eggs until the whites are set and yolks remain runny.",
        ],
    }
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
                <h1>Bibimbap Recipe</h1>
                <Image
                    src="/bibimbap.jpg"
                    alt="Bibimbap"
                    width={600}
                    height={400}
                    className={styles.dumplingImage}
                />
                <h2>Ingredients:</h2>
                <div className={styles.ingredientDetailsContainer}>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className={styles.ingredientDetails}>
                            {`${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`}
                        </div>
                    ))}
                </div>

                {/* Weight Units */}
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

                {/* Small Volume Units */}
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

                <Timer />
                <h2>Steps:</h2>
                <ol className={styles.steps}>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
                <h2>Cooking Methods:</h2>
                <div className={styles.cookingMethodContainer}>
                    <div className={styles.cookingMethod}>
                        <h3>Sautéing</h3>
                        <ol>
                            {recipe.cookingMethods.Sautéing.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Boiling</h3>
                        <ol>
                            {recipe.cookingMethods.boiling.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Frying</h3>
                        <ol>
                            {recipe.cookingMethods.frying.map((step, index) => (
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
                            </a> | 
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a> | 
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
            <RecipeCard recipe={bibimbapRecipe} />
        </div>
    );
}
