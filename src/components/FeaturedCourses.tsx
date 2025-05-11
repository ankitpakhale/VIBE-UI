'use client';

import Link from 'next/link';
import courseData from '../data/musicCourses.json';
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
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
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                {/* Course Title */}
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                {/* Instructor Name */}
                <p className="text-sm text-neutral-500 italic mb-2 dark:text-neutral-400">
                  by {course.instructor}
                </p>

                {/* Course Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>

                {/* Buy Button */}
                <button className="mt-6 w-full bg-black hover:bg-zinc-800 text-white text-sm font-semibold py-2 px-4 rounded-lg flex justify-between items-center dark:bg-zinc-800 dark:hover:bg-zinc-700">
                  <span>
                    <Link href={`/courses/${course.slug}`}>Buy Now</Link>
                  </span>
                  <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded-md dark:bg-neutral-200 dark:text-black">
                    {course.price}
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={'/courses'}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-600 bg-white hover:bg-teal-100 transition-duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
