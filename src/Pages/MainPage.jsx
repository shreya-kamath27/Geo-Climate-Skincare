import React, { useState } from 'react'
import photo from '../assets/photo.jpeg'
import {Link, useNavigate} from 'react-router-dom'

export default function MainPage() {
const  navigate = useNavigate();
  const[final, updating] = useState(false);
  return (
    <main
      className="min-h-screen relative bg-[#fafafa] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative min-h-screen bg-gradient-to-b from-white/70 via-white/60 to-white/70 backdrop-blur-[1px]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover your perfect skincare ritual
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Answer a few mindful questions and let our dermatologist-trained AI
                craft routines that evolve with your skin&apos;s climate, mood, and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-3 rounded-full border border-gray-900 bg-black text-white font-semibold text-sm tracking-wide hover:bg-gray-800 transition"
                onClick={() => updating(true)}>
                  {final && ( navigate("/signup")
                )}
                Let's get started
              </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  )
}
