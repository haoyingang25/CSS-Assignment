"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const TiramisuCake = () => {
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
        <h1 style={titleStyle}>Tiramisu Cake</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/Tiramisu.jpg" // Path to the image
            alt="Tiramisu Cake"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Tiramisu is a classic Italian dessert that is loved by many around the world. It is a layered dessert made with coffee-soaked ladyfingers, mascarpone cheese, eggs, sugar, and cocoa powder. The name "tiramisu" means "pick me up" in Italian, referring to the energizing effects of the coffee and cocoa.
        </p>
        <p style={descriptionStyle}>
          The origins of tiramisu are somewhat disputed, but it is generally believed to have been created in the Veneto region of Italy in the 1960s. It quickly became popular and is now a staple dessert in Italian cuisine. Tiramisu is known for its rich and creamy texture, with a perfect balance of sweetness and bitterness from the coffee and cocoa.
        </p>
        <p style={descriptionStyle}>
          Tiramisu can be made in various ways, with some recipes adding liqueurs such as Marsala wine or rum for extra flavor. It is typically served chilled and can be garnished with chocolate shavings or additional cocoa powder. Tiramisu is a delightful and indulgent dessert that is perfect for any occasion.
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

export default TiramisuCake;