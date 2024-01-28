import React, { useState } from 'react';
import "../index.css"
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [redirect,setRedirect] = useState("");
  async function LoginUser(event){
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
  
      await axios.post("/login", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert("Login successful!");
      setRedirect(true);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed!");
    }
  }
  if(redirect){
    return <Navigate to={"/"}/>
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200 relative'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute inset-0 z-0'></div>
      <form className='flex flex-col gap-6 p-12 bg-gray-800 rounded-lg relative z-10' onSubmit={LoginUser}>
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
        />
        <button
          className='bg-gray-500 text-white font-semibold rounded-lg px-8 py-4 text-sm hover:bg-gray-700'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
}
