// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Ramen = () => {
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
        <h1 style={titleStyle}>Ramen</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/ramen.jpg" // Path to the image
            alt="Ramen"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Ramen is a popular Japanese noodle soup dish that consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and topped with ingredients such as sliced pork, nori (seaweed), menma (bamboo shoots), and scallions.
        </p>
        <p style={descriptionStyle}>
          The origins of ramen can be traced back to China, but it has become a beloved dish in Japan and has evolved into many regional varieties. Each region of Japan has its own unique style of ramen, with different broths, noodles, and toppings.
        </p>
        <p style={descriptionStyle}>
          Some popular types of ramen include shoyu (soy sauce) ramen, miso ramen, tonkotsu (pork bone) ramen, and shio (salt) ramen. Ramen is a comforting and satisfying dish that is enjoyed by people of all ages.
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

export default Ramen;