import React from 'react';
import ProductsFooter from './ProductsFooter';
import ProductsList from './ProductsList';
import ProductsCategory from './ProductsCategory';

export default function ProductsSection() {
  return (
    <section className="main_content">
      <div className="products_box">
        <ProductsCategory />
        <ProductsList />
        <ProductsFooter />
      </div>
    </section>
  );
}
