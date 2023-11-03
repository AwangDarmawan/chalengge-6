import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./AuthReducers";
import FilmReducers from "./FilmReducers";
import DetailFilmReducers from "./DetailFilmReducers";

// We will have some reducers here
export default combineReducers({

  auth: authReducers,
  Film: FilmReducers,
  Detail: DetailFilmReducers,
});