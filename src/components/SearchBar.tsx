import React from 'react';

export default function SearchBar() {
  return (
    <div className="search_bar">
      <div className="search_title">검색</div>
      <div className="product_type_dropdown">
        <div className="selected">전체</div>
        <button type="button" className="drop_down_button">
          <img alt="arrow" src="img/down.svg" />
        </button>
      </div>
      <input type="text" />
      <button type="submit" className="submit">
        조회
      </button>
    </div>
  );
}
