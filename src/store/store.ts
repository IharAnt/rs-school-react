import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userCardListSlice from './userCardList/userCardListSlice';

const rootReducer = combineReducers({
  userCardList: userCardListSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
