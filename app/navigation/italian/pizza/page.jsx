// TEO WEE CHERNG KYSTON S10270092H

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for the picture
import NavBar from "@/app/NavBar";

const Pizza = () => {
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
        <h1 style={titleStyle}>Pizza</h1>
        <div style={imageContainerStyle}>
          <Image
            src="/pizza.jpg" // Path to the image
            alt="Pizza"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
        <p style={descriptionStyle}>
          Pizza is one of the most popular and beloved dishes in the world. Originating from Italy, pizza is a flatbread typically topped with tomato sauce, cheese, and various toppings. It is baked in an oven until the crust is crispy and the cheese is melted and bubbly.
        </p>
        <p style={descriptionStyle}>
          The modern pizza as we know it today was invented in Naples, Italy, in the late 18th century. The Margherita pizza, named after Queen Margherita of Savoy, is one of the most famous varieties. It is topped with tomatoes, mozzarella cheese, and fresh basil, representing the colors of the Italian flag.
        </p>
        <p style={descriptionStyle}>
          Pizza has evolved over the years and now comes in many different styles and flavors. Some popular variations include pepperoni pizza, Hawaiian pizza with ham and pineapple, and vegetarian pizza with a variety of vegetables. No matter the toppings, pizza remains a favorite comfort food for people of all ages.
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

export default Pizza;