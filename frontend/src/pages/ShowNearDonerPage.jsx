import React, { useContext } from "react";
import assets from "../assets/assets";
import DonerDetails from "../components/DonerDetails";
import { DonerDataContext } from "../context/DonerDataContext";
import MyMap from '../components/MyMap'

const ShowNearDonerPage = () => {
  const { filteredData } = useContext(DonerDataContext);

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse border border-gray-400">
      <div className="w-full px-2 py-3 my-3 sm:w-full flex items-center justify-center sm:py-0">
        {/* Right Side  */}
        <div className="w-full flex flex-col items-center px-4 py-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#8c1a12]">
            Nearest Doners Details
          </h2>
          <div className="w-[95%] h-[46vh] flex flex-col items-center border border-gray-300 rounded-2xl px-6 py-4 overflow-scroll">
            {filteredData.map((donor) => {
              const {
                _id,
                fullname,
                bloodgroup,
                address,
                location,
                gender,
                phoneno,
              } = donor;
              
              return (
                <DonerDetails
                  key={_id}
                  fullname={fullname}
                  bloodgroup={bloodgroup}
                  address={address}
                  location={location}
                  gender={gender}
                  phoneno={phoneno}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Left Side  */}
      <div className='w-full'>
        {/* <img className="h-full" src={assets.DonerImage} alt="" /> */}
        <MyMap />
      </div>
    </div>
  );
};

export default ShowNearDonerPage;
