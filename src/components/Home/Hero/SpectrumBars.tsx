"use client";

import React from "react";

const SpectrumBars = () => {
  return (
    <div className="w-full max-h-[339px] h-[339px] flex items-end gap-0 relative z-0 mx-auto">
      {/* Left Side - 4 bars */}
      {/* Bar 1 - Tallest (100%) - delay 0.32s - Hidden on mobile */}
      <div
        className="hidden lg:flex flex-1 spectrum-bar"
        style={{
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Bar 2 - 75% - delay 0.24s - Hidden on mobile */}
      <div
        className="hidden lg:flex flex-1 spectrum-bar"
        style={{
          height: "75%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Bar 3 - 60% - delay 0.16s */}
      <div
        className="flex-1 spectrum-bar"
        style={{
          height: "60%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Bar 4 - 50% - delay 0.08s */}
      <div
        className="flex-1 spectrum-bar"
        style={{
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Center - 1 bar */}
      {/* Bar 5 - Shortest (45%) - delay 0s */}
      <div
        className="flex-1 spectrum-bar"
        style={{
          height: "45%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Right Side - 4 bars */}
      {/* Bar 6 - 50% - delay 0.08s */}
      <div
        className="flex-1 spectrum-bar"
        style={{
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Bar 7 - 60% - delay 0.16s */}
      <div
        className="flex-1 spectrum-bar"
        style={{
          height: "60%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Bar 8 - 75% - delay 0.24s - Hidden on mobile */}
      <div
        className="hidden lg:flex flex-1 spectrum-bar"
        style={{
          height: "75%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />

      {/* Bar 9 - Tallest (100%) - delay 0.32s - Hidden on mobile */}
      <div
        className="hidden lg:flex flex-1 spectrum-bar"
        style={{
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(244, 207, 110, 0) 0%, #E8BE45 100%)",
          transition: "all 0.9s ease",
        }}
      />
    </div>
  );
};

export default SpectrumBars;
