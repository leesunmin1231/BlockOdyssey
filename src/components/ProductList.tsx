import React from 'react';
import { ProductsResponseType } from '../util/http';
import { category } from '../util/constantData';

export default function ProductList({ productData }: { productData: ProductsResponseType }) {
  return (
    <section className="main_content">
      <div className="total_data">검색된 데이터: {productData.total}건</div>
      <div className="products_box">
        <div className="category">
          {category.slice(1).map((type) => (
            <div key={type.className} className={type.className}>
              {type.title}
            </div>
          ))}
        </div>
        <div className="products_list">
          {productData.products.map((item) => (
            <li key={item.id}>
              <div className="number">{item.id}</div>
              <div className="name">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="content">{item.description}</div>
              <div className="price">${item.price}</div>
              <div className="rating">{item.rating}</div>
              <div className="stock">{item.stock}</div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
