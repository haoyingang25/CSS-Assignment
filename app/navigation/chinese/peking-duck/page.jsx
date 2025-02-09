"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const PekingDuck = () => {
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
        <h1 style={titleStyle}>Peking Duck</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/pekingDuck.jpg" // Path to the image
            alt="Peking Duck"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Peking Duck is a famous Chinese dish that has been prepared since the Imperial era. The dish is known for its thin, crispy skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook.
        </p>
        <p style={descriptionStyle}>
          The duck is seasoned, air-dried, and roasted until the skin turns crispy and golden brown. It is traditionally served with thin pancakes, hoisin sauce, and julienned scallions. Diners assemble their own wraps by placing a slice of duck, some scallions, and a dab of hoisin sauce on a pancake, then rolling it up.
        </p>
        <p style={descriptionStyle}>
          Peking Duck originated in Beijing (Peking) and has been a staple of Chinese cuisine for centuries. It was first mentioned in a cookbook during the Yuan Dynasty (1271-1368) and became a favorite dish of the imperial court during the Ming Dynasty (1368-1644). Today, it is enjoyed by people all over the world and is a must-try dish for anyone visiting Beijing.
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

export default PekingDuck;