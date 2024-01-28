import React, { useState } from 'react';
import "../index.css"
import axios from 'axios';
export default function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function RegisterUser(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
  
      await axios.post("/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed!");
    }
  }
  
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200 relative'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute inset-0 z-0'></div>
      <form className='flex flex-col gap-6 p-12 bg-gray-800 rounded-lg relative z-10' onSubmit={RegisterUser}>
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(event)=>setName(event.target.value)}
        />
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          id='email'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
        />
        <button
          className='bg-gray-500 text-white font-semibold rounded-lg px-8 py-4 text-sm hover:bg-gray-700'
          type='submit'
        >
          Register
        </button>
      </form>
    </div>
  );
}
