// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Popiah = () => {
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
        <h1 style={titleStyle}>Popiah</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/popiah.jpg" // Path to the image
            alt="Popiah"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Popiah is a popular Chinese dish that originated from the Fujian province in China. It is a fresh spring roll filled with a variety of ingredients such as julienned vegetables, tofu, eggs, and sometimes meat or seafood. The filling is wrapped in a thin, crepe-like skin made from wheat flour.
        </p>
        <p style={descriptionStyle}>
          The name "popiah" comes from the Hokkien word "poh pia," which means "thin wafer." Popiah is often served with a sweet and savory sauce made from hoisin sauce, soy sauce, and garlic. It is a popular dish during festive occasions and family gatherings.
        </p>
        <p style={descriptionStyle}>
          In Singapore and Malaysia, popiah is commonly found at hawker centers and food courts. It is enjoyed as a light snack or appetizer and is often made to order, allowing diners to customize their fillings and sauces. Popiah is a delicious and healthy dish that showcases the fresh flavors and textures of its ingredients.
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

export default Popiah;