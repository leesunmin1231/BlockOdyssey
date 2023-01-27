import React from 'react';
import PageNavigation from './PageNavigation';
import ProductsList from './ProductsList';
import ProductsCategory from './ProductsCategory';

export default function ProductsSection() {
  return (
    <section className="main_content">
      <div className="products_box">
        <ProductsCategory />
        <ProductsList />
        <PageNavigation />
      </div>
    </section>
  );
}
