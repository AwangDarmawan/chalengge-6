import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  film: null,
};

const DetailSlice = createSlice({
  name: 'Detail',
  initialState,
  reducers: {
    setFilm: (state, action) => {
      state.film = action.payload;
      console.log("detailFilm:", action.payload);
    },
  },
});

export const {setFilm} = DetailSlice.actions;

export default DetailSlice.reducer;
