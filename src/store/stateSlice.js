import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        addValue: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { addValue } = stateSlice.actions;
export default stateSlice.reducer;
