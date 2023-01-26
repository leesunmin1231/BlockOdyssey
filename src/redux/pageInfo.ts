import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PageInfo {
  rowCount: number;
  startPage: number;
}

export const pageInfo = createSlice({
  name: 'pageInfo',
  initialState: { rowCount: 10, startPage: 1 },
  reducers: {
    addPageInfo(state, action: PayloadAction<PageInfo>) {
      return { ...action.payload };
    },
  },
});

export const { addPageInfo } = pageInfo.actions;
export default pageInfo.reducer;
