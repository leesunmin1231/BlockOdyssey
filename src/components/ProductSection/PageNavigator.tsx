import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsData } from '../../redux/productsList';
import { PageInfo } from '../../redux/pageInfo';
import { ReducerType } from '../../redux/rootReducer';
import { getPageNumbers } from '../../util/getPagesNumber';

export default function PageNavigator() {
  const pageInfo = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const productsData = useSelector<ReducerType, ProductsData>((state) => state.productsList);
  const pageNumbers = getPageNumbers(productsData.total, pageInfo.rowCount);
  return (
    <nav className="page_navigation">
      <button type="button" className="page_button">
        <img alt="arrow" className="collapse" src="img/arrow-collapse-left.svg" />
      </button>
      <button type="button" className="page_button">
        <img alt="arrow" src="img/chevron-left.svg" />
      </button>
      {pageNumbers.length > 6 ? (
        <div className="page_number_list">
          {pageNumbers.slice(0, 5).map((x) => (
            <button type="button" className="page_button">
              {x + 1}
            </button>
          ))}
          <span className="ellipsis">...</span>
          <button type="button" className="page_button">
            {pageNumbers[pageNumbers.length - 1] + 1}
          </button>
        </div>
      ) : (
        <div className="page_number_list">
          {pageNumbers.map((x) => (
            <button type="button" className="page_button">
              {x + 1}
            </button>
          ))}
        </div>
      )}
      <button type="button" className="page_button">
        <img alt="arrow" src="img/chevron-right.svg" />
      </button>
      <button type="button" className="page_button">
        <img alt="arrow" className="collapse" src="img/arrow-collapse-right.svg" />
      </button>
    </nav>
  );
}
