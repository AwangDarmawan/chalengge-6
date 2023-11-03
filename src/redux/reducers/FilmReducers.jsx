
import { createSlice } from '@reduxjs/toolkit';

const FilmSlice = createSlice({
  name: 'Film',
  initialState: {
    filmList: [],
    userData: null,
    text: '',
    refreshing: false,
  },
  reducers: {
    setFilmList: (state, action) => {
      state.filmList = action.payload;
      console.log("filmList Reducer:", action.payload); 
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      console.log("setUserData Reducer:", action.payload); 
    },
    setTextSearching: (state, action) => {
      state.text = action.payload;
      console.log("setTextSearching:", action.payload); 
    },
    setRefreshing: (state, action) => {
      state.refreshing = action.payload;
      console.log("setRefresing:", action.payload); 
    },
  },
});

export const { setFilmList, setTextSearching, setRefreshing, setUserData} = FilmSlice.actions;
export default FilmSlice.reducer;
