
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Star, CaretRightFill} from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmDetail } from '../redux/actions/DetailFilmAction'; 




function DetailFilm() {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const film = useSelector((state) => state.Detail.film);

      useEffect(() => {
        dispatch(fetchFilmDetail(token,id));
      }, [token,id,dispatch]);


 return ( 
          <> 
         {film ? (
        <div className="container Home mx-auto mt-4 ">
        {/* <!-- Carousel --> */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
             {/* <!-- navbar --> */}
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                <Link to={`/`} className='link'><a className="navbar-brand" href="#carousel"><h1>Movielist</h1></a></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="mynavbar">
                      <input className="form-control mx-auto my-custom-input" 
                      type="text"
                      placeholder="What do you want to watch?"/>  
                      <form className="btn-all d-flex">
                      <button className="btn-register btn btn-danger me-2" type="button">Login</button>
                      <button className="btn-register btn btn-danger" type="button">Register</button>
                    </form>
                  </div>
                </div>
              </nav>

                    {/* teks */}
                <div className="container">
                  <div className=" Doctor row pt-4 ">
                    <div className="colom-1 col-md-6 col-sm-12 mt-4">
                      <h1>{film.title} <br/></h1>
                      <h5>{film.title}, {film.original_title}</h5>
                      <span>{film.overview}</span>
                      <div className="d-flex align-items-center pt-2 pb-2">
                      <Star size={16} color='yellow' />
                      <span className="ms-2">{film.popularity}</span>
                    </div>
                    </div>
                    <form className="d-flex">
                      <button className="btn-trailer btn btn-danger me-2" type="button"><CaretRightFill size={20}/>WATCH TRAILER</button>
                    </form>
                  </div>
                </div>

                {/* <!-- Indicators/dots --> */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>


                {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner pb-3 pt-3 "> 
                <div className="carousel-item active">
                <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="doctor-strange" className="d-block w-100" height="600px"/>
                </div>
                <div className="carousel-item">
                <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="doctor-strange" className="d-block w-100" height="500px" />
                </div>
                <div className="carousel-item">
                <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="doctor-strange" className="d-block w-100" height="500px"/>

                  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>  
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                          <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
            </div> 
        </div>
    </div>
    
              ) : (
                <p>Loading...</p>
              )}
            </>
          );
}

export default DetailFilm;
