// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Pasta = () => {
  const containerStyle = {
    backgroundColor: "#DED3C2",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Lora', serif",
  };

  const contentWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "800px",
    width: "100%",
    marginTop: "50px",
  };

  const titleStyle = {
    fontSize: "2.5em",
    color: "#6B4E3D",
    marginBottom: "20px",
  };

  const imageContainerStyle = {
    marginBottom: "20px",
  };

  const imageStyle = {
    borderRadius: "10px",
  };

  const descriptionStyle = {
    fontSize: "1.2em",
    color: "#4F4F4F",
    marginBottom: "40px",
  };

  const backButtonStyle = {
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px auto",
    fontSize: "18px",
    transition: "background-color 0.3s ease",
    display: "block",
    width: "fit-content",
  };

  const backButtonHoverStyle = {
    backgroundColor: "#005bb5",
  };

  return (
    <div style={containerStyle}>
      <NavBar />
      <div style={contentWrapperStyle}>
        <h1 style={titleStyle}>Pasta</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/pasta.jpg" // Path to the image
            alt="Pasta"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Pasta is a staple of Italian cuisine and is enjoyed by people all over the world. It comes in many shapes and sizes, and can be served with a variety of sauces and ingredients. The origins of pasta can be traced back to ancient civilizations, but it was the Italians who perfected it and made it a central part of their culinary tradition.
        </p>
        <p style={descriptionStyle}>
          Traditional pasta dishes include spaghetti with tomato sauce, fettuccine Alfredo, and lasagna. Each region of Italy has its own unique pasta dishes and recipes, showcasing the diversity and richness of Italian cuisine. Pasta can be made fresh or dried, and is often paired with ingredients such as olive oil, garlic, tomatoes, and cheese.
        </p>
        <p style={descriptionStyle}>
          Pasta is a versatile and delicious dish that can be enjoyed in countless ways. Whether it's a simple plate of spaghetti with marinara sauce or a complex dish like seafood linguine, pasta is a beloved comfort food that brings people together.
        </p>
        <Link href="/navigation/italian" passHref>
          <button
            style={backButtonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = backButtonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = backButtonStyle.backgroundColor)}
          >
            Back to Italian Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pasta;