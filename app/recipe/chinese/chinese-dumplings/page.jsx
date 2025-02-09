//Ayden Chionh S10266744
//recipe/chinese/chinese-dumplings/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "app/NavBar";

const chineseDumplingRecipe = {
    ingredients: [
        { name: "All-purpose flour", amount: 500, unit: "grams" },
        { name: "Water", amount: 250, unit: "ml" },
        { name: "Ground pork", amount: 300, unit: "grams" },
        { name: "Green onions", amount: 50, unit: "grams" },
        { name: "Soy sauce", amount: 2, unit: "tablespoons" },
        { name: "Ginger", amount: 1, unit: "teaspoon" },
        { name: "Salt", amount: 1, unit: "teaspoon" },
    ],
    steps: [
        "Mix the flour and water to form a smooth dough. Let it rest for 30 minutes.",
        "Prepare the filling by mixing ground pork, chopped green onions, soy sauce, grated ginger, and salt.",
        "Roll out the dough and cut into small circles.",
        "Place filling in the center of each circle and fold into dumplings.",
        "Cook the dumplings by steaming, boiling, or pan-frying as desired.",
    ],
    cookingMethods: {
        steaming: [
            "Boil water in a steamer or large pot with a steamer rack.",
            "Line the steamer with parchment paper or cabbage leaves to prevent sticking.",
            "Place dumplings on the rack, leaving space between them.",
            "Cover and steam for 10-12 minutes or until the dumplings are cooked through."
        ],
        boiling: [
            "Bring a large pot of water to a boil.",
            "Gently drop the dumplings into the boiling water, stirring occasionally to prevent sticking.",
            "Boil for 6-8 minutes or until they float to the surface and are fully cooked."
        ],
        panFrying: [
            "Heat a little oil in a non-stick skillet over medium-high heat.",
            "Place the dumplings in the pan and fry for 2-3 minutes until the bottoms are golden brown.",
            "Add a small amount of water (just enough to cover the bottom of the pan) and cover.",
            "Steam the dumplings for 5-7 minutes, or until the water evaporates and the dumplings are cooked through."
        ]
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
    ml: {
        liters: (amount) => amount / 1000,
        cups: (amount) => amount * 0.00422675,
    },
    liters: {
        ml: (amount) => amount * 1000,
        cups: (amount) => amount * 4.22675,
    },
    cups: {
        ml: (amount) => amount / 0.00422675,
        liters: (amount) => amount / 4.22675,
    },
    tablespoons: {
        teaspoons: (amount) => amount * 3,
    },
    teaspoons: {
        tablespoons: (amount) => amount / 3,
    }
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
    const [activeButton, setActiveButton] = useState({});

    const handleConversion = (targetUnit, group) => {
        setActiveButton((prevState) => ({
            ...prevState,
            [group]: targetUnit,
        }));

        const updatedIngredients = ingredients.map((ingredient) => {
            const currentConversions = conversions[ingredient.unit];
            if (currentConversions?.[targetUnit]) {
                const convertedAmount = currentConversions[targetUnit](ingredient.amount).toFixed(2);
                return { ...ingredient, amount: convertedAmount, unit: targetUnit };
            }
            return ingredient;
        });

        setIngredients(updatedIngredients);
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.card}>
                <h1>Chinese Dumplings Recipe</h1>
                <Image
                    src="/chinese dumplings.jpg"
                    alt="Chinese Dumplings"
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
                <h2>Conversions:</h2>
                <div className={styles.conversionButtonsContainer}>
                    <div>
                        <h3>Weight Units</h3>
                        <div className={styles.radioContainer}>
                            {["kilograms", "grams", "pounds"].map((unit) => (
                                <button
                                    key={unit}
                                    onClick={() => handleConversion(unit, "weight")}
                                    className={`${styles.conversionButton} ${activeButton.weight === unit ? styles.activeButton : ""}`}
                                >
                                    Convert to {unit}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3>Volume Units</h3>
                        <div className={styles.radioContainer}>
                            {["liters", "ml", "cups"].map((unit) => (
                                <button
                                    key={unit}
                                    onClick={() => handleConversion(unit, "volume")}
                                    className={`${styles.conversionButton} ${activeButton.volume === unit ? styles.activeButton : ""}`}
                                >
                                    Convert to {unit}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3>Small Volume Units</h3>
                        <div className={styles.radioContainer}>
                            {["teaspoons", "tablespoons"].map((unit) => (
                                <button
                                    key={unit}
                                    onClick={() => handleConversion(unit, "spoons")}
                                    className={`${styles.conversionButton} ${activeButton.spoons === unit ? styles.activeButton : ""}`}
                                >
                                    Convert to {unit}
                                </button>
                            ))}
                        </div>
                    </div>
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
                        <h3>Steaming Dumplings</h3>
                        <ol>
                            {recipe.cookingMethods.steaming.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Boiling Dumplings</h3>
                        <ol>
                            {recipe.cookingMethods.boiling.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Pan-Frying Dumplings</h3>
                        <ol>
                            {recipe.cookingMethods.panFrying.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>

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
                            <p className={styles.footerContent}>
                                Follow us on social media for the latest updates!
                            </p>
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
            <RecipeCard recipe={chineseDumplingRecipe} />
        </div>
    );
}
