export const getPageNumbers = (totalProducts: number, rowPerPage: number) => {
  const totalPages = Math.ceil(totalProducts / rowPerPage);
  return Array.from(Array(totalPages).keys());
};
