'use client';

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import {
  FaMusic,
  FaListUl,
  FaPenNib,
  FaMicrophoneAlt,
  FaHeadphonesAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { HiHome, HiBookOpen } from 'react-icons/hi2';

function NavbarDemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-white',
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            icon={<HiHome className="w-6 text-white" />}
          />
        </Link>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Courses"
          icon={<HiBookOpen className="w-6 text-white" />}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/all-courses">
              <FaListUl className="inline-block mr-2" />
              All Courses
            </HoveredLink>
            <HoveredLink href="/basic-music-theory">
              <FaMusic className="inline-block mr-2" />
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/advanced-composition">
              <FaPenNib className="inline-block mr-2" />
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/songwriting">
              <FaMicrophoneAlt className="inline-block mr-2" />
              Songwriting
            </HoveredLink>
            <HoveredLink href="/music-production">
              <FaHeadphonesAlt className="inline-block mr-2" />
              Music Production
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={'/contact'}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
            icon={<FaMapMarkerAlt className="w-6 text-white" />}
          />
        </Link>
      </Menu>
    </div>
  );
}
export default NavbarDemo;
