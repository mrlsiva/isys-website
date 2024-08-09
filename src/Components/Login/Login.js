import React, { useState } from 'react';
import Logo from '../../assets/img/home3/logo.png';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import constants from '../../constants/Constants'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Login() {
  let user = {
    code: '',
    password: ''
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(user);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const submitUser = async (e) => {
    e.preventDefault(); 
    console.log("values", value);
    const loginData={
      userLogin:value.code,
      password:value.password
    }
    let Fullurl=constants.CANDIDATE+'authenticate'
    let res = await fetch(Fullurl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(loginData),
    }).catch(function(error){
    });
    if (res.status === 200) {
     
      setTimeout(function () {
        toast.success("login Successfully")
        // setMessage('')
        navigate('/');
      }, 2000)
    } else {
  
    }
    //  window.location.href = '/'
  };

  return (
    <div className="wrapper">
      <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 mt-5 my-lg-0">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div className="col mx-auto">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="p-4">
                    <div className="mb-3 text-center">
                      <img src={Logo} width="100" alt="" />
                    </div>
                    <div className="text-center mb-2">
                      <h5 className="">Login</h5>
                      <p className="mb-0">Please log in to your account</p>
                    </div>
                    <div className="form-body">
                      <form className="row g-3" onSubmit={submitUser}>
                        <div className="col-12">
                          <label htmlFor="inputEmailAddress" className="form-label">User Code</label>
                          <input type="text" name='code' className="form-control" placeholder="Code" onChange={handleEvent} />
                        </div>
                        <div className="col-12">
                          <label htmlFor="inputChoosePassword" className="form-label">Password</label>
                          <div className="input-group" id="show_hide_password">
                            <input 
                              type={showPassword ? "text" : "password"} 
                              className="form-control border-end-0" 
                              id="inputChoosePassword" 
                              name='password'
                              onChange={handleEvent} 
                              placeholder="Enter Password" 
                            />
                            <button 
                              type="button" 
                              className="input-group-text bg-transparent" 
                              onClick={togglePasswordVisibility}
                            >
                              <i className={showPassword ? 'bx bx-show' : 'bx bx-hide'}></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-md-5 ps-0">
                          
                        </div>
                        <div className="col-md-6 text-end pe-0">
                          <label className="form-check-label">Forgot Password?</label>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <input type="submit" className="btn btn-primary bg-primary p-3" value="Login" />
                          </div>
                        </div>
                       
                        <div className="text-center mt-3">
                        <p>Don't have an account? <Link to="/signup"><u className='text-primary'>Sign Up</u></Link></p>
                      </div>
                  
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Login;
