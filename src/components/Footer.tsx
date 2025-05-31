'use client';

import Link from 'next/link';
import { HiHome, HiInformationCircle, HiBookOpen, HiPhone } from 'react-icons/hi2';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaRegCopyright,
  FaGithub,
  FaClock,
} from 'react-icons/fa';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-400">
      <BackgroundBeamsWithCollision className="pt-5 flex flex-col">
        <div
          className="
          py-2
          max-w-6xl 
          mx-auto
          px-4 sm:px-6 lg:px-8
          grid
          grid-cols-1
          sm:grid-cols-1
          lg:grid-cols-4
          gap-8
          text-center    /* center all content by default */
          sm:text-left   /* left-align text on small screens and larger */
          justify-items-center  /* center grid items by default */
          sm:justify-items-start /* left-align grid items on sm: and up */
        "
        >
          {/* About us */}
          <div className="flex relative flex-col">
            {/* <h2 className="text-2xl text-white font-semibold mb-5">About us</h2> */}
            <Link href="/" className="flex-shrink-0 mb-3 mx-auto sm:mx-0 sm:ml-2">
              <Image src="/logo.png" alt="Site Logo" width={200} height={200} priority />
            </Link>
            <p
              className="
              text-base text-gray-400
              first-letter:text-5xl
              first-letter:text-red-500
              first-letter:font-bold
              first-letter:float-left
              first-letter:mr-2
            "
            >
              VIBE which stands for{' '}
              <span className="italic">Vocal & Instrumental Building Experience</span> is
              an AI-powered platform making music education accessible, personalized, and
              inspiring for learners of all ages and levels.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex relative flex-col">
            <h2 className="text-2xl text-white font-semibold mb-5">Quick Links</h2>
            <div className="flex flex-col gap-4">
              <Link href={'/'} className="flex items-center gap-2">
                <HiHome className="w-5 h-5 text-white" />
                Home
              </Link>
              <Link href={'/about-us'} className="flex items-center gap-2">
                <HiInformationCircle className="w-5 h-5 text-white" />
                About Us
              </Link>
              <Link href={'/courses/all-courses'} className="flex items-center gap-2">
                <HiBookOpen className="w-5 h-5 text-white" />
                Courses
              </Link>
              <Link href={'/contact'} className="flex items-center gap-2">
                <HiPhone className="w-5 h-5 text-white" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex relative flex-col">
            <h2 className="text-2xl text-white font-semibold mb-5">Follow Us</h2>
            <div className="flex flex-col gap-4">
              <Link href="/facebook" className="flex items-center gap-2">
                <FaFacebook className="w-5 h-5 text-white" />
                Facebook
              </Link>
              <Link href="/twitter" className="flex items-center gap-2">
                <FaTwitter className="w-5 h-5 text-white" />
                Twitter
              </Link>
              <Link href="/instagram" className="flex items-center gap-2">
                <FaInstagram className="w-5 h-5 text-white" />
                Instagram
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex relative flex-col">
            <h2 className="text-2xl text-white font-semibold mb-5">Contact Us</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
                <p className="text-base text-gray-400">
                  Pune, Maharashtra, India, 411014
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="w-5 h-5 text-white" />
                <Link
                  href="https://github.com/ankitpakhale/VIBE-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-400"
                >
                  VIBE-UI
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="w-5 h-5 text-white" />
                <p className="text-base text-gray-400">Time Zone: IST (UTC+5:30)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer part like copyrights */}
        <div className="py-2">
          <p className="text-center text-md">
            Made with{' '}
            <FaHeart className="inline w-4 h-4 text-red-500 mx-1 animate-pulse" />
            by{' '}
            <Link
              className="text-orange-400 hover:text-cyan-400 transition-duration-200"
              href={'https://ankitpakhale.netlify.app/'}
              target="_black"
            >
              Ankit Pakhale
            </Link>
          </p>
          <p className="text-center text-md">
            <FaRegCopyright className="inline w-4 h-4 text-gray-400 mr-1 mb-1" />
            {new Date().getFullYear()} VIBE. All Rights Reserved.
          </p>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default Footer;
