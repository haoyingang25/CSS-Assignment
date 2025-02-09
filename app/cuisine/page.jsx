//ANG HAO YING S10270430
// app/cuisine/page.jsx
"use client";
// Import the React library, Framer Motion, and the Carousel component from the correct relative path
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Carousel from "../gallery/carousel"; // Correct relative path
import NavBar from "../NavBar";

const CuisinePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with 0 opacity
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 1 }} // Duration of the fade-in animation
      style={{
        minHeight: "100vh",
        backgroundColor: "#DED3C2", // Soft Ivory for an elegant base
        padding: "40px 20px",
      }}
    >
      <NavBar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "20px",
          color: "#6B4E3D", // Deep Espresso for sophistication
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
        }}
      >
        Visit the Top Rated Cuisines!
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          fontSize: "18px",
          color: "#4A4A4A", // Charcoal Gray for readability
          lineHeight: "1.6",
          margin: "0 auto 20px",
        }}
      >
        Explore a world of flavors, from traditional delicacies to modern fusion dishes.
        Each cuisine offers a unique experience, curated by top chefs and loved by food enthusiasts.
      </p>

      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#222222", // Warm Gold for elegance
          marginBottom: "20px",
        }}
      >
        Swipe through to discover the best cuisines and add your favorites!
      </p>

      {/* Carousel Component */}
      <Carousel />
    </motion.div>
  );
};

export default CuisinePage;


