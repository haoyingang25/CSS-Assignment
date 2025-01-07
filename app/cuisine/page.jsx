// app/cuisine/page.jsx
"use client";

import React from "react";
import Carousel from "../gallery/carousel"; // Correct relative path

const CuisinePage = () => {
  return (
    <div>
      <h1 
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#B45F04", // Warm brown-orange font color
          fontFamily: "'Lora', serif", // Elegant font
          fontWeight: "bold",
        }}
      >
        Visit the Different Cuisines!
      </h1>
      <Carousel />
    </div>
  );
};

export default CuisinePage;

