import React from 'react';
import { useDispatch } from 'react-redux';
import { addStartPage } from '../../../../redux/pageInfo';
import { getCurrentPage } from '../../../../util/getSessionStorage';

export default function RightNavigator({ totalLength }: { totalLength: number }) {
  const dispatch = useDispatch();
  const goToEndHandler = () => {
    sessionStorage.setItem('page', `${totalLength}`);
    dispatch(addStartPage(totalLength));
  };
  const goToNextHandler = () => {
    dispatch(addStartPage(getCurrentPage() + 1));
    sessionStorage.setItem('page', String(getCurrentPage() + 1));
  };
  return (
    <div>
      <button
        type="button"
        className="page_button"
        disabled={getCurrentPage() === totalLength}
        onClick={goToNextHandler}
      >
        <img alt="arrow" src="img/chevron-right.svg" />
      </button>
      <button
        type="button"
        className="page_button"
        disabled={getCurrentPage() === totalLength}
        onClick={goToEndHandler}
      >
        <img alt="arrow" className="collapse" src="img/arrow-collapse-right.svg" />
      </button>
    </div>
  );
}
