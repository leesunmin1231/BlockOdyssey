import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentRowPerPage, getCurrentPage } from '../util/getSessionStorage';

export interface PageInfo {
  rowCount: number;
  startPage: number;
}

export const pageInfo = createSlice({
  name: 'pageInfo',
  initialState: { rowCount: getCurrentRowPerPage(), startPage: getCurrentPage() },
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
