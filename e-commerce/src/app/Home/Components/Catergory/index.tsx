import React from 'react';
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { IoWatchOutline } from 'react-icons/io5';

const CategoryBrowse = () => {
  const categories = [
    { name: 'Phones', icon: FaMobileAlt },
    { name: 'Computers', icon: FaLaptop },
    { name: 'Smartwatch', icon: IoWatchOutline },
    { name: 'Camera', icon: FaCamera },
    { name: 'Headphones', icon: FaHeadphones },
    { name: 'Gaming', icon: FaGamepad },
  ];


  return (
    <div className="py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 mr-35">
        
        <h2 className="text-2xl font-bold ml-50">
          <span className='text-red-600 text-sm'>Categories</span> <br></br>Browse by Category</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-200 p-2 rounded">&lt;</button>
          <button className="bg-gray-200 p-2 rounded">&gt;</button>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-34 pb-4 hide-scroll-bar ml-50">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="min-w-[120px] bg-white shadow-md rounded-lg p-4 text-center hover:bg-gray-100 transition border">
              <Icon className="text-3xl mx-auto mb-2 text-gray-600" />
              <h3 className="text-sm font-semibold">{category.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );


};




export default CategoryBrowse