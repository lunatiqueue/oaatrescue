import { createSlice, configureStore } from '@reduxjs/toolkit';

export const animalsSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
      },
    });
    
export const { incremented, decremented } = animalsSlice.actions;

export const counterReducer = animalsSlice.reducer;



