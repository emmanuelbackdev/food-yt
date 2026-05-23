import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
        <div className='w-[90%] md:w-[80%] mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Text content */}
            <div>
                {/* heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 mb-6 font-extrabold leading-[2.5] md:leading-[4]">Your favourite food, <span className='text-indigo-400'> delivered</span> to your home</h1>
                {/* subheading */}
                <p className='text-sm md:text-base font-medium text-gray-800 dark:text-gray-400'>Food, drinks, groceries and more available for deliveries and pickup.</p>
                {/* address input */}
                <div className='w-full mt-8 mb-8 max-w-md'>
                    <div className='flex items-center h-14 overflow-hidden bg-gray-100 shadow-md'>
                        <input type="text" placeholder='Enter your address' className='flex-1 px-2 text-sm text-black bg-transparentoutline-none h-full'/>
                        <button className='bg-gray-900 text-white px-4 h-full hover:bg-gray-800 flex items-center justify-center'>Click</button>
                    </div>
                </div>
                {/* Download text */}
                <p className='text-gray-700 dark:text-gray-400 text-sm mb-6'>Apps available to download on</p>
                {/* App store buttons */}
                <div className='flex space-x-4'>
                    <a href='#' className='flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300'
                    >
                        <div>
                            <p className='text-xs group-hover:text-white transition-all duration-300'>Download on the</p>
                            <p className='text-sm font-semibold group-hover:text-white transition-all duration-300'>App Store</p>
                        </div>
                    </a>
                    {/* Google play store buttons */}
                    <a href='#' className='flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300'
                    >
                        <div>
                            <p className='text-xs group-hover:text-white transition-all duration-300'>Download on the</p>
                            <p className='text-sm font-semibold group-hover:text-white transition-all duration-300'>Google Play</p>
                        </div>
                    </a>
                </div>
            </div>
            {/* Image content */}
            <div className='mx-auto hidden xl:block'>
                <img src="/images/hero.png" alt="Hero Image" width={500} height={500} />
            </div>
        </div>
    </div>
  )
} 

export default Hero