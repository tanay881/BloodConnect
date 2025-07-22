import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row-reverse border border-gray-400'>
      {/* Hero Left Side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#8c1a12]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#8c1a12]'></p>
            <p className='font-medium text-sm md:text-base'>SAVE A LIFE TO</p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl font-bold leading-relaxed'>DONATE BLOOD</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>DONATE NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#8c1a12]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side  */}
      <img className='w-full sm:w-1/2' src={assets.HomeAlterImage} alt=""/>
    </div>
  )
}

export default Hero