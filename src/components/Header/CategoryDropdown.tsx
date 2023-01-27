import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsData, addSearchCategory } from '../../redux/productsList';
import { ReducerType } from '../../redux/rootReducer';
import { searchOption } from '../../util/constantData';
import { useDropdown, ActionFunctionType } from '../../hooks/useDropdown';

export default function CategoryDropdown() {
  const productsData = useSelector<ReducerType, ProductsData>((state) => state.productsList);
  const { showDropdown, toggleDropDown, clickItemHandler, moveSelectItemHandler } = useDropdown(
    searchOption,
    addSearchCategory as ActionFunctionType
  );

  return (
    <div className="category_dropdown_container" role="button" tabIndex={0} onKeyDown={moveSelectItemHandler}>
      <div className="category_select_box">
        <div className="selected">{productsData.searchCategory}</div>
        <button type="button" className="drop_down_button" onClick={toggleDropDown}>
          {showDropdown ? (
            <img alt="arrow" src="img/search-option-up.svg" />
          ) : (
            <img alt="arrow" src="img/search-option-down.svg" />
          )}
        </button>
      </div>
      {showDropdown && (
        <div className="drop_down_box">
          {searchOption.map((type, index) =>
            type === productsData.searchCategory ? (
              <li key={type} className="select">
                <button type="button" onClick={() => clickItemHandler(index)}>
                  {type}
                </button>
              </li>
            ) : (
              <li key={type}>
                <button type="button" onClick={() => clickItemHandler(index)}>
                  {type}
                </button>
              </li>
            )
          )}
        </div>
      )}
    </div>
  );
}
