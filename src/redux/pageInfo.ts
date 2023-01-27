import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentRowPerPage } from '../util/getSessionStorage';

export interface PageInfo {
  rowCount: number;
  startPage: number;
}

export const pageInfo = createSlice({
  name: 'pageInfo',
  initialState: { rowCount: getCurrentRowPerPage(), startPage: 1 },
  reducers: {
    addRowCount(state, action: PayloadAction<number>) {
      return { ...state, rowCount: action.payload };
    },
    addStartPage(state, action: PayloadAction<number>) {
      return { ...state, startPage: action.payload };
    },
  },
});

export const { addRowCount, addStartPage } = pageInfo.actions;
export default pageInfo.reducer;
