import React from 'react';
import { category } from '../../util/constantData';
import { useDropdown } from '../../hooks/useDropdown';

export default function CategoryDropdown() {
  const { showDropdown, selectedItemIndex, toggleDropDown, clickItemHandler, moveSelectItemHandler } =
    useDropdown(category);
  return (
    <div className="category_dropdown_container" role="button" tabIndex={0} onKeyDown={moveSelectItemHandler}>
      <div className="category_select_box">
        <div className="selected">{category[selectedItemIndex].title}</div>
        <button type="button" className="drop_down_button" onClick={toggleDropDown}>
          {showDropdown ? (
            <img alt="arrow" src="img/category-up.svg" />
          ) : (
            <img alt="arrow" src="img/category-down.svg" />
          )}
        </button>
      </div>
      {showDropdown && (
        <div className="drop_down_box">
          {category.map((type, index) =>
            index === selectedItemIndex ? (
              <li key={type.className} className="select">
                <button type="button" onClick={() => clickItemHandler(index)}>
                  {type.title}
                </button>
              </li>
            ) : (
              <li key={type.className}>
                <button type="button" onClick={() => clickItemHandler(index)}>
                  {type.title}
                </button>
              </li>
            )
          )}
        </div>
      )}
    </div>
  );
}
