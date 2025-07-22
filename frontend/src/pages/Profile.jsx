import React from 'react'

const Profile = () => {
  const user = {
    name: "Tanay Dutta",
    email: "tanay@example.com",
    bloodGroup: "B+",
    address: "123, Park Street, Kolkata",
    phoneNo: "+91-9876543210",
    gender: "Male",
    location: "Kolkata, India",
  };

  return (
    <div className="min-h-[60vh] bg-gradient-to-r from-[#830000] to-[#340505] flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-6 sm:p-10 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#8c1a12] flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-md">
              {user.name.split(" ")[0][0]}
              {user.name.split(" ")[1] ? user.name.split(" ")[1][0] : ""}
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{user.name}</h1>
            <p className="text-gray-600 text-sm sm:text-base mb-4 break-all">{user.email}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700">
              <div>
                <span className="font-semibold">Blood Group:</span>
                <p>{user.bloodGroup}</p>
              </div>
              <div>
                <span className="font-semibold">Gender:</span>
                <p>{user.gender}</p>
              </div>
              <div>
                <span className="font-semibold">Phone Number:</span>
                <p>{user.phoneNo}</p>
              </div>
              <div>
                <span className="font-semibold">Location:</span>
                <p>{user.location}</p>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold">Address:</span>
                <p className="break-words">{user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile