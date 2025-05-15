'use client';

import Link from 'next/link';
import upcomingWebinarData from '../data/upcomingWebinars.json';
import { HoverEffect } from './ui/card-hover-effect';
const UpcomingWebinars = () => {
  return (
    <div className="mt-20 p-12 bg-grey-900">
      <div className="max-w-7xl mx-auto px-0 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            Upcoming Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Join, Learn, & Grow Online
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-0 sm:px-8">
            <HoverEffect items={upcomingWebinarData} />
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link
            href={'#'}
            className="bg-teal-600 text-white py-2 px-4 rounded my-5 hover:bg-teal-700"
          >
            Learn More
          </Link>
        </div>{' '}
      </div>
    </div>
  );
};

export default UpcomingWebinars;
