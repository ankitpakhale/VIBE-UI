'use client';

interface PageHeadingProps {
  title: string;
  className?: string;
}

const PageHeading = ({ className, title }: PageHeadingProps) => {
  return (
    <h1
      className={`mt-15 sm:mt-10 relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A8A] via-[#B88AFF] to-[#34FFDA] text-center font-sans font-bold ${className}`}
    >
      {title}
    </h1>
  );
};

export default PageHeading;
