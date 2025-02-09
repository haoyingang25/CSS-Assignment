"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const DimSum = () => {
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
        <h1 style={titleStyle}>Dim Sum</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/dimsum.jpg" // Path to the image
            alt="Dim Sum"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Dim Sum is a traditional Chinese meal made up of small plates of dumplings and other snack dishes and is usually accompanied by tea. It is typically served in the morning through early afternoon and is a popular brunch option in Chinese culture.
        </p>
        <p style={descriptionStyle}>
          The term "dim sum" means "touch the heart," and the dishes are meant to be enjoyed in small portions. Dim Sum includes a variety of dishes such as steamed buns, dumplings, rolls, and other savory and sweet items. Each dish is served in a small steamer basket or on a small plate.
        </p>
        <p style={descriptionStyle}>
          Dim Sum originated in the southern region of China, particularly in the Cantonese-speaking areas. It has since become a beloved tradition worldwide, with many restaurants offering a wide range of dim sum dishes. It is a social meal, often enjoyed with family and friends.
        </p>
        <Link href="/navigation/chinese" passHref>
          <button
            style={backButtonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = backButtonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = backButtonStyle.backgroundColor)}
          >
            Back to Chinese Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DimSum;