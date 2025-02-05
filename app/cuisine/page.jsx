// //ANG HAO YING S10270430
// // app/cuisine/page.jsx
"use client";
// Import the React library and the Carousel component from the correct relative path
import React from "react";
import Carousel from "../gallery/carousel"; // Correct relative path

const CuisinePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAF9F6", // Soft beige for warmth
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "1000px",
          backgroundColor:"#FAF9F6",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#8B4513", // Warm brown
            fontFamily: "'Lora', serif",
            fontWeight: "bold",
          }}
        >
          Visit the Top Rated Cuisines!
        </h1>
        <Carousel />
      </div>
    </div>
  );
};


// Export the component as default for use in the app
export default CuisinePage;




