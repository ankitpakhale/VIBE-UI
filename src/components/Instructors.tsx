'use client';

import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';
import instructorsData from '../data/instructors.json';

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex item-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Introducing the Experts Behind Your Learning Journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructorsData} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
