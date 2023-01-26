import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPageInfo, PageInfo } from '../../redux/pageInfo';
import { ProductType } from '../../types/Product';
import { ReducerType } from '../../redux/rootReducer';

export default function PageNavigation() {
  const products = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const dispatch = useDispatch();
  return <footer className="page_navigation">PageNavigation</footer>;
}
