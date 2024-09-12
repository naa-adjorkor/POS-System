// src/Profile.js

import React from 'react';

export const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg">
        <div className="relative">
          {/* Profile Picture */}
          <div className="flex justify-center mt-8">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-gray-300" 
            />
          </div>
          
          {/* Online Status */}
          <div className="absolute right-0 bottom-0 mr-4 mb-2">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">John Doe</h1>
          <p className="text-gray-600 mb-4">johndoe@example.com</p>
          <p className="text-gray-500 mb-6">Hey there! I am using React.</p>
          
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Edit Profile</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
