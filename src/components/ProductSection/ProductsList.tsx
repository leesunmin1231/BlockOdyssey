import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsData } from '../../redux/productsList';
import { PageInfo } from '../../redux/pageInfo';
import { ReducerType } from '../../redux/rootReducer';

export default function ProductsList() {
  const pageInfo = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const productsData = useSelector<ReducerType, ProductsData>((state) => state.productsList);
  const currentPageList = productsData.products.slice(
    pageInfo.startPage - 1,
    pageInfo.startPage + pageInfo.rowCount - 1
  );
  return (
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
  );
}
