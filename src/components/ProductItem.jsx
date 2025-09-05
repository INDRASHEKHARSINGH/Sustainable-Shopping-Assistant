import React from 'react';

const ProductItem = ({ image, name, price }) => {
  return (
    <div className="w-55 bg-white  rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 font-bold text-md mt-1">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;