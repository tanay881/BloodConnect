import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
        <div>
          <img src={assets.Logo} className='mb-5 w-32' alt=""/>
          <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum placeat laborum modi consequatur asperiores quas, alias nulla, in quia deleniti porro accusantium harum sit quos impedit soluta. Non, suscipit aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde! Quam, ut quis voluptatum odio delectus itaque cumque nihil dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nemo!</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>MORE INFO</p>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li>+1 234 567 8901</li>
            <li>contact@bloodconnect.gmail.com</li>
          </ul>
        </div>

      </div>
      <div>
        <hr className='h-[1px] border-none bg-gray-300'/>
        <p className='py-5 text-sm text-center'>
          &copy; {new Date().getFullYear()} BloodConnect.com - All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer