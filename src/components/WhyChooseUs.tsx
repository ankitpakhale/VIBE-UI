import React from 'react';
import whyChooseUsContent from '../data/why_choose_us.json';
import { FocusCards } from './ui/focus-cards';

const WhyChooseUs = () => {
  return (
    <div className="py-12 bg-grey-900">
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
    </div>
  );
};

export default WhyChooseUs;
