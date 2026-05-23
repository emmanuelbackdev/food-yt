import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navClass = showNav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navClass} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full-screen `}></div>
      {/* Navigation Links */}
    <div className={`fixed top-0 ${navClass} right-0 h-screen w-[70%] bg-blue-300 z-1003 transform transition-all duration-500`}>
        <div className='flex flex-col items-center justify-center h-full space-y-6'>
          {Navlinks.map((link) => {
            return (
              <Link key={link.id}
                href={link.url}
                className='text-black hover:text-gray-900 font-bold transition-all duration-200 text-lg'
              >
                <p>{link.Label}</p>
              </Link>
            )
          })}
          {/* Close Button */}
          <button
          onClick={closeNav}
          className=' text-black absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'>X</button>
        </div>
      </div>
    </div>
  )
}
export default MobileNav