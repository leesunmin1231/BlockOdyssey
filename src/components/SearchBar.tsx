import React, { useState, KeyboardEvent } from 'react';
import { category } from '../util/constantData';

export default function SearchBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSortType, setSelectedSortType] = useState(0);
  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const clickTypeHandler = (index: number) => {
    setSelectedSortType(index);
    setShowDropdown(false);
  };
  const moveSelectType = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!showDropdown) return;
    const { key } = e;
    switch (key) {
      case 'ArrowDown':
        setSelectedSortType((selectedSortType + 1) % category.length);
        break;
      case 'ArrowUp':
        setSelectedSortType((selectedSortType - 1) % category.length);
        break;
      default:
        break;
    }
  };
  return (
    <div className="search_bar">
      <div className="search_title">검색</div>
      <div className="dropdown_container" role="button" tabIndex={0} onKeyDown={moveSelectType}>
        <div className="select_sort_type">
          <div className="selected">{category[selectedSortType].title}</div>
          <button type="button" className="drop_down_button" onClick={toggleDropDown}>
            {showDropdown ? <img alt="arrow" src="img/up.svg" /> : <img alt="arrow" src="img/down.svg" />}
          </button>
        </div>
        {showDropdown && (
          <div className="drop_down_box">
            {category.map((type, index) =>
              index === selectedSortType ? (
                <li key={type.className} className="select">
                  <button type="button" onClick={() => clickTypeHandler(index)}>
                    {type.title}
                  </button>
                </li>
              ) : (
                <li key={type.className}>
                  <button type="button" onClick={() => clickTypeHandler(index)}>
                    {type.title}
                  </button>
                </li>
              )
            )}
          </div>
        )}
      </div>
      <input type="text" />
      <button type="submit" className="submit">
        조회
      </button>
    </div>
  );
}
