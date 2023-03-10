import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/productsList';
import { addStartPage } from '../../redux/pageInfo';
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
    sessionStorage.setItem('page', '1');
    dispatch(addStartPage(1));
  };
  return (
    <div className="search_bar">
      <div className="search_title">๊ฒ์</div>
      <CategoryDropdown />
      <input type="text" onChange={onChangeHandler} value={searchWord} onKeyDown={onKeyDownHandler} />
      <button type="submit" className="submit" onClick={submitHandler}>
        ์กฐํ
      </button>
    </div>
  );
}
