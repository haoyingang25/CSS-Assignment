//Ayden Chionh
//recipe/japanese/tonkatsu/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";

const TonkatsuRecipe = {
    ingredients: [
        { name: "Pork Loin Chops", amount: 2, unit: "pieces" },
        { name: "Panko Bread Crumbs", amount: 100, unit: "grams" },
        { name: "All-Purpose Flour", amount: 50, unit: "grams" },
        { name: "Eggs", amount: 2, unit: "pieces" },
        { name: "Vegetable Oil", amount: 500, unit: "milliliters" },
        { name: "Salt", amount: 1, unit: "teaspoons" },
        { name: "Pepper", amount: 1, unit: "teaspoons" },
        { name: "Tonkatsu Sauce", amount: 3, unit: "tablespoons" },
        { name: "Cabbage", amount: 1, unit: "small head" },
        { name: "Lemon", amount: 1, unit: "piece" },
    ],
    steps: [
        "Prepare the Ingredients: Set up a breading station with three shallow bowls. In the first bowl, place the flour. In the second bowl, beat the eggs. In the third bowl, place the panko bread crumbs.",
        "Season the Pork: Season the pork loin chops with salt and pepper on both sides.",
        "Bread the Pork: Dredge each pork chop in flour, then dip it in the beaten egg, and finally coat it in panko bread crumbs.",
        "Heat the Oil: Heat vegetable oil in a deep pan over medium heat. The oil should be enough to submerge the pork chops halfway.",
        "Fry the Pork: Once the oil is hot, carefully place the breaded pork chops into the oil. Fry until golden brown and crispy, about 4-5 minutes per side.",
        "Drain and Rest: Remove the pork chops from the oil and place them on a paper towel-lined plate to drain excess oil. Let them rest for 5 minutes.",
        "Prepare the Cabbage: While the pork rests, thinly shred the cabbage and place it in a bowl.",
        "Serve: Slice the tonkatsu into strips, serve with the shredded cabbage, a drizzle of tonkatsu sauce, and a wedge of lemon on the side.",
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

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const handleStartStop = () => {
        if (time === 0) {
            setTime(inputMinutes * 60 + parseInt(inputSeconds));
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
                <button onClick={handleReset} className={`${styles.timerButton} ${styles.timerButtonReset}`}>Reset</button>
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
            <div className={styles.card}>
                <h1>Tonkatsu Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/tonkatsu.jpg"
                        alt="Tonkatsu"
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
            <RecipeCard recipe={TonkatsuRecipe} />
        </div>
    );
}
