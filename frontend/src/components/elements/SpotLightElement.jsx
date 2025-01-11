import React from "react";
import { Spotlight } from "../ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      {/* Add temporary styles to test visibility */}
      <p className="text-white z-[10]">SpotlightPreview is visible!</p>
      <Spotlight className="top-0 left-0 z-[50]" fill="white" />
    </div>
  );
}
