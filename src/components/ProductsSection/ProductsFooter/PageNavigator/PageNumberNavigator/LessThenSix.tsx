import React from 'react';
import { useDispatch } from 'react-redux';
import { addStartPage } from '../../../../../redux/pageInfo';
import { getCurrentPage } from '../../../../../util/getSessionStorage';

export default function LessThenSix({ pageNumbers }: { pageNumbers: number[] }) {
  const dispatch = useDispatch();
  const handlePageNavigation = (page: number) => {
    sessionStorage.setItem('page', String(page));
    dispatch(addStartPage(page));
  };
  return (
    <div className="page_number_list">
      {pageNumbers.map((x) => (
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
