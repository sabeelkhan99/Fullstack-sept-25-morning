import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/*
    createAsyncThunk returns an async thunk action creator.
    Dispatching it triggers pending, fulfilled, and rejected actions, 
    and dispatch(thunk) returns a Promise.    
*/

export const fetchProductById = createAsyncThunk('products/fetchProductById',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json();
        return data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoading: false,
        error: null
    },
    // We can only write sync pure functions
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
});

export default productsSlice.reducer;