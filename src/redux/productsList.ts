import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../types/Product';

export interface ProductsData {
  products: ProductType[];
  total: number;
}

export const productsList = createSlice({
  name: 'productsList',
  initialState: { products: [] as ProductType[], total: 0 },
  reducers: {
    addProductsList(state, action: PayloadAction<ProductType[]>) {
      return { ...state, products: action.payload, total: action.payload.length };
    },
  },
});

export const { addProductsList } = productsList.actions;
export default productsList.reducer;
