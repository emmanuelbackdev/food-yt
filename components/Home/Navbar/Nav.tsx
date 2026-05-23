"use client"

import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { ModeToggle } from '@/components/ModeToggle';

type NavProps = {
    openNav: () => void;
}

function Nav({openNav}: NavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setIsMenuOpen(true);
            if (window.scrollY < 90) setIsMenuOpen(false);
        }

        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

  return (
    <div 
    className={'transition-all ' + (isMenuOpen ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent') + ' duration-200 h-[12vh] z-100 fixed w-full'}>
        <div className='flex text-black dark:text-white items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <Badge className='w-10 h-10 text-white dark:text-white'>How far</Badge>
            </div>
            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-10'>
                {Navlinks.map((link) => {
                    return (
                        <Link key={link.id}
                            href={link.url}
                            className='text-black dark:text-white hover:text-blue-900 font-bold transition-all duration-200'
                        >
                            <p>{link.Label}</p>
                            </Link>
                    )
            })}
            </div>
            {/* Buttons */}
                <div className='flex items-center space-x-4'>
                    {/* Join Now Button */}
                    <button className='bg-blue-950 dark:bg-white dark:text-black text-white hover:bg-black transition-all duration-300 py-2 px-8rounded-md font-bold rounded-lg cursor-pointer'>
                        Join Now
                    </button>
                    {/* Theme Toggler */}
                    {/*  Menu Icon */}
                    <NativeSelect 
                    onClick={openNav}
                    className='w-8 h-8 cursor-pointer text-blue-950 lg:hidden dark:text-white'>
                        <NativeSelectOption value="">Menu</NativeSelectOption>
                        </NativeSelect>
                        <ModeToggle/>
                </div>
            </div>
        </div>
  );
}

export default Nav;