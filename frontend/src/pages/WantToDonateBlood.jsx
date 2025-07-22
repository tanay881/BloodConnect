import React, { useContext } from 'react'
import { useState } from "react";
import assets from '../assets/assets';
import axios from 'axios';
import { DonerDataContext } from '../context/DonerDataContext';

const WantToDonateBlood = () => {
  const { backendUrl } = useContext(DonerDataContext)
  const [formData, setFormData] = useState({
    fullname: "",
    bloodgroup: "",
    address: "",
    location: "",
    gender: "",
    phoneno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${backendUrl}api/donerdetails/donateblood`, formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col-reverse sm:flex-row-reverse border border-gray-400'>
      {/* Right Side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className="max-w-md mx-auto mt-10 mb-10 bg-white p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#8c1a12]">Blood Donor Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none focus:ring"
            />

            <select
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none focus:ring"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none focus:ring"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none focus:ring"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none focus:ring"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input
              type="number"
              name="phoneno"
              placeholder="Phone Number"
              value={formData.phoneno}
              onChange={handleChange}
              className="w-full p-2 border focus:outline-none focus:ring"
            />

            <button
              type="submit"
              className="w-full bg-[#8c1a12] text-white py-2 hover:bg-[#8c1a12ee] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Left Side  */}
      <img className='w-full sm:w-1/2' src={assets.DonerImage} alt=""/>
    </div>
  )
}

export default WantToDonateBlood