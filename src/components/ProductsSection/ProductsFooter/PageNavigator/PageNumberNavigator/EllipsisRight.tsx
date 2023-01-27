import React from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentPage } from '../../../../../util/getSessionStorage';
import { addStartPage } from '../../../../../redux/pageInfo';

export default function EllipsisRight({ pageNumbers }: { pageNumbers: number[] }) {
  const dispatch = useDispatch();
  const handlePageNavigation = (page: number) => {
    sessionStorage.setItem('page', String(page));
    dispatch(addStartPage(page));
  };
  const totalPage = pageNumbers.length;
  return (
    <div className="page_number_list">
      {pageNumbers.slice(0, 5).map((x) => (
        <button
          key={x}
          type="button"
          onClick={() => handlePageNavigation(x + 1)}
          className={x + 1 === getCurrentPage() ? 'page_button_selected' : 'page_button'}
        >
          {x + 1}
        </button>
      ))}
      <span className="ellipsis">...</span>
      <button
        type="button"
        onClick={() => handlePageNavigation(pageNumbers[totalPage - 1] + 1)}
        className="page_button"
      >
        {pageNumbers[totalPage - 1] + 1}
      </button>
    </div>
  );
}
