import Image from "next/image";
import React from 'react';

const ExploreProducts = () => {
  const products = [
    { name: 'The north coat', price: 120, discount: 40, rating: 4.5, reviews: 88, image: '/Images/pink_jacket.png' },
    { name: 'gucci duffle bag', price: 960, discount: 35, rating: 4.7, reviews: 75, image: '/Images/gucci_bag.png' },
    { name: 'RGB liquid CPU Cooler', price: 370, discount: 30, rating: 4.8, reviews: 99, image: '/Images/liquid_cpu.png' },
    { name: 'Small BookSelf', price: 375, discount: 25, rating: 4.6, reviews: 98, image: '/Images/bookFurniture-removebg-preview.png' },
  ];

  return (
    <div>
      <div className="py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold ml-50">
              <span className="text-red-600 text-sm">This Month</span><br />
              Best Selling Products
            </h2>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded mr-35">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={240}
                height={192}
                className="w-full h-auto mb-2"
              />
              <div className="text-red-600 font-bold">-{product.discount}%</div>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <div className="text-green-600 mt-2">
                ${product.price}
              </div>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-400">{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(product.rating))}</span>
                <span className="text-gray-600 ml-1">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white py-10 px-4 flex flex-col md:flex-row items-center justify-between w-[1580px] h-[550px] ml-30 mt-10">
        <div className="mb-4 md:mb-0 ml-80">
          <span className="text-green-400 text-sm">Categories</span>
          <h2 className="text-4xl font-bold mt-2">Enhance Your Music Experience</h2>
          <div className="flex space-x-4 mt-4">
            <div className="bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center">
              23
            </div>
            <div className="bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center">
              05
            </div>
            <div className="bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center">
              69
            </div>
            <div className="bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center">
              35
            </div>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded mt-4">Buy Now!</button>
        </div>
        <div className="mt-4 md:mt-0 mr-90">
          <Image
            src="/Images/btSpeaker.png"
            alt="Music Speaker"
            width={556} 
            height={192} 
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;