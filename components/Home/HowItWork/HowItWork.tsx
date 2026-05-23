import React from 'react'
import HowItWorkCard from './HowItWorkCard'

const HowItWork = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-xl sm:text-2xl text-center font-extrabold'>
        Let's see how it works
        </h1>
        <div>
            <div>
                <HowItWorkCard num="1" image="/images/w1.png" title="Becoma a Delivery Man" description=" Delivery anywhere"/>
            </div>
            <div>
                <HowItWorkCard num="2" image="/images/w2.png" title="Become a Partner" description="Join our network"/>
            </div>
            <div>
                <HowItWorkCard num="3" image="/images/w3.png" title="Download on Apple and Google" description="Get the app and start your order"/>
            </div>
        </div>
    </div>
  )
}

export default HowItWork