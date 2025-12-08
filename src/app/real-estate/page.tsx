import React from "react";

import RealEstateHero from "@/components/RealEstate/Hero";
import Problem from "@/components/RealEstate/Problem";
import Solution from "@/components/RealEstate/Solution";
import Technical from "@/components/RealEstate/Technical";
import StopeLosing from "@/components/RealEstate/StopeLosing";

const RealEstate = () => {
  return (
    <div>
      <RealEstateHero />
      <Problem />
      <Solution />
      <Technical />
      <StopeLosing />
    </div>
  );
};

export default RealEstate;
