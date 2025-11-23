import React from "react";
import WorkCard from "../Component/WorkCard";
import { SlidersHorizontal, CloudSun, BrainCircuit, Sparkles } from "lucide-react";

export default function Explore() {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-6 md:px-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="text-gray-500 mt-2">Three simple steps to your personalized skincare routine</p>
      </div>

   
      <div className="grid md:grid-cols-3 gap-8">
        <WorkCard
          step="01"
          title="User Preferences"
          desc="User enters skin type, concerns, and goals."
          icon={<SlidersHorizontal size={24} />}
        />
        <WorkCard
          step="02"
          title="Climate Analysis"
          desc="We calculate your region’s average climate conditions."
          icon={<CloudSun size={24} />}
        />
        <WorkCard
          step="03"
          title="ML Recommendations"
          desc="Machine learning suggests the top recommended products."
          icon={<BrainCircuit size={24} />}
        />
        <WorkCard
          step="04"
          title="Final Routine"
          desc="You receive a customized daily routine."
          icon={<Sparkles size={24} />}
        />
      </div>
    </div>
  );
}
