import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addPageInfo, PageInfo } from '../../redux/pageInfo';
import RowPerPage from './RowPerPageDropdown';

export default function PageNavigation() {
  //   const dispatch = useDispatch();
  return (
    <footer className="page_navigation">
      <RowPerPage />
    </footer>
  );
}
