'use client';

import { BackgroundBeams } from '@/components/ui/background-beams';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from '@/components/ui/draggable-card';
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '@/components/ui/glowing-stars';
import whatMakesUsUniqueData from '@/data/whatMakeUsUnique.json';
import kpiData from '@/data/kpis.json';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <div className="pt-36 h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="px-30 flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-xl text-white relative z-20 text-center my-10">
            About Us
          </h1>
          {/* Intro */}
          <div className="mt-10">
            <p className="text-center py-5 text-neutral-300 relative z-20">
              <span className="font-bold">VIBE</span> which stands for{' '}
              <span className="font-semibold italic">
                Vocal & Instrumental Building Experience
              </span>{' '}
              is on a mission to redefine music education for the 21st century.
            </p>

            <p className="text-center py-5 text-neutral-300 relative z-20">
              We are an{' '}
              <span className="font-bold">AI-powered music learning platform</span> that
              blends the wisdom of traditional training with cutting-edge technology to
              make music learning more{' '}
              <span className="font-bold">accessible, adaptive, & exciting </span>
              than ever before. Whether you're picking up your first instrument or
              refining your vocals for a professional stage, VIBE is designed to meet you
              where you are and help you reach your full musical potential.
            </p>
          </div>

          {/* Our Vision */}
          <div className="mt-10">
            <h2 className="md:text-4xl text-xl text-white relative z-20 text-center my-2">
              🌍 Our Vision
            </h2>
            <p className="text-center text-neutral-300 relative z-20">
              To{' '}
              <span className="font-bold">democratize world-class music education</span>
              using the power of Artificial Intelligence—making it
              <span className="font-bold">
                personalized, interactive, and available to everyone,
              </span>{' '}
              regardless of background, geography, or age.
            </p>
          </div>
        </div>
        {/* What Makes Us Unique */}
        <div className="px-1 w-full flex flex-col items-center justify-center">
          <div className="mt-10 w-full">
            <h2 className="md:text-4xl text-xl text-white relative z-20 text-center my-2">
              💡 What Makes Us Unique?
            </h2>
            <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
              <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl text-white md:text-4xl">
                Finally you found what makes us unique 💡
              </p>
              {whatMakesUsUniqueData.map((item) => (
                <DraggableCardBody className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-20 h-80 w-80 object-cover"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                    {item.title}
                  </h3>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </div>

        {/* Key Stats & KPIs */}
        <div className="px-30 flex mt-30 flex-col items-center justify-center">
          {/* Key Stats & KPIs */}
          <div className="mt-10">
            <h2 className="md:text-4xl text-xl text-white relative z-20 text-center my-2">
              📊 Key Stats & KPIs
            </h2>
            <p className="text-center text-neutral-300 relative z-20">
              A snapshot of our platform’s
              <span className="italic">impact, engagement</span>, &
              <span className="italic">performance metrics</span>
              during beta.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 justify-items-center antialiased">
              {kpiData.map((item) => (
                <GlowingStarsBackgroundCard>
                  <GlowingStarsTitle>{item.title}</GlowingStarsTitle>
                  <div className="flex justify-between items-end">
                    <GlowingStarsDescription>{item.description}</GlowingStarsDescription>
                  </div>
                </GlowingStarsBackgroundCard>
              ))}
            </div>
          </div>
          {/* Our Commitment */}
          <div className="mt-10">
            <h2 className="md:text-4xl text-xl text-white relative z-20 text-center my-2">
              🤝 Our Commitment
            </h2>
            <p className="text-center text-neutral-300 relative z-20">
              We’re building more than just a platform—we’re cultivating a{' '}
              <span className="font-semibold">community of passionate musicians</span>.
              Whether you’re a 7-year-old picking up the violin, a teenager diving into
              digital music production, or an adult rediscovering your love for singing,
              VIBE is here to guide your musical evolution.
            </p>
          </div>
          {/* Join Us on the Journey */}
          <div className="mt-10 mb-30">
            <h2 className="md:text-4xl text-xl text-white relative z-20 text-center my-2">
              🚀 Join Us on the Journey
            </h2>
            <p className="text-center text-neutral-300 relative z-20">
              With a team of expert musicians, technologists, and educators, we’re
              combining the{' '}
              <span className="font-semibold">
                soul of music with the intelligence of AI
              </span>
              .
            </p>
            <p className="font-bold">
              VIBE is not just about learning music. It’s about loving music, living
              music, and evolving through music.
            </p>
          </div>
        </div>

        <BackgroundBeams />
      </div>
      <Footer />
    </>
  );
};

export default page;
