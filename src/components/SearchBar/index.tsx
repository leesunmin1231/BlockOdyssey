import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/productsList';
import CategoryDropdown from './CategoryDropdown';
import { getCurrentSearchOption, getCurrentSearchWord } from '../../util/getSessionStorage';

export default function SearchBar() {
  const dispatch = useDispatch();
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
  const submitHandler = (): void => {
    sessionStorage.setItem('searchWord', searchWord);
    dispatch(addFilter({ option: getCurrentSearchOption(), word: getCurrentSearchWord() }));
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
