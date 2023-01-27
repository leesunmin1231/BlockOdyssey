import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductsData } from '../../../../redux/productsList';
import { PageInfo } from '../../../../redux/pageInfo';
import { ReducerType } from '../../../../redux/rootReducer';
import { getPageNumbers } from '../../../../util/getPagesNumber';
import LessThenSix from './PageNumberNavigator/LessThenSix';
import EllipsisRight from './PageNumberNavigator/EllipsisRight';
import EllipsisLeft from './PageNumberNavigator/EllipsisLeft';
import EllipsisBoth from './PageNumberNavigator/EllipsisBoth';
import LeftNavigator from './LeftNavigator';
import RightNavigator from './RightNavigator';
import { getCurrentPage } from '../../../../util/getSessionStorage';

const navigationState = (currentPageNumber: number, totalPages: number) => {
  if (currentPageNumber < 5) {
    return 'right';
  }
  if (currentPageNumber > totalPages - 4) {
    return 'left';
  }
  return 'both';
};

export default function PageNavigator() {
  const pageInfo = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const productsData = useSelector<ReducerType, ProductsData>((state) => state.productsList);
  const pageNumbers = getPageNumbers(productsData.total, pageInfo.rowCount);
  const PageNavigatorUI = {
    right: <EllipsisRight pageNumbers={pageNumbers} />,
    left: <EllipsisLeft pageNumbers={pageNumbers} />,
    both: <EllipsisBoth pageNumbers={pageNumbers} />,
  };
  useEffect(() => {
    if (!sessionStorage.getItem('page')) {
      sessionStorage.setItem('page', '1');
    }
  }, []);
  return (
    <nav className="page_navigation">
      <LeftNavigator />
      {pageNumbers.length > 6 ? (
        PageNavigatorUI[navigationState(getCurrentPage(), pageNumbers.length)]
      ) : (
        <LessThenSix pageNumbers={pageNumbers} />
      )}
      <RightNavigator totalLength={pageNumbers.length} />
    </nav>
  );
}
