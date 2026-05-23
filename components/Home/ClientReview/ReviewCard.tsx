import Image from 'next/image';
import React from 'react'

type ReviewCardProps = {
    reviewTitle: string;
    userName: string;
    userImage: string;
    role: string;
}

const ReviewCard = ({ reviewTitle, userName, userImage, role }: ReviewCardProps) => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 p-6 rounded-lg mr-4 shadow-md'>
        <h1 className='text-xl font-bold'>{reviewTitle}</h1>
        <p className='block w-full h-px bg-gray-300 dark:bg-gray-700 mt-6 mb-6 '></p>
        <div>
            <div className='flex items-center space-x-4'>
                <Image src={userImage} alt="image" width={60} height={60} className='rounded-full' 
                />
                <div>
                    <h1 className='text-lg font-bold'>{userName}</h1>
                    <p className='text-sm sm:text-base'>{role}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard