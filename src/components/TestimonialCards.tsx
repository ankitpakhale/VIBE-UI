'use client';

import React from 'react';
import testimonialData from '../data/testimonials.json';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from '@/utils/cn';
import { Carousel } from './ui/carousel';
import Link from 'next/link';

const TestimonialCards = () => {
  return (
    <div className="py-12 mt-5 bg-grey-900">
      <div className="text-center">
        <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Stories That Inspire Music
        </p>
      </div>
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:20px_20px]',
            '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {/* TODO: Fix InfiniteMovingCards sliding issue */}
          {/* <InfiniteMovingCards items={testimonialData} direction="right" speed="slow" /> */}

          <Carousel slides={testimonialData} />
        </div>
      </div>
      <div className="mt-5 text-center">
        <Link
          href={'#'}
          className="bg-teal-600 text-white py-2 px-4 rounded my-5 hover:bg-teal-700"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCards;
