import React from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentPage } from '../../../../../util/getSessionStorage';
import { addStartPage } from '../../../../../redux/pageInfo';

export default function EllipsisLeft({ pageNumbers }: { pageNumbers: number[] }) {
  const dispatch = useDispatch();
  const handlePageNavigation = (page: number) => {
    sessionStorage.setItem('page', String(page));
    dispatch(addStartPage(page));
  };
  const totalPage = pageNumbers.length;
  return (
    <div className="page_number_list">
      <button type="button" className="page_button" onClick={() => handlePageNavigation(1)}>
        1
      </button>
      <span className="ellipsis">...</span>
      {pageNumbers.slice(totalPage - 5, totalPage).map((x) => (
        <button
          key={x}
          type="button"
          onClick={() => handlePageNavigation(x + 1)}
          className={x + 1 === getCurrentPage() ? 'page_button_selected' : 'page_button'}
        >
          {x + 1}
        </button>
      ))}
    </div>
  );
}
