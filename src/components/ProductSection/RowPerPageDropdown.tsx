import React from 'react';
import { rowPerPage } from '../../util/constantData';
import { useDropdown } from '../../hooks/useDropdown';

export default function RowPerPageDropdown() {
  const { showDropdown, selectedItemIndex, toggleDropDown, clickItemHandler, moveSelectItemHandler } =
    useDropdown(rowPerPage);
  return (
    <div className="row_per_page_dropdown_container" role="button" tabIndex={0} onKeyDown={moveSelectItemHandler}>
      <div className="row_per_page_select_box">
        <div className="selected">페이지당 행: {rowPerPage[selectedItemIndex]}</div>
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
            index === selectedItemIndex ? (
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
