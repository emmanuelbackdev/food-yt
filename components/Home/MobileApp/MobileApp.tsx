import Image from 'next/image'
import React from 'react'

const MobileApp = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <Image src="/images/app.png" alt='app' width={800} height={800} className='object-cover' />
                <div>
                    {/* Heading */}
                    <h1 className='text-2xl sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400'>
                        Download our app and get exclusive discounts on your first order. Available on both iOS and Android platforms.
                    </h1>
                    {/* Description */}
                    <p>
                        Our mobile app offers a seamless and convenient way to order your favorite meals from our restaurant. With just a few taps, you can browse our menu, customize your order, and have it delivered right to your doorstep. Plus, enjoy exclusive discounts and promotions when you order through our app. Download now and experience the ultimate food delivery experience!
                    </p>
                    {/* Download Buttons */}
                    <div className='sm:flex space-y-3 sm:space-x-0 space-x-4 mt-8'>
                        {/* App Store Button */}
                        <a href="#" className='flex items-center justify-center ground border border-gray-300 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300'>
                            <div>
                                <p className="text-xs text-white duration-300">Download on the
                                </p>
                                <p className='text-sm font-semibold text-white transition-all duration-300'>App Store</p>
                            </div>
                        </a>
                        {/* Google Play Button */}
                        <a href="#" className='flex items-center justify-center ground border border-gray-300 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300'>
                            <div>
                                <p className="text-xs text-white duration-300">Download on the
                                </p>
                                <p className='text-sm font-semibold text-white transition-all duration-300'>Google Store</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp