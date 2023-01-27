import React from 'react';
import { useSelector } from 'react-redux';
import { PageInfo, addRowCount } from '../../redux/pageInfo';
import { ReducerType } from '../../redux/rootReducer';
import { rowPerPage } from '../../util/constantData';
import { useDropdown, ActionFunctionType } from '../../hooks/useDropdown';

export default function RowPerPageDropdown() {
  const pageInfo = useSelector<ReducerType, PageInfo>((state) => state.pageInfo);
  const { showDropdown, toggleDropDown, clickItemHandler, moveSelectItemHandler } = useDropdown(
    rowPerPage,
    addRowCount as ActionFunctionType
  );
  return (
    <div className="row_per_page_dropdown_container" role="button" tabIndex={0} onKeyDown={moveSelectItemHandler}>
      <div className="row_per_page_select_box">
        <div className="selected">페이지당 행: {pageInfo.rowCount}</div>
        <button type="button" className="drop_down_button" onClick={toggleDropDown}>
          {showDropdown ? (
            <img alt="arrow" src="img/row-per-page-up.svg" />
          ) : (
            <img alt="arrow" src="img/row-per-page-down.svg" />
          )}
        </button>
      </div>
      {showDropdown && (
        <div className="drop_down_box">
          {rowPerPage.map((rows, index) =>
            rows === pageInfo.rowCount ? (
              <li key={rows} className="select">
                <button type="button" onClick={() => clickItemHandler(index)}>
                  {rows}
                </button>
              </li>
            ) : (
              <li key={rows}>
                <button type="button" onClick={() => clickItemHandler(index)}>
                  {rows}
                </button>
              </li>
            )
          )}
        </div>
      )}
    </div>
  );
}
