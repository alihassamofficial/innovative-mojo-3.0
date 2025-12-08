import React from "react";

import DigitalBlueprintHero from "@/components/DigitalBlueprint/Hero";
import DigitalBlueprintCTA from "@/components/DigitalBlueprint/CTA";
import FourPhaseBuildProcess from "@/components/DigitalBlueprint/BuildProcess";

const DigitalBlueprint = () => {
  return (
    <div>
      <DigitalBlueprintHero />
      <FourPhaseBuildProcess />
      <DigitalBlueprintCTA />
    </div>
  );
};

export default DigitalBlueprint;
