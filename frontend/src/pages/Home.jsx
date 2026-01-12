import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/HeroSection";
import Features from "../components/landing/Features";

function Home() {
  
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NAVBAR */}
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
}

export default Home;
