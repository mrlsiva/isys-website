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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
    profession:'',
    sector:'',
    totalexp:'',
    position:'',
    totalExperience:'',

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
    gender:'',
    profession:'',
    sector:''
   
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    emailId: false,
    phoneNumber: false,
    gender:false,
    profession:'',
    sector:''
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
  const [qualifications, setQualifications] = useState([
    { id: 1, qualification: '', educationName: '', passOutYear: '', percentage: '' }
  ]);
  const [currentCompany,setCurrentCompany] = useState([
    {id:1, currentCompany:'',currentRole:'',currentDesignation:'',joinDate:'',noticePeriod:''}
  ])
  const [lastCompany, setLastCompany] = useState([
    { id: 1, lastCompanyName: '', lastRoleName: '', lastDesignationName: '', joinDate: '', relievingDate: '' },
  ]);

  console.log("qualification",qualifications)
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
    const { name, value, type, checked } = e.target;
    console.log("name:", name, "value:", value, "type:", type, "checked:", checked);
  
    if (name === 'emailId') {
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, [name]: 'Invalid email address' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }else if(type === 'checkbox'){
      setFormValues({...formValues,[name]:checked?'fresher':'Experience'})
    } else if (name === 'phoneNumber') {
      // Phone number validation
      const phonePattern = /^[0-9]{10}$/;
      if (value.length === 10) {
        if (!phonePattern.test(value)) {
          setErrors({ ...errors, [name]: 'Invalid phone number, must be 10 digits' });
        } else {
          setErrors({ ...errors, [name]: '' });
        }
      } else {
        setErrors({ ...errors, [name]: 'Phone number must be 10 digits' });
      }
    } else if (name === 'gender') {
      if (value === "") {
        setErrors({ ...errors, [name]: 'Please select a gender' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    } else {
      // General length validation
      if (value.length > 50) {
        setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} cannot exceed 50 characters` });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  
    // Update form values
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChange = (id, field, value) => {
    const updatedQualifications = qualifications.map(qualification => 
      qualification.id === id ? { ...qualification, [field]: value } : qualification
    );
    setQualifications(updatedQualifications);
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
    setQualifications([
      ...qualifications, 
      { id: qualifications.length + 1, qualification: '', educationName: '', passOutYear: '', percentage: '' }
    ]);
  };

  const handleRemoveDegree = (id) => {
    setQualifications(qualifications.filter(qualification => qualification.id !== id));
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
  const handleAddMoreCurrentCompany = () => {
    setCurrentCompany([
      ...currentCompany,
      { id: currentCompany.length + 1, currentCompanyName: '', currentRoleName: '', currentDesignationName: '', joinDate: '', noticePeriod: '' },
    ]);
  };

  const handleRemoveCurrentCompany = (id) => {
    setCurrentCompany(currentCompany.filter(company => company.id !== id));
  };
  const handleAddMoreLastCompany = () => {
    setLastCompany([
      ...lastCompany,
      { id: lastCompany.length + 1, lastCompanyName: '', lastRoleName: '', lastDesignationName: '', joinDate: '', relievingDate: '' },
    ]);
  };

  const handleRemoveLastCompany = (id) => {
    setLastCompany(lastCompany.filter(company => company.id !== id));
  };
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
    console.log("final data",finalData)
    // let Fullurl=constants.CANDIDATE+'candidate/save'
  
    // let res = await fetch(Fullurl, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Headers" : "Content-Type",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    //   },
    //   body: JSON.stringify(finalData),
    // }).catch(function(error){
    // });
    // if (res.status === 200) {
    //   let response = await res.json();
    //   setUserCode(response.id)
    //   console.log("Response received:", response.id);
    //   setTimeout(function () {
    //   }, 2000)
    // } else {
    //   toast.success("User is already in use,please Create different user")
    // }
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
              <div className="card mb-0 bg-light">
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
                                <select
                                  className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                  required
                                  value={formValues.gender}
                                  name="gender"
                                  onBlur={handleBlur}
                                  onChange={handleEvent}  // Use onChange instead of onKeyUp
                                >
                                  <option value="">Select</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                                {errors.gender && (
                                  <div className="invalid-feedback">
                                    {errors.gender}
                                  </div>
                                )}
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
                                <label className="form-check-label">
                                  Profession
                                </label>
                                <select
                                  className={`form-select ${errors.profession ? 'is-invalid' : ''}`}
                                  name="profession"
                                  onChange={handleEvent}
                                  onBlur={handleBlur}
                                  required
                                  aria-label="Default select example"
                                >
                                  <option selected></option>
                                  <option value="Software Engineer">Software Engineer</option>
                                  <option value="Hardware Engineer">Hardware Engineer</option>
                                  <option value="HR Administrator">HR Administrator</option>
                                </select>
                                {errors.profession && (
                                  <div className="invalid-feedback">
                                    {errors.profession}
                                  </div>
                                )}
                              </div>

                              <div className="col-12 col-lg-3 ">
                                 <label className="form-check-label" for="flexCheckDefault">
                                    Sector
                                  </label>
                                <select class="form-select" 
                                 onChange={handleEvent}
                                 onBlur={handleBlur}
                                 name="sector"
                                 required
                                 className={`form-select ${errors.sector ? 'is-invalid' : ''}`}
                                 aria-label="Default select example">
                                  <option selected></option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                {errors.sector && (
                                  <div className="invalid-feedback">
                                    {errors.sector}
                                  </div>
                                )}
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
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    onChange={handleEvent}
                                    checked={formValues.position === 'fresher'}
                                    name="position"
                                    id="flexCheckDefault"
                                  />
                                  <label className="form-check-label" htmlFor="flexCheckDefault">
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
                                      <div className="row align-items-center">
                                        <div className="col-12 col-lg-2">
                                          <label htmlFor="Experience" className="form-label">Total Experience</label>
                                        </div>
                                        <div className="col-12 col-lg-1">
                                          <input 
                                            type="text" 
                                            required
                                            className="form-control" 
                                            onChange={handleEvent}
                                            name="totalExperience" 
                                            placeholder="Exp" 
                                          />
                                        </div>
                                        <div className="col-12 col-lg-9 text-lg-end">
                                          <div className="form-check d-flex justify-content-end align-items-center">
                                            <label className="form-check-label me-4" htmlFor="flexCheckDefault">
                                              Are You Currently Working
                                            </label>  
                                            <input 
                                              className="form-check-input" 
                                              type="checkbox" 
                                              checked={isWorking}
                                              onChange={handleCheckboxChange}
                                              id="flexCheckDefault"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {isWorking ? (
                                        <>
                                          {currentCompany.map((company, index) => (
                                            <div className="row" key={company.id}>
                                              <div className="col-12 col-lg-3 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`currentCompany-${index}`}>
                                                  Current Company
                                                </label>
                                                <select
                                                  className="form-select"
                                                  name="currentCompanyName"
                                                  value={company.currentCompanyName}
                                                  onChange={(e) => {
                                                    const newCurrentCompany = [...currentCompany];
                                                    newCurrentCompany[index].currentCompanyName = e.target.value;
                                                    setCurrentCompany(newCurrentCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value=""></option>
                                                  <option value="Cognizant">Cognizant</option>
                                                  <option value="Wipro">Wipro</option>
                                                  <option value="Zoho">Zoho</option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`currentRole-${index}`}>
                                                  Current Role
                                                </label>
                                                <select
                                                  className="form-select"
                                                  name="currentRoleName"
                                                  value={company.currentRoleName}
                                                  onChange={(e) => {
                                                    const newCurrentCompany = [...currentCompany];
                                                    newCurrentCompany[index].currentRoleName = e.target.value;
                                                    setCurrentCompany(newCurrentCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value=""></option>
                                                  <option value="Admin">Admin</option>
                                                  <option value="UI Developer">UI Developer</option>
                                                  <option value="Java Developer">Java Developer</option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`currentDesignation-${index}`}>
                                                  Current Designation
                                                </label>
                                                <select
                                                  className="form-select"
                                                  name="currentDesignationName"
                                                  value={company.currentDesignationName}
                                                  onChange={(e) => {
                                                    const newCurrentCompany = [...currentCompany];
                                                    newCurrentCompany[index].currentDesignationName = e.target.value;
                                                    setCurrentCompany(newCurrentCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value=""></option>
                                                  <option value="Team Leader">Team Leader</option>
                                                  <option value="Project Manager">Project Manager</option>
                                                  <option value="Sales Manager">Sales Manager</option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`joinDate-${index}`}>
                                                  Join Date
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  name="joinDate"
                                                  value={company.joinDate}
                                                  onChange={(e) => {
                                                    const newCurrentCompany = [...currentCompany];
                                                    newCurrentCompany[index].joinDate = e.target.value;
                                                    setCurrentCompany(newCurrentCompany);
                                                  }}
                                                  aria-label="Join Date"
                                                />
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`noticePeriod-${index}`}>
                                                  Notice Period
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="noticePeriod"
                                                  value={company.noticePeriod}
                                                  onChange={(e) => {
                                                    const newCurrentCompany = [...currentCompany];
                                                    newCurrentCompany[index].noticePeriod = e.target.value;
                                                    setCurrentCompany(newCurrentCompany);
                                                  }}
                                                  placeholder="Notice Period"
                                                />
                                              </div>
                                              <div className="col-12 col-lg-1 text-end">
                                                <button
                                                  className="delete-current-button"
                                                  onClick={() => handleRemoveCurrentCompany(company.id)}
                                                >
                                                  <FontAwesomeIcon icon={faTrash} className="text-danger" />
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <div className="row">
                                            <p className="text-primary" onClick={handleAddMoreCurrentCompany}>
                                              + Add More
                                            </p>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {lastCompany.map((company, index) => (
                                            <div className="row" key={company.id}>
                                              <div className="col-12 col-lg-3 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`lastCompany-${index}`}>
                                                  Last Company
                                                </label>
                                                <select
                                                  className="form-select"
                                                  name="lastCompanyName"
                                                  value={company.lastCompanyName}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].lastCompanyName = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value=""></option>
                                                  <option value="Cognizant">Cognizant</option>
                                                  <option value="Wipro">Wipro</option>
                                                  <option value="Zoho">Zoho</option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`lastRole-${index}`}>
                                                  Last Role
                                                </label>
                                                <select
                                                  className="form-select"
                                                  name="lastRoleName"
                                                  value={company.lastRoleName}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].lastRoleName = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value=""></option>
                                                  <option value="Admin">Admin</option>
                                                  <option value="UI Developer">UI Developer</option>
                                                  <option value="Java Developer">Java Developer</option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`lastDesignation-${index}`}>
                                                  Last Designation
                                                </label>
                                                <select
                                                  className="form-select"
                                                  name="lastDesignationName"
                                                  value={company.lastDesignationName}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].lastDesignationName = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value=""></option>
                                                  <option value="Team Leader">Team Leader</option>
                                                  <option value="Project Manager">Project Manager</option>
                                                  <option value="Sales Manager">Sales Manager</option>
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`joinDate-${index}`}>
                                                  Join Date
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  name="joinDate"
                                                  value={company.joinDate}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].joinDate = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Join Date"
                                                />
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`relievingDate-${index}`}>
                                                  Relieving Date
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  name="relievingDate"
                                                  value={company.relievingDate}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].relievingDate = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Relieving Date"
                                                />
                                              </div>
                                              <div className="col-12 col-lg-1 text-end">
                                                <button
                                                  className="delete-current-button"
                                                  onClick={() => handleRemoveLastCompany(company.id)}
                                                >
                                                  <FontAwesomeIcon icon={faTrash} className="text-danger" />
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                          <div className="row">
                                            <p className="text-primary" onClick={handleAddMoreLastCompany}>
                                              + Add More
                                            </p>
                                          </div>
                                        </>
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
                                            <select 
                                              className="form-control" 
                                              name={`qualification-${index}`}
                                              value={qualification.qualification}
                                              onChange={(e) => handleChange(qualification.id, 'qualification', e.target.value)}
                                            >
                                              <option value="">Select</option>
                                              <option value="B.E">B.E</option>
                                              <option value="M.E">M.E</option>
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-3">
                                            <label htmlFor={`educationName-${index}`} className="form-label">
                                              Education Name
                                            </label>
                                            <select 
                                              className="form-control" 
                                              name={`educationName-${index}`}
                                              value={qualification.educationName}
                                              onChange={(e) => handleChange(qualification.id, 'educationName', e.target.value)}
                                            >
                                              <option value="">Select</option>
                                              <option value="B.E">B.E</option>
                                              <option value="M.E">M.E</option>
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-3">
                                            <label htmlFor={`passOutYear-${index}`} className="form-label">
                                              Year Of PassOut
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                              id={`passOutYear-${index}`}
                                              name="passOutYear"
                                              value={qualification.passOutYear}
                                              onChange={(e) => handleChange(qualification.id, 'passOutYear', e.target.value)}
                                            />
                                          </div>
                                          <div className="col-12 col-lg-2">
                                            <label htmlFor={`percentage-${index}`} className="form-label">
                                              Percentage
                                            </label>
                                            <input 
                                              type="text" 
                                              required
                                              className="form-control" 
                                              name={`percentage-${index}`}
                                              placeholder="Percentage" 
                                              value={qualification.percentage}
                                              onChange={(e) => handleChange(qualification.id, 'percentage', e.target.value)}
                                            />
                                          </div>
                                          <div className="col-12 col-lg-1 text-end">
                                            <button 
                                              className="delete-button" 
                                              onClick={() => handleRemoveDegree(qualification.id)}
                                            >
                                              <FontAwesomeIcon icon={faTrash} className='text-danger' />
                                            </button>
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
                          <div className="d-flex justify-content-end">
                            <input
                              type="submit"
                              className="btn btn-primary bg-primary p-3"
                              disabled={visible}
                              value="Register"
                            />
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