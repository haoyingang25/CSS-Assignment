//Ayden Chionh S10266744
//recipe/italian/tiramisu-cake/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/app/NavBar";

const TiramisuRecipe = {
    ingredients: [
        { name: "Ladyfingers", amount: 300, unit: "grams" },
        { name: "Mascarpone Cheese", amount: 500, unit: "grams" },
        { name: "Heavy Cream", amount: 200, unit: "ml" },
        { name: "Egg Yolks", amount: 4, unit: "pieces" },
        { name: "Sugar", amount: 100, unit: "grams" },
        { name: "Espresso", amount: 200, unit: "ml" },
        { name: "Cocoa Powder", amount: 30, unit: "grams" },
        { name: "Dark Rum", amount: 2, unit: "tablespoons" },
        { name: "Sponge Cake (optional, for variation)", amount: 1, unit: "piece" },
    ],
    stepsWithLadyfingers: [
        "Prepare the Coffee: Brew the espresso and let it cool. Add the dark rum to the cooled espresso.",
        "Whisk the Egg Yolks and Sugar: In a bowl, whisk together the egg yolks and sugar until pale and creamy.",
        "Prepare the Mascarpone Mixture: In another bowl, combine the mascarpone cheese and heavy cream. Mix well until smooth.",
        "Combine the Mixtures: Gently fold the egg yolk-sugar mixture into the mascarpone mixture until smooth.",
        "Dip Ladyfingers: Quickly dip the ladyfingers into the cooled coffee mixture, one by one, and layer them in the bottom of your dish.",
        "Layer the Mascarpone Mixture: Spread half of the mascarpone mixture over the soaked ladyfingers.",
        "Repeat the Layers: Add another layer of soaked ladyfingers, followed by the remaining mascarpone mixture.",
        "Chill the Tiramisu: Refrigerate the tiramisu for at least 4 hours or overnight.",
        "Serve: Before serving, dust the top with cocoa powder and serve chilled.",
    ],
    stepsWithoutLadyfingers: [
        "Prepare the Coffee: Brew the espresso and let it cool. Add the dark rum to the cooled espresso.",
        "Whisk the Egg Yolks and Sugar: In a bowl, whisk together the egg yolks and sugar until pale and creamy.",
        "Prepare the Mascarpone Mixture: In another bowl, combine the mascarpone cheese and heavy cream. Mix well until smooth.",
        "Combine the Mixtures: Gently fold the egg yolk-sugar mixture into the mascarpone mixture until smooth.",
        "Prepare the Sponge Cake: Cut the sponge cake horizontally into thin layers.",
        "Assemble the Layers: Place a layer of sponge cake in the bottom of your dish. Brush it generously with the coffee mixture.",
        "Layer the Mascarpone Mixture: Spread half of the mascarpone mixture over the soaked sponge cake.",
        "Repeat the Layers: Add another layer of sponge cake, brush with coffee, and top with the remaining mascarpone mixture.",
        "Chill the Tiramisu: Refrigerate the tiramisu for at least 4 hours or overnight.",
        "Serve: Before serving, dust the top with cocoa powder and serve chilled.",
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
                <h1>Traditional Tiramisu Cake Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/Tiramisu.jpg"
                        alt="Tiramisu Cake"
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

                <h2>Steps (with Ladyfingers):</h2>
                <ol className={styles.steps}>
                    {recipe.stepsWithLadyfingers.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <h2>Steps (without Ladyfingers):</h2>
                <ol className={styles.steps}>
                    {recipe.stepsWithoutLadyfingers.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

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
            <RecipeCard recipe={TiramisuRecipe} />
        </div>
    );
}
