import { useState, KeyboardEvent } from 'react';
import countNextIndex from '../util/countNextIndex';

export const useDropdown = (dropdownList: any[]) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const clickItemHandler = (index: number) => {
    setSelectedItemIndex(index);
    setShowDropdown(false);
  };
  const moveSelectItemHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!showDropdown) return;
    const { key } = e;
    switch (key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedItemIndex(countNextIndex(selectedItemIndex + 1, dropdownList.length));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedItemIndex(countNextIndex(selectedItemIndex - 1, dropdownList.length));
        break;
      default:
        break;
    }
  };
  return { showDropdown, selectedItemIndex, toggleDropDown, clickItemHandler, moveSelectItemHandler };
};
