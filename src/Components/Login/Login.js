import React, { useState } from 'react';
import Logo from '../../assets/img/home3/logo.png';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import constants from '../../constants/Constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // import useAuth

function Login() {
  const { login } = useAuth(); // get login function from context
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState({ code: '', password: '' });

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

    const loginData = {
      userLogin: value.code,
      password: value.password
    };

    const Fullurl = constants.URL + 'authenticate';

    try {
      const res = await fetch(Fullurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(loginData),
      });

      if (res.status === 200) {
        const responseData = await res.json();
        console.log("Response data:", responseData);

        const { jwtToken, companyId, companyCode, employeeCode, employeeName } = responseData;

        // Prepare user details
        const userDetails = {
          companyId: companyId || "",
          companyCode: companyCode || "",
          employeeCode: employeeCode || "",
          employeeName: employeeName || ""
        };

        // Call context login function (this will update global state and storage)
        login(jwtToken, userDetails);

        toast.success("Login Successfully");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        const errorText = await res.text();
        console.error("Login failed:", res.status, errorText);
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      toast.error("Unable to connect to server. Please try again later.");
    }
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