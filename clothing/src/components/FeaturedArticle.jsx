import React from 'react';

const FeaturedArticle = ({ article }) => {
  return (
    <section className="bg-gray-50 p-8 md:p-16 mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
            {article.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600">
            {article.description}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {article.images.map((image, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden">
              <img
                src={image}
                alt={`Editorial ${index + 1}`}
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

export default FeaturedArticle;
