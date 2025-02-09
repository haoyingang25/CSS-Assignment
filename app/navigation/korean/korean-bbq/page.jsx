// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const KoreanBBQ = () => {
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
        <h1 style={titleStyle}>Korean BBQ</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/kbbq.jpg" // Path to the image
            alt="Korean BBQ"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Korean BBQ, also known as "gogi-gui," is a popular method of grilling meat, typically beef, pork, or chicken, at the table. The meat is usually marinated in a mixture of soy sauce, garlic, sugar, and other seasonings before being grilled to perfection.
        </p>
        <p style={descriptionStyle}>
          Korean BBQ is often served with a variety of side dishes called "banchan," which can include kimchi, pickled vegetables, and other small dishes. The grilled meat is typically wrapped in lettuce leaves along with rice, garlic, and ssamjang (a thick, spicy paste).
        </p>
        <p style={descriptionStyle}>
          Korean BBQ is a social and interactive dining experience that is enjoyed by people of all ages. It is a delicious and flavorful way to enjoy the rich and diverse flavors of Korean cuisine.
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

export default KoreanBBQ;