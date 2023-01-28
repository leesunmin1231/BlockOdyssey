import React, { KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addRowCount } from '../../../redux/pageInfo';
import { rowPerPage } from '../../../util/constantData';
import { useDropdown } from '../../../hooks/useDropdown';
import { getCurrentRowPerPage } from '../../../util/getSessionStorage';

export default function RowPerPageDropdown() {
  const dispatch = useDispatch();
  const { showDropdown, toggleDropDown, clickItemHandler, moveSelectItemHandler } = useDropdown(
    rowPerPage,
    'rowPerPage'
  );
  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    moveSelectItemHandler(e);
    if (e.key === 'Enter') {
      dispatch(addRowCount(getCurrentRowPerPage()));
    }
  };
  const submitRowPerPage = (index: number) => {
    clickItemHandler(index);
    dispatch(addRowCount(getCurrentRowPerPage()));
  };
  return (
    <div className="row_per_page_dropdown_container" role="button" tabIndex={0} onKeyDown={keyDownHandler}>
      <div className="row_per_page_select_box">
        <div className="selected">페이지당 행: {getCurrentRowPerPage()}</div>
        <button type="button" className="drop_down_button" onClick={toggleDropDown}>
          <img alt="arrow" src={showDropdown ? 'img/row-per-page-up.svg' : 'img/row-per-page-down.svg'} />
        </button>
      </div>
      {showDropdown && (
        <div className="row_per_page_dropdown">
          <div className="drop_down_box">
            {rowPerPage.map((rows, index) => (
              <li key={rows} className={rows === getCurrentRowPerPage() ? 'select' : 'non_select'}>
                <button type="button" onClick={() => submitRowPerPage(index)}>
                  {rows}
                </button>
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
