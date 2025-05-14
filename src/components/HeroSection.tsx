'use client';

import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { cn } from '@/utils/cn';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Vortex } from './ui/vortex';

function HeroSection() {
  const heroSectionDescription =
    "Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.";
  return (
    <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={100}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          rangeSpeed={0.5}
        >
          {/* Background Grid */}
          {/* <div
            className={cn(
              "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
              "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
            )}
          /> */}
          <div className="p-4 relative z-10 w-full text-center">
            {/* <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" /> */}
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Master the Art of Music
            </h1>
            <TextGenerateEffect
              className={
                'mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
              }
              words={heroSectionDescription}
            />
            <div className="my-8">
              <button className="bg-teal-600 text-white py-2 px-4 rounded my-5 hover:bg-teal-700">
                <Link href={'/courses/all-courses'}>Explore Courses</Link>
              </button>
            </div>
          </div>
        </Vortex>
      </div>
    </div>
  );
}

export default HeroSection;
