'use client';

import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  return (
    <div className="pt-24 h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Nurturing the next generation of musicians through expert guidance and
          personalized learning. From first notes to masterful performances, we inspire
          musical excellence at every level. Where passion meets practice, and every
          student finds their unique sound.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
