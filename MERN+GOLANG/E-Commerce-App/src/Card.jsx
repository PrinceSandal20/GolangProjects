import React from 'react';
import "./index.css";
const Card = ({title }) => {
  const imageUrls = [
    "https://m.media-amazon.com/images/I/61TLDQrtEOL._AC_UF1000,1000_QL80_.jpg",
    "https://5.imimg.com/data5/SELLER/PDFImage/2023/7/321982287/XL/ZG/NJ/188924882/vivo-mobile-phone.png",
    "https://tiimg.tistatic.com/fp/1/007/898/super-amoled-blue-vivo-v15-memory-size-32gb-display-size-6-39-inch-vivo-mobile-phone-074.jpg",
    "https://images-cdn.ubuy.co.in/64d5046d4abed576d620c4c7-samsung-32-class-n5300-series-full-hd.jpg",
    "https://thumbs.dreamstime.com/b/flat-screen-tv-set-displaying-logo-samsung-poznan-pol-feb-south-korean-multinational-conglomerate-headquartered-town-seoul-172518825.jpg",
    "https://img.global.news.samsung.com/in/wp-content/uploads/2023/04/15584_Neo-QLED-8K_PR_Newsroom_728x410.jpg",
  ];
  return (
    <div className='grid gap-x-1 gap-y-1 grid-cols-3 bg-gray-200 relative'>
      <div className='bg-gradient-to-r from-green-400 to-blue-500 absolute inset-0 z-0'></div>
     <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-20 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[0]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Mobile Phone 1
      <div className='flex justify-center mt-5'>
        <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-20 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[1]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
    Mobile Phone 2
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-20 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[2]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
    Mobile Phone 3
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[3]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Tv 1
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[4]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
       Tv 2
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[5]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Tv 3
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[3]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Tv 1
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[4]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
       Tv 2
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[5]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Tv 3
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[3]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Tv 1
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[4]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
       Tv 2
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    <div className="cursor-pointer max-w-sm rounded overflow-hidden rounded-3xl shadow-lg bg-gray-800 mt-10 mr-10 ml-10 mb-20 px-6 py-10 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105">
    <img className='w-48 h-22 object-cover product-image ml-20' src={imageUrls[5]} alt={title} />
      <div className="font-bold text-xl mb-2">{title}</div>
    <div className='text-2xl text-center text-white mt-10 mr-4'>
      Tv 3
      <div className='flex justify-center mt-5'>
      <h2 className='mr-5'>$500</h2>
      <button className='text-center bg-gray-800 text-white rounded-2xl flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Card;
