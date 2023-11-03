import axios from 'axios';
import {setFilm} from '../reducers/DetailFilmReducers'

export const fetchFilmDetail = (token,id) => async (dispatch) => {
    try { 
      const response = await axios.get(
        // `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
        `${import.meta.env.VITE_API_URL}/movie/${id}`,

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
      dispatch(setFilm(data));

     
      
      console.log('Detail Film:', data);
      console.log('Title:', data.title);
      console.log('Backdrop Path:', data.backdrop_path);
      console.log('HomePage', data.homepage);
    } catch (error) {
      console.error('Error fetching film detail:', error);
    }
    
  };