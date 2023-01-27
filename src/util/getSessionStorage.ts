export const getCurrentSearchWord = (): string => {
  const searchWord = sessionStorage.getItem('searchWord');
  if (searchWord !== null) {
    return searchWord;
  }
  return '';
};

export const getCurrentSearchOption = (): string => {
  const searchWord = sessionStorage.getItem('searchOption');
  if (searchWord !== null) {
    return searchWord;
  }
  return '';
};

export const getCurrentRowPerPage = (): number => {
  const rowPerPage = sessionStorage.getItem('rowPerPage');
  if (rowPerPage !== null) {
    return Number(rowPerPage);
  }
  return 10;
};
