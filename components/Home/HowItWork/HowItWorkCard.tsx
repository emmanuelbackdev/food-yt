import Image from 'next/image'
import React from 'react'

type Props = {
    num: string,
    image: string,
    title: string,
    description: string
}

const HowItWorkCard = ( {num, image, title, description}: Props ) => {
  return (
    <div>
        <div className='relative'>
            <Image src={image} alt="img" width={500} height={500} className="object-contain mx-auto"/>
        <div className='w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full'>
            {num}
        </div>
        <h1 className='text-lg font-bold text-center mt-4'>{title}</h1>
        <p className='text-center text-gray-500 mt-2'>{description}</p>
        <p className='mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 translation-all duration-150 cursor-pointer text-center'>Start Earning &rarr;
        </p>
        </div>
    </div>
  )
}

export default HowItWorkCard