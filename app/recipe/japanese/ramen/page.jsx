//Ayden Chionh S10266744
//recipe/japanese/ramen/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";

const RamenRecipe = {
    ingredients: [
        { name: "Ramen Noodles", amount: 200, unit: "grams" },
        { name: "Chicken Broth", amount: 1, unit: "liter" },
        { name: "Soy Sauce", amount: 3, unit: "tablespoons" },
        { name: "Sesame Oil", amount: 1, unit: "tablespoons" },
        { name: "Garlic", amount: 2, unit: "cloves" },
        { name: "Ginger", amount: 1, unit: "inch" },
        { name: "Eggs", amount: 2, unit: "pieces" },
        { name: "Green Onions", amount: 2, unit: "stalks" },
        { name: "Nori Sheets", amount: 2, unit: "pieces" },
        { name: "Chashu Pork", amount: 150, unit: "grams" },
        { name: "Bamboo Shoots", amount: 50, unit: "grams" },
    ],
    steps: [
        "Cook the Ramen Noodles: Boil 2 cups of water in a pot, add the ramen noodles, drain, and set aside.",
        "Prepare the Broth: In a pot, heat sesame oil over medium heat. Add minced garlic and ginger, saute until fragrant. Pour in chicken broth and soy sauce. Bring to a simmer and let cook for 10-15 minutes.",
        "Prepare the Toppings: While the broth simmers, soft-boil the eggs by placing them in boiling water for 7 minutes. Peel and set aside. Slice the green onions, bamboo shoots, and chashu pork.",
        "Assemble the Ramen: Place the cooked noodles in bowls. Pour the hot broth over the noodles. Top with soft-boiled eggs, chashu pork, bamboo shoots, green onions, and nori.",
        "Serve: Serve hot with additional soy sauce and sesame oil for extra flavor if desired.",
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
                <h1>Ramen Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/ramen.jpg"
                        alt="Ramen"
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
            <RecipeCard recipe={RamenRecipe} />
        </div>
    );
}
