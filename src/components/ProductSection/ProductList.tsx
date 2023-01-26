import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsResponseType } from '../../types/Product';
import { category } from '../../util/constantData';
import { PageInfo } from '../../redux/pageInfo';
import { ReducerType } from '../../redux/rootReducer';

export default function ProductList({ productData }: { productData: ProductsResponseType }) {
  const pageInfo = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const currentPageList = productData.products.slice(
    pageInfo.startPage - 1,
    pageInfo.startPage + pageInfo.rowCount - 1
  );
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
          {currentPageList.map((item) => (
            <li key={item.id}>
              <div className="number">{item.id}</div>
              <div className="name">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="content">
                {item.description.length > 40 ? `${item.description.slice(0, 40)}...` : item.description}
              </div>
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
