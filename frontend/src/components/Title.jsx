import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'> 
      <p className='text-[#8c1a12] '>{text1} <span className='text-[#8c1a12] font-medium'>{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#8c1a12]'></p>
    </div>
  )
}

export default Title