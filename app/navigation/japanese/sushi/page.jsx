"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Sushi = () => {
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
        <h1 style={titleStyle}>Sushi</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/japanese food.jpg" // Path to the image
            alt="Sushi"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Sushi is a traditional Japanese dish made with vinegared rice, raw fish, and various other ingredients such as vegetables and seaweed. It is a popular dish worldwide and is known for its delicate flavors and beautiful presentation.
        </p>
        <p style={descriptionStyle}>
          The origins of sushi can be traced back to ancient Japan, where it was originally a method of preserving fish by fermenting it with rice. Over time, the dish evolved into the sushi we know today, with fresh fish and vinegared rice.
        </p>
        <p style={descriptionStyle}>
          There are many different types of sushi, including nigiri (slices of fish on top of rice), maki (rolls), and sashimi (slices of raw fish without rice). Sushi is often served with soy sauce, wasabi, and pickled ginger.
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

export default Sushi;