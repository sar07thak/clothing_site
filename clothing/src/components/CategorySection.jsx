import React from 'react';

const CategorySection = ({ categories }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-20">
      {categories.map((category) => (
        <div key={category.id} className="group cursor-pointer text-center">
          <div className="relative overflow-hidden bg-gray-50 aspect-square mb-3">
            <img
              src={category.src}
              alt={category.label}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] font-medium tracking-wider text-black">
            {category.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
