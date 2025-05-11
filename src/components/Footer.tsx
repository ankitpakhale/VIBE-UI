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
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          text-center    /* center all content by default */ :contentReference[oaicite:0]{index=0}
          sm:text-left   /* left-align text on small screens and larger */ :contentReference[oaicite:1]{index=1}
          justify-items-center  /* center grid items by default */ :contentReference[oaicite:2]{index=2}
          sm:justify-items-start /* left-align grid items on sm: and up */ :contentReference[oaicite:3]{index=3}
        "
      >
        {/* About us */}
        <div className="flex relative flex-col">
          <h2 className="text-2xl text-white font-semibold mb-5">About us</h2>
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
            At our music school, we foster creativity and musical excellence through
            personalized instruction and hands-on experience. Whether you're a beginner or
            an advanced student, our expert instructors guide you every step of the way.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex relative flex-col">
          <h2 className="text-2xl text-white font-semibold mb-5">Quick Links</h2>
          <div className="flex flex-col gap-4">
            <Link href={'/home'} className="flex items-center gap-2">
              <HiHome className="w-5 h-5 text-white" />
              Home
            </Link>
            <Link href={'/about-us'} className="flex items-center gap-2">
              <HiInformationCircle className="w-5 h-5 text-white" />
              About Us
            </Link>
            <Link href={'/courses'} className="flex items-center gap-2">
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
              <p className="text-base text-gray-400">Pune, Maharashtra, India, 411014</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-5 h-5 text-white" />
              <Link href="mailto:akp3067@gmail.com" className="text-base text-gray-400">
                akp3067@gmail.com
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="w-5 h-5 text-white" />
              <Link href="tel:+919407328187" className="text-base text-gray-400">
                +91 940 732 8187
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <p className="text-center text-md">
          Made with <FaHeart className="inline w-4 h-4 text-red-500 mx-1 animate-pulse" />
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
          {new Date().getFullYear()} Music School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
