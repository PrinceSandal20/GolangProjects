import React from 'react'
import "../index.css";
export default function EditProfilePage() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200 relative'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute inset-0 z-0'></div>
      <form className='flex flex-col gap-6 p-12 bg-gray-800 rounded-lg relative z-10'>
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='text'
          placeholder='Name'
        />
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='text'
          placeholder='Email'
        />
        <button
          className='bg-gray-500 text-white font-semibold rounded-lg px-8 py-4 text-sm hover:bg-gray-700'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}