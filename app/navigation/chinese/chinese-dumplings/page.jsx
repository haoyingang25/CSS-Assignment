"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const ChineseDumplings = () => {
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
        <h1 style={titleStyle}>Chinese Dumplings</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/chinese dumplings.jpg" // Path to the image
            alt="Chinese Dumplings"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Chinese dumplings, also known as jiaozi, are a traditional Chinese dish that dates back over 1,800 years. They are typically made with a thin dough wrapper filled with a mixture of ground meat and vegetables. Dumplings can be boiled, steamed, or pan-fried, and are often served with a dipping sauce made from soy sauce, vinegar, and chili oil.
        </p>
        <p style={descriptionStyle}>
          Dumplings are a popular dish during Chinese New Year celebrations, as they symbolize wealth and prosperity. The shape of the dumplings resembles ancient Chinese gold ingots, and it is believed that eating them will bring good fortune in the coming year.
        </p>
        <p style={descriptionStyle}>
          There are many regional variations of dumplings in China, each with its own unique fillings and cooking methods. Some popular variations include pork and cabbage dumplings, shrimp and chive dumplings, and vegetarian dumplings filled with mushrooms and tofu.
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

export default ChineseDumplings;