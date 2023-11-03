import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import GoogleLogin from "../components/GoogleLogin";
import { Instagram ,Facebook, Twitter, Google} from "react-bootstrap-icons";
import { useDispatch} from "react-redux";
import { login } from "../redux/actions/AuthActions";




function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };

    return (
      
      <div className="container" style={{ marginTop: "120px" }}>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-bold"> LOGIN</h4>
                            {/* <p>{message}ttt</p> */}
                            <hr/>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3 pt-3">
                                    <input type="email" 
                                    className="form-control" 
                                    value={email} 
                                    onChange={(e) =>
                                    setEmail(e.target.value)} 
                                    placeholder="Email"/>
                                </div>
                                
                                <div className="mb-3 pt-3">
                                    <input type="password" 
                                    className="form-control" 
                                    value={password} 
                                    onChange={(e) => 
                                    setPassword(e.target.value)} 
                                    placeholder=" Password"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary loginbtn">LOGIN</button>
                                </div>
                                <div className='Google d-flex justify-content-center text-align-center mt-3'>
                                <GoogleLogin buttonText="Login with Google 🚀"> <Google size={30}/>
                                </GoogleLogin>
                                </div>
                          <div className="sosmed d-flex justify-content-center text-align-center mt-3 ">
                            <p className="px-3 pe-5">
                              <Instagram className='inst'size={30}/></p>
                            <div className="px-3 pe-5 primary">
                            <Twitter className='G2' size={30}/>
                            
                            </div>
                            <p className="px-3 pe-5">
                              <Facebook  className='fb'size={30}/></p>
                          </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
  

    )

}

export default Login;
