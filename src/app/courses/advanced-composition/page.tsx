'use client';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import advancedCompositionData from '@/data/advancedComposition.json';
import Link from 'next/link';

const page = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="text-center">
        <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
          Advanced Composition ({advancedCompositionData.length})
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Explore the World of Sound – All Our Music Courses
        </p>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        {advancedCompositionData.map((course: Course) => (
          <CardContainer className="inter-var m-4">
            <CardBody
              key={course.id}
              className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="text-teal-400 italic text-sm max-w-sm"
                >
                  Instructor → {course.instructor}
                </CardItem>
              </div>
              <div className="flex justify-between items-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="py-2 rounded-xl font-normal dark:text-white"
                >
                  Price → ${course.price}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={'/'}>Buy Now!</Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
