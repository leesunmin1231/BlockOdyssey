import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsData } from '../../../redux/productsList';
import { PageInfo, addStartPage } from '../../../redux/pageInfo';
import { ReducerType } from '../../../redux/rootReducer';
import { getCurrentPage } from '../../../util/getSessionStorage';
import { getListKey } from '../../../util/getListKey';
import { getPaginationButtons } from '../../../util/getPaginationButtons';

export default function PageNavigator() {
  const pageInfo = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const productsData = useSelector<ReducerType, ProductsData>((state) => state.productsList);
  const totalPages = Math.ceil(productsData.total / pageInfo.rowCount);
  const pageButtons = getPaginationButtons(totalPages, getCurrentPage());
  const dispatch = useDispatch();
  const pageNavigationHandler = (page: string | number) => {
    sessionStorage.setItem('page', String(page));
    dispatch(addStartPage(Number(page)));
  };

  useEffect(() => {
    if (!sessionStorage.getItem('page')) {
      sessionStorage.setItem('page', '1');
    }
  }, []);
  return (
    <nav className="page_navigation">
      <button
        type="button"
        className="page_button"
        disabled={getCurrentPage() === 1}
        onClick={() => pageNavigationHandler(1)}
      >
        <img alt="arrow" className="collapse" src="img/arrow-collapse-left.svg" />
      </button>
      <button
        type="button"
        className="page_button"
        disabled={getCurrentPage() === 1}
        onClick={() => pageNavigationHandler(getCurrentPage() - 1)}
      >
        <img alt="arrow" src="img/chevron-left.svg" />
      </button>
      {pageButtons.map((child) =>
        child === '...' ? (
          <span key={getListKey()} className="ellipsis">
            {child}
          </span>
        ) : (
          <button
            key={child}
            type="button"
            onClick={() => pageNavigationHandler(child)}
            className={child === String(getCurrentPage()) ? 'page_button_selected' : 'page_button'}
          >
            {child}
          </button>
        )
      )}
      <button
        type="button"
        className="page_button"
        disabled={getCurrentPage() === totalPages}
        onClick={() => pageNavigationHandler(getCurrentPage() + 1)}
      >
        <img alt="arrow" src="img/chevron-right.svg" />
      </button>
      <button
        type="button"
        className="page_button"
        disabled={getCurrentPage() === totalPages}
        onClick={() => pageNavigationHandler(totalPages)}
      >
        <img alt="arrow" className="collapse" src="img/arrow-collapse-right.svg" />
      </button>
    </nav>
  );
}
