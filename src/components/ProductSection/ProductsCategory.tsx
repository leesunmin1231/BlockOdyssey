import React from 'react';
import { category } from '../../util/constantData';

export default function ProductsCategory() {
  return (
    <div className="category">
      {category.slice(1).map((type) => (
        <div key={type.className} className={type.className}>
          {type.title}
        </div>
      ))}
    </div>
  );
}
