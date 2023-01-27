import { useState, KeyboardEvent, useEffect } from 'react';
import countNextIndex from '../util/countNextIndex';

type DropDownListType = string[] | number[];

export const useDropdown = (dropdownList: DropDownListType, listName: string) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem(`${listName}`)) {
      sessionStorage.setItem(`${listName}`, String(dropdownList[0]));
    }
  }, []);
  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const clickItemHandler = (index: number) => {
    setSelectedItemIndex(index);
    sessionStorage.setItem(`${listName}`, String(dropdownList[index]));
    setShowDropdown(false);
  };
  const moveSelectItemHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!showDropdown) return;
    const { key } = e;
    let nextIndex = selectedItemIndex;
    switch (key) {
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = countNextIndex(selectedItemIndex + 1, dropdownList.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = countNextIndex(selectedItemIndex - 1, dropdownList.length);
        break;
      default:
        break;
    }
    setSelectedItemIndex(nextIndex);
    sessionStorage.setItem(`${listName}`, String(dropdownList[nextIndex]));
  };
  return { showDropdown, toggleDropDown, clickItemHandler, moveSelectItemHandler };
};
