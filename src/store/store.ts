import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userCardListSlice from './userCardList/userCardListSlice';
import searchSlice from './search/searchSlice';
import { productsApi } from './api/productsApi';

const rootReducer = combineReducers({
  userCardList: userCardListSlice,
  search: searchSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
