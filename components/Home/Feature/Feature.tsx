import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-xl sm:text-2xl text-center font-extrabold'>
            Meet our quality features
        </h1>
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <FeatureCard icon="/images/f1.svg" title="Feature 1" />
            </div>
            <div>
                <FeatureCard icon="/images/f2.svg" title="Feature 2" />
            </div>
            <div>
                <FeatureCard icon="/images/f3.svg" title="Feature 3" />
            </div>
            <div>
                <FeatureCard icon="/images/f4.svg" title="Feature 4" />
            </div>
            <div>
            <FeatureCard icon="/images/f5.svg" title="Feature 5" />
            </div>
            <div>
                <FeatureCard icon="/images/f6.svg" title="Feature 6" />
            </div>
        </div>
    </div>
  )
}

export default Feature