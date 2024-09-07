import React, { useState,useEffect } from 'react';
import constants from '../../constants/Constants'
import 'boxicons/css/boxicons.min.css';
import './signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/store/Slice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import jsonObject from './MockJsonCandidate.js';
import mainLogo from '../../assets/img/home3/logo.png';
import MobileMenu from "../Header/MobileMenu";
import FooterTwo from '../Footer/FooterTwo';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
function SignUp() {
  const [offset, setOffset] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(true);
  const dispatch = useDispatch();
  const userCandidate = useSelector((state) => state.user.user); 
  const [lableButton, setLablebutton] = useState("Register");
  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  }
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const navigate = useNavigate();
  const { itProfessions,allIndustryProfessions,consultingAndITCompanies,itIndustryRoles,industryDesignations,itQualifications,indianInstitutes} =jsonObject;
  const initialAddressValues = { cityId: '',stateId: '',countryId: '',}
  const [formValues, setFormValues] = useState({firstName:'',lastName:'',emailId:'',phoneNumber:'',gender:'',degree:'',experience:'',profession:'',sector:[],
  totalexp:'',position:'',totalExperience:'',experienceFresher:''});
  const [area,setArea]=useState({countryId:'',stateId:'',cityId:''})
  const [errors, setErrors] = useState({firstName: '',lastName: '',emailId:'',phoneNumber:'',gender:'',profession:'',sector:''});
  const [touched, setTouched] = useState({firstName: false,lastName: false,emailId: false,phoneNumber: false,gender:false,profession:'',sector:''});
  const [current, setCurrent] = useState({currentCompanyName: '',currentRoleName: '',currentDesignationName: '',joinDate: '',noticePeriod: '',});
  useEffect(() => {
    if (userCandidate?.length>0) {
      const sectorData = userCandidate.industryId.map((id, index) => ({id: id,
        label: userCandidate.industryName[index],
        value: userCandidate.industryName[index],
      }));
      setFormValues(prevValues => ({
        ...prevValues,
        firstName: userCandidate.firstName?userCandidate.firstName:'',
        lastName:userCandidate.lastName?userCandidate.lastName:'',
        emailId:userCandidate.emailId?userCandidate.emailId:'',
        gender:userCandidate.gender?userCandidate.gender:'',
        phoneNumber:userCandidate.mobileNumber?userCandidate.mobileNumber:'',
        degree:'',
        experience:userCandidate.experience?userCandidate.experience:'',
        profession:userCandidate.profession?userCandidate.profession:'',
        sector:sectorData?sectorData:'',
        totalExperience:userCandidate.totalExperience?userCandidate.totalExperience:'',
        experienceFresher:setIsFresher(formValues.experienceFresher)
      }));
      setcommunicationaddress({
        countryId:userCandidate.countryId,
        stateId:userCandidate.stateId,
        cityId: userCandidate.cityId
      }) 
      const qualificationsData = userCandidate?.candidateQualificationList.map((qual) => ({
        id: qual.id?qual.id:'',
        qualification: qual.qualification?qual.qualification:'',
        institutionName: qual.institutionName?qual.institutionName:'',
        yearOfPassOut: qual.yearOfPassOut||'',
        percentage: qual.percentage?qual.percentage:'',
        candidateId: qual.candidateId ?qual.candidateId:'',
    }));
    setQualifications(qualificationsData);
    const formattedData = userCandidate?.candidateExperiencesList?.map((experience) => ({
      id: experience.id?experience.id:'',
      lastCompanyName: experience.lastCompanyName?experience.lastCompanyName:'',
      lastRole: experience.lastRole?experience.lastRole:'',
      lastDesignation: experience.lastDesignation?experience.lastDesignation:'',
      lastJoiningDate: experience.lastJoiningDate, // format date to YYYY-MM-DD
      lastRelievingDate: experience.lastRelievingDate, // format date to YYYY-MM-DD
      candidateId: experience.candidateId?experience.candidateId:'',
    }));
    setLastCompany(formattedData);
    }
    const formattedCompanyData = userCandidate?.candidateExperiencesList?.map((experience) => ({
      id: experience.id?experience.id:'',
      currentCompany: experience.currentCompany?experience.currentCompany:'',
      currentRole: experience.currentRole?experience.currentRole:'',
      currentDesignation: experience.currentDesignation?experience.currentDesignation:'',
      joiningDate: experience.joiningDate, // format date to YYYY-MM-DD
      noticePeriod: experience.noticePeriod, // format date to YYYY-MM-DD
      candidateId: experience.candidateId?experience.candidateId:'',
    }));
    setCurrentCompany(formattedCompanyData);
  }, [userCandidate]);
  const [isFresher, setIsFresher] = useState(false);
  const [data, setData] = useState([])
  const [countryOptions, setCountryOptions] = useState([])
  const [getcityName,setCityName]=useState('')
  const [getcountryName, setCountryName] = useState('')
  const [cityOptionsForCommunication, setCityOptionsForCommunication] = useState([])
  const [stateOptionsForCommunication, setStateOptionsForCommunication] = useState([])
  const [communicationaddress, setcommunicationaddress] = useState(initialAddressValues)
  const [getstateName,setStateName]=useState('')
  const [userCode,setUserCode] = useState("")
  const [isWorking, setIsWorking] = useState(false);
  const [uploadedFiles,setUploadedFiles] = useState([])
  const [fileLimit,setFileLimit]=useState(false)
  const MAX_COUNT =5;
  const [qualifications, setQualifications] = useState([
    { id: 1, qualification: '', institutionName: '', yearOfPassOut: '', percentage: '',candidateId:'string' }
  ]);
  const [currentCompany, setCurrentCompany] = useState([
    { id: 1, currentCompany: '', currentRole: '', currentDesignation: '', joiningDate: '', noticePeriod: '', candidateId: 'string' }
  ]);
  const [lastCompany, setLastCompany] = useState([
    { id: 1, lastCompanyName: '', lastRole: '', lastDesignation: '', lastJoiningDate: '', lastRelievingDate: '',candidateId:'string' },
  ]);
  const curCompany = Array.isArray(currentCompany)
  ? currentCompany.map(item => ({
      ...item,  
      currentlyWorking: isWorking  
    }))
  : [];
  const [industry,setIndustry] = useState([])
  const[countryId,setCountryId] =useState('')
  const[stateId,setStateId] =useState('')
  const[cityId,setCityId] =useState('')
  const handleCheckExperience = (e) => {
    setIsFresher(e.target.checked);
  };
  console.log("qualification",qualifications)
  const handleCheckboxChange = () => {
    setIsWorking(!isWorking);
  };
  const getDropdownOptions = (array, keyLabel, keyValue) => {
    return array.map((item) => ({ label: item[keyLabel], value: item[keyValue] }))
  }
  function handleInputsetcommunicationaddress(e) {
    const { name, value } = e.target
    if(name==='cityId')
    {
      const selectedCityId = e.target.value;
    const selectedCityName = e.target.options[e.target.selectedIndex].text;
      setCityId(e.target.options[e.target.selectedIndex].value)
      setCityName(selectedCityName)
    }
    switch (name) {
      case 'countryId': {
        const [curCountry] = data.filter((country) => country.countryId === +value)
        console.log("country id",curCountry)
        setCountryId(curCountry.countryId)
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
        setStateId(curState.stateId)
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
    }
    fetchData()
    let fullurlIndustry = constants.CANDIDATE + 'industry/findAll'
    async function fetchDataIndustry() {
      axios.get(fullurlIndustry, {
          headers: {
            //Authorization: AccessToken,
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': '*',
          },
        })
        .then((response) => {
          const finalData = response.data
          setIndustry(finalData)
        })
       .catch((error) => {
        })
        console.log("state",data)
    }
    fetchDataIndustry()
  }, [])
  const handleEvent = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormValues({ ...formValues, [name]: checked ? 'fresher' : 'Experience' });}
    else if (name === 'emailId') {
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors({ ...errors, [name]: 'Invalid email address' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
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
  const handleCurrent = (event) => {
    const { name, value } = event.target;
    setCurrentCompany((prevState) => 
      prevState && prevState.length > 0 
        ? prevState.map((item) => ({ ...item, [name]: value }))
        : [{ [name]: value }]  // Initialize with one item if it's empty
    );
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
      setErrors({ ...errors, [name]: 'Please fill the required field' });
    } 
  };
  const handleAddMoreDegree = () => {
    setQualifications([
      ...qualifications, 
      { id: qualifications.length + 1, qualification: '', institutionName: '', yearOfPassOut: '', percentage: '',candidateId:'string'  }
    ]);
  };
  const handleRemoveDegree = (id) => {
    setQualifications(qualifications.filter(qualification => qualification.id !== id));
  };
  const handleUploadedFiles= files =>{
    const uploaded=[...uploadedFiles]
    let limitExceeded = false
    files.forEach((file)=>{
        if(uploaded.findIndex((f)=>f.name === file.name)=== -1){
            uploaded.push(file)
            if(uploaded.length === MAX_COUNT) setFileLimit(true);
            if(uploaded.length> MAX_COUNT){
                toast.error(`you only added max of ${MAX_COUNT} files` )
                setFileLimit(false)
                limitExceeded=true;
                return true
            }
        }
    })
    if(!limitExceeded) setUploadedFiles(uploaded)
   }
  const handleFileChange = (e)=>{
    const chosenFiles = Array.from(e.target.files);
    handleUploadedFiles(chosenFiles);
  }
  useEffect(() => {
    const verifyCandidate = async () => {
      let Fullurl = `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${userCode}&isVerify=true`;
      try {
        let res = await fetch(Fullurl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
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
      setLablebutton("Update")
      let fullurl = constants.CANDIDATE + `candidate/findCandidateById/${userCode}`
      console.log("fullurl",fullurl)
      async function fetchData() {
        axios.get(fullurl, {
            headers: {
              //Authorization: AccessToken,
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Headers': '*',
            },
          })
          .then((response) => {
            const finalData = response.data
            dispatch(signUpUser(finalData));
          })
         .catch((error) => {
          })
          console.log("state",data)
      }
      fetchData()
    }
  }, [userCode]);
  const handleAddMoreCurrentCompany = () => {
    setCurrentCompany([
      ...currentCompany,
      { id: currentCompany.length + 1, currentCompany:'',currentRole:'',currentDesignation:'',joiningDate:'',noticePeriod:'',candidateId:'string' },
    ]);
  };
  const handleDateChange = (e, index, dateType) => {
    const newLastCompany = [...lastCompany];
    const newDateValue = e.target.value;
    if (dateType === 'lastJoiningDate') {
      if (newLastCompany[index].lastRelievingDate && new Date(newDateValue) > new Date(newLastCompany[index].lastRelievingDate)) {
        alert('Joining Date cannot be after Relieving Date');
        return;
      }
      newLastCompany[index].lastJoiningDate = newDateValue;
    } else if (dateType === 'lastRelievingDate') {
      // Validate Relieving Date vs Join Date
      if (newLastCompany[index].lastJoiningDate && new Date(newDateValue) < new Date(newLastCompany[index].lastJoiningDate)) {
        alert('Relieving must not be less than a Joining Date');
        return;
      }
      newLastCompany[index].lastRelievingDate = newDateValue;
    }
    setLastCompany(newLastCompany);
  };
  const handleSectorEvent = (event) => {
    const selectedValues = event.target.value; 
    const selectedIndustries = industry.filter(ind => selectedValues.includes(ind.name));
    const selectedData = selectedIndustries.map(ind => ({
      id: ind.id,
      value: ind.name,
    }));
    setFormValues(prevValues => ({
      ...prevValues,
      sector: selectedData, // This now contains an array of objects with both id and name
    }));
  };
  const handleRemoveCurrentCompany = (id) => {
    setCurrentCompany(currentCompany.filter(company => company.id !== id));
  };
  const handleAddMoreLastCompany = () => {
    setLastCompany([
      ...lastCompany,
      { id: lastCompany.length + 1, lastCompanyName: '', lastRole: '', lastDesignation: '', lastJoiningDate: '', lastRelievingDate: '',candidateId:'string' },
    ]);
  };
  const handleRemoveLastCompany = (id) => {
    setLastCompany(lastCompany.filter(company => company.id !== id));
  };
  const submitSignUpUser=async (e)=>{
    const buttonValue = e.nativeEvent.submitter.value;
    e.preventDefault()
   
      const curCompany = currentCompany?.map(item => ({
        ...item,  
        currentlyWorking: isWorking  
      }));
      console.log("current company",currentCompany)
      const lasCompany=lastCompany?.map(item =>({
        ...item,
        currentlyWorking: isWorking,
      }))
      console.log("lasCom",lasCompany)
      const removeIdField = (array) => array?.map(({ id, ...rest }) => rest);
      const finalData={firstName:formValues.firstName,lastName:formValues.lastName,emailId:formValues.emailId,mobileNumber:formValues.phoneNumber,code:"string",password:'string' ,
        experienceFresher:isFresher?isFresher:false,totalExperience:formValues.totalExperience?formValues.totalExperience:"string",degree:'string',resume:'string',country:getcountryName,
        countryId:countryId,state:getstateName,stateId:stateId,city:getcityName,cityId:cityId,gender: formValues.gender,candidateType:"string",
        profession:formValues.profession,industryId:formValues.sector?.map((item)=>item?.id),industryName:formValues.sector?.map((item)=>item?.value),role: "string",designation: "string",candidateExperiencesList:isWorking ? removeIdField(curCompany) : removeIdField(lasCompany),candidateQualificationList: removeIdField(qualifications)
      }
      console.log("final Data",finalData)
      if(buttonValue === "Register"){
      let Fullurl=constants.CANDIDATE+'candidate/save'
      var json=JSON.stringify(finalData)
          const blob = new Blob([json], {type:"application/json"})
         var bodyFormData = new FormData();
         bodyFormData.append("candidate", blob);
         for (let i = 0; i < uploadedFiles?.length; i++) {
          bodyFormData.append("documentList", uploadedFiles[i]);
        }
        try {
          let res = await fetch(Fullurl, {
            method: 'POST',
            headers: {
              // 'Content-Type': 'multipart/form-data',
              // 'accept': 'application/json',
            },
            body: bodyFormData,
            type: 'multipart/form-data'
          });
          if (res.ok) { // Simplified the status check
            let response = await res.json();
            setUserCode(response.id);
            toast.error("Candidate Register Successfully");
            setTimeout(function () {
              alert("Do You Modify any field after registration")
            }, 1000);
          } else if (res.status === 409) { 
            toast.error("User is already in use, please create a different user");
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("An unexpected error occurred. Please try again later.");
        }
    }else if(buttonValue === "Update"){
      const finalData={id:userCode,firstName:formValues.firstName,lastName:formValues.lastName,emailId:formValues.emailId,mobileNumber:formValues.phoneNumber,code:"string",password:'string' ,
        experienceFresher:isFresher?isFresher:false,totalExperience:formValues.totalExperience?formValues.totalExperience:"string",degree:'string',resume:'string',country:getcountryName,
        countryId:countryId,state:getstateName,stateId:stateId,city:getcityName,cityId:cityId,gender: formValues.gender,candidateType:"string",
        profession:formValues.profession,industryId:formValues.sector?.map((item)=>item?.id),industryName:formValues.sector?.map((item)=>item?.value),role: "string",designation: "string",candidateExperiencesList:isWorking ? removeIdField(curCompany) : removeIdField(lasCompany),candidateQualificationList: removeIdField(qualifications)
      }
      console.log("final update data",finalData)
      let Fullurl=constants.CANDIDATE+'candidate/updateCandidate'
      var json=JSON.stringify(finalData)
          const blob = new Blob([json], {
          type:"application/json"
        })
         var bodyFormData = new FormData();
         bodyFormData.append("candidate", blob);
         for (let i = 0; i < uploadedFiles?.length; i++) {
          bodyFormData.append("documentList", uploadedFiles[i]);
        }
        try {
          let res = await fetch(Fullurl, {
            method: 'Put',
            headers: {
              // 'Content-Type': 'multipart/form-data',
              // 'accept': 'application/json',
            },
            body: bodyFormData,
            type: 'multipart/form-data'
          });
          if (res.ok) { // Simplified the status check
            let response = await res.json();
            toast.error("Candidate Update Successfully");
          } else if (res.status === 409) { 
            toast.error("User is already in use, please create a different user");
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("An unexpected error occurred. Please try again later.");
        }
    }
  }
  return (
    <div className="wrapper">
      <div className="section-authentication-signin d-flex align-items-center justify-content-center my- my-lg-0">
        <header className="header-wrap header-1 sticky-top p-1">
          <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="logo">
                  <Link to='/'>
                      <img src={mainLogo} alt="logo"/>
                  </Link>
              </div>
              <div className="header-right-area d-flex justify-content-between">
                  <div className="main-menu d-none d-xl-block me-xl-5">
                      <ul>
                          <li><a href="/">Home </a></li>
                          <li><Link to="/about">about us</Link></li>
                          <li><Link to="/services">Services</Link></li>
                          <li><Link to="/career">Career</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                      </ul>
                  </div>
                  <div className="header-right-elements d-flex align-items-center justify-content-between">
                      <div className="d-inline-block ms-4 d-xl-none">
                          <div className="mobile-nav-wrap">                    
                              <div id="hamburger" onClick={handleMobileMenu}><i className="fal fa-bars"></i></div>
                              <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
                          </div>
                          <div className="overlay"></div>
                      </div>
                  </div>
              </div>
          </div>
        </header>
          <div className="container-fluid">
              <div className="card mb-0 bg-light">
                <div className="card-body">
                  <div className="p-1">  
                    <div className="text-center mb-4">
                      <h5 className="headerStyle">Candidate Registration</h5>
                    </div>
                      <div className="form-body">
                      <form className="row g-3" onSubmit={submitSignUpUser}>
                        <div className="col-12 d-flex gap-2">
                          <div className="container-fluid">
                            <div className="row ">
                              <div className="col-12 col-lg-3 ">
                                <label htmlFor="inputFirstName" className="form-label mb-0">First Name</label>
                                <input type="text"required
                                value={formValues.firstName}
                                className={`form-control form-control-sm ${touched.firstName &&errors.firstName ? 'error-input' : ''}`} 
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
                                <label htmlFor="inputLastName" className="form-label mb-0">Last Name</label>
                                <input 
                                  type="text" 
                                  required
                                  value={formValues.lastName}
                                  className={`form-control form-control-sm ${touched.lastName &&errors.lastName ? 'error-input' : ''}`} 
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
                                <label htmlFor="inputEmailAddress" className="form-label mb-0">Email</label>
                                <input 
                                  type="email" 
                                  required value={formValues.emailId}
                                  className={`form-control form-control-sm ${touched.emailId &&errors.emailId ? 'error-input' : ''}`} 
                                  name="emailId" onChange={handleEvent} 
                                  onBlur={handleBlur} placeholder="john@example.com" 
                                />
                                {errors.emailId && touched.emailId  &&(
                                  <span className="text-danger" id="emailValidationErrorMsg">
                                    {errors.emailId}
                                  </span>
                                )}
                              </div>
                              <div className="col-12 col-lg-3">
                                <label htmlFor="inputPhoneNumber" className="form-label mb-0">Phone</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text country-code">+91</span>
                                  </div>
                                  <input
                                    type="number" required
                                    className={`form-control form-control-sm ${touched.phoneNumber && errors.phoneNumber ? 'error-input' : ''}`} name="phoneNumber"
                                    maxLength="10"onBlur={handleBlur} onKeyUp={handleEvent} placeholder="Phone No"
                                  />
                                </div>
                                {errors.phoneNumber && touched.phoneNumber && (
                                  <span className="text-danger" id="phoneNumberValidationError">
                                    {errors.phoneNumber}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-lg-3">
                                <label htmlFor="degree" className="form-label mb-0">Gender</label>
                                <select
                                  className={`form-control form-control-sm ${errors.gender ? 'is-invalid' : ''}`}
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
                                  <label htmlFor="degree" className="form-label mb-0">Country</label>
                                  <select className="form-control form-control-sm" value={communicationaddress.countryId}
                                    name="countryId"
                                    onChange={handleInputsetcommunicationaddress} >
                                  <option value="">Select Country</option>
                                    {countryOptions.map((country) => (
                                      <option key={country.value} value={country.value}>
                                        {country.label?country.label:communicationaddress.countryId}
                                      </option>
                                    ))}
                                  </select>
                              </div>
                              <div className="col-12 col-lg-3">
                              <label htmlFor="degree" className="form-label mb-0">State</label>
                                <select className="form-control form-control-sm"   
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
                                <label htmlFor="degree" className="form-label mb-0">City</label>
                                <select className="form-control form-control-sm" 
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
                            <div className="row">
                              <div className="col-12 col-lg-3">
                                <label className="form-check-label mb-0">
                                  Profession
                                </label>
                                <select
                                  className={`form-select form-select-sm ${errors.profession ? 'is-invalid' : ''}`}
                                  name="profession"
                                  value={formValues.profession}
                                  onChange={handleEvent}
                                  onBlur={handleBlur}
                                  required
                                  aria-label="Default select example"
                                >
                                  <option value="">Select a profession</option>
                                    {itProfessions.map((profession) => (
                                      <option key={profession.value} value={profession.value}>
                                        {profession.label}
                                      </option>
                                    ))}
                                </select>
                                {errors.profession && (
                                  <div className="invalid-feedback">
                                    {errors.profession}
                                  </div>
                                )}
                              </div>
                              <div className="col-12 col-lg-3">
                              <FormControl sx={{minWidth: "100%"}}>
                                <label className="form-check-label mb-0" htmlFor="sector">
                                  Sector
                                </label>
                                <Select
                                  multiple
                                  value={formValues.sector?.map((sector) => sector.value)}
                                  onChange={(event) => handleSectorEvent(event)}
                                  renderValue={(selected) => selected.join(', ')}
                                  className={`${errors.sector ? 'is-invalid' : ''}`}
                                  sx={{ height: '2rem' }} 
                                >
                                  {industry.map((industry) => (
                                    <MenuItem key={industry.id} value={industry.name}>
                                      {industry.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                {errors.sector && (
                                  <div className="invalid-feedback">
                                    {errors.sector}
                                  </div>
                                )}
                                </FormControl>
                              </div>
                              <div className="col-12 col-lg-3">
                                 <label className="form-check-label mb-0" for="flexCheckDefault">
                                    Upload Resume
                                  </label>
                                  <div className="mb-3">
                                    <input className="form-control form-select-sm" 
                                    type="file" 
                                    id="formFile"
                                    onChange={handleFileChange}
                                    accept='application/pdf, image/png'
                                    //id="fileUpload"
                                    
                                    name="attachmentImg"
                                    />
                                  </div>
                              </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-12 ms-0 pe-0 text-end">
                                  <div className="form-check d-flex justify-content-end align-items-center">
                                    <label className="form-check-label me-5" htmlFor="flexCheckDefault">
                                      Are You Fresher
                                    </label>
                                    <input
                                      className="form-check-input form-check-input-sm me-3"
                                      type="checkbox"
                                      onChange={handleCheckExperience}
                                      checked={ isFresher} 
                                      name="experience"
                                      id="flexCheckDefault"
                                    />                       
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" style={{height: "40px", padding: "5px 10px"}} data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
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
                                              className="form-control form-control-sm" 
                                              name={`qualification-${index}`}
                                              value={qualification.qualification}
                                              onChange={(e) => handleChange(qualification.id, 'qualification', e.target.value)}
                                            >
                                                <option value="">Select a Qualification</option>
                                                   {itQualifications.map((qualif)=>(
                                                  <option key={qualif.value} value={qualif.value}>
                                                    {qualif.label}
                                                  </option>
                                                ))} 
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-3">
                                            <label htmlFor={`institutionName-${index}`} className="form-label">
                                              Institute Name
                                            </label>
                                            <select 
                                              className="form-control form-control-sm" 
                                              name={`institutionName-${index}`}
                                              value={qualification.institutionName}
                                              onChange={(e) => handleChange(qualification.id, 'institutionName', e.target.value)}
                                            >
                                               <option value="">Select a Institute Name</option>
                                                   {indianInstitutes.map((Institute)=>(
                                                  <option key={Institute.value} value={Institute.value}>
                                                    {Institute.label}
                                                  </option>
                                                ))} 
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-3">
                                            <label htmlFor={`yearOfPassOut-${index}`} className="form-label">
                                              Year Of PassOut
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control form-control-sm"
                                              id={`yearOfPassOut-${index}`}
                                              name="yearOfPassOut"
                                              value={qualification.yearOfPassOut}
                                              onChange={(e) => handleChange(qualification.id, 'yearOfPassOut', e.target.value)}
                                            />
                                          </div>
                                          <div className="col-12 col-lg-2">
                                            <label htmlFor={`percentage-${index}`} className="form-label">
                                              Percentage
                                            </label>
                                            <input 
                                              type="text" 
                                              required
                                              className="form-control form-control-sm" 
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
                            <div className="row mt-2 mb-4">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" style={{height: "40px", padding: "5px 10px"}} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Experience
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <div className="row align-items-center">
                                        <div className="col-12 col-lg-2">
                                          <label htmlFor="Experience" className="form-label">Total Experience</label>
                                        </div>
                                        <div className="col-12 col-lg-1 text-left">
                                          <input 
                                            type="text" 
                                            required
                                            value={formValues.totalExperience}
                                            className="form-control form-control-sm" 
                                            onChange={handleEvent}
                                            name="totalExperience" 
                                            placeholder="Exp" 
                                          />
                                        </div>
                                        <div className="col-12 col-lg-9 text-lg-end">
                                          <div className="form-check d-flex justify-content-end align-items-center">
                                            <label className="form-check-label me-5" htmlFor="flexCheckDefault">
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
                                        <div className="row">
                                          <div className="col-12 col-lg-3 ms-0 pe-0">
                                            <label className="form-check-label" htmlFor="currentCompany">
                                              Current Company
                                            </label>
                                            <select
                                              className="form-select form-select-sm"
                                              name="currentCompany"
                                              onChange={handleCurrent}
                                              aria-label="Default select example"
                                            >
                                              <option value="">Select a Company</option>
                                               {consultingAndITCompanies.map((company)=>(
                                                  <option key={company.value} value={company.value}>
                                                    {company.label}
                                                  </option>
                                                ))} 
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-2 ms-0 pe-0">
                                            <label className="form-check-label" htmlFor="currentRole">
                                              Current Role
                                            </label>
                                            <select
                                              className="form-select form-select-sm"
                                              name="currentRole"
                                              onChange={handleCurrent}
                                              aria-label="Default select example"
                                            >
                                              <option value="">Select a Role</option>
                                               {itIndustryRoles.map((role)=>(
                                                  <option key={role.value} value={role.value}>
                                                    {role.label}
                                                  </option>
                                                ))} 
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-2 ms-0 pe-0">
                                            <label className="form-check-label" htmlFor="currentDesignation">
                                              Current Designation
                                            </label>
                                            <select
                                              className="form-select form-select-sm"
                                              name="currentDesignation"
                                              onChange={handleCurrent}
                                              aria-label="Default select example"
                                            >
                                               <option value="">Select a Designation</option>
                                               {industryDesignations.map((designation)=>(
                                                  <option key={designation.value} value={designation.value}>
                                                    {designation.label}
                                                  </option>
                                                ))} 
                                            </select>
                                          </div>
                                          <div className="col-12 col-lg-2 ms-0 pe-0">
                                            <label className="form-check-label" htmlFor="joinDate">
                                              Join Date
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control form-select-sm"
                                              name="joinDate"
                                              onChange={handleCurrent}
                                              aria-label="Join Date"
                                            />
                                          </div>
                                          <div className="col-12 col-lg-2 ms-0 pe-0">
                                            <label className="form-check-label" htmlFor="noticePeriod">
                                              Notice Period
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control form-control-sm"
                                              name="noticePeriod"
                                              onChange={handleCurrent}
                                              placeholder="Notice Period"
                                            />
                                          </div>
                                        </div>                
                                      ) : (
                                        <>
                                          {lastCompany.map((company, index) => (
                                            <div className="row" key={company.id}>
                                              <div className="col-12 col-lg-3 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`lastCompany-${index}`}>
                                                  Last Company
                                                </label>
                                                <select
                                                  className="form-select form-select-sm"
                                                  name="lastCompanyName"
                                                  value={company.lastCompanyName}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].lastCompanyName = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value="">Select a Company</option>
                                                  {consultingAndITCompanies.map((company)=>(
                                                      <option key={company.value} value={company.value}>
                                                        {company.label}
                                                      </option>
                                                    ))} 
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`lastRole-${index}`}>
                                                  Last Role
                                                </label>
                                                <select
                                                  className="form-select form-select-sm"
                                                  name="lastRole"
                                                  value={company.lastRole}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].lastRole = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value="">Select a Role</option>
                                                   {itIndustryRoles.map((role)=>(
                                                  <option key={role.value} value={role.value}>
                                                    {role.label}
                                                  </option>
                                                ))} 
                                                </select>
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`lastDesignation-${index}`}>
                                                  Last Designation
                                                </label>
                                                <select
                                                  className="form-select form-select-sm"
                                                  name="lastDesignation"
                                                  value={company.lastDesignation}
                                                  onChange={(e) => {
                                                    const newLastCompany = [...lastCompany];
                                                    newLastCompany[index].lastDesignation = e.target.value;
                                                    setLastCompany(newLastCompany);
                                                  }}
                                                  aria-label="Default select example"
                                                >
                                                  <option value="">Select a Designation</option>
                                                   {industryDesignations.map((designation)=>(
                                                  <option key={designation.value} value={designation.value}>
                                                    {designation.label}
                                                  </option>
                                                ))} 
                                                </select>
                                              </div>
                                          
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`joinDate-${index}`}>
                                                  Join Date
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control form-control-sm"
                                                  name="lastJoiningDate"
                                                  value={company.lastJoiningDate}
                                                  onChange={(e) => handleDateChange(e, index, 'lastJoiningDate')}
                                                  aria-label="Join Date"
                                                />
                                              </div>
                                              <div className="col-12 col-lg-2 ms-0 pe-0">
                                                <label className="form-check-label" htmlFor={`relievingDate-${index}`}>
                                                  Relieving Date
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control form-control-sm"
                                                  name="lastRelievingDate"
                                                  value={company.lastRelievingDate}
                                                  onChange={(e) => handleDateChange(e, index, 'lastRelievingDate')}
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
                                              + Add More Exp
                                            </p>
                                          </div>
                                        </>
                                      )}
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
                              className="btn btn-primary bg-primary register-btn-style"
                              disabled={false}
                              value={lableButton}
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
          <div className="container-fluid">
        <FooterTwo/>
        </div>
      </div>
    </div>
  )
}
export default SignUp
