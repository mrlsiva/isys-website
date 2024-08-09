import React, { useState,useEffect } from 'react';
import Logo from '../../assets/img/home3/logo.png';
import constants from '../../constants/Constants'
import 'boxicons/css/boxicons.min.css';
import './signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/store/Slice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialAddressValues = {
    city: '',
    state: '',
    country: '',
  }
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    emailId:'',
    phoneNumber:'',
    gender:'',
    degree:'',
    experience:'',
    totalexp:''
  });
  const [area,setArea]=useState({
    countryId:'',
    stateId:'',
    cityId:''
  })
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    emailId:'',
    phoneNumber:'',
    gender:''
   
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    emailId: false,
    phoneNumber: false,
    gender:''
  });
 
  const [data, setData] = useState([])
  const [countryOptions, setCountryOptions] = useState([])
  const [getcityName,setCityName]=useState('')
  const [getcountryName, setCountryName] = useState('')
  const [cityOptionsForCommunication, setCityOptionsForCommunication] = useState([])
  const [stateOptionsForCommunication, setStateOptionsForCommunication] = useState([])
  const [communicationaddress, setcommunicationaddress] = useState(initialAddressValues)
  const [getstateName,setStateName]=useState('')
  const [visible,setVisible]= useState(false)
  const [userCode,setUserCode] = useState("")
  const [isWorking, setIsWorking] = useState(false);
  const [qualifications, setQualifications] = useState([{ id: 1 }]);
  const handleCheckboxChange = () => {
    setIsWorking(!isWorking);
  };

  const getDropdownOptions = (array, keyLabel, keyValue) => {
    return array.map((item) => ({ label: item[keyLabel], value: item[keyValue] }))
  }
  function handleInputsetcommunicationaddress(e) {
    console.log(e)
    const { name, value,label } = e.target
    const selectedLabel = e.target.options[e.target.selectedIndex].text;

    setArea((prevState) => ({
      ...prevState,
      [name]: selectedLabel,
    }))
    if(name==='cityId')
    {
      const selectedCityId = e.target.value;
    const selectedCityName = e.target.options[e.target.selectedIndex].text;
      setCityName(selectedCityName)
    }
    switch (name) {
      case 'countryId': {
        const [curCountry] = data.filter((country) => country.countryId === +value)
        
        setCountryName(curCountry.countryName)
       
        setStateOptionsForCommunication(
          getDropdownOptions(curCountry?.states ?? [], 'stateName', 'stateId'),
        )
        setCityOptionsForCommunication([])
        break
      }
      case 'stateId': {
        const [curCountry] = data.filter(
          (country) => country.countryId === +communicationaddress.countryId,
        )
        const [curState] = (curCountry?.states ?? []).filter((state) => state.stateId === +value)
        setStateName(curState.stateName)
        setCityOptionsForCommunication(
          getDropdownOptions(curState?.cities ?? [], 'cityName', 'cityId'),
          
        )

        break
      }
    
    }
    setcommunicationaddress({
      ...communicationaddress,
      [name]: value,
    })
  }
  useEffect(() => {
    let fullurl = constants.EORMURL + 'countries'
    console.log("fullurl",fullurl)
    async function fetchData() {
      axios.get(fullurl, {
          headers: {
            //Authorization: AccessToken,
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': '*',
          },
        })
        .then((response) => {
          const finalData = response.data
          setData(finalData)
          setCountryOptions(getDropdownOptions(finalData, 'countryName', 'countryId'))
        })
       .catch((error) => {
        })
        console.log("state",data)
    }
    fetchData()
  }, [])
  const handleEvent = (e) => {
  
    const { name, value } = e.target;
    console.log("name:", name, "value:", value);
    
    if (name === 'emailId') {
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, [name]: 'Invalid email address' });
      } else {
        setErrors({ ...errors, [name]: '' });
        setFormValues({ ...formValues, [name]: value });
      }
    } else if (name === 'phoneNumber') {
      // Phone number validation
      const phonePattern = /^[0-9]{10}$/;
  
      if (value.length <= 10) {
        // If the input is less than 10 digits, show the error message
        if (!phonePattern.test(value)) {
          setErrors({ ...errors, [name]: 'Phone number must be 10 digits' });
        } else {
          setErrors({ ...errors, [name]: '' });
        }
      } else if (value.length <= 10) {
        // If the input is exactly 10 digits, validate it
        if (!phonePattern.test(value)) {
          setErrors({ ...errors, [name]: 'Invalid phone number, must be 10 digits' });
        } else {
          setErrors({ ...errors, [name]: '' });
          console.log("name,value",name,value)
          setFormValues({ ...formValues, [name]: value });
        } 
      } else {
          // If the input exceeds 10 digits, handle accordingly (e.g., truncate or show an error)
          setErrors({ ...errors, [name]: 'Phone number cannot exceed 10 digits' });
        }
    } else {
      // General length validation
      if (value.length > 50) {
        setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} cannot exceed 50 characters` });
      } else {
        setErrors({ ...errors, [name]: '' });
        setFormValues({ ...formValues, [name]: value });
      }
    }
    if (name === 'experience') {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    if (!value) {
      setErrors({ ...errors, [name]: 'Please fill required this field' });
    } 
  };
  const handleGenderBlur = () => {
    setTouched({ ...touched, gender: true });
    if (!formValues.gender) {
      setErrors({ ...errors, gender: 'Please select your gender' });
    }
  };
  const handleAddMoreDegree = () => {
    setQualifications([...qualifications, { id: qualifications.length + 1 }]);
  };

  useEffect(() => {
    const verifyCandidate = async () => {
      console.log("userCode", userCode);
      let Fullurl = `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${userCode}&isVerify=true`;
      try {
        let res = await fetch(Fullurl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
          },
        });

        if (res.ok) {
          let response = await res.json();
          setTimeout(() => {
            toast.success("User Signup successfully and verified in Email");
            window.location.href = '/login';
          }, 2000);
        } else {
          
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (userCode) {
      verifyCandidate();
    }
  }, [userCode]);
  const submitSignUpUser=async (e)=>{
    e.preventDefault()
    console.log("communication ",communicationaddress)
    console.log("formValues",formValues)
    console.log("area",area)
    console.log("phonenumber",formValues)
    const finalData={
      firstName:formValues.firstName,
      lastName:formValues.lastName,
      emailId:formValues.emailId,
      mobileNumber:"7639651113",
      // experienceFresher:formValues.experience?formValues.experience:false,
      // totalExperience:formValues.totalexp?formValues.totalexp:"string",
      // degree:formValues.degree,
      // resume:'string',
      // country:area.countryId,
      // state:area.stateId,
      // city: area.cityId,
      gender: formValues.gender,
      candidateType:"",
      candidateTypeName: ""
    }
    let Fullurl=constants.CANDIDATE+'candidate/save'
  
    let res = await fetch(Fullurl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(finalData),
    }).catch(function(error){
    });
    if (res.status === 200) {
      let response = await res.json();
      setUserCode(response.id)
      console.log("Response received:", response.id);
      setTimeout(function () {
      }, 2000)
    } else {
      toast.success("User is already in use,please Create different user")
    }
    // dispatch(signUpUser({
    //   communicationaddress,
    //   formValues,
    //   area
    // }));
  }

  return (
    <div className="wrapper">
      <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div className="container-fluid">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="p-1">
                    
                    <div className="text-center mb-4">
                      <h5 className="">Candidate Registration</h5>
                    </div>
                    <div className="form-body">
                      <form className="row g-3" onSubmit={submitSignUpUser}>
                        <div className="col-12 d-flex gap-2">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-12 col-lg-3 ">
                                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                <input 
                                type="text" 
                                required
                                className={`form-control ${touched.firstName &&errors.firstName ? 'error-input' : ''}`} 
                                name="firstName" 
                                onBlur={handleBlur} 
                                onChange={handleEvent} 
                                placeholder="First Name" 
                                />
                                {errors.firstName && touched.firstName&&(
                                  <span className="text-danger" id="firstNameValidationErrorMsg">
                                    {errors.firstName}
                                  </span>
                                )}
                              </div>
                              <div className="col-12 col-lg-3 ">
                                <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                <input 
                                  type="text" 
                                  required
                                  className={`form-control ${touched.lastName &&errors.lastName ? 'error-input' : ''}`} 
                                  name="lastName"  
                                  onChange={handleEvent} 
                                  onBlur={handleBlur}
                                  placeholder="Last Name" 
                                />
                                {errors.lastName &&touched.lastName && (
                                  <span className="text-danger" id="lastNameValidationErrorMsg">
                                    {errors.lastName}
                                  </span>
                                )}
                              </div>
                              <div className="col-12 col-lg-3">
                                <label htmlFor="inputEmailAddress" className="form-label">Email</label>
                                <input 
                                  type="email" 
                                  required
                                  className={`form-control ${touched.emailId &&errors.emailId ? 'error-input' : ''}`} 
                                  name="emailId"  
                                  onChange={handleEvent} 
                                  onBlur={handleBlur}
                                  placeholder="john@example.com" 
                                />
                                {errors.emailId && touched.emailId  &&(
                                  <span className="text-danger" id="emailValidationErrorMsg">
                                    {errors.emailId}
                                  </span>
                                )}
                              </div>
                              <div className="col-12 col-lg-3">
                                <label htmlFor="inputPhoneNumber" className="form-label">Phone</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text country-code">+91</span>
                                  </div>
                                  <input
                                    type="Number"
                                    required
                                    className={`form-control ${touched.phoneNumber &&errors.phoneNumber ? 'error-input' : ''}`} 
                                    name="phoneNumber"
                                    minLength="10"
                                    onBlur={handleBlur}
                                    onKeyUp={handleEvent}
                                    placeholder="Phone No"
                                  />
                                </div>
                                {errors.phoneNumber && touched.phoneNumber && (
                                  <span className="text-danger" id="phoneNumberValidationError">
                                    {errors.phoneNumber}
                                  </span>
                                )}
                              </div>
                            </div>
                          
                            <div className="row mt-2">
                            
                              <div className="col-12 col-lg-3">
                                  <label htmlFor="degree" className="form-label">Gender</label>
                                  <select className="form-control" value={communicationaddress.countryId}
                                    name="countryId"
                                    onChange={handleInputsetcommunicationaddress} >
                                   <option selected>Select</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  </select>
                              </div>
                            
                              <div className="col-12 col-lg-3">
                                  <label htmlFor="degree" className="form-label">Country</label>
                                  <select className="form-control" value={communicationaddress.countryId}
                                    name="countryId"
                                    onChange={handleInputsetcommunicationaddress} >
                                  <option value="">Select Country</option>
                                    {countryOptions.map((country) => (
                                      <option key={country.value} value={country.value}>
                                        {country.label}
                                      </option>
                                    ))}
                                  </select>
                              </div>
                              <div className="col-12 col-lg-3">
                              <label htmlFor="degree" className="form-label">State</label>
                                <select className="form-control"   
                                  value={communicationaddress.stateId}
                                  name="stateId"
                                  onChange={handleInputsetcommunicationaddress}>
                                  <option value="">Select State</option>
                                  {stateOptionsForCommunication.map((state) => (
                              <option key={state.value} value={state.value}>
                                {state.label}
                              </option>
                            ))}
                                </select>
                              </div>
                              <div className="col-12 col-lg-3">
                                <label htmlFor="degree" className="form-label">City</label>
                                <select className="form-control" 
                                  value={communicationaddress.cityId}
                                  name="cityId"
                                  onChange={handleInputsetcommunicationaddress}>
                                  <option value="">Select City</option>
                                  {cityOptionsForCommunication.map((city) => (
                                    <option key={city.value} value={city.value}>
                                      {city.label}
                                    </option>
                                  ))}
                                </select>
                               </div>
                            </div>
                          
                            
                            <div className="row mt-2">
                              <div className="col-12 col-lg-3">
                                 <label className="form-check-label" for="flexCheckDefault">
                                    Profession
                                  </label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected>Profession</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="col-12 col-lg-3 ">
                                 <label className="form-check-label" for="flexCheckDefault">
                                    Sector
                                  </label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected>Sector</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="col-12 col-lg-3">
                                 <label className="form-check-label" for="flexCheckDefault">
                                    Upload Resume
                                  </label>
                                  <div className="mb-3">
                                    <input className="form-control" type="file" id="formFile"/>
                                  </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="col-12 col-lg-12 ms-0 pe-0 text-end">
                                <div className="form-check d-flex justify-content-end align-items-center">
                                  <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label className="form-check-label" for="flexCheckDefault">
                                    Are You Fresher
                                  </label>
                                </div>
                              </div>
                            </div>
                          
                            <div className="row mt-2 mb-4">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" style={{height: "45px", padding: "5px 10px"}} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Experience
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-12 col-lg-1 ms-0 pe-0">
                                            
                                            <label htmlFor="Experience" className="form-label">Experience</label>
                                                <input 
                                                type="text" 
                                                required
                                                className="form-control" 
                                                name="experience" 
                                                placeholder="Exp" 
                                                />
                                          
                                          </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 col-lg-12 ms-0 pe-0 text-end">
                                            <div className="form-check d-flex justify-content-end align-items-center">
                                              <input 
                                                  className="form-check-input me-2" 
                                                  type="checkbox" 
                                                  value="" 
                                                  checked={isWorking}
                                                  onChange={handleCheckboxChange}
                                                  id="flexCheckDefault"/>
                                              <label className="form-check-label" for="flexCheckDefault">
                                                Are You Currently Working
                                              </label>
                                            </div>
                                          </div>
                                      </div>
                                      {isWorking ? (
                                      <div className="row">
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="currentCompany">
                                            Current Company
                                          </label>
                                          <select className="form-select" aria-label="Default select example">
                                            <option selected>Profession</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="currentRole">
                                            Current Role
                                          </label>
                                          <select className="form-select" aria-label="Default select example">
                                            <option selected>Current Role</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="currentDesignation">
                                            Current Designation
                                          </label>
                                          <select className="form-select" aria-label="Default select example">
                                            <option selected>Current Designation</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="joinDate">
                                            Join Date
                                          </label>
                                          <input type="date" className="form-control" id="datePicker" aria-label="Join Date" required />
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label htmlFor="noticePeriod" className="form-label">
                                            Notice Period
                                          </label>
                                          <input
                                            type="text"
                                            required
                                            className="form-control"
                                            name="noticePeriod"
                                            placeholder="Notice Period"
                                          />
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="row">
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="lastCompany">
                                            Last Company
                                          </label>
                                          <select className="form-select" aria-label="Default select example">
                                            <option selected>Profession</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="lastRole">
                                            Last Role
                                          </label>
                                          <select className="form-select" aria-label="Default select example">
                                            <option selected>Current Role</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="lastDesignation">
                                            Last Designation
                                          </label>
                                          <select className="form-select" aria-label="Default select example">
                                            <option selected>Current Designation</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="joinDate">
                                            Join Date
                                          </label>
                                          <input type="date" className="form-control" id="datePicker" aria-label="Join Date" required />
                                        </div>
                                        <div className="col-12 col-lg-2 ms-0 pe-0">
                                          <label className="form-check-label" htmlFor="relievingDate">
                                            Relieving Date
                                          </label>
                                          <input type="date" className="form-control" id="datePicker" aria-label="Relieving Date" required />
                                        </div>
                                      </div>
                                    )}
  
                                     
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" style={{height: "45px", padding: "5px 10px"}} data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                      Highest Qualification
                                    </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       {qualifications.map((qualification, index) => (
                                          <div className="row" key={qualification.id}>
                                            <div className="col-12 col-lg-3">
                                              <label htmlFor={`degree-${index}`} className="form-label">
                                                Qualification
                                              </label>
                                              <select className="form-control" name={`qualification-${index}`}>
                                                <option selected>Select</option>
                                                <option value="B.E">B.E</option>
                                                <option value="M.E">M.E</option>
                                              </select>
                                            </div>
                                            <div className="col-12 col-lg-3">
                                              <label htmlFor={`degree-${index}`} className="form-label">
                                                Education Name
                                              </label>
                                              <select className="form-control" name={`qualification-${index}`}>
                                                <option selected>Select</option>
                                                <option value="B.E">B.E</option>
                                                <option value="M.E">M.E</option>
                                              </select>
                                            </div>
                                            <div className="col-12 col-lg-3">
                                              <label htmlFor={`degree-${index}`} className="form-label">
                                                Year Of PassOut
                                              </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  id="passOutYear"
                                                  name="passOutYear"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-2">
                                              <label htmlFor={`degree-${index}`} className="form-label">
                                                Percentage
                                              </label>
                                              <input 
                                                type="text" 
                                                required
                                                className="form-control" 
                                                name="Persentage" 
                                                placeholder="Percentage" 
                                                />
                                            </div>
                                          </div>
                                        ))}
                                      <div className="row">
                                        <p className='text-primary' onClick={handleAddMoreDegree}>+ Add More Degree</p>    
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                  
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex text-end">
                            <input type="submit" className="btn btn-primary bg-primary p-3" disabled={visible} value="Register" />
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <span>Already have an account? </span>
                          <span className="text-primary backToLoginBtn"><Link to="/login"><u className='text-primary'>Log In</u></Link></span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
        
        </div>
      </div>
    </div>
  )
}

export default SignUp