import React from 'react'
import RestaurantCard from './RestaurantCard'

const Restaurant = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='text-xl sm:text-2xl text-center font-extrabold'>Available Restaurant Nearby Area
        </div>
        <div className='w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14'>
            <div>
                <RestaurantCard image="/images/r1.jpg" 
                title="Restaurant 1"/>
            </div>
            <div>
                <RestaurantCard image="/images/r2.jpg" 
                title="Restaurant 2"/>
            </div>
            <div>
                <RestaurantCard image="/images/r3.jpg" 
                title="Restaurant 3"/>
            </div>
            <div>
                <RestaurantCard image="/images/r4.jpg" 
                title="Restaurant 4"/>
            </div>
            <div>
                <RestaurantCard image="/images/r5.jpg" 
                title="Restaurant 5"/>
            </div>
            <div>
                <RestaurantCard image="/images/r6.jpg" 
                title="Restaurant 6"/>
            </div>
        </div>
        <div className='mt-16 text-center'>
            <button className='cursor-pointer sm:px-12 sm:py-3.5 rounded-full font-bold text-base sm:text-lg text-white bg-blue-200 transition-all duration-300 dark:bg-cyan-300'>
                Discover more &rarr;
            </button>
        </div>
    </div>
  )
}

export default Restaurant