import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cardReducer from '../features/card/cardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
  },
});
