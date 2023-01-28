const getRangeList = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys()).map((x) => String(x + start));

const getFrontButtons = (currentPage: number) => {
  if (currentPage - 1 < 4) {
    return getRangeList(1, 5);
  }
  return ['1', '...'];
};

const getEndButtons = (currentPage: number, totalPages: number) => {
  if (totalPages - currentPage >= 4) {
    return ['...', `${totalPages}`];
  }
  return getRangeList(totalPages - 4, totalPages);
};

const getMiddleButtons = (currentPage: number, totalPages: number) => {
  if (totalPages - currentPage >= 4 && currentPage - 1 >= 4) {
    return getRangeList(currentPage - 1, currentPage + 1);
  }
  return [];
};

export const getPaginationButtons = (totalPages: number, currentPage: number) => {
  if (totalPages <= 6) return getRangeList(1, totalPages);
  const frontButtons = getFrontButtons(currentPage);
  const middleButtons = getMiddleButtons(currentPage, totalPages);
  const endButtons = getEndButtons(currentPage, totalPages);
  return [...frontButtons, ...middleButtons, ...endButtons];
};
