import React from "react";

import LeftSection from "../landing/LeftSection";
import RightSection from "../landing/RightSection";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <LeftSection />
        {/* right section */}
        <RightSection />
      </div>
    </div>
  );
};

export default HeroSection;
