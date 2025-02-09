// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Onigiri = () => {
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
        <h1 style={titleStyle}>Onigiri</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/onigiri.jpg" // Path to the image
            alt="Onigiri"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Onigiri, also known as rice balls, are a popular Japanese snack made from rice formed into triangular or cylindrical shapes and often wrapped in nori (seaweed). They can be filled with a variety of ingredients such as pickled plum (umeboshi), salted salmon, or tuna with mayonnaise.
        </p>
        <p style={descriptionStyle}>
          Onigiri has been a staple of Japanese cuisine for centuries and is a convenient and portable food that is perfect for picnics, bento boxes, and quick meals. They are often enjoyed as a light snack or as part of a larger meal.
        </p>
        <p style={descriptionStyle}>
          Onigiri can be found in convenience stores, supermarkets, and specialty shops throughout Japan. They are a delicious and versatile snack that showcases the simplicity and elegance of Japanese cuisine.
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

export default Onigiri;