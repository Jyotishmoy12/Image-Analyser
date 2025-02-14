"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { useNavigate } from "react-router-dom";

export function WavyBackgroundDemo() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/info');
  };

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col justify-center items-center h-screen"> {/* Flex container */}
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-32"> {/* Increased margin-top to move text down further */}
        Unveil the Story Behind Your Images!
      </p>
      <p className="text-base md:text-lg mt-6 text-white font-normal inter-var text-center">
        Transform your snapshots into a gateway of discovery! With the power of Clarifai AI, 
        upload any image and uncover its hidden details, enriched with fascinating Wikipedia insights.
      </p>
      <button
        onClick={redirect}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm md:text-lg font-semibold leading-6 text-white inline-block mt-12"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
          <span>Explore Now</span>
          <svg
            fill="none"
            height="20" 
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </WavyBackground>
  );
}
