import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

export default function ProfilePage() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200 relative'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute inset-0 z-0'></div>
      <div className='flex flex-col gap-6 p-20 bg-gray-800 relative z-10 rounded-lg'>
        <img
          className='mx-auto w-24 h-24 rounded-full'
          src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
          alt='Profile'
        />
        <h2 className='text-white text-2xl font-semibold text-center'>John Doe</h2>
        <p className='text-gray-300 text-center'>john@example.com</p>
        <Link to="/editprofile">
            <button
            className='bg-gray-500 text-white font-semibold rounded-lg px-8 py-4 text-sm hover:bg-gray-700'
            >
            Edit Profile
            </button>
        </Link>
      </div>
    </div>
  );
}
