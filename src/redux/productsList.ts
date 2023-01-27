import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../types/Product';

export interface ProductsData {
  searchCategory: string;
  searchWord: string;
  products: ProductType[];
  total: number;
}

export const productsList = createSlice({
  name: 'productsList',
  initialState: { searchCategory: '전체', searchWord: '', products: [] as ProductType[], total: 0 },
  reducers: {
    addProductsList(state, action: PayloadAction<ProductType[]>) {
      return { ...state, products: action.payload, total: action.payload.length };
    },
    addSearchCategory(state, action: PayloadAction<string>) {
      return { ...state, searchCategory: action.payload };
    },
    addSearchWord(state, action: PayloadAction<string>) {
      return { ...state, searchWord: action.payload };
    },
  },
});

export const { addProductsList, addSearchWord, addSearchCategory } = productsList.actions;
export default productsList.reducer;
