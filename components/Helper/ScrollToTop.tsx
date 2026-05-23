"use client"
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isvisible, setIsvisible] = useState(false);

    // show and hide function
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsvisible(true);
            else setIsvisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Create scroll to top functionality
    const scrollToTop =()=>{
        window.scroll({
        top:0,
        behavior: "smooth"
    })
};

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isvisible && (
            <button
            className='bg-cyan-500 cursor-pointer text-white rounded-full w-12 h-12 flex item-center justify-center focus:outline-none'
            onClick={scrollToTop}>
                Up
            </button>
        )}

    </div>
  )
}

export default ScrollToTop