import React from 'react'

const DonerDetails = ({fullname, bloodgroup, address, location, gender, phoneno}) => {
  return (
    <div className='w-full md:flex justify-between gap-2 border-none rounded-sm text-[14px] bg-gray-200  m-auto mt-2.5 px-4 py-3'>
      <div className='flex flex-col'>
        <h2 className='font-bold text-[#8c1a12] text-base'>Name : {fullname}</h2>
        <p>Blood Group : {bloodgroup}</p>
        <p>Address : {address}</p>
      </div>
      <div className='flex flex-col'>
        <p>Location : {location}</p>
        <p>Gender : {gender}</p>
        <p>Phone No : {phoneno}</p>
      </div>
    </div>
  )
}

export default DonerDetails