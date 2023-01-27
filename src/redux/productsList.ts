import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../types/Product';
import { filterList } from '../util/filterProductList';

export interface ProductsData {
  allProducts: ProductType[];
  filteredProducts: ProductType[];
  total: number;
}
export interface SearchFilter {
  option: string;
  word: string;
}

interface InitProductsList {
  option: string;
  word: string;
  allProducts: ProductType[];
}

export const productsList = createSlice({
  name: 'productsList',
  initialState: { allProducts: [] as ProductType[], filteredProducts: [] as ProductType[], total: 0 },
  reducers: {
    addProductsList(state, action: PayloadAction<InitProductsList>) {
      const filterProducts = filterList(action.payload.option, action.payload.word, action.payload.allProducts);
      return {
        allProducts: action.payload.allProducts,
        filteredProducts: filterProducts,
        total: filterProducts.length,
      };
    },
    addFilter(state, action: PayloadAction<SearchFilter>) {
      const filterProducts = filterList(action.payload.option, action.payload.word, state.allProducts);
      return { ...state, filteredProducts: filterProducts, total: filterProducts.length };
    },
  },
});

export const { addProductsList, addFilter } = productsList.actions;
export default productsList.reducer;
