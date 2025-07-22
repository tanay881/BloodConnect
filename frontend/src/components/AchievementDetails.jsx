import React from 'react'
import assets from '../assets/assets'

const AchievementDetails = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-5 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='flex flex-col gap-2 p-4'>
        <img src={assets.life_insurance} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold text-[#8c1a12]'>10,000+ Lives Saved</p>
        <p className='text-gray-400'>Through successful blood donations. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div  className='flex flex-col gap-2 p-4'>
        <img src={assets.blood} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold text-[#8c1a12]'>5,000+ Registered Donors</p>
        <p className='text-gray-400'>Lorem, ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.</p>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <img src={assets.ambulance} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold text-[#8c1a12]'>1,200+ Emergency Case </p>
        <p className='text-gray-400'>Donations fulfilled And we’re just getting started. Keep donating, keep saving lives! Necessitatibus, nulla.</p>
      </div>
      <div className='flex flex-col gap-2 text-[#8c1a12] p-4'>
        <img src={assets.customer_service} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Best Patients Support</p>
        <p className='text-gray-400'>We provide 24/7 patients support Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default AchievementDetails