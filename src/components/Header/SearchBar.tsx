import React from 'react';
import CategoryDropdown from './CategoryDropdown';

export default function SearchBar() {
  return (
    <div className="search_bar">
      <div className="search_title">검색</div>
      <CategoryDropdown />
      <input type="text" />
      <button type="submit" className="submit">
        조회
      </button>
    </div>
  );
}
