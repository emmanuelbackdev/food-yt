import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
};

const RestaurantCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image src={image} alt={title} width={400} height={300} className='rounded-lg object-cover w-full h-48' />
      <h3 className='mt-4 w-fit dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold'>{title}</h3>   
      <div className='flex items-center font-medium mt-3 space-x-2'>
        <p className='bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>
            American
        </p>
        <p className='bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>
            Fast food
        </p>
        <p className='bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>
            Burger
        </p>
      </div>
    </div>
  )
}

export default RestaurantCard