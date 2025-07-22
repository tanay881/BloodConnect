import React from 'react'
import assets from '../assets/assets'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.LoginPageImage} alt=""/>
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='font-semibold text-xl text-[#8c1a12]'>Our Location</p>
          <p className='text-gray-500'>54709 Willams Stations <br /> Suite 350, Washington, USA </p>
          <p className='text-gray-500'>Tel: (415) 555-0123 <br />Email: admin@BloodConnect.com</p>
          <p className='font-semibold text-xl text-[#8c1a12]'>Careers at Bloodconnect</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-[#8c1a12] hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact