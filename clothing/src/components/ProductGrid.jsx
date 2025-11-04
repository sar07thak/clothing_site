import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ items, columns = 4 }) => {
  const gridClass = columns === 3
    ? 'grid grid-cols-2 md:grid-cols-3 gap-4'
    : 'grid grid-cols-2 md:grid-cols-4 gap-4';

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          isLarge={item.large}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
