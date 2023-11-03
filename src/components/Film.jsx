
import { useNavigate } from 'react-router-dom';
import DoctorS from '../img/drs.png'
import { Link } from 'react-router-dom';
import { ArrowRightShort,CaretRightFill} from "react-bootstrap-icons";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,getUserData,getFilm} from '../redux/actions/FilmActions'; 
import { setUserData ,setTextSearching, setRefreshing } from '../redux/reducers/FilmReducers';


function Film() {
  const dispatch = useDispatch();
  const filmList = useSelector((state) => state.Film.filmList);
  const text = useSelector((state) => state.Film.text);
  const userData = useSelector((state) => state.Film.userData); 
  const refreshing = useSelector((state) => state.Film.refreshing);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
        dispatch(getUserData(token));
  if (!text || refreshing) {
        dispatch(getFilm(token));
      } else {
        dispatch(fetchData(token, text));
      }
      dispatch(setRefreshing(false));
    }
  }, [text, refreshing, token]);

  const handleLogout = () => {
    dispatch(setUserData(null)); 
    localStorage.removeItem('token'); 
    navigate('/'); 
  };
  

  return (
    <>
    <section  id="carousel">
        <div className="container Home mx-auto mt-4 ">
        {/* <!-- Carousel --> */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
             {/* <!-- navbar --> */}
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#carousel"><h1>Movielist </h1></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="mynavbar">
                     <input className="form-control mx-auto my-custom-input" 
                      type="text"
                      placeholder="What do you want to watch?"   
                      onChange={(e) => dispatch(setTextSearching(e.target.value))}
                   
                       />
                      <form className="btn-all d-flex">
                      <button className="btn-register btn btn-danger me-2" type="button"onClick={()=> navigate('/login')} >Login</button>
                      <button className="btn-register btn btn-danger me-2" type="button" onClick={()=> navigate('/register')} >Register</button>  
                      <button className="btn-register btn btn-danger" type="button" onClick={() => { dispatch(setRefreshing(true)); handleLogout(); }}> Log Out</button>
                    </form>
                  </div>
                </div>
              </nav>

              {/* <!-- teks --> */}
                <div className="container">
                  <div className=" Doctor row pt-4 ">
                    <div className="colom-1 col-md-6 col-sm-12 mt-4">
                      <h1>Doctor Strange in the Multiverse of <br/> Madness </h1>
                      <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do euismod tempor incididunt ut labore et dolore magna aliqua</p>
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
                <img src={DoctorS} alt="doctor-strange" className="d-block w-100" height="500px"/>
                </div>
                <div className="carousel-item">
                <img src={DoctorS} alt="doctor-strange" className="d-block w-100" height="500px" />
                </div>
                <div className="carousel-item">
                <img src={DoctorS} alt="doctor-strange" className="d-block w-100" height="500px"/>
                </div>
            </div>
            {/* <!-- Left and right controls/icons --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            </div>
        </div>
    </section>

    <div className='container mx-auto mt-4 pb-3 pt-3'>
      <div className='all-film '>
       <div className='tittle d-flex'>
      <h2 className='h'>Popular Movie</h2>
      <h5 className='span ml-auto'>See All Movie<ArrowRightShort size={40} color='red' /></h5>
      </div>
      <div>

        {/* user */}
      {userData && userData.data?  (
         <h5 className='logind'>Welcome {userData.data.name}</h5>
      ) : (
        <p className='user'>User Belum Ada</p>
      )}
     
      
    </div>
        <div className='listfilm'>
                  {token ? (
                    filmList.length > 0 ? (
                      filmList.map((film) => (
                        <Link to={`/movie/${film.id}`} onClick={() => dispatch(setRefreshing(true))} key={film.id}>
                          <img className='img'
                            src={ `${import.meta.env.VITE_APP_BASEIMGURL_TMDB}${film.poster_path}`
                              // `https://image.tmdb.org/t/p/w500${film.poster_path}`
                            }
                            alt={film.title}
                          />
                        </Link>
                      ))
                    ) : (
                      <h5 className='logind'>Loading film data...</h5>
                    )
                  ) : (
                    <h5 className='logind'>Data Tidak Ada</h5>
                  )}
              </div>
          </div>
     </div>
  </>
  )
}

export default Film


 