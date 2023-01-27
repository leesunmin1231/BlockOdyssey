import React from 'react';
import { useDispatch } from 'react-redux';
import { addStartPage } from '../../../../redux/pageInfo';
import { getCurrentPage } from '../../../../util/getSessionStorage';

export default function LeftNavigatior() {
  const dispatch = useDispatch();
  const goToFrontHandler = () => {
    sessionStorage.setItem('page', '1');
    dispatch(addStartPage(1));
  };
  const goToPrevHandler = () => {
    dispatch(addStartPage(getCurrentPage() - 1));
    sessionStorage.setItem('page', String(getCurrentPage() - 1));
  };
  return (
    <div>
      <button type="button" className="page_button" disabled={getCurrentPage() === 1} onClick={goToFrontHandler}>
        <img alt="arrow" className="collapse" src="img/arrow-collapse-left.svg" />
      </button>
      <button type="button" className="page_button" disabled={getCurrentPage() === 1} onClick={goToPrevHandler}>
        <img alt="arrow" src="img/chevron-left.svg" />
      </button>
    </div>
  );
}
