'use client';

import CourseCard from '@/components/CourseCard';
import Footer from '@/components/Footer';
import advancedCompositionData from '@/data/advancedComposition.json';
import { Course } from '@/app/courses/courseInterface';
import PageHeading from '@/components/PageHeading';

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-black py-12 pt-36">
        <div className="text-center">
          <PageHeading title="Advanced Composition" className="uppercase" />
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
            Explore the World of Sound – All Our Music Courses
          </p>
        </div>
        <div className="flex flex-wrap justify-center py-5">
          {advancedCompositionData.map((course: Course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
