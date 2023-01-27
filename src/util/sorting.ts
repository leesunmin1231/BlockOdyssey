import { ProductType } from '../types/Product';

export const filterList = (category: string, word: string, list: ProductType[]) => {
  const regex = new RegExp(`${word}`, 'gi');
  switch (category) {
    case '상품명':
      return list.filter((item) => item.title.search(regex) !== -1);
    case '브랜드':
      return list.filter((item) => item.brand.search(regex) !== -1);
    case '상품내용':
      return list.filter((item) => item.description.search(regex) !== -1);
    default:
      return list.filter(
        (item) =>
          item.title.search(regex) !== -1 || item.brand.search(regex) !== -1 || item.description.search(regex) !== -1
      );
  }
};
