import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./animalsSlice.js";

export const store = configureStore({
    reducer: {  
        counter: counterReducer
    }
})
