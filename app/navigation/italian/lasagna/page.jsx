// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Lasagna = () => {
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
        <h1 style={titleStyle}>Lasagna</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/lasanga.png" // Path to the image
            alt="Lasagna"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Lasagna is a classic Italian dish made with layers of flat pasta, meat sauce, and cheese. It is a hearty and comforting meal that has been enjoyed for centuries. The dish is believed to have originated in Ancient Greece, but it was the Italians who perfected it and made it their own.
        </p>
        <p style={descriptionStyle}>
          Traditional lasagna is made with a rich meat sauce, often containing ground beef or pork, tomatoes, onions, and garlic. The sauce is layered between sheets of pasta and a creamy béchamel sauce, then topped with mozzarella and Parmesan cheese. The dish is baked until the cheese is melted and bubbly, and the pasta is tender.
        </p>
        <p style={descriptionStyle}>
          Lasagna is a versatile dish that can be customized with different ingredients and flavors. Some popular variations include vegetarian lasagna with spinach and ricotta, seafood lasagna with shrimp and crab, and even dessert lasagna with layers of chocolate and cream. No matter how it is prepared, lasagna is a delicious and satisfying meal that is perfect for any occasion.
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

export default Lasagna;