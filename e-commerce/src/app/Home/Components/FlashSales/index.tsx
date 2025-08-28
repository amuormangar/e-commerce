"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const FlashSale = () => {
  const [timeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  const sales = [
    { name: 'HAVIT HV-G92 Gamepad', price: 120, discount: 40, rating: 4.5, reviews: 88, image: '/gamepad.png' },
    { name: 'AK-900 Wired Keyboard', price: 960, discount: 35, rating: 4.7, reviews: 75, image: '/keyboard.png' },
    { name: 'IPS LCD Gaming Monitor', price: 370, discount: 30, rating: 4.8, reviews: 99, image: '/computer.png' },
    { name: 'S-Series Comfort Chair', price: 375, discount: 25, rating: 4.6, reviews: 98, image: '/chair.png' },
    { name: 'S-Series Comfort Chair', price: 375, discount: 25, rating: 4.6, reviews: 98, image: '/chair.png' },
  ];

  return (
    <section className="py-10 px-4 -mt-88">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold ml-50">
          <span className='text-red-600 text-sm'>Today&aposs</span> <br></br>Flash Sales</h2>

        <div className="flex space-x-2 text-center mr-280">
          <div className="bg-gray-200 px-3 py-2 rounded">
            <div className="text-xl font-bold">{timeLeft.days}</div>
            <div className="text-sm">Days</div>
          </div>

          <div className="bg-gray-200 px-3 py-2 rounded">
            <div className="text-xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm">Hours</div>
          </div>

          <div className="bg-gray-200 px-3 py-2 rounded">
            <div className="text-xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>

          <div className="bg-gray-200 px-3 py-2 rounded">
            <div className="text-xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm">Seconds</div>
          </div>

        </div>
      </div>

      <div className="flex overflow-x-auto space-x-25 pb-4 hide-scroll-bar ml-40 mt-4">
        {sales.map((sale, index) => (
          <div key={index} className="min-w-[200px] bg-white shadow-md rounded-lg p-4 text-center">
            <Image 
            src="/Images/redpad (1).png" alt={sale.name} 
            width={100}
            height={100} />
            <div className="text-red-600 font-bold">-{sale.discount}%</div>
            <div className="text-gray-600"></div>
            <h3 className="text-lg font-semibold">{sale.name}</h3>
            <p className="text-green-600">${sale.price}</p>
            <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
            <div className="flex items-center justify-center ">
              <span className="text-yellow-400">{'★'.repeat(Math.floor(sale.rating))}</span>
              <span className="text-gray-400">{'★'.repeat(5 - Math.floor(sale.rating))}</span>
              <span className="text-gray-600 ml-1">({sale.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-red-600 text-white px-6 py-2 rounded ml-220 mt-2">View All Products</button>
    </section>
  );
};

export default FlashSale;