import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';

export const store = configureStore({
    // here we register a reducer with the state
    // state: reducerFunction
    reducer: {
        products: productReducer
    }
})