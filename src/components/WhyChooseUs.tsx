import React from 'react';
import whyChooseUsContent from '../data/whyChooseUs.json';
import { FocusCards } from './ui/focus-cards';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <div className="py-12 mt-20 bg-grey-900">
      <div className="text-center">
        <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
          Why Choose Us ?
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Why We're Different
        </p>
      </div>

      <div className="w-full py-4">
        <FocusCards cards={whyChooseUsContent} />;
      </div>

      <div className="mt-5 text-center">
        <Link
          href={'/why-choose-us'}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-600 bg-white hover:bg-teal-100 transition-duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUs;
