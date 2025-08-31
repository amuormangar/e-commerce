import React from 'react';
import Image from 'next/image';  

const BestSellingProducts = () => {
  const products = [
    { name: 'Breed Dry Dog Food', price: 100, discount: 35, rating: 3, reviews: 88, image: '/Images/choco.jpg' },
    { name: 'CANON EOS DSLR Camera', price: 360, discount: 95, rating: 4, reviews: 75, image: '/Images/canon_camera.png' },
    { name: 'ASUS FHD Gaming laptop', price: 700, discount: 30, rating: 5, reviews: 325, image: '/Images/laptop-removebg-preview (1).png' },
    { name: 'Curology Product Set', price: 500, discount: 25, rating: 4.6, reviews: 145, image: '/Images/curology.png' },
    { name: 'Kids Electric Car', price: 960, discount: 40, rating: 4.5, reviews: 88, image: '/Images/car (1).png'},
    { name: 'Jr.Zoom Soccer Cleats', price: 1160, discount: 35, rating: 5, reviews: 75, image: '/Images/boot.png' },
    { name: 'GP11 Shooter USB Gamepad', price: 660, discount: 30, rating: 4.8, reviews: 99, image: '/Images/blackpad (1).png' },
    { name: 'Quilted Satin Jacket', price: 660, discount: 25, rating: 4.6, reviews: 98, image: '/Images/jacket (1).png'},
  ];

   return (
    <div className="py-10 px-4 ml-40">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold ml-12">
            <span className="text-red-600 text-sm">Our Products</span>
            <br/>
            Explore Our products
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
        {products.map((product, index) => {
          const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
          const fullStars = Math.floor(product.rating);
          const halfStar = product.rating - fullStars >= 0.5;
          const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

          return (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={240}
                height={192}
           
              />
              <div className="text-red-600 font-bold">-{product.discount}%</div>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <div className="text-green-600 mt-2">
                <span className="text-gray-500 line-through mr-2">${product.price}</span>
                <span>${discountedPrice}</span>
              </div>
              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-400">
                  {'★'.repeat(fullStars)}
                  {halfStar && '½'}
                </span>
                <span className="text-gray-400">{'★'.repeat(emptyStars)}</span>
                <span className="text-gray-600 ml-1">({product.reviews})</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default BestSellingProducts;