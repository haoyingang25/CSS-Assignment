//Ayden Chionh S10266744
//recipe/italian/pasta/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import styles from "app/style/styleRecipes.module.css";
import Link from "next/link";
import Image from "next/image";
import NavBar from "app/NavBar";

const PastaRecipe = {
    ingredients: [
        { name: "Pasta", amount: 250, unit: "grams" },
        { name: "Olive Oil", amount: 2, unit: "tablespoons" },
        { name: "Garlic", amount: 3, unit: "cloves" },
        { name: "Cherry Tomatoes", amount: 200, unit: "grams" },
        { name: "Basil Leaves", amount: 10, unit: "pieces" },
        { name: "Parmesan Cheese", amount: 50, unit: "grams" },
        { name: "Salt", amount: 1, unit: "teaspoon" },
        { name: "Pepper", amount: 1, unit: "teaspoon" },
    ],
    steps: [
        "Boil the Pasta: Bring a large pot of salted water to a boil. Cook the pasta according to package instructions, typically for 8-10 minutes. Drain and set aside.",
        "Prepare the Sauce: In a large pan, heat olive oil over medium heat. Add garlic and cook for 1-2 minutes until fragrant.",
        "Add Tomatoes: Add the cherry tomatoes and cook for 5-7 minutes until they burst and release their juices.",
        "Mix Pasta and Sauce: Add the cooked pasta into the pan with the tomatoes. Toss everything together to coat the pasta with the sauce.",
        "Finish the Dish: Add fresh basil leaves and Parmesan cheese. Season with salt and pepper to taste.",
        "Serving: Plate the pasta, garnish with additional Parmesan cheese and basil leaves, and serve hot.",
    ],
    cookingMethods: {
        ChickenAlfredo: [
            "Cook Chicken: Season chicken with salt and pepper. Saute in a pan until cooked through and golden brown.",
            "Prepare Alfredo Sauce: Melt butter in a pan, add minced garlic, and cook for 1-2 minutes. Stir in heavy cream and Parmesan cheese until smooth.",
            "Combine: Add cooked pasta and chicken to the sauce. Toss to coat.",
            "Serve: Plate the pasta, garnish with parsley, and serve warm."
        ],
        Carbonara: [
            "Cook Pancetta: Saute pancetta in a pan until crispy. Set aside.",
            "Whisk Sauce: In a bowl, whisk together eggs, Parmesan cheese, salt, and pepper.",
            "Combine: Add cooked pasta to the pancetta pan. Remove from heat and stir in the egg mixture, tossing quickly to prevent curdling.",
            "Serve: Plate and garnish with more Parmesan and black pepper."
        ],
        SpaghettiBolognese: [
            "Prepare Sauce: Saute onions, garlic, carrots, and celery. Add ground beef and cook until browned.",
            "Add Tomatoes: Stir in canned tomatoes, tomato paste, and seasonings. Simmer for 20 minutes.",
            "Combine: Mix the sauce with cooked spaghetti.",
            "Serve: Garnish with Parmesan and fresh basil."
        ],
        Ravioli: [
            "Prepare Filling: Mix ricotta, Parmesan, and spinach. Season to taste.",
            "Assemble Ravioli: Place filling on pasta sheets, seal, and cut into shapes.",
            "Cook: Boil ravioli until they float. Serve with desired sauce."
        ],
        MacaroniCheese: [
            "Make Sauce: Melt butter, stir in flour, then gradually add milk while whisking. Stir in shredded cheese.",
            "Combine: Mix cooked macaroni with the cheese sauce.",
            "Bake: Transfer to a baking dish, top with breadcrumbs and more cheese, and bake until golden."
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
                <h1>Pasta Recipe</h1>
                <div className={styles.imageContainer}>
                    <Image
                        src="/pasta.jpg"
                        alt="Pasta"
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

                <h2>Different Types of Pasta:</h2>
                <div className={styles.cookingMethodContainer}>
                    <div className={styles.cookingMethod}>
                        <h3>Chicken Alfredo</h3>
                        <ol>
                            {recipe.cookingMethods.ChickenAlfredo.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Carbonara</h3>
                        <ol>
                            {recipe.cookingMethods.Carbonara.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Spaghetti Bolognese</h3>
                        <ol>
                            {recipe.cookingMethods.SpaghettiBolognese.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Ravioli</h3>
                        <ol>
                            {recipe.cookingMethods.Ravioli.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div className={styles.cookingMethod}>
                        <h3>Macaroni Cheese</h3>
                        <ol>
                            {recipe.cookingMethods.MacaroniCheese.map((step, index) => (
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
            <RecipeCard recipe={PastaRecipe} />
        </div>
    );
}

