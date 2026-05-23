import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-800' >
        {/* top part */}
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* 1st part */}
            <div>
                <div className='flex items-center space-x-2'>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
                        How Far Logo
                    </h1>
                </div>
                <p>
                    Footer of the website. You can add your own content here, such as contact information, social media links, or any other relevant information about your business.
                </p>
                {/* 2nd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Company</h1>
                    <p className='footer_link'>Our customers</p>
                    <p className='footer_link'>About Us</p>
                    <p className='footer_link'>Careers</p>
                    <p className='footer_link'>Contact Us</p>
                    <p className='footer_link'>Privacy Policy</p>
                </div>
                {/* 3rd part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold text-white'>Resources</h1>
                    <p className='footer_link'>Blog</p>
                    <p className='footer_link'>Webinar</p>
                    <p className='footer_link'>Podcast</p>
                    <p className='footer_link'>E-book</p>
                </div>
                {/* 4th part */}
                <div>
                    <h1 className='text-lg font-bold text-white'>Subscribe to our newsletter</h1>
                    <div className='mt-6'>
                        <h1 className='text-sm text-white'>Our mobile number</h1>
                        <h1 className='text-base font-bold text-yellow-300 mt-1'>+1 (123) 456-7890
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        {/* bottom part */}
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <span>HOW FAR</span>
        </div>
    </div>
  )
}

export default Footer;