"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Tonkatsu = () => {
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
        <h1 style={titleStyle}>Tonkatsu</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/tonkatsu.jpg" // Path to the image
            alt="Tonkatsu"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Tonkatsu is a popular Japanese dish that consists of a breaded, deep-fried pork cutlet. It is typically served with shredded cabbage, rice, and miso soup. The dish is often accompanied by a thick, sweet, and tangy sauce known as tonkatsu sauce.
        </p>
        <p style={descriptionStyle}>
          The origins of tonkatsu can be traced back to the late 19th century, when Western-style cuisine began to influence Japanese cooking. The dish was inspired by European breaded and fried meat dishes, but it has since become a beloved part of Japanese cuisine.
        </p>
        <p style={descriptionStyle}>
          Tonkatsu can be made with either pork loin (rosu) or pork fillet (hire). The pork is coated in flour, dipped in beaten egg, and then coated with panko breadcrumbs before being deep-fried until golden brown and crispy. It is a delicious and satisfying dish that is enjoyed by people of all ages.
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

export default Tonkatsu;