import  { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    
}

const movieSlice = createSlice({ 
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
     
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;

