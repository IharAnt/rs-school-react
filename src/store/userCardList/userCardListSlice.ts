import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUserCardListState } from '../../types/interfaces/IUserCardListState';
import { IUserCard } from '../../types/interfaces/IUserCard';

const initialState: IUserCardListState = {
  userCards: [],
};

export const userCardListSlice = createSlice({
  name: 'userCardList',
  initialState,
  reducers: {
    addUserCard: (state, action: PayloadAction<IUserCard>) => {
      state.userCards.push(action.payload);
    },
  },
});

export const { addUserCard } = userCardListSlice.actions;
export default userCardListSlice.reducer;
