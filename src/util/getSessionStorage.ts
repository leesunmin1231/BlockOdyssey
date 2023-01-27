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
  return '전체';
};

export const getCurrentRowPerPage = (): number => {
  const rowPerPage = sessionStorage.getItem('rowPerPage');
  if (rowPerPage !== null) {
    return Number(rowPerPage);
  }
  return 10;
};

export const getCurrentPage = (): number => {
  const page = sessionStorage.getItem('page');
  if (page !== null) {
    return Number(page);
  }
  return 1;
};
