// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const JapanesePancakes = () => {
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
        <h1 style={titleStyle}>Japanese Pancakes</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/Pancakes.jpeg" // Path to the image
            alt="Japanese Pancakes"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Japanese pancakes, also known as soufflé pancakes, are a popular dessert in Japan. They are known for their fluffy and airy texture, which is achieved by folding whipped egg whites into the batter. These pancakes are often served with butter, syrup, and fresh fruit.
        </p>
        <p style={descriptionStyle}>
          The origins of Japanese pancakes can be traced back to the traditional Japanese dish called "dorayaki," which consists of two small pancakes filled with sweet red bean paste. The modern soufflé pancakes have gained popularity in recent years and are now a favorite treat in cafes and restaurants.
        </p>
        <p style={descriptionStyle}>
          Japanese pancakes are typically cooked in a ring mold to help them maintain their shape and height. They are a delightful and indulgent dessert that is perfect for any occasion.
        </p>
        <Link href="/navigation/japanese" passHref>
          <button
            style={backButtonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = backButtonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = backButtonStyle.backgroundColor)}
          >
            Back to Japanese Cuisine
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JapanesePancakes;