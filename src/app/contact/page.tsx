'use client';

import { Boxes } from '@/components/ui/background-boxes';

const page = () => {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 rounded-lg">
      <div className="pt-36 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className="max-w-2xl mx-auto p-4 z-30">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Us
          </h1>
          <p></p>
          <p className="text-white max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            We're here to help with any questions about our courses, programs, or events.
            Reach out and let us know how we can assist you in your musical journey.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-400  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-gray-400"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            className="p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-400  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-gray-400"
          />
          <button className="bg-teal-600 text-white py-2 px-4 rounded my-5 hover:bg-teal-700">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
