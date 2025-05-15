import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import { Course } from '@/app/courses/courseInterface';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <CardContainer className="inter-var m-4">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
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
          <CardItem translateZ={20} className="text-teal-400 italic text-sm max-w-sm">
            Instructor → {course.instructor}
          </CardItem>
        </div>
        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="py-2 rounded-xl font-normal text-white"
          >
            Price → ${course.price}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-100 text-black text-xs font-bold"
          >
            <Link href={'/'}>Buy Now!</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CourseCard;
