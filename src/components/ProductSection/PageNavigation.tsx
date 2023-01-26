import React from 'react';
import { useDispatch } from 'react-redux';
import { addPageInfo, PageInfo } from '../../redux/pageInfo';

export default function PageNavigation() {
  const dispatch = useDispatch();
  return <footer className="page_navigation">PageNavigation</footer>;
}
