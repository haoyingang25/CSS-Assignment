//Ayden Chionh S10266744E
//recipe/japanese/sushi/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";

const SushiRecipe = {
    ingredients: [
        { name: "Sushi Rice", amount: 250, unit: "grams" },
        { name: "Rice Vinegar", amount: 2, unit: "tablespoons" },
        { name: "Sugar", amount: 1, unit: "tablespoons" },
        { name: "Salt", amount: 1, unit: "teaspoons" },
        { name: "Nori Sheets", amount: 5, unit: "pieces" },
        { name: "Fresh Salmon", amount: 200, unit: "grams" },
        { name: "Fresh Tuna", amount: 200, unit: "grams" },
        { name: "Cucumber", amount: 1, unit: "piece" },
        { name: "Avocado", amount: 1, unit: "piece" },
        { name: "Soy Sauce", amount: 50, unit: "ml" },
        { name: "Wasabi", amount: 1, unit: "teaspoons" },
    ],
    steps: [
        "Prepare the Sushi Rice: Rinse the sushi rice under cold water until the water runs clear. Cook the rice as per instructions. Once cooked, mix with rice vinegar, sugar, and salt. Let it cool.",
        "Prepare the Fillings: Slice the fresh salmon, tuna, cucumber, and avocado into thin strips.",
        "Assemble the Sushi: Lay a nori sheet on a bamboo mat. Spread a thin layer of sushi rice on the nori, leaving a small border at the top. Place the fillings (salmon, tuna, cucumber, avocado) in the center.",
        "Roll the Sushi: Carefully roll the sushi from the bottom using the bamboo mat, applying gentle pressure to form a tight roll.",
        "Slice the Sushi: Using a sharp knife, slice the rolled sushi into bite-sized pieces.",
        "Serving: Serve the sushi with soy sauce and wasabi on the side for dipping.",
    ],
    cookingMethods: {
        Temaki: [
            "Place a nori sheet in your hand, shiny side down.",
            "Spread a small amount of sushi rice onto one side of the nori.",
            "Add your desired fillings, such as salmon, tuna, cucumber, and avocado, diagonally across the rice.",
            "Roll the nori into a cone shape, starting from the corner with fillings. Serve immediately.",
        ],
        Nigiri: [
            "Wet your hands with water to prevent sticking.",
            "Take a small amount of sushi rice and shape it into an oval ball.",
            "Place a thin slice of fish (e.g., salmon or tuna) over the rice and gently press it to secure. Optionally, add a small dab of wasabi between the fish and rice.",
        ],
        Gunkan: [
            "Roll a small ball of sushi rice and shape it into a cylindrical base.",
            "Wrap a strip of nori around the rice, leaving a small portion at the top empty for fillings.",
            "Add toppings such as salmon roe, sea urchin, or chopped tuna into the top opening.",
        ],
        Maki: [
            "Lay a nori sheet shiny side down on a bamboo mat.",
            "Spread an even layer of sushi rice over the nori, leaving a small border at the top.",
            "Place fillings, such as salmon, cucumber, and avocado, horizontally across the center.",
            "Use the bamboo mat to tightly roll the nori into a cylinder. Slice into bite-sized pieces.",
        ],
        Uramaki: [
            "Lay a sheet of plastic wrap over the bamboo mat and place a nori sheet on top.",
            "Spread sushi rice evenly over the nori, then flip it over so the rice faces down.",
            "Place fillings like cucumber, avocado, and crab sticks horizontally across the center of the nori.",
            "Roll tightly using the bamboo mat, ensuring the rice stays on the outside. Optionally, coat the roll in sesame seeds or tobiko before slicing.",
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
                <h1>Sushi Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/japanese food.jpg"
                        alt="Sushi"
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

                <h2>Cooking Methods:</h2>
                <div className={styles.cookingMethodContainer}>
                    <div className={styles.cookingMethod}>
                        <h3>Temaki</h3>
                        <ol>
                            {recipe.cookingMethods.Temaki.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Nigiri</h3>
                        <ol>
                            {recipe.cookingMethods.Nigiri.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Gunkan</h3>
                        <ol>
                            {recipe.cookingMethods.Gunkan.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Maki</h3>
                        <ol>
                            {recipe.cookingMethods.Maki.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Uramaki</h3>
                        <ol>
                            {recipe.cookingMethods.Uramaki.map((step, index) => (
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
                            </a> {" "}| {" "}
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a> {" "}|{" "} 
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
            <RecipeCard recipe={SushiRecipe} />
        </div>
    );
}

