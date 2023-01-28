import React from 'react';
import { searchOption } from '../../util/constantData';
import { useDropdown } from '../../hooks/useDropdown';
import { getCurrentSearchOption } from '../../util/getSessionStorage';

export default function CategoryDropdown() {
  const { showDropdown, toggleDropDown, clickItemHandler, moveSelectItemHandler } = useDropdown(
    searchOption,
    'searchOption'
  );

  return (
    <div className="category_dropdown_container" role="button" tabIndex={0} onKeyDown={moveSelectItemHandler}>
      <div className="category_select_box">
        <div className="selected">{getCurrentSearchOption()}</div>
        <button type="button" className="drop_down_button" onClick={toggleDropDown}>
          <img alt="arrow" src={showDropdown ? 'img/search-option-up.svg' : 'img/search-option-down.svg'} />
        </button>
      </div>
      {showDropdown && (
        <div className="drop_down_box">
          {searchOption.map((type, index) => (
            <li key={type} className={type === getCurrentSearchOption() ? 'select' : 'non_select'}>
              <button type="button" onClick={() => clickItemHandler(index)}>
                {type}
              </button>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
