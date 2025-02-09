// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Tteokbokki = () => {
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
        <h1 style={titleStyle}>Tteokbokki/Korean Rice Cakes</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/tteokbooki.jpg" // Path to the image
            alt="Tteokbokki"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Tteokbokki is a popular Korean street food made from chewy rice cakes, fish cakes, and a spicy gochujang (chili paste) sauce. It is a beloved comfort food that is enjoyed by people of all ages.
        </p>
        <p style={descriptionStyle}>
          The origins of tteokbokki can be traced back to the Joseon Dynasty, where it was originally a royal court dish made with soy sauce. The modern spicy version of tteokbokki became popular in the 1950s and has since become a staple of Korean cuisine.
        </p>
        <p style={descriptionStyle}>
          Tteokbokki is often served with boiled eggs, scallions, and sesame seeds. It is a delicious and satisfying dish that is perfect for a quick snack or a hearty meal.
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

export default Tteokbokki;