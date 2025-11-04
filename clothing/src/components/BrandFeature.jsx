import React from 'react';

const BrandFeature = ({ brand }) => {
  return (
    <section className="border-t border-gray-200 pt-16 mb-20">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold tracking-tight">{brand.name}</h3>
          <p className="text-[14px] leading-relaxed text-gray-600">
            {brand.description}
          </p>
          <button className="self-start px-8 py-3 text-[12px] font-semibold tracking-wider border border-black hover:bg-black hover:text-white transition-all duration-300">
            SHOP NOW
          </button>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {brand.images.map((image, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden">
              <img
                src={image}
                alt={`${brand.name} Collection ${index + 1}`}
                className="w-full h-full object-cover aspect-[3/4] transition-opacity duration-300 group-hover:opacity-80"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandFeature;
