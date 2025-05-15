'use client';

import Link from 'next/link';
import courseData from '../data/musicCourses.json';
import { BackgroundGradient } from './ui/background-gradient';
import { Course } from '@/app/courses/courseInterface';
const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-grey-900">
      <div className="text-center">
        <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-10 mx-10">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="w-full sm:w-[45%] lg:w-[30%] max-w-sm">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900">
                {/* Course Title */}
                <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
                  {course.title}
                </p>

                {/* Instructor Name */}
                <p className="text-sm italic mb-2 text-neutral-400">
                  by {course.instructor}
                </p>

                {/* Course Description */}
                <p className="text-sm text-neutral-400">{course.description}</p>

                {/* Buy Button */}
                <button className="mt-6 w-full text-white text-sm font-semibold py-2 px-4 rounded-lg flex justify-between items-center bg-zinc-800 hover:bg-zinc-700">
                  <span>
                    <Link href={`/courses/${course.slug}`}>Buy Now</Link>
                  </span>
                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-neutral-200 text-black">
                    $ {course.price}
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={'/courses/all-courses'}
          className="bg-teal-600 text-white py-2 px-4 rounded my-5 hover:bg-teal-700"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
