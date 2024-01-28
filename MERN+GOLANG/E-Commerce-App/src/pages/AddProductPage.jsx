import React, { useState } from 'react';
import axios from 'axios';
import "../index.css";

export default function AddProductPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('productname', productName);
    formData.append('productprice', productPrice);
    formData.append('image', productImage);

    try {
      // Make a POST request to your Go backend
      await axios.post("/create-product", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Add any success handling code here
      console.log("Product added successfully!");
    } catch (error) {
      // Handle errors, e.g., display an alert
      console.error("Error adding product:", error);
    }
  };

  function uploadPhoto(event) {
    const files = event.target.files;
  
    if (files.length > 0) {
      const file = files[0];
      const data = new FormData();
      data.append("photo", file);
  
      axios.post("/upload-image", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(response => {
        const { data: fileName } = response;
        setProductImage(fileName);
      })
      .catch(error => {
        console.error("Error uploading photo:", error);
      });
    }
  }
  

  return (
    <div className='flex items-center justify-center h-screen bg-gray-200 relative'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute inset-0 z-0'></div>
      <form className='flex flex-col gap-6 p-12 bg-gray-800 rounded-lg relative z-10' onSubmit={handleFormSubmit}>
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='text'
          placeholder='Product Name'
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='text'
          placeholder='Product Price'
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
        <input
          className='text-black font-semibold rounded-lg px-8 py-6 text-sm bg-white'
          type='file'
          accept='image/*'
          onChange={uploadPhoto}
        />
        <button
          className='bg-gray-500 text-white font-semibold rounded-lg px-8 py-4 text-sm hover:bg-gray-700'
          type='submit'
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
