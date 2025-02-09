// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Bibimbap = () => {
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
        <h1 style={titleStyle}>Bibimbap</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/bibimbap.jpg" // Path to the image
            alt="Bibimbap"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Bibimbap is a popular Korean dish that consists of a bowl of warm white rice topped with sautéed and seasoned vegetables, gochujang (chili pepper paste), soy sauce, or doenjang (fermented soybean paste), and a fried egg. It is often served with sliced meat, usually beef, and a variety of other ingredients.
        </p>
        <p style={descriptionStyle}>
          The name "bibimbap" means "mixed rice" in Korean, and the dish is traditionally mixed together thoroughly just before eating. It is a colorful and nutritious meal that is enjoyed by people of all ages.
        </p>
        <p style={descriptionStyle}>
          Bibimbap is a versatile dish that can be customized with different ingredients and flavors. It is a delicious and satisfying meal that showcases the fresh and vibrant flavors of Korean cuisine.
        </p>
        <Link href="/navigation/korean" passHref>
          <button
            style={backButtonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = backButtonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = backButtonStyle.backgroundColor)}
          >
            Back to Korean Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bibimbap;