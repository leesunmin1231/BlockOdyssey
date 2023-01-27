import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import CategoryDropdown from './CategoryDropdown';

const getCurrentSearchWord = (): string => {
  const searchWord = sessionStorage.getItem('searchWord');
  if (searchWord !== null) {
    return searchWord;
  }
  return '';
};

export default function SearchBar() {
  const [searchWord, setSearchWord] = useState(getCurrentSearchWord());
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(e.target.value);
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { key } = e;
    if (key === 'Enter') {
      submitHandler();
    }
  };
  const submitHandler = () => {
    sessionStorage.setItem('searchWord', searchWord);
  };
  return (
    <div className="search_bar">
      <div className="search_title">검색</div>
      <CategoryDropdown />
      <input type="text" onChange={onChangeHandler} value={searchWord} onKeyDown={onKeyDownHandler} />
      <button type="submit" className="submit" onClick={submitHandler}>
        조회
      </button>
    </div>
  );
}
