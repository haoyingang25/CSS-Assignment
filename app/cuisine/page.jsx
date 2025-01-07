// app/cuisine/page.jsx
"use client";

import React from "react";
import Carousel from "../gallery/carousel"; // Correct relative path
 // Adjust path if necessary

const CuisinePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Cuisine Page</h1>
      <Carousel />
    </div>
  );
};

export default CuisinePage;
