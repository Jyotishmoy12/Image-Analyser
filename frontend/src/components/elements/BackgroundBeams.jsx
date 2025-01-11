"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import {useNavigate} from "react-router-dom"

export function BackgroundBeamsDemo() {
  const navigate = useNavigate();
  const redirect = ()=>{
       navigate('/info')
  }
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 text-center"> {/* Center align the content */}
        <h1 className="relative z-10 text-lg md:text-7xl  sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
        Unveil the Story Behind Your Images!
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Transform your snapshots into a gateway of discovery! With the power of Clarifai AI, 
        upload any image and uncover its hidden details, enriched with fascinating Wikipedia insights. 
        From places to objects to historical context, 
        let your images spark curiosity and reveal the stories they hold. 🖼️✨
        </p>
        <button onClick={redirect} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm md:text-lg font-semibold leading-6 text-white inline-block mt-10"> {/* Added margin-top */}
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10"> {/* Increased padding */}
            <span>Explore Now</span>
            <svg
              fill="none"
              height="20" /* Increased icon size */
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
      </div>
      <BackgroundBeams />
    </div>
  );
}
