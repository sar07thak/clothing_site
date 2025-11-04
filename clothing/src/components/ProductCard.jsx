import React from 'react';

const ProductCard = ({ item, isLarge = false }) => {
  return (
    <div className={`group cursor-pointer ${isLarge ? 'col-span-2' : ''}`}>
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        <img
          src={item.src}
          alt={item.alt || item.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      {item.type === 'product' && (
        <div className="mt-3 text-[13px]">
          <p className="font-semibold text-black mb-1">{item.brand}</p>
          <p className="text-gray-600 mb-2">{item.title}</p>
          <p className="font-medium text-black">{item.price}</p>
          {item.color && <p className="text-[11px] text-gray-500 mt-1">{item.color}</p>}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
