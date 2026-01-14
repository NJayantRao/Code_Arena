import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
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
