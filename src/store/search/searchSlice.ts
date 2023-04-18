import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISearchState } from '../../types/state/ISearchState';

const initialState: ISearchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSerachValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSerachValue } = searchSlice.actions;
export default searchSlice.reducer;
