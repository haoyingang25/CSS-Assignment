// app/cuisine/page.jsx
"use client";
// Import the React library and the Carousel component from the correct relative path
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
        Visit the Top Rated Cuisines!
      </h1>
      <Carousel /> {/*use it to display as a routing showcase*/}
    </div>
  );
};

// Export the component as default for use in the app
export default CuisinePage;

