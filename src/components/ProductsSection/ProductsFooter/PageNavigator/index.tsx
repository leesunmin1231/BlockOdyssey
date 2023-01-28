import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsData } from '../../../../redux/productsList';
import { PageInfo, addStartPage } from '../../../../redux/pageInfo';
import { ReducerType } from '../../../../redux/rootReducer';
import ArrowButton from './ArrowButton';
import { getCurrentPage } from '../../../../util/getSessionStorage';
import { getListKey } from '../../../../util/getListKey';
import { getPaginationButtons } from '../../../../util/getPaginationButtons';

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
      <ArrowButton
        clickHandler={() => pageNavigationHandler(1)}
        imgSrc="img/arrow-collapse-left.svg"
        imgClassName="collapse"
        disableTriggerPage={1}
      />
      <ArrowButton
        clickHandler={() => pageNavigationHandler(getCurrentPage() - 1)}
        imgSrc="img/chevron-left.svg"
        imgClassName="chevron"
        disableTriggerPage={1}
      />
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
      <ArrowButton
        clickHandler={() => pageNavigationHandler(getCurrentPage() + 1)}
        imgSrc="img/chevron-right.svg"
        imgClassName="chevron"
        disableTriggerPage={totalPages}
      />
      <ArrowButton
        clickHandler={() => pageNavigationHandler(totalPages)}
        imgSrc="img/arrow-collapse-right.svg"
        imgClassName="collapse"
        disableTriggerPage={totalPages}
      />
    </nav>
  );
}
