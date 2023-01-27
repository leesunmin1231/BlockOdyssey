import { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import countNextIndex from '../util/countNextIndex';

export type ActionFunctionType = (selected: string | number) => AnyAction;
type DropDownListType = string[] | number[];

export const useDropdown = (dropdownList: DropDownListType, addAction: ActionFunctionType) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const clickItemHandler = (index: number) => {
    setSelectedItemIndex(index);
    dispatch(addAction(dropdownList[index]));
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
    dispatch(addAction(dropdownList[nextIndex]));
  };
  return { showDropdown, toggleDropDown, clickItemHandler, moveSelectItemHandler };
};
