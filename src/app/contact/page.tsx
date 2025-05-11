'use client';

import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  return (
    <div className="pt-36 h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We're here to help with any questions about our courses, programs, or events.
          Reach out and let us know how we can assist you in your musical journey.
        </p>
        <input
          type="email"
          placeholder="Your email address"
          className="p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          placeholder="Your message"
          rows={5}
          className="p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <button className="bg-teal-600 text-white py-2 px-4 rounded my-5 hover:bg-teal-950">
          Send Message
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
