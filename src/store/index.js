import { configureStore } from '@reduxjs/toolkit';
import stateSlice from './stateSlice';

const store = configureStore({
  reducer: {
    state: stateSlice,
  },
});

export default store;
