//Ayden Chionh S10266744
//recipe/japanese/onigiri/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";

const OnigiriRecipe = {
    ingredients: [
        { name: "Cooked Sushi Rice", amount: 2, unit: "cups" },
        { name: "Nori Sheets", amount: 2, unit: "sheets" },
        { name: "Salt", amount: 1, unit: "teaspoons" },
        { name: "Sesame Seeds", amount: 1, unit: "tablespoons" },
        { name: "Pickled Plum (Umeboshi)", amount: 2, unit: "pieces" },
        { name: "Cooked Salmon", amount: 100, unit: "grams" },
        { name: "Soy Sauce", amount: 1, unit: "tablespoons" },
    ],
    steps: [
        "Prepare the Rice: Cook sushi rice according to package instructions and let it cool to room temperature.",
        "Season the Rice: Add salt to the cooled rice and mix gently to season.",
        "Prepare the Fillings: For umeboshi, remove the pit and mash the plum. For salmon, flake the cooked salmon and mix with soy sauce.",
        "Shape the Onigiri: Wet your hands with a little water to prevent sticking, then take a small portion of rice and flatten it in your hands. Place a small amount of filling in the center, then mold the rice around the filling into a triangular shape.",
        "Wrap with Nori: Cut nori sheets into smaller pieces and wrap each onigiri with a piece of nori.",
        "Serve: Optionally, sprinkle sesame seeds on top of the onigiri for added flavor and garnish.",
    ],
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
                <h1>Onigiri Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/Onigiri.jpg"
                        alt="Onigiri"
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
                <Link href="/recipe" passHref>
                    <button className={styles.backButton}>Back to recipes</button>
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
        </div>
    );
};

export default function Home() {
    return (
        <div className={styles.container}>
            <RecipeCard recipe={OnigiriRecipe} />
        </div>
    );
}
