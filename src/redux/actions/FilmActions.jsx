
import axios from 'axios';
import { setFilmList,  setTextSearching, setRefreshing, setUserData} from '../reducers/FilmReducers';

export const getUserData = (token) => async (dispatch)=> {
  try {
    if (token) {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const userData = response.data; 
      dispatch(setUserData(userData));
    } else {
      return null; 
    }
  } catch (error) {
    throw error;
  }
};

export const getFilm = (token) => async (dispatch) => {
  try {
    if (token) {
      const response = await axios.get(
      
        `${import.meta.env.VITE_API_URL}/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const data = response.data.data;
      dispatch(setFilmList(data));
    } 
    
  } catch (error) {
    console.error('Error fetching data Home:', error);
  }
};


  export const fetchData = (token, text,refreshing) => async (dispatch) => {
    try {
      if (token) {
        const userData = await (token);
        if (userData) {
          console.log('User Data:', userData);
          dispatch(setUserData(userData));
        }
      }
  
      if (text !== '') {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/search/movie?page=1&query=${text}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
        const data = response.data.data;
        dispatch(setFilmList(data));
  
        console.log(text ? 'Search Results Home' : 'Film List:', data);
        console.log('Search Text:', text);
        console.log('Token:', token);
  
        dispatch(setRefreshing(false));
      } else if (refreshing) {
        dispatch(getFilm());
        dispatch(setTextSearching(''));
      } else {
        dispatch(getFilm());
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  


