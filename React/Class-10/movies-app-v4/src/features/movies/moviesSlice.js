import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies',
    async (pageNo) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E2MDBiMTIxNWIwMmRkYjk2YjdjMzE2NzFjNTNhZSIsIm5iZiI6MTc2NzcyMTEzMC45NCwic3ViIjoiNjk1ZDQ4YWE3MmQwMzAxZjhkNjRjMWVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RPN6Z0N8sqOi3Pu06JJUas6Ta74k5wXbmKoUaHhjgdw'
            }
        });

        return response.data;
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: null,
        error: null,
        isLoading: false,
        pageNo: 1
    },
    reducers: {
        changeToNextPage: (state, action) => {
            state.pageNo = state.pageNo + 1;
        },
        changeToPrevPage: (state, action) => {
            if (state.pageNo <= 1) {
                return;
            }
            state.pageNo = state.pageNo - 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
});

/*
actions: {
    changeToNextPage: ()=> {type: 'movies/changeToNextPage'},
    changeToPrevPage: ()=> {type:'movies/changeToPrevPage'}
}
*/

export const { changeToNextPage, changeToPrevPage } = moviesSlice.actions;
export default moviesSlice.reducer;