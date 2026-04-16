// import React, { useState, useEffect } from "react";
// import constants from "../../constants/Constants";
// import "boxicons/css/boxicons.min.css";
// import "./signup.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { signUpUser } from "../../redux/store/Slice";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import jsonObject from "./MockJsonCandidate.js";
// import mainLogo from "../../assets/img/home3/logo.png";
// import MobileMenu from "../Header/MobileMenu";
// import FooterTwo from "../Footer/FooterTwo";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import DropDown from "../common/DropDown.js";
// import "react-toastify/dist/ReactToastify.css";

// function SignUp() {
//   const [offset, setOffset] = useState(true);
//   const [mobileMenu, setMobileMenu] = useState(true);
//   const dispatch = useDispatch();
//   const userCandidate = useSelector((state) => state.user.user);
//   const [lableButton, setLablebutton] = useState("Register");

//   const handleOffset = (e) => {
//     e.preventDefault();
//     setOffset(!offset);
//   };

//   const handleMobileMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const navigate = useNavigate();

//   const {
//     itProfessions,
//     allIndustryProfessions,
//     consultingAndITCompanies,
//     itIndustryRoles,
//     industryDesignations,
//     itQualifications,
//     indianInstitutes,
//   } = jsonObject;

//   const initialAddressValues = { cityId: "", stateId: "", countryId: "" };

//   // ---------- State declarations ----------
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNumber: "",
//     gender: "",
//     degree: "",
//     experience: "",
//     profession: "",
//     sector: [],
//     totalexp: "",
//     position: "",
//     totalExperience: "",
//     experienceFresher: "",
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNumber: "",
//     gender: "",
//     profession: "",
//     sector: "",
//   });

//   const [touched, setTouched] = useState({
//     firstName: false,
//     lastName: false,
//     emailId: false,
//     phoneNumber: false,
//     gender: false,
//     profession: false,
//     sector: false,
//   });

//   const [isFresher, setIsFresher] = useState(false);
//   const [data, setData] = useState([]);
//   const [countryOptions, setCountryOptions] = useState([]);
//   const [getcityName, setCityName] = useState("");
//   const [getcountryName, setCountryName] = useState("");
//   const [cityOptionsForCommunication, setCityOptionsForCommunication] =
//     useState([]);
//   const [stateOptionsForCommunication, setStateOptionsForCommunication] =
//     useState([]);
//   const [communicationaddress, setcommunicationaddress] =
//     useState(initialAddressValues);
//   const [getstateName, setStateName] = useState("");
//   const [userCode, setUserCode] = useState("");
//   const [isWorking, setIsWorking] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [fileLimit, setFileLimit] = useState(false);
//   const MAX_COUNT = 5;

//   // Qualification, Experience, Skills states (all with id)
//   const [qualifications, setQualifications] = useState([
//     {
//       id: 1,
//       qualification: "",
//       institutionName: "",
//       yearOfPassOut: "",
//       percentage: "",
//       candidateId: "",
//     },
//   ]);

//   const [currentCompany, setCurrentCompany] = useState([]); // FIX: start empty
//   const [lastCompany, setLastCompany] = useState([]); // FIX: start empty

//   const [industry, setIndustry] = useState([]);
//   const [countryId, setCountryId] = useState("");
//   const [stateId, setStateId] = useState("");
//   const [cityId, setCityId] = useState("");

//   const [dob, setDob] = useState("");
//   const [candidateType, setCandidateType] = useState("");
//   const [primaryRole, setPrimaryRole] = useState(null); // FIX: start null (object)
//   const [primaryDesignation, setPrimaryDesignation] = useState("");
//   const [degree, setDegree] = useState("");

//   const [skillList, setSkillList] = useState([
//     {
//       id: 1,
//       skills: "",
//       rate: 0,
//       categoryCode: "",
//       categoryName: "",
//       description: "",
//     },
//   ]);

//   const [userCodeField, setUserCodeField] = useState("");
//   const [userPassword, setUserPassword] = useState("string");

//   // ----- Helper functions -----
//   const getDropdownOptions = (array, keyLabel, keyValue) => {
//     return array.map((item) => ({
//       label: item[keyLabel],
//       value: item[keyValue],
//     }));
//   };

//   function handleInputsetcommunicationaddress(e) {
//     const { name, value } = e.target;

//     if (name === "cityId") {
//       setCityId(e.target.value);
//       setCityName(e.target.options[e.target.selectedIndex].text);
//     }

//     switch (name) {
//       case "countryId": {
//         const [curCountry] = data.filter(
//           (country) => country.countryId === +value,
//         );
//         if (!curCountry) break;
//         setCountryId(curCountry.countryId);
//         setCountryName(curCountry.countryName);
//         setStateOptionsForCommunication(
//           getDropdownOptions(curCountry?.states ?? [], "stateName", "stateId"),
//         );
//         setCityOptionsForCommunication([]);
//         break;
//       }
//       case "stateId": {
//         const [curCountry] = data.filter(
//           (country) => country.countryId === +communicationaddress.countryId,
//         );
//         if (!curCountry) break;
//         const [curState] = (curCountry?.states ?? []).filter(
//           (state) => state.stateId === +value,
//         );
//         if (!curState) break;
//         setStateId(curState.stateId);
//         setStateName(curState.stateName);
//         setCityOptionsForCommunication(
//           getDropdownOptions(curState?.cities ?? [], "cityName", "cityId"),
//         );
//         break;
//       }
//       default:
//         break;
//     }

//     setcommunicationaddress({ ...communicationaddress, [name]: value });
//   }

//   // ----- Effects -----
//   useEffect(() => {
//     axios
//       .get(constants.EORMURL + "countries", { headers: {} })
//       .then((response) => {
//         setData(response.data);
//         setCountryOptions(
//           getDropdownOptions(response.data, "countryName", "countryId"),
//         );
//       })
//       .catch(console.error);

//     axios
//       .get(constants.CANDIDATE + "industry/findAll", { headers: {} })
//       .then((response) => setIndustry(response.data))
//       .catch(console.error);
//   }, []);

//   // FIX: Load userCandidate data into form
//   useEffect(() => {
//     if (!userCandidate || Object.keys(userCandidate).length === 0) return;

//     // ----- Sector (industry) -----
//     let sectorData = [];
//     if (
//       userCandidate.industryId &&
//       userCandidate.industryId.length > 0 &&
//       userCandidate.industryId[0] !== ""
//     ) {
//       sectorData = userCandidate.industryId.map((id, idx) => ({
//         id: id,
//         value: userCandidate.industryName?.[idx] || "",
//       }));
//     }

//     // ----- Basic fields -----
//     setFormValues({
//       firstName: userCandidate.firstName || "",
//       lastName: userCandidate.lastName || "",
//       emailId: userCandidate.emailId || "",
//       gender: userCandidate.gender || "",
//       phoneNumber: userCandidate.mobileNumber || "",
//       profession: userCandidate.profession || "",
//       sector: sectorData,
//       totalExperience: userCandidate.totalExperience || "0",
//     });

//     setIsFresher(userCandidate.experienceFresher || false);

//     // ----- Address IDs -----
//     setcommunicationaddress({
//       countryId: userCandidate.countryId || "",
//       stateId: userCandidate.stateId || "",
//       cityId: userCandidate.cityId || "",
//     });
//     // Store the names for later submit (will be refined after countries load)
//     setCountryName(userCandidate.country || "");
//     setStateName(userCandidate.state || "");
//     setCityName(userCandidate.city || "");

//     // ----- Qualifications -----
//     if (userCandidate.candidateQualificationList?.length) {
//       setQualifications(
//         userCandidate.candidateQualificationList.map((qual, idx) => ({
//           id: idx + 1,
//           qualification: qual.qualification || "",
//           institutionName: qual.institutionName || "",
//           yearOfPassOut: qual.yearOfPassOut || "",
//           percentage: qual.percentage || "",
//           candidateId: qual.candidateId || "",
//         })),
//       );
//     }

//     // ----- Experience -----
//     if (userCandidate.candidateExperiencesList?.length) {
//       const exp = userCandidate.candidateExperiencesList[0];
//       const currentlyWorking = exp.currentlyWorking || false;
//       setIsWorking(currentlyWorking);

//       if (currentlyWorking) {
//         setCurrentCompany([
//           {
//             id: 1,
//             currentCompany: exp.currentCompany || exp.lastCompanyName || "",
//             currentRole: exp.currentRole || exp.lastRole || "",
//             currentDesignation:
//               exp.currentDesignation || exp.lastDesignation || "",
//             joiningDate: exp.joiningDate || exp.lastJoiningDate || "",
//             noticePeriod: exp.noticePeriod || "",
//             candidateId: exp.candidateId || "",
//           },
//         ]);
//         setLastCompany([]);
//       } else {
//         setLastCompany(
//           userCandidate.candidateExperiencesList.map((exp, idx) => ({
//             id: idx + 1,
//             lastCompanyName: exp.lastCompanyName || "",
//             lastRole: exp.lastRole || "",
//             lastDesignation: exp.lastDesignation || "",
//             lastJoiningDate: exp.lastJoiningDate || "",
//             lastRelievingDate: exp.lastRelievingDate || "",
//             candidateId: exp.candidateId || "",
//           })),
//         );
//         setCurrentCompany([]);
//       }
//     } else {
//       // No experience entries -> ensure both arrays are empty
//       setCurrentCompany([]);
//       setLastCompany([]);
//     }

//     setDob(userCandidate.dob ? userCandidate.dob.split("T")[0] : "");

//     // ----- Candidate Type (map EXTERNAL → experienced) -----
//     let ct = userCandidate.candidateType || "";
//     if (ct === "EXTERNAL") ct = "experienced";
//     setCandidateType(ct);

//     // ----- Primary Role (convert string to object) -----
//     if (userCandidate.role) {
//       setPrimaryRole({ value: userCandidate.role, label: userCandidate.role });
//     } else {
//       setPrimaryRole(null);
//     }

//     setPrimaryDesignation(userCandidate.designation || "");
//     setDegree(userCandidate.degree || "");

//     // ----- Skills -----
//     if (userCandidate.candidateSkillList?.length) {
//       setSkillList(
//         userCandidate.candidateSkillList.map((skill, idx) => ({
//           id: idx + 1,
//           skills: skill.skills || "",
//           rate: skill.rate || 0,
//           categoryCode: skill.categoryCode || "",
//           categoryName: skill.categoryName || "",
//           description: skill.description || "",
//         })),
//       );
//     }
//   }, [userCandidate]);

//   // FIX: After countries are loaded, resolve country/state/city names from IDs
//   useEffect(() => {
//     if (data.length === 0) return;
//     if (!userCandidate || Object.keys(userCandidate).length === 0) return;

//     const countryObj = data.find(
//       (c) => c.countryId === parseInt(userCandidate.countryId),
//     );
//     if (countryObj) {
//       setCountryName(countryObj.countryName);
//       const stateObj = countryObj.states?.find(
//         (s) => s.stateId === parseInt(userCandidate.stateId),
//       );
//       if (stateObj) {
//         setStateName(stateObj.stateName);
//         const cityObj = stateObj.cities?.find(
//           (ct) => ct.cityId === parseInt(userCandidate.cityId),
//         );
//         if (cityObj) setCityName(cityObj.cityName);
//       }
//     }
//   }, [data, userCandidate]);

//   useEffect(() => {
//     if (!userCode) return;

//     const verifyCandidate = async () => {
//       try {
//         const res = await fetch(
//           `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${userCode}&isVerify=true`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               accept: "application/json",
//             },
//           },
//         );
//         if (res.ok) {
//           setTimeout(() => {
//             toast.success("User Signup successfully and verified in Email");
//             window.location.href = "/login";
//           }, 2000);
//         }
//       } catch (error) {
//         console.error("Verify error:", error);
//       }
//     };

//     verifyCandidate();
//     setLablebutton("Update");

//     axios
//       .get(constants.CANDIDATE + `candidate/findCandidateById/${userCode}`, {
//         headers: {},
//       })
//       .then((response) => dispatch(signUpUser(response.data)))
//       .catch(console.error);
//   }, [userCode]);

//   // ----- Event handlers -----
//   const handleCheckExperience = (e) => setIsFresher(e.target.checked);
//   const handleCheckboxChange = () => setIsWorking((prev) => !prev);

//   const handleEvent = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormValues({
//         ...formValues,
//         [name]: checked ? "fresher" : "Experience",
//       });
//     } else if (name === "emailId") {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setErrors({
//         ...errors,
//         [name]: emailPattern.test(value) ? "" : "Invalid email address",
//       });
//     } else if (name === "phoneNumber") {
//       if (value.length === 10) {
//         setErrors({
//           ...errors,
//           [name]: /^[0-9]{10}$/.test(value) ? "" : "Invalid phone number",
//         });
//       } else {
//         setErrors({ ...errors, [name]: "Phone number must be 10 digits" });
//       }
//     } else if (name === "gender") {
//       setErrors({
//         ...errors,
//         [name]: value === "" ? "Please select a gender" : "",
//       });
//     } else {
//       setErrors({
//         ...errors,
//         [name]:
//           value.length > 50
//             ? `${name.charAt(0).toUpperCase() + name.slice(1)} cannot exceed 50 characters`
//             : "",
//       });
//     }
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleCurrent = (event) => {
//     const { name, value } = event.target;
//     setCurrentCompany((prev) =>
//       prev.length > 0
//         ? prev.map((item) => ({ ...item, [name]: value }))
//         : [{ id: 1, [name]: value }],
//     );
//   };

//   const handleChange = (id, field, value) => {
//     setQualifications((prev) =>
//       prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)),
//     );
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched({ ...touched, [name]: true });
//     if (!value)
//       setErrors({ ...errors, [name]: "Please fill the required field" });
//   };

//   const handleAddMoreDegree = () => {
//     const nextId =
//       qualifications.length > 0
//         ? Math.max(...qualifications.map((q) => q.id)) + 1
//         : 1;
//     setQualifications([
//       ...qualifications,
//       {
//         id: nextId,
//         qualification: "",
//         institutionName: "",
//         yearOfPassOut: "",
//         percentage: "",
//         candidateId: "string",
//       },
//     ]);
//   };

//   const handleRemoveDegree = (id) => {
//     setQualifications((prev) => prev.filter((q) => q.id !== id));
//   };

//   const handleUploadedFiles = (files) => {
//     const uploaded = [...uploadedFiles];
//     let limitExceeded = false;
//     files.forEach((file) => {
//       if (uploaded.findIndex((f) => f.name === file.name) === -1) {
//         uploaded.push(file);
//         if (uploaded.length === MAX_COUNT) setFileLimit(true);
//         if (uploaded.length > MAX_COUNT) {
//           toast.error(`You can only upload a maximum of ${MAX_COUNT} files`);
//           setFileLimit(false);
//           limitExceeded = true;
//         }
//       }
//     });
//     if (!limitExceeded) setUploadedFiles(uploaded);
//   };

//   const handleFileChange = (e) =>
//     handleUploadedFiles(Array.from(e.target.files));

//   const handleAddMoreCurrentCompany = () => {
//     const nextId =
//       currentCompany.length > 0
//         ? Math.max(...currentCompany.map((c) => c.id)) + 1
//         : 1;
//     setCurrentCompany([
//       ...currentCompany,
//       {
//         id: nextId,
//         currentCompany: "",
//         currentRole: "",
//         currentDesignation: "",
//         joiningDate: "",
//         noticePeriod: "",
//         candidateId: "string",
//       },
//     ]);
//   };

//   const handleDateChange = (e, index, dateType) => {
//     const updated = [...lastCompany];
//     const val = e.target.value;
//     if (dateType === "lastJoiningDate") {
//       if (
//         updated[index].lastRelievingDate &&
//         new Date(val) > new Date(updated[index].lastRelievingDate)
//       ) {
//         alert("Joining Date cannot be after Relieving Date");
//         return;
//       }
//       updated[index] = { ...updated[index], lastJoiningDate: val };
//     } else if (dateType === "lastRelievingDate") {
//       if (
//         updated[index].lastJoiningDate &&
//         new Date(val) < new Date(updated[index].lastJoiningDate)
//       ) {
//         alert("Relieving Date must not be before Joining Date");
//         return;
//       }
//       updated[index] = { ...updated[index], lastRelievingDate: val };
//     }
//     setLastCompany(updated);
//   };

//   const handleSectorEvent = (event) => {
//     const selectedValues = event.target.value;
//     const selectedIndustries = industry.filter((ind) =>
//       selectedValues.includes(ind.name),
//     );
//     setFormValues((prev) => ({
//       ...prev,
//       sector: selectedIndustries.map((ind) => ({
//         id: ind.id,
//         value: ind.name,
//       })),
//     }));
//   };

//   const handleRemoveCurrentCompany = (id) => {
//     setCurrentCompany((prev) => prev.filter((c) => c.id !== id));
//   };

//   const handleAddMoreLastCompany = () => {
//     const nextId =
//       lastCompany.length > 0
//         ? Math.max(...lastCompany.map((c) => c.id)) + 1
//         : 1;
//     setLastCompany([
//       ...lastCompany,
//       {
//         id: nextId,
//         lastCompanyName: "",
//         lastRole: "",
//         lastDesignation: "",
//         lastJoiningDate: "",
//         lastRelievingDate: "",
//         candidateId: "string",
//       },
//     ]);
//   };

//   const handleRemoveLastCompany = (id) => {
//     setLastCompany((prev) => prev.filter((c) => c.id !== id));
//   };

//   const handleDobChange = (e) => setDob(e.target.value);
//   const handleCandidateTypeChange = (e) => setCandidateType(e.target.value);
//   const handlePrimaryRoleChange = (selectedOption) => {
//     setPrimaryRole(selectedOption);
//   };
//   const handlePrimaryDesignationChange = (e) =>
//     setPrimaryDesignation(e.target.value);

//   const handleSkillChange = (id, field, value) => {
//     setSkillList((prev) =>
//       prev.map((skill) =>
//         skill.id === id ? { ...skill, [field]: value } : skill,
//       ),
//     );
//   };

//   const handleAddSkill = () => {
//     setSkillList((prev) => {
//       const nextId =
//         prev.length > 0 ? Math.max(...prev.map((s) => s.id)) + 1 : 1;
//       return [
//         ...prev,
//         {
//           id: nextId,
//           skills: "",
//           rate: 0,
//           categoryCode: "",
//           categoryName: "",
//           description: "",
//         },
//       ];
//     });
//   };

//   const handleRemoveSkill = (id) => {
//     setSkillList((prev) => prev.filter((skill) => skill.id !== id));
//   };

//   // ----- SUBMIT FUNCTION (fixed) -----
//   const submitSignUpUser = async (e) => {
//     const buttonValue = e.nativeEvent.submitter.value;
//     e.preventDefault();

//     const now = new Date().toISOString();
//     const fullName = `${formValues.firstName} ${formValues.lastName}`;

//     // Build experiences list
//     let candidateExperiencesList;
//     if (isWorking) {
//       candidateExperiencesList = currentCompany.map((item) => ({
//         createdBy: fullName,
//         updatedBy: buttonValue === "Update" ? fullName : null,
//         lastCompanyName: item.currentCompany || "",
//         lastRole: item.currentRole || "",
//         lastDesignation: item.currentDesignation || "",
//         lastJoiningDate: item.joiningDate || "",
//         lastRelievingDate: "",
//         candidateId: userCode || "string",
//         currentlyWorking: true,
//       }));
//     } else {
//       candidateExperiencesList = lastCompany.map((item) => ({
//         createdBy: fullName,
//         updatedBy: buttonValue === "Update" ? fullName : null,
//         lastCompanyName: item.lastCompanyName || "",
//         lastRole: item.lastRole || "",
//         lastDesignation: item.lastDesignation || "",
//         lastJoiningDate: item.lastJoiningDate || "",
//         lastRelievingDate: item.lastRelievingDate || "",
//         candidateId: userCode || "string",
//         currentlyWorking: false,
//       }));
//     }

//     const candidateQualificationList = qualifications.map((qual) => ({
//       createdBy: fullName,
//       updatedBy: buttonValue === "Update" ? fullName : null,
//       qualification: qual.qualification || "",
//       institutionName: qual.institutionName || "",
//       yearOfPassOut: qual.yearOfPassOut || "",
//       percentage: qual.percentage || "",
//       candidateId: userCode || "string",
//     }));

//     const candidateSkillList = skillList.map((skill) => ({
//       skills: skill.skills || "",
//       rate: skill.rate || 0,
//       categoryCode: skill.categoryCode || "",
//       categoryName: skill.categoryName || "",
//       description: skill.description || "",
//       createdBy: fullName,
//       updatedBy: buttonValue === "Update" ? fullName : null,
//       status: "active",
//       createdDatetime: now,
//       updatedDatetime: now,
//       candidateId: userCode || "string",
//     }));

//     // FIX: Use stored names (now properly set)
//     const finalData = {
//       ...(buttonValue === "Update" && { id: userCode, updatedBy: fullName }),
//       createdBy: fullName,
//       firstName: formValues.firstName,
//       lastName: formValues.lastName,
//       emailId: formValues.emailId,
//       mobileNumber: formValues.phoneNumber,
//       experienceFresher: isFresher,
//       totalExperience: formValues.totalExperience || "0",
//       degree: degree || "",
//       country: getcountryName || "",
//       countryId: countryId ? String(countryId) : "",
//       state: getstateName || "",
//       stateId: stateId ? String(stateId) : "",
//       city: getcityName || "",
//       cityId: cityId ? String(cityId) : "",
//       gender: formValues.gender,
//       dob: dob,
//       candidateType: candidateType || "experienced",
//       profession: formValues.profession,
//       industryId: formValues.sector?.map((item) => item.id) || [],
//       industryName: formValues.sector?.map((item) => item.value) || [],
//       role: primaryRole?.value || primaryRole || "",
//       designation: primaryDesignation || "",
//       candidateExperiencesList,
//       candidateQualificationList,
//       candidateSkillList,
//     };

//     console.log("Final payload →", JSON.stringify(finalData, null, 2));

//     const buildFormData = () => {
//       const blob = new Blob([JSON.stringify(finalData)], {
//         type: "application/json",
//       });
//       const fd = new FormData();
//       fd.append("candidate", blob);
//       uploadedFiles.forEach((file) => fd.append("documentList", file));
//       return fd;
//     };

//     if (buttonValue === "Register") {
//       try {
//         const res = await fetch(constants.CANDIDATE + "candidate/save", {
//           method: "POST",
//           body: buildFormData(),
//         });
//         if (res.ok) {
//           const response = await res.json();
//           const newCandidateId = response.id;
//           setUserCode(newCandidateId);
//           toast.success("Candidate Registered Successfully");

//           // ----- Call verification API -----
//           try {
//             // Fix the URL: remove the invalid "{candidate}" placeholder.
//             // Assuming the correct endpoint is "/verifyCandidate?candidateId=..."
//             const verifyUrl = `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${newCandidateId}&isVerify=true`;
//             // If the API requires POST (as in your original code), use POST.
//             // If it should be GET, change to GET.
//             const verifyRes = await fetch(verifyUrl, {
//               method: "POST", // or "GET" depending on your backend
//               headers: {
//                 "Content-Type": "application/json",
//                 accept: "application/json",
//               },
//             });
//             if (verifyRes.ok) {
//               toast.success("Verification email sent successfully");
//             } else {
//               console.warn(
//                 "Verification API responded with status:",
//                 verifyRes.status,
//               );
//             }
//           } catch (verifyError) {
//             console.error("Verification API error:", verifyError);
//           }

//           setTimeout(
//             () =>
//               alert(
//                 "Registration complete! You can update your details if needed.",
//               ),
//             1000,
//           );
//         } else if (res.status === 409) {
//           toast.error("Email already in use. Please try a different email.");
//         } else {
//           const errText = await res.text();
//           console.error("Server error:", errText);
//           toast.error(
//             `Registration failed (${res.status}). Check console for details.`,
//           );
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("An unexpected error occurred. Please try again.");
//       }
//     } else if (buttonValue === "Update") {
//       try {
//         const res = await fetch(
//           constants.CANDIDATE + "candidate/updateCandidate",
//           {
//             method: "PUT",
//             body: buildFormData(),
//           },
//         );
//         if (res.ok) {
//           toast.success("Candidate Updated Successfully");
//         } else if (res.status === 409) {
//           toast.error("Email already in use. Please try a different email.");
//         } else {
//           const errText = await res.text();
//           console.error("Server error:", errText);
//           toast.error(
//             `Update failed (${res.status}). Check console for details.`,
//           );
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("An unexpected error occurred. Please try again.");
//       }
//     }
//   };

//   // ----- JSX (unchanged except for the DropDown primaryRole value) -----
//   return (
//     <div className="wrapper">
//       <div className="section-authentication-signin d-flex align-items-center justify-content-center my- my-lg-0">
//         <header className="header-wrap header-1 sticky-top p-1">
//           <div className="container-fluid d-flex justify-content-between align-items-center">
//             <div className="logo">
//               <Link to="/">
//                 <img src={mainLogo} alt="logo" />
//               </Link>
//             </div>
//             <div className="header-right-area d-flex justify-content-between">
//               <div className="main-menu d-none d-xl-block me-xl-5">
//                 <ul>
//                   <li>
//                     <a href="/">Home</a>
//                   </li>
//                   <li>
//                     <Link to="/about">About Us</Link>
//                   </li>
//                   <li>
//                     <Link to="/services">Services</Link>
//                   </li>
//                   <li>
//                     <Link to="/career">Career</Link>
//                   </li>
//                   <li>
//                     <Link to="/contact">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="header-right-elements d-flex align-items-center justify-content-between">
//                 <div className="d-inline-block ms-4 d-xl-none">
//                   <div className="mobile-nav-wrap">
//                     <div id="hamburger" onClick={handleMobileMenu}>
//                       <i className="fal fa-bars"></i>
//                     </div>
//                     <MobileMenu
//                       mobileMenu={mobileMenu}
//                       handleMobileMenu={handleMobileMenu}
//                     />
//                   </div>
//                   <div className="overlay"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="container-fluid">
//           <div className="card mb-0 bg-light">
//             <div className="card-body">
//               <div className="p-1">
//                 <div className="text-center mb-4">
//                   <h5 className="headerStyle">Candidate Registration</h5>
//                 </div>
//                 <div className="form-body">
//                   <form className="row g-3" onSubmit={submitSignUpUser}>
//                     <div className="col-12 d-flex gap-2">
//                       <div className="container-fluid">
//                         {/* Row 1: First Name, Last Name, Email, Phone */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputFirstName"
//                               className="form-label mb-0"
//                             >
//                               First Name
//                             </label>
//                             <input
//                               type="text"
//                               required
//                               value={formValues.firstName}
//                               className={`form-control form-control-sm ${touched.firstName && errors.firstName ? "error-input" : ""}`}
//                               name="firstName"
//                               onBlur={handleBlur}
//                               onChange={handleEvent}
//                               placeholder="First Name"
//                             />
//                             {errors.firstName && touched.firstName && (
//                               <span className="text-danger">
//                                 {errors.firstName}
//                               </span>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputLastName"
//                               className="form-label mb-0"
//                             >
//                               Last Name
//                             </label>
//                             <input
//                               type="text"
//                               required
//                               value={formValues.lastName}
//                               className={`form-control form-control-sm ${touched.lastName && errors.lastName ? "error-input" : ""}`}
//                               name="lastName"
//                               onChange={handleEvent}
//                               onBlur={handleBlur}
//                               placeholder="Last Name"
//                             />
//                             {errors.lastName && touched.lastName && (
//                               <span className="text-danger">
//                                 {errors.lastName}
//                               </span>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputEmailAddress"
//                               className="form-label mb-0"
//                             >
//                               Email
//                             </label>
//                             <input
//                               type="email"
//                               required
//                               value={formValues.emailId}
//                               className={`form-control form-control-sm ${touched.emailId && errors.emailId ? "error-input" : ""}`}
//                               name="emailId"
//                               onChange={handleEvent}
//                               onBlur={handleBlur}
//                               placeholder="john@example.com"
//                             />
//                             {errors.emailId && touched.emailId && (
//                               <span className="text-danger">
//                                 {errors.emailId}
//                               </span>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputPhoneNumber"
//                               className="form-label mb-0"
//                             >
//                               Phone
//                             </label>
//                             <div className="input-group">
//                               <div className="input-group-prepend">
//                                 <span className="input-group-text country-code">
//                                   +91
//                                 </span>
//                               </div>
//                               <input
//                                 type="tel"
//                                 required
//                                 className={`form-control form-control-sm ${touched.phoneNumber && errors.phoneNumber ? "error-input" : ""}`}
//                                 name="phoneNumber"
//                                 maxLength="10"
//                                 onBlur={handleBlur}
//                                 onChange={handleEvent}
//                                 placeholder="Phone No"
//                               />
//                             </div>
//                             {errors.phoneNumber && touched.phoneNumber && (
//                               <span className="text-danger">
//                                 {errors.phoneNumber}
//                               </span>
//                             )}
//                           </div>
//                         </div>

//                         {/* Row 2: Gender, Country, State, City */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">Gender</label>
//                             <select
//                               className={`form-control form-control-sm ${errors.gender ? "is-invalid" : ""}`}
//                               required
//                               value={formValues.gender}
//                               name="gender"
//                               onBlur={handleBlur}
//                               onChange={handleEvent}
//                             >
//                               <option value="">Select</option>
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                             </select>
//                             {errors.gender && (
//                               <div className="invalid-feedback">
//                                 {errors.gender}
//                               </div>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">Country</label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={communicationaddress.countryId}
//                               name="countryId"
//                               onChange={handleInputsetcommunicationaddress}
//                             >
//                               <option value="">Select Country</option>
//                               {countryOptions.map((c) => (
//                                 <option key={c.value} value={c.value}>
//                                   {c.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">State</label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={communicationaddress.stateId}
//                               name="stateId"
//                               onChange={handleInputsetcommunicationaddress}
//                             >
//                               <option value="">Select State</option>
//                               {stateOptionsForCommunication.map((s) => (
//                                 <option key={s.value} value={s.value}>
//                                   {s.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">City</label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={communicationaddress.cityId}
//                               name="cityId"
//                               onChange={handleInputsetcommunicationaddress}
//                             >
//                               <option value="">Select City</option>
//                               {cityOptionsForCommunication.map((c) => (
//                                 <option key={c.value} value={c.value}>
//                                   {c.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>

//                         {/* Row 3: Profession, Sector, Resume, Date of Birth */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label className="form-check-label mb-0">
//                               Profession
//                             </label>
//                             <select
//                               className={`form-select form-select-sm ${errors.profession ? "is-invalid" : ""}`}
//                               name="profession"
//                               value={formValues.profession}
//                               onChange={handleEvent}
//                               onBlur={handleBlur}
//                               required
//                             >
//                               <option value="">Select a profession</option>
//                               {itProfessions.map((p) => (
//                                 <option key={p.value} value={p.value}>
//                                   {p.label}
//                                 </option>
//                               ))}
//                             </select>
//                             {errors.profession && (
//                               <div className="invalid-feedback">
//                                 {errors.profession}
//                               </div>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <FormControl sx={{ minWidth: "100%" }}>
//                               <label
//                                 className="form-check-label mb-0"
//                                 htmlFor="sector"
//                               >
//                                 Sector
//                               </label>
//                               <Select
//                                 multiple
//                                 value={
//                                   formValues.sector?.map((s) => s.value) || []
//                                 }
//                                 onChange={handleSectorEvent}
//                                 renderValue={(selected) => selected.join(", ")}
//                                 sx={{ height: "2rem" }}
//                               >
//                                 {industry.map((ind) => (
//                                   <MenuItem key={ind.id} value={ind.name}>
//                                     {ind.name}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             </FormControl>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-check-label mb-0">
//                               Upload Resume
//                             </label>
//                             <input
//                               className="form-control form-select-sm"
//                               type="file"
//                               id="formFile"
//                               onChange={handleFileChange}
//                               accept="application/pdf, image/png"
//                               name="attachmentImg"
//                             />
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Date of Birth
//                             </label>
//                             <input
//                               type="date"
//                               className="form-control form-control-sm"
//                               value={dob}
//                               onChange={handleDobChange}
//                               required
//                             />
//                           </div>
//                         </div>

//                         {/* Row 4: Candidate Type, Primary Role, Primary Designation, Highest Degree */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Candidate Type
//                             </label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={candidateType}
//                               onChange={handleCandidateTypeChange}
//                             >
//                               <option value="">Select</option>
//                               <option value="fresher">Fresher</option>
//                               <option value="experienced">Experienced</option>
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Primary Role
//                             </label>
//                             <DropDown
//                               selectedOption={primaryRole}
//                               isMulti={false}
//                               url="listRoles"
//                               keyId="id"
//                               keyName="name"
//                               handleInputChange={handlePrimaryRoleChange}
//                               color={!primaryRole ? "1px solid red" : ""}
//                             />
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Primary Designation
//                             </label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={primaryDesignation}
//                               onChange={handlePrimaryDesignationChange}
//                             >
//                               <option value="">Select Designation</option>
//                               {industryDesignations.map((d) => (
//                                 <option key={d.value} value={d.value}>
//                                   {d.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Highest Degree
//                             </label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={degree}
//                               onChange={(e) => setDegree(e.target.value)}
//                             >
//                               <option value="">Select Degree</option>
//                               {itQualifications.map((q) => (
//                                 <option key={q.value} value={q.value}>
//                                   {q.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>

//                         {/* Fresher Checkbox */}
//                         <div className="row">
//                           <div className="col-12 ms-0 pe-0 text-end">
//                             <div className="form-check d-flex justify-content-end align-items-center">
//                               <label
//                                 className="form-check-label me-5"
//                                 htmlFor="fresherCheck"
//                               >
//                                 Are You Fresher
//                               </label>
//                               <input
//                                 className="form-check-input me-3"
//                                 type="checkbox"
//                                 onChange={handleCheckExperience}
//                                 checked={isFresher}
//                                 id="fresherCheck"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {/* Skills Section */}
//                         <div className="row mt-2">
//                           <div className="accordion" id="skillAccordion">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header">
//                                 <button
//                                   className="accordion-button bg-light"
//                                   type="button"
//                                   data-bs-toggle="collapse"
//                                   data-bs-target="#skillCollapse"
//                                   style={{
//                                     height: "40px",
//                                     padding: "5px 10px",
//                                   }}
//                                 >
//                                   Skills
//                                 </button>
//                               </h2>
//                               <div
//                                 id="skillCollapse"
//                                 className="accordion-collapse collapse show"
//                               >
//                                 <div className="accordion-body">
//                                   {skillList.map((skill) => (
//                                     <div key={skill.id} className="row mb-2">
//                                       <div className="col-12 col-lg-4">
//                                         <label>Skill Name</label>
//                                         <input
//                                           type="text"
//                                           className="form-control form-control-sm"
//                                           value={skill.skills}
//                                           onChange={(e) =>
//                                             handleSkillChange(
//                                               skill.id,
//                                               "skills",
//                                               e.target.value,
//                                             )
//                                           }
//                                           placeholder="e.g., React, Java"
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label>Category Code</label>
//                                         <input
//                                           type="text"
//                                           className="form-control form-control-sm"
//                                           value={skill.categoryCode}
//                                           onChange={(e) =>
//                                             handleSkillChange(
//                                               skill.id,
//                                               "categoryCode",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label>Rate (0–10)</label>
//                                         <input
//                                           type="number"
//                                           className="form-control form-control-sm"
//                                           value={skill.rate}
//                                           onChange={(e) =>
//                                             handleSkillChange(
//                                               skill.id,
//                                               "rate",
//                                               parseInt(e.target.value) || 0,
//                                             )
//                                           }
//                                           min="0"
//                                           max="10"
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-2 d-flex align-items-end justify-content-end">
//                                         <button
//                                           type="button"
//                                           className="delete-button"
//                                           onClick={() =>
//                                             handleRemoveSkill(skill.id)
//                                           }
//                                         >
//                                           <FontAwesomeIcon
//                                             icon={faTrash}
//                                             className="text-danger"
//                                           />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   ))}
//                                   <p
//                                     className="text-primary"
//                                     style={{ cursor: "pointer" }}
//                                     onClick={handleAddSkill}
//                                   >
//                                     + Add More Skill
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Highest Qualification Section */}
//                         <div className="row mt-2">
//                           <div className="accordion" id="accordionExample">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header" id="headingTwo">
//                                 <button
//                                   className="accordion-button bg-light"
//                                   type="button"
//                                   data-bs-toggle="collapse"
//                                   data-bs-target="#collapseTwo"
//                                   style={{
//                                     height: "40px",
//                                     padding: "5px 10px",
//                                   }}
//                                   aria-expanded="true"
//                                 >
//                                   Highest Qualification
//                                 </button>
//                               </h2>
//                               <div
//                                 id="collapseTwo"
//                                 className="accordion-collapse collapse show"
//                                 aria-labelledby="headingTwo"
//                               >
//                                 <div className="accordion-body">
//                                   {qualifications.map((qualification) => (
//                                     <div className="row" key={qualification.id}>
//                                       <div className="col-12 col-lg-3">
//                                         <label className="form-label">
//                                           Qualification
//                                         </label>
//                                         <select
//                                           className="form-control form-control-sm"
//                                           value={qualification.qualification}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "qualification",
//                                               e.target.value,
//                                             )
//                                           }
//                                         >
//                                           <option value="">
//                                             Select a Qualification
//                                           </option>
//                                           {itQualifications.map((q) => (
//                                             <option
//                                               key={q.value}
//                                               value={q.value}
//                                             >
//                                               {q.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label className="form-label">
//                                           Institute Name
//                                         </label>
//                                         <select
//                                           className="form-control form-control-sm"
//                                           value={qualification.institutionName}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "institutionName",
//                                               e.target.value,
//                                             )
//                                           }
//                                         >
//                                           <option value="">
//                                             Select an Institute
//                                           </option>
//                                           {indianInstitutes.map((inst) => (
//                                             <option
//                                               key={inst.value}
//                                               value={inst.value}
//                                             >
//                                               {inst.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label className="form-label">
//                                           Year of Pass Out
//                                         </label>
//                                         <input
//                                           type="date"
//                                           className="form-control form-control-sm"
//                                           value={qualification.yearOfPassOut}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "yearOfPassOut",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-2">
//                                         <label className="form-label">
//                                           Percentage
//                                         </label>
//                                         <input
//                                           type="text"
//                                           required
//                                           className="form-control form-control-sm"
//                                           placeholder="Percentage"
//                                           value={qualification.percentage}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "percentage",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-1 d-flex align-items-end justify-content-end">
//                                         <button
//                                           type="button"
//                                           className="delete-button"
//                                           onClick={() =>
//                                             handleRemoveDegree(qualification.id)
//                                           }
//                                         >
//                                           <FontAwesomeIcon
//                                             icon={faTrash}
//                                             className="text-danger"
//                                           />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   ))}
//                                   <div className="row">
//                                     <p
//                                       className="text-primary"
//                                       style={{ cursor: "pointer" }}
//                                       onClick={handleAddMoreDegree}
//                                     >
//                                       + Add More Degree
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Experience Section */}
//                         <div className="row mt-2 mb-4">
//                           <div className="accordion" id="accordionExampleExp">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header" id="headingOne">
//                                 <button
//                                   className="accordion-button bg-light"
//                                   type="button"
//                                   data-bs-toggle="collapse"
//                                   data-bs-target="#collapseOne"
//                                   style={{
//                                     height: "40px",
//                                     padding: "5px 10px",
//                                   }}
//                                   aria-expanded="true"
//                                 >
//                                   Experience
//                                 </button>
//                               </h2>
//                               <div
//                                 id="collapseOne"
//                                 className="accordion-collapse collapse show"
//                                 aria-labelledby="headingOne"
//                               >
//                                 <div className="accordion-body">
//                                   <div className="row align-items-center">
//                                     <div className="col-12 col-lg-2">
//                                       <label className="form-label">
//                                         Total Experience
//                                       </label>
//                                     </div>
//                                     <div className="col-12 col-lg-1">
//                                       <input
//                                         type="text"
//                                         required
//                                         value={formValues.totalExperience}
//                                         className="form-control form-control-sm"
//                                         onChange={handleEvent}
//                                         name="totalExperience"
//                                         placeholder="Exp"
//                                       />
//                                     </div>
//                                     <div className="col-12 col-lg-9 text-lg-end">
//                                       <div className="form-check d-flex justify-content-end align-items-center">
//                                         <label
//                                           className="form-check-label me-5"
//                                           htmlFor="workingCheck"
//                                         >
//                                           Are You Currently Working
//                                         </label>
//                                         <input
//                                           className="form-check-input"
//                                           type="checkbox"
//                                           checked={isWorking}
//                                           onChange={handleCheckboxChange}
//                                           id="workingCheck"
//                                         />
//                                       </div>
//                                     </div>
//                                   </div>

//                                   {isWorking ? (
//                                     <div className="row">
//                                       <div className="col-12 col-lg-3 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Current Company
//                                         </label>
//                                         <select
//                                           className="form-select form-select-sm"
//                                           name="currentCompany"
//                                           onChange={handleCurrent}
//                                         >
//                                           <option value="">
//                                             Select a Company
//                                           </option>
//                                           {consultingAndITCompanies.map((c) => (
//                                             <option
//                                               key={c.value}
//                                               value={c.value}
//                                             >
//                                               {c.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Current Role
//                                         </label>
//                                         <select
//                                           className="form-select form-select-sm"
//                                           name="currentRole"
//                                           onChange={handleCurrent}
//                                         >
//                                           <option value="">
//                                             Select a Role
//                                           </option>
//                                           {itIndustryRoles.map((r) => (
//                                             <option
//                                               key={r.value}
//                                               value={r.value}
//                                             >
//                                               {r.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Current Designation
//                                         </label>
//                                         <select
//                                           className="form-select form-select-sm"
//                                           name="currentDesignation"
//                                           onChange={handleCurrent}
//                                         >
//                                           <option value="">
//                                             Select a Designation
//                                           </option>
//                                           {industryDesignations.map((d) => (
//                                             <option
//                                               key={d.value}
//                                               value={d.value}
//                                             >
//                                               {d.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Join Date
//                                         </label>
//                                         <input
//                                           type="date"
//                                           className="form-control form-select-sm"
//                                           name="joiningDate"
//                                           onChange={handleCurrent}
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Notice Period
//                                         </label>
//                                         <input
//                                           type="text"
//                                           className="form-control form-control-sm"
//                                           name="noticePeriod"
//                                           onChange={handleCurrent}
//                                           placeholder="Notice Period"
//                                         />
//                                       </div>
//                                     </div>
//                                   ) : (
//                                     <>
//                                       {lastCompany.map((company, index) => (
//                                         <div className="row" key={company.id}>
//                                           <div className="col-12 col-lg-3 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Last Company
//                                             </label>
//                                             <select
//                                               className="form-select form-select-sm"
//                                               value={company.lastCompanyName}
//                                               onChange={(e) => {
//                                                 const updated = [
//                                                   ...lastCompany,
//                                                 ];
//                                                 updated[index] = {
//                                                   ...updated[index],
//                                                   lastCompanyName:
//                                                     e.target.value,
//                                                 };
//                                                 setLastCompany(updated);
//                                               }}
//                                             >
//                                               <option value="">
//                                                 Select a Company
//                                               </option>
//                                               {consultingAndITCompanies.map(
//                                                 (c) => (
//                                                   <option
//                                                     key={c.value}
//                                                     value={c.value}
//                                                   >
//                                                     {c.label}
//                                                   </option>
//                                                 ),
//                                               )}
//                                             </select>
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Last Role
//                                             </label>
//                                             <select
//                                               className="form-select form-select-sm"
//                                               value={company.lastRole}
//                                               onChange={(e) => {
//                                                 const updated = [
//                                                   ...lastCompany,
//                                                 ];
//                                                 updated[index] = {
//                                                   ...updated[index],
//                                                   lastRole: e.target.value,
//                                                 };
//                                                 setLastCompany(updated);
//                                               }}
//                                             >
//                                               <option value="">
//                                                 Select a Role
//                                               </option>
//                                               {itIndustryRoles.map((r) => (
//                                                 <option
//                                                   key={r.value}
//                                                   value={r.value}
//                                                 >
//                                                   {r.label}
//                                                 </option>
//                                               ))}
//                                             </select>
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Last Designation
//                                             </label>
//                                             <select
//                                               className="form-select form-select-sm"
//                                               value={company.lastDesignation}
//                                               onChange={(e) => {
//                                                 const updated = [
//                                                   ...lastCompany,
//                                                 ];
//                                                 updated[index] = {
//                                                   ...updated[index],
//                                                   lastDesignation:
//                                                     e.target.value,
//                                                 };
//                                                 setLastCompany(updated);
//                                               }}
//                                             >
//                                               <option value="">
//                                                 Select a Designation
//                                               </option>
//                                               {industryDesignations.map((d) => (
//                                                 <option
//                                                   key={d.value}
//                                                   value={d.value}
//                                                 >
//                                                   {d.label}
//                                                 </option>
//                                               ))}
//                                             </select>
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Join Date
//                                             </label>
//                                             <input
//                                               type="date"
//                                               className="form-control form-control-sm"
//                                               value={company.lastJoiningDate}
//                                               onChange={(e) =>
//                                                 handleDateChange(
//                                                   e,
//                                                   index,
//                                                   "lastJoiningDate",
//                                                 )
//                                               }
//                                             />
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Relieving Date
//                                             </label>
//                                             <input
//                                               type="date"
//                                               className="form-control form-control-sm"
//                                               value={company.lastRelievingDate}
//                                               onChange={(e) =>
//                                                 handleDateChange(
//                                                   e,
//                                                   index,
//                                                   "lastRelievingDate",
//                                                 )
//                                               }
//                                             />
//                                           </div>
//                                           <div className="col-12 col-lg-1 d-flex align-items-end justify-content-end">
//                                             <button
//                                               type="button"
//                                               className="delete-current-button"
//                                               onClick={() =>
//                                                 handleRemoveLastCompany(
//                                                   company.id,
//                                                 )
//                                               }
//                                             >
//                                               <FontAwesomeIcon
//                                                 icon={faTrash}
//                                                 className="text-danger"
//                                               />
//                                             </button>
//                                           </div>
//                                         </div>
//                                       ))}
//                                       <div className="row">
//                                         <p
//                                           className="text-primary"
//                                           style={{ cursor: "pointer" }}
//                                           onClick={handleAddMoreLastCompany}
//                                         >
//                                           + Add More Exp
//                                         </p>
//                                       </div>
//                                     </>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="col-12">
//                       <div className="d-flex justify-content-end">
//                         <input
//                           type="submit"
//                           className="btn btn-primary bg-primary register-btn-style"
//                           value={lableButton}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-12 text-center">
//                       <span>Already have an account? </span>
//                       <span className="text-primary backToLoginBtn">
//                         <Link to="/login">
//                           <u className="text-primary">Log In</u>
//                         </Link>
//                       </span>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container-fluid">
//           <FooterTwo />
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import constants from "../../constants/Constants";
// import "boxicons/css/boxicons.min.css";
// import "./signup.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { signUpUser } from "../../redux/store/Slice";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import jsonObject from "./MockJsonCandidate.js";
// import mainLogo from "../../assets/img/home3/logo.png";
// import MobileMenu from "../Header/MobileMenu";
// import FooterTwo from "../Footer/FooterTwo";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import DropDown from "../common/DropDown.js";
// import "react-toastify/dist/ReactToastify.css";

// function SignUp() {
//   const [offset, setOffset] = useState(true);
//   const [mobileMenu, setMobileMenu] = useState(true);
//   const dispatch = useDispatch();
//   const userCandidate = useSelector((state) => state.user.user);
//   const [lableButton, setLablebutton] = useState("Register");

//   const handleOffset = (e) => {
//     e.preventDefault();
//     setOffset(!offset);
//   };

//   const handleMobileMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const navigate = useNavigate();

//   const {
//     itProfessions,
//     allIndustryProfessions,
//     consultingAndITCompanies,
//     itIndustryRoles,
//     industryDesignations,
//     itQualifications,
//     indianInstitutes,
//   } = jsonObject;

//   const initialAddressValues = { cityId: "", stateId: "", countryId: "" };

//   // ---------- State declarations ----------
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNumber: "",
//     gender: "",
//     degree: "",
//     experience: "",
//     profession: "",
//     sector: [],
//     totalexp: "",
//     position: "",
//     totalExperience: "",
//     experienceFresher: "",
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNumber: "",
//     gender: "",
//     profession: "",
//     sector: "",
//   });

//   const [touched, setTouched] = useState({
//     firstName: false,
//     lastName: false,
//     emailId: false,
//     phoneNumber: false,
//     gender: false,
//     profession: false,
//     sector: false,
//   });

//   const [isFresher, setIsFresher] = useState(false);
//   const [data, setData] = useState([]);
//   const [countryOptions, setCountryOptions] = useState([]);
//   const [getcityName, setCityName] = useState("");
//   const [getcountryName, setCountryName] = useState("");
//   const [cityOptionsForCommunication, setCityOptionsForCommunication] =
//     useState([]);
//   const [stateOptionsForCommunication, setStateOptionsForCommunication] =
//     useState([]);
//   const [communicationaddress, setcommunicationaddress] =
//     useState(initialAddressValues);
//   const [getstateName, setStateName] = useState("");
//   const [userCode, setUserCode] = useState("");
//   const [isWorking, setIsWorking] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [fileLimit, setFileLimit] = useState(false);
//   const MAX_COUNT = 5;

//   // Qualification, Experience, Skills states (all with id)
//   const [qualifications, setQualifications] = useState([
//     {
//       id: 1,
//       qualification: "",
//       institutionName: "",
//       yearOfPassOut: "",
//       percentage: "",
//       candidateId: "",
//     },
//   ]);

//   const [currentCompany, setCurrentCompany] = useState([]); // FIX: start empty
//   const [lastCompany, setLastCompany] = useState([]); // FIX: start empty

//   const [industry, setIndustry] = useState([]);
//   const [countryId, setCountryId] = useState("");
//   const [stateId, setStateId] = useState("");
//   const [cityId, setCityId] = useState("");

//   const [dob, setDob] = useState("");
//   const [candidateType, setCandidateType] = useState("");
//   const [primaryRole, setPrimaryRole] = useState(null); // FIX: start null (object)
//   const [primaryDesignation, setPrimaryDesignation] = useState("");
//   const [degree, setDegree] = useState("");

//   const [skillList, setSkillList] = useState([
//     {
//       id: 1,
//       skills: "",
//       rate: 0,
//       categoryCode: "",
//       categoryName: "",
//       description: "",
//     },
//   ]);

//   const [userCodeField, setUserCodeField] = useState("");
//   const [userPassword, setUserPassword] = useState("string");

//   // ----- Helper functions -----
//   const getDropdownOptions = (array, keyLabel, keyValue) => {
//     return array.map((item) => ({
//       label: item[keyLabel],
//       value: item[keyValue],
//     }));
//   };

//   function handleInputsetcommunicationaddress(e) {
//     const { name, value } = e.target;

//     if (name === "cityId") {
//       setCityId(e.target.value);
//       setCityName(e.target.options[e.target.selectedIndex].text);
//     }

//     switch (name) {
//       case "countryId": {
//         const [curCountry] = data.filter(
//           (country) => country.countryId === +value,
//         );
//         if (!curCountry) break;
//         setCountryId(curCountry.countryId);
//         setCountryName(curCountry.countryName);
//         setStateOptionsForCommunication(
//           getDropdownOptions(curCountry?.states ?? [], "stateName", "stateId"),
//         );
//         setCityOptionsForCommunication([]);
//         break;
//       }
//       case "stateId": {
//         const [curCountry] = data.filter(
//           (country) => country.countryId === +communicationaddress.countryId,
//         );
//         if (!curCountry) break;
//         const [curState] = (curCountry?.states ?? []).filter(
//           (state) => state.stateId === +value,
//         );
//         if (!curState) break;
//         setStateId(curState.stateId);
//         setStateName(curState.stateName);
//         setCityOptionsForCommunication(
//           getDropdownOptions(curState?.cities ?? [], "cityName", "cityId"),
//         );
//         break;
//       }
//       default:
//         break;
//     }

//     setcommunicationaddress({ ...communicationaddress, [name]: value });
//   }

//   // ----- Effects -----
//   useEffect(() => {
//     axios
//       .get(constants.EORMURL + "countries", { headers: {} })
//       .then((response) => {
//         setData(response.data);
//         setCountryOptions(
//           getDropdownOptions(response.data, "countryName", "countryId"),
//         );
//       })
//       .catch(console.error);

//     axios
//       .get(constants.CANDIDATE + "industry/findAll", { headers: {} })
//       .then((response) => setIndustry(response.data))
//       .catch(console.error);
//   }, []);

//   // FIX: Load userCandidate data into form
//   useEffect(() => {
//     if (!userCandidate || Object.keys(userCandidate).length === 0) return;

//     // ----- Sector (industry) -----
//     let sectorData = [];
//     if (
//       userCandidate.industryId &&
//       userCandidate.industryId.length > 0 &&
//       userCandidate.industryId[0] !== ""
//     ) {
//       sectorData = userCandidate.industryId.map((id, idx) => ({
//         id: id,
//         value: userCandidate.industryName?.[idx] || "",
//       }));
//     }

//     // ----- Basic fields -----
//     setFormValues({
//       firstName: userCandidate.firstName || "",
//       lastName: userCandidate.lastName || "",
//       emailId: userCandidate.emailId || "",
//       gender: userCandidate.gender || "",
//       phoneNumber: userCandidate.mobileNumber || "",
//       profession: userCandidate.profession || "",
//       sector: sectorData,
//       totalExperience: userCandidate.totalExperience || "0",
//     });

//     setIsFresher(userCandidate.experienceFresher || false);

//     // ----- Address IDs -----
//     setcommunicationaddress({
//       countryId: userCandidate.countryId || "",
//       stateId: userCandidate.stateId || "",
//       cityId: userCandidate.cityId || "",
//     });
//     // Store the names for later submit (will be refined after countries load)
//     setCountryName(userCandidate.country || "");
//     setStateName(userCandidate.state || "");
//     setCityName(userCandidate.city || "");

//     // ----- Qualifications -----
//     if (userCandidate.candidateQualificationList?.length) {
//       setQualifications(
//         userCandidate.candidateQualificationList.map((qual, idx) => ({
//           id: idx + 1,
//           qualification: qual.qualification || "",
//           institutionName: qual.institutionName || "",
//           yearOfPassOut: qual.yearOfPassOut || "",
//           percentage: qual.percentage || "",
//           candidateId: qual.candidateId || "",
//         })),
//       );
//     }

//     // ----- Experience -----
//     if (userCandidate.candidateExperiencesList?.length) {
//       const exp = userCandidate.candidateExperiencesList[0];
//       const currentlyWorking = exp.currentlyWorking || false;
//       setIsWorking(currentlyWorking);

//       if (currentlyWorking) {
//         setCurrentCompany([
//           {
//             id: 1,
//             currentCompany: exp.currentCompany || exp.lastCompanyName || "",
//             currentRole: exp.currentRole || exp.lastRole || "",
//             currentDesignation:
//               exp.currentDesignation || exp.lastDesignation || "",
//             joiningDate: exp.joiningDate || exp.lastJoiningDate || "",
//             noticePeriod: exp.noticePeriod || "",
//             candidateId: exp.candidateId || "",
//           },
//         ]);
//         setLastCompany([]);
//       } else {
//         setLastCompany(
//           userCandidate.candidateExperiencesList.map((exp, idx) => ({
//             id: idx + 1,
//             lastCompanyName: exp.lastCompanyName || "",
//             lastRole: exp.lastRole || "",
//             lastDesignation: exp.lastDesignation || "",
//             lastJoiningDate: exp.lastJoiningDate || "",
//             lastRelievingDate: exp.lastRelievingDate || "",
//             candidateId: exp.candidateId || "",
//           })),
//         );
//         setCurrentCompany([]);
//       }
//     } else {
//       // No experience entries -> ensure both arrays are empty
//       setCurrentCompany([]);
//       setLastCompany([]);
//     }

//     setDob(userCandidate.dob ? userCandidate.dob.split("T")[0] : "");

//     // ----- Candidate Type (map EXTERNAL → experienced) -----
//     let ct = userCandidate.candidateType || "";
//     if (ct === "EXTERNAL") ct = "experienced";
//     setCandidateType(ct);

//     // ----- Primary Role (convert string to object) -----
//     if (userCandidate.role) {
//       setPrimaryRole({ value: userCandidate.role, label: userCandidate.role });
//     } else {
//       setPrimaryRole(null);
//     }

//     setPrimaryDesignation(userCandidate.designation || "");
//     setDegree(userCandidate.degree || "");

//     // ----- Skills -----
//     if (userCandidate.candidateSkillList?.length) {
//       setSkillList(
//         userCandidate.candidateSkillList.map((skill, idx) => ({
//           id: idx + 1,
//           skills: skill.skills || "",
//           rate: skill.rate || 0,
//           categoryCode: skill.categoryCode || "",
//           categoryName: skill.categoryName || "",
//           description: skill.description || "",
//         })),
//       );
//     }
//   }, [userCandidate]);

//   // FIX: After countries are loaded, resolve country/state/city names from IDs
//   useEffect(() => {
//     if (data.length === 0) return;
//     if (!userCandidate || Object.keys(userCandidate).length === 0) return;

//     const countryObj = data.find(
//       (c) => c.countryId === parseInt(userCandidate.countryId),
//     );
//     if (countryObj) {
//       setCountryName(countryObj.countryName);
//       const stateObj = countryObj.states?.find(
//         (s) => s.stateId === parseInt(userCandidate.stateId),
//       );
//       if (stateObj) {
//         setStateName(stateObj.stateName);
//         const cityObj = stateObj.cities?.find(
//           (ct) => ct.cityId === parseInt(userCandidate.cityId),
//         );
//         if (cityObj) setCityName(cityObj.cityName);
//       }
//     }
//   }, [data, userCandidate]);

//   useEffect(() => {
//     if (!userCode) return;

//     const verifyCandidate = async () => {
//       try {
//         const res = await fetch(
//           `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${userCode}&isVerify=true`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               accept: "application/json",
//             },
//           },
//         );
//         if (res.ok) {
//           setTimeout(() => {
//             toast.success("User Signup successfully and verified in Email");
//             window.location.href = "/login";
//           }, 2000);
//         }
//       } catch (error) {
//         console.error("Verify error:", error);
//       }
//     };

//     verifyCandidate();
//     setLablebutton("Update");

//     axios
//       .get(constants.CANDIDATE + `candidate/findCandidateById/${userCode}`, {
//         headers: {},
//       })
//       .then((response) => dispatch(signUpUser(response.data)))
//       .catch(console.error);
//   }, [userCode]);

//   // ----- Event handlers -----
//   const handleCheckExperience = (e) => setIsFresher(e.target.checked);
//   const handleCheckboxChange = () => setIsWorking((prev) => !prev);

//   const handleEvent = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormValues({
//         ...formValues,
//         [name]: checked ? "fresher" : "Experience",
//       });
//     } else if (name === "emailId") {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setErrors({
//         ...errors,
//         [name]: emailPattern.test(value) ? "" : "Invalid email address",
//       });
//     } else if (name === "phoneNumber") {
//       if (value.length === 10) {
//         setErrors({
//           ...errors,
//           [name]: /^[0-9]{10}$/.test(value) ? "" : "Invalid phone number",
//         });
//       } else {
//         setErrors({ ...errors, [name]: "Phone number must be 10 digits" });
//       }
//     } else if (name === "gender") {
//       setErrors({
//         ...errors,
//         [name]: value === "" ? "Please select a gender" : "",
//       });
//     } else {
//       setErrors({
//         ...errors,
//         [name]:
//           value.length > 50
//             ? `${name.charAt(0).toUpperCase() + name.slice(1)} cannot exceed 50 characters`
//             : "",
//       });
//     }
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleCurrent = (event) => {
//     const { name, value } = event.target;
//     setCurrentCompany((prev) =>
//       prev.length > 0
//         ? prev.map((item) => ({ ...item, [name]: value }))
//         : [{ id: 1, [name]: value }],
//     );
//   };

//   const handleChange = (id, field, value) => {
//     setQualifications((prev) =>
//       prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)),
//     );
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched({ ...touched, [name]: true });
//     if (!value)
//       setErrors({ ...errors, [name]: "Please fill the required field" });
//   };

//   const handleAddMoreDegree = () => {
//     const nextId =
//       qualifications.length > 0
//         ? Math.max(...qualifications.map((q) => q.id)) + 1
//         : 1;
//     setQualifications([
//       ...qualifications,
//       {
//         id: nextId,
//         qualification: "",
//         institutionName: "",
//         yearOfPassOut: "",
//         percentage: "",
//         candidateId: "string",
//       },
//     ]);
//   };

//   const handleRemoveDegree = (id) => {
//     setQualifications((prev) => prev.filter((q) => q.id !== id));
//   };

//   const handleUploadedFiles = (files) => {
//     const uploaded = [...uploadedFiles];
//     let limitExceeded = false;
//     files.forEach((file) => {
//       if (uploaded.findIndex((f) => f.name === file.name) === -1) {
//         uploaded.push(file);
//         if (uploaded.length === MAX_COUNT) setFileLimit(true);
//         if (uploaded.length > MAX_COUNT) {
//           toast.error(`You can only upload a maximum of ${MAX_COUNT} files`);
//           setFileLimit(false);
//           limitExceeded = true;
//         }
//       }
//     });
//     if (!limitExceeded) setUploadedFiles(uploaded);
//   };

//   const handleFileChange = (e) =>
//     handleUploadedFiles(Array.from(e.target.files));

//   const handleAddMoreCurrentCompany = () => {
//     const nextId =
//       currentCompany.length > 0
//         ? Math.max(...currentCompany.map((c) => c.id)) + 1
//         : 1;
//     setCurrentCompany([
//       ...currentCompany,
//       {
//         id: nextId,
//         currentCompany: "",
//         currentRole: "",
//         currentDesignation: "",
//         joiningDate: "",
//         noticePeriod: "",
//         candidateId: "string",
//       },
//     ]);
//   };

//   const handleDateChange = (e, index, dateType) => {
//     const updated = [...lastCompany];
//     const val = e.target.value;
//     if (dateType === "lastJoiningDate") {
//       if (
//         updated[index].lastRelievingDate &&
//         new Date(val) > new Date(updated[index].lastRelievingDate)
//       ) {
//         alert("Joining Date cannot be after Relieving Date");
//         return;
//       }
//       updated[index] = { ...updated[index], lastJoiningDate: val };
//     } else if (dateType === "lastRelievingDate") {
//       if (
//         updated[index].lastJoiningDate &&
//         new Date(val) < new Date(updated[index].lastJoiningDate)
//       ) {
//         alert("Relieving Date must not be before Joining Date");
//         return;
//       }
//       updated[index] = { ...updated[index], lastRelievingDate: val };
//     }
//     setLastCompany(updated);
//   };

//   const handleSectorEvent = (event) => {
//     const selectedValues = event.target.value;
//     const selectedIndustries = industry.filter((ind) =>
//       selectedValues.includes(ind.name),
//     );
//     setFormValues((prev) => ({
//       ...prev,
//       sector: selectedIndustries.map((ind) => ({
//         id: ind.id,
//         value: ind.name,
//       })),
//     }));
//   };

//   const handleRemoveCurrentCompany = (id) => {
//     setCurrentCompany((prev) => prev.filter((c) => c.id !== id));
//   };

//   const handleAddMoreLastCompany = () => {
//     const nextId =
//       lastCompany.length > 0
//         ? Math.max(...lastCompany.map((c) => c.id)) + 1
//         : 1;
//     setLastCompany([
//       ...lastCompany,
//       {
//         id: nextId,
//         lastCompanyName: "",
//         lastRole: "",
//         lastDesignation: "",
//         lastJoiningDate: "",
//         lastRelievingDate: "",
//         candidateId: "string",
//       },
//     ]);
//   };

//   const handleRemoveLastCompany = (id) => {
//     setLastCompany((prev) => prev.filter((c) => c.id !== id));
//   };

//   const handleDobChange = (e) => setDob(e.target.value);
//   const handleCandidateTypeChange = (e) => setCandidateType(e.target.value);
//   const handlePrimaryRoleChange = (selectedOption) => {
//     setPrimaryRole(selectedOption);
//   };
//   const handlePrimaryDesignationChange = (e) =>
//     setPrimaryDesignation(e.target.value);

//   const handleSkillChange = (id, field, value) => {
//     setSkillList((prev) =>
//       prev.map((skill) =>
//         skill.id === id ? { ...skill, [field]: value } : skill,
//       ),
//     );
//   };

//   const handleAddSkill = () => {
//     setSkillList((prev) => {
//       const nextId =
//         prev.length > 0 ? Math.max(...prev.map((s) => s.id)) + 1 : 1;
//       return [
//         ...prev,
//         {
//           id: nextId,
//           skills: "",
//           rate: 0,
//           categoryCode: "",
//           categoryName: "",
//           description: "",
//         },
//       ];
//     });
//   };

//   const handleRemoveSkill = (id) => {
//     setSkillList((prev) => prev.filter((skill) => skill.id !== id));
//   };

//   // ----- SUBMIT FUNCTION (fixed) -----
//   const submitSignUpUser = async (e) => {
//     const buttonValue = e.nativeEvent.submitter.value;
//     e.preventDefault();

//     const now = new Date().toISOString();
//     const fullName = `${formValues.firstName} ${formValues.lastName}`;

//     // Build experiences list
//     let candidateExperiencesList;
//     if (isWorking) {
//       candidateExperiencesList = currentCompany.map((item) => ({
//         createdBy: fullName,
//         updatedBy: buttonValue === "Update" ? fullName : null,
//         lastCompanyName: item.currentCompany || "",
//         lastRole: item.currentRole || "",
//         lastDesignation: item.currentDesignation || "",
//         lastJoiningDate: item.joiningDate || "",
//         lastRelievingDate: "",
//         candidateId: userCode || "string",
//         currentlyWorking: true,
//       }));
//     } else {
//       candidateExperiencesList = lastCompany.map((item) => ({
//         createdBy: fullName,
//         updatedBy: buttonValue === "Update" ? fullName : null,
//         lastCompanyName: item.lastCompanyName || "",
//         lastRole: item.lastRole || "",
//         lastDesignation: item.lastDesignation || "",
//         lastJoiningDate: item.lastJoiningDate || "",
//         lastRelievingDate: item.lastRelievingDate || "",
//         candidateId: userCode || "string",
//         currentlyWorking: false,
//       }));
//     }

//     const candidateQualificationList = qualifications.map((qual) => ({
//       createdBy: fullName,
//       updatedBy: buttonValue === "Update" ? fullName : null,
//       qualification: qual.qualification || "",
//       institutionName: qual.institutionName || "",
//       yearOfPassOut: qual.yearOfPassOut || "",
//       percentage: qual.percentage || "",
//       candidateId: userCode || "string",
//     }));

//     const candidateSkillList = skillList.map((skill) => ({
//       skills: skill.skills || "",
//       rate: skill.rate || 0,
//       categoryCode: skill.categoryCode || "",
//       categoryName: skill.categoryName || "",
//       description: skill.description || "",
//       createdBy: fullName,
//       updatedBy: buttonValue === "Update" ? fullName : null,
//       status: "active",
//       createdDatetime: now,
//       updatedDatetime: now,
//       candidateId: userCode || "string",
//     }));

//     // FIX: Use stored names (now properly set)
//     const finalData = {
//       ...(buttonValue === "Update" && { id: userCode, updatedBy: fullName }),
//       createdBy: fullName,
//       firstName: formValues.firstName,
//       lastName: formValues.lastName,
//       emailId: formValues.emailId,
//       mobileNumber: formValues.phoneNumber,
//       experienceFresher: isFresher,
//       totalExperience: formValues.totalExperience || "0",
//       degree: degree || "",
//       country: getcountryName || "",
//       countryId: countryId ? String(countryId) : "",
//       state: getstateName || "",
//       stateId: stateId ? String(stateId) : "",
//       city: getcityName || "",
//       cityId: cityId ? String(cityId) : "",
//       gender: formValues.gender,
//       dob: dob,
//       candidateType: candidateType || "experienced",
//       profession: formValues.profession,
//       industryId: formValues.sector?.map((item) => item.id) || [],
//       industryName: formValues.sector?.map((item) => item.value) || [],
//       role: primaryRole?.value || primaryRole || "",
//       designation: primaryDesignation || "",
//       candidateExperiencesList,
//       candidateQualificationList,
//       candidateSkillList,
//     };

//     console.log("Final payload →", JSON.stringify(finalData, null, 2));

//     const buildFormData = () => {
//       const blob = new Blob([JSON.stringify(finalData)], {
//         type: "application/json",
//       });
//       const fd = new FormData();
//       fd.append("candidate", blob);
//       uploadedFiles.forEach((file) => fd.append("documentList", file));
//       return fd;
//     };

//     if (buttonValue === "Register") {
//       try {
//         const res = await fetch(constants.CANDIDATE + "candidate/save", {
//           method: "POST",
//           body: buildFormData(),
//         });
//         if (res.ok) {
//           const response = await res.json();
//           const newCandidateId = response.id;
//           setUserCode(newCandidateId);
//           toast.success("Candidate Registered Successfully");

//           // ----- Call verification API -----
//           try {
//             // Fix the URL: remove the invalid "{candidate}" placeholder.
//             // Assuming the correct endpoint is "/verifyCandidate?candidateId=..."
//             const verifyUrl = `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${newCandidateId}&isVerify=true`;
//             // If the API requires POST (as in your original code), use POST.
//             // If it should be GET, change to GET.
//             const verifyRes = await fetch(verifyUrl, {
//               method: "POST", // or "GET" depending on your backend
//               headers: {
//                 "Content-Type": "application/json",
//                 accept: "application/json",
//               },
//             });
//             if (verifyRes.ok) {
//               toast.success("Verification email sent successfully");
//             } else {
//               console.warn(
//                 "Verification API responded with status:",
//                 verifyRes.status,
//               );
//             }
//           } catch (verifyError) {
//             console.error("Verification API error:", verifyError);
//           }

//           setTimeout(
//             () =>
//               alert(
//                 "Registration complete! You can update your details if needed.",
//               ),
//             1000,
//           );
//         } else if (res.status === 409) {
//           toast.error("Email already in use. Please try a different email.");
//         } else {
//           const errText = await res.text();
//           console.error("Server error:", errText);
//           toast.error(
//             `Registration failed (${res.status}). Check console for details.`,
//           );
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("An unexpected error occurred. Please try again.");
//       }
//     } else if (buttonValue === "Update") {
//       try {
//         const res = await fetch(
//           constants.CANDIDATE + "candidate/updateCandidate",
//           {
//             method: "PUT",
//             body: buildFormData(),
//           },
//         );
//         if (res.ok) {
//           toast.success("Candidate Updated Successfully");
//         } else if (res.status === 409) {
//           toast.error("Email already in use. Please try a different email.");
//         } else {
//           const errText = await res.text();
//           console.error("Server error:", errText);
//           toast.error(
//             `Update failed (${res.status}). Check console for details.`,
//           );
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("An unexpected error occurred. Please try again.");
//       }
//     }
//   };

//   // ----- JSX (unchanged except for the DropDown primaryRole value) -----
//   return (
//     <div className="wrapper">
//       <div className="section-authentication-signin d-flex align-items-center justify-content-center my- my-lg-0">
//         <header className="header-wrap header-1 sticky-top p-1">
//           <div className="container-fluid d-flex justify-content-between align-items-center">
//             <div className="logo">
//               <Link to="/">
//                 <img src={mainLogo} alt="logo" />
//               </Link>
//             </div>
//             <div className="header-right-area d-flex justify-content-between">
//               <div className="main-menu d-none d-xl-block me-xl-5">
//                 <ul>
//                   <li>
//                     <a href="/">Home</a>
//                   </li>
//                   <li>
//                     <Link to="/about">About Us</Link>
//                   </li>
//                   <li>
//                     <Link to="/services">Services</Link>
//                   </li>
//                   <li>
//                     <Link to="/career">Career</Link>
//                   </li>
//                   <li>
//                     <Link to="/contact">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="header-right-elements d-flex align-items-center justify-content-between">
//                 <div className="d-inline-block ms-4 d-xl-none">
//                   <div className="mobile-nav-wrap">
//                     <div id="hamburger" onClick={handleMobileMenu}>
//                       <i className="fal fa-bars"></i>
//                     </div>
//                     <MobileMenu
//                       mobileMenu={mobileMenu}
//                       handleMobileMenu={handleMobileMenu}
//                     />
//                   </div>
//                   <div className="overlay"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="container-fluid">
//           <div className="card mb-0 bg-light">
//             <div className="card-body">
//               <div className="p-1">
//                 <div className="text-center mb-4">
//                   <h5 className="headerStyle">Candidate Registration</h5>
//                 </div>
//                 <div className="form-body">
//                   <form className="row g-3" onSubmit={submitSignUpUser}>
//                     <div className="col-12 d-flex gap-2">
//                       <div className="container-fluid">
//                         {/* Row 1: First Name, Last Name, Email, Phone */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputFirstName"
//                               className="form-label mb-0"
//                             >
//                               First Name
//                             </label>
//                             <input
//                               type="text"
//                               required
//                               value={formValues.firstName}
//                               className={`form-control form-control-sm ${touched.firstName && errors.firstName ? "error-input" : ""}`}
//                               name="firstName"
//                               onBlur={handleBlur}
//                               onChange={handleEvent}
//                               placeholder="First Name"
//                             />
//                             {errors.firstName && touched.firstName && (
//                               <span className="text-danger">
//                                 {errors.firstName}
//                               </span>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputLastName"
//                               className="form-label mb-0"
//                             >
//                               Last Name
//                             </label>
//                             <input
//                               type="text"
//                               required
//                               value={formValues.lastName}
//                               className={`form-control form-control-sm ${touched.lastName && errors.lastName ? "error-input" : ""}`}
//                               name="lastName"
//                               onChange={handleEvent}
//                               onBlur={handleBlur}
//                               placeholder="Last Name"
//                             />
//                             {errors.lastName && touched.lastName && (
//                               <span className="text-danger">
//                                 {errors.lastName}
//                               </span>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputEmailAddress"
//                               className="form-label mb-0"
//                             >
//                               Email
//                             </label>
//                             <input
//                               type="email"
//                               required
//                               value={formValues.emailId}
//                               className={`form-control form-control-sm ${touched.emailId && errors.emailId ? "error-input" : ""}`}
//                               name="emailId"
//                               onChange={handleEvent}
//                               onBlur={handleBlur}
//                               placeholder="john@example.com"
//                             />
//                             {errors.emailId && touched.emailId && (
//                               <span className="text-danger">
//                                 {errors.emailId}
//                               </span>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label
//                               htmlFor="inputPhoneNumber"
//                               className="form-label mb-0"
//                             >
//                               Phone
//                             </label>
//                             <div className="input-group">
//                               <div className="input-group-prepend">
//                                 <span className="input-group-text country-code">
//                                   +91
//                                 </span>
//                               </div>
//                               <input
//                                 type="tel"
//                                 required
//                                 className={`form-control form-control-sm ${touched.phoneNumber && errors.phoneNumber ? "error-input" : ""}`}
//                                 name="phoneNumber"
//                                 maxLength="10"
//                                 onBlur={handleBlur}
//                                 onChange={handleEvent}
//                                 placeholder="Phone No"
//                               />
//                             </div>
//                             {errors.phoneNumber && touched.phoneNumber && (
//                               <span className="text-danger">
//                                 {errors.phoneNumber}
//                               </span>
//                             )}
//                           </div>
//                         </div>

//                         {/* Row 2: Gender, Country, State, City */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">Gender</label>
//                             <select
//                               className={`form-control form-control-sm ${errors.gender ? "is-invalid" : ""}`}
//                               required
//                               value={formValues.gender}
//                               name="gender"
//                               onBlur={handleBlur}
//                               onChange={handleEvent}
//                             >
//                               <option value="">Select</option>
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                             </select>
//                             {errors.gender && (
//                               <div className="invalid-feedback">
//                                 {errors.gender}
//                               </div>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">Country</label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={communicationaddress.countryId}
//                               name="countryId"
//                               onChange={handleInputsetcommunicationaddress}
//                             >
//                               <option value="">Select Country</option>
//                               {countryOptions.map((c) => (
//                                 <option key={c.value} value={c.value}>
//                                   {c.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">State</label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={communicationaddress.stateId}
//                               name="stateId"
//                               onChange={handleInputsetcommunicationaddress}
//                             >
//                               <option value="">Select State</option>
//                               {stateOptionsForCommunication.map((s) => (
//                                 <option key={s.value} value={s.value}>
//                                   {s.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">City</label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={communicationaddress.cityId}
//                               name="cityId"
//                               onChange={handleInputsetcommunicationaddress}
//                             >
//                               <option value="">Select City</option>
//                               {cityOptionsForCommunication.map((c) => (
//                                 <option key={c.value} value={c.value}>
//                                   {c.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>

//                         {/* Row 3: Profession, Sector, Resume, Date of Birth */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label className="form-check-label mb-0">
//                               Profession
//                             </label>
//                             <select
//                               className={`form-select form-select-sm ${errors.profession ? "is-invalid" : ""}`}
//                               name="profession"
//                               value={formValues.profession}
//                               onChange={handleEvent}
//                               onBlur={handleBlur}
//                               required
//                             >
//                               <option value="">Select a profession</option>
//                               {itProfessions.map((p) => (
//                                 <option key={p.value} value={p.value}>
//                                   {p.label}
//                                 </option>
//                               ))}
//                             </select>
//                             {errors.profession && (
//                               <div className="invalid-feedback">
//                                 {errors.profession}
//                               </div>
//                             )}
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <FormControl sx={{ minWidth: "100%" }}>
//                               <label
//                                 className="form-check-label mb-0"
//                                 htmlFor="sector"
//                               >
//                                 Sector
//                               </label>
//                               <Select
//                                 multiple
//                                 value={
//                                   formValues.sector?.map((s) => s.value) || []
//                                 }
//                                 onChange={handleSectorEvent}
//                                 renderValue={(selected) => selected.join(", ")}
//                                 sx={{ height: "2rem" }}
//                               >
//                                 {industry.map((ind) => (
//                                   <MenuItem key={ind.id} value={ind.name}>
//                                     {ind.name}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             </FormControl>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-check-label mb-0">
//                               Upload Resume
//                             </label>
//                             <input
//                               className="form-control form-select-sm"
//                               type="file"
//                               id="formFile"
//                               onChange={handleFileChange}
//                               accept="application/pdf, image/png"
//                               name="attachmentImg"
//                             />
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Date of Birth
//                             </label>
//                             <input
//                               type="date"
//                               className="form-control form-control-sm"
//                               value={dob}
//                               onChange={handleDobChange}
//                               required
//                             />
//                           </div>
//                         </div>

//                         {/* Row 4: Candidate Type, Primary Role, Primary Designation, Highest Degree */}
//                         <div className="row">
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Candidate Type
//                             </label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={candidateType}
//                               onChange={handleCandidateTypeChange}
//                             >
//                               <option value="">Select</option>
//                               <option value="fresher">Fresher</option>
//                               <option value="experienced">Experienced</option>
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Primary Role
//                             </label>
//                             <DropDown
//                               selectedOption={primaryRole}
//                               isMulti={false}
//                               url="listRoles"
//                               keyId="id"
//                               keyName="name"
//                               handleInputChange={handlePrimaryRoleChange}
//                               color={!primaryRole ? "1px solid red" : ""}
//                             />
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Primary Designation
//                             </label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={primaryDesignation}
//                               onChange={handlePrimaryDesignationChange}
//                             >
//                               <option value="">Select Designation</option>
//                               {industryDesignations.map((d) => (
//                                 <option key={d.value} value={d.value}>
//                                   {d.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="col-12 col-lg-3">
//                             <label className="form-label mb-0">
//                               Highest Degree
//                             </label>
//                             <select
//                               className="form-control form-control-sm"
//                               value={degree}
//                               onChange={(e) => setDegree(e.target.value)}
//                             >
//                               <option value="">Select Degree</option>
//                               {itQualifications.map((q) => (
//                                 <option key={q.value} value={q.value}>
//                                   {q.label}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>

//                         {/* Fresher Checkbox */}
//                         <div className="row">
//                           <div className="col-12 ms-0 pe-0 text-end">
//                             <div className="form-check d-flex justify-content-end align-items-center">
//                               <label
//                                 className="form-check-label me-5"
//                                 htmlFor="fresherCheck"
//                               >
//                                 Are You Fresher
//                               </label>
//                               <input
//                                 className="form-check-input me-3"
//                                 type="checkbox"
//                                 onChange={handleCheckExperience}
//                                 checked={isFresher}
//                                 id="fresherCheck"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {/* Skills Section */}
//                         <div className="row mt-2">
//                           <div className="accordion" id="skillAccordion">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header">
//                                 <button
//                                   className="accordion-button bg-light"
//                                   type="button"
//                                   data-bs-toggle="collapse"
//                                   data-bs-target="#skillCollapse"
//                                   style={{
//                                     height: "40px",
//                                     padding: "5px 10px",
//                                   }}
//                                 >
//                                   Skills
//                                 </button>
//                               </h2>
//                               <div
//                                 id="skillCollapse"
//                                 className="accordion-collapse collapse show"
//                               >
//                                 <div className="accordion-body">
//                                   {skillList.map((skill) => (
//                                     <div key={skill.id} className="row mb-2">
//                                       <div className="col-12 col-lg-4">
//                                         <label>Skill Name</label>
//                                         <input
//                                           type="text"
//                                           className="form-control form-control-sm"
//                                           value={skill.skills}
//                                           onChange={(e) =>
//                                             handleSkillChange(
//                                               skill.id,
//                                               "skills",
//                                               e.target.value,
//                                             )
//                                           }
//                                           placeholder="e.g., React, Java"
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label>Category Code</label>
//                                         <input
//                                           type="text"
//                                           className="form-control form-control-sm"
//                                           value={skill.categoryCode}
//                                           onChange={(e) =>
//                                             handleSkillChange(
//                                               skill.id,
//                                               "categoryCode",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label>Rate (0–10)</label>
//                                         <input
//                                           type="number"
//                                           className="form-control form-control-sm"
//                                           value={skill.rate}
//                                           onChange={(e) =>
//                                             handleSkillChange(
//                                               skill.id,
//                                               "rate",
//                                               parseInt(e.target.value) || 0,
//                                             )
//                                           }
//                                           min="0"
//                                           max="10"
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-2 d-flex align-items-end justify-content-end">
//                                         <button
//                                           type="button"
//                                           className="delete-button"
//                                           onClick={() =>
//                                             handleRemoveSkill(skill.id)
//                                           }
//                                         >
//                                           <FontAwesomeIcon
//                                             icon={faTrash}
//                                             className="text-danger"
//                                           />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   ))}
//                                   <p
//                                     className="text-primary"
//                                     style={{ cursor: "pointer" }}
//                                     onClick={handleAddSkill}
//                                   >
//                                     + Add More Skill
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Highest Qualification Section */}
//                         <div className="row mt-2">
//                           <div className="accordion" id="accordionExample">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header" id="headingTwo">
//                                 <button
//                                   className="accordion-button bg-light"
//                                   type="button"
//                                   data-bs-toggle="collapse"
//                                   data-bs-target="#collapseTwo"
//                                   style={{
//                                     height: "40px",
//                                     padding: "5px 10px",
//                                   }}
//                                   aria-expanded="true"
//                                 >
//                                   Highest Qualification
//                                 </button>
//                               </h2>
//                               <div
//                                 id="collapseTwo"
//                                 className="accordion-collapse collapse show"
//                                 aria-labelledby="headingTwo"
//                               >
//                                 <div className="accordion-body">
//                                   {qualifications.map((qualification) => (
//                                     <div className="row" key={qualification.id}>
//                                       <div className="col-12 col-lg-3">
//                                         <label className="form-label">
//                                           Qualification
//                                         </label>
//                                         <select
//                                           className="form-control form-control-sm"
//                                           value={qualification.qualification}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "qualification",
//                                               e.target.value,
//                                             )
//                                           }
//                                         >
//                                           <option value="">
//                                             Select a Qualification
//                                           </option>
//                                           {itQualifications.map((q) => (
//                                             <option
//                                               key={q.value}
//                                               value={q.value}
//                                             >
//                                               {q.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label className="form-label">
//                                           Institute Name
//                                         </label>
//                                         <select
//                                           className="form-control form-control-sm"
//                                           value={qualification.institutionName}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "institutionName",
//                                               e.target.value,
//                                             )
//                                           }
//                                         >
//                                           <option value="">
//                                             Select an Institute
//                                           </option>
//                                           {indianInstitutes.map((inst) => (
//                                             <option
//                                               key={inst.value}
//                                               value={inst.value}
//                                             >
//                                               {inst.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-3">
//                                         <label className="form-label">
//                                           Year of Pass Out
//                                         </label>
//                                         <input
//                                           type="date"
//                                           className="form-control form-control-sm"
//                                           value={qualification.yearOfPassOut}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "yearOfPassOut",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-2">
//                                         <label className="form-label">
//                                           Percentage
//                                         </label>
//                                         <input
//                                           type="text"
//                                           required
//                                           className="form-control form-control-sm"
//                                           placeholder="Percentage"
//                                           value={qualification.percentage}
//                                           onChange={(e) =>
//                                             handleChange(
//                                               qualification.id,
//                                               "percentage",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-1 d-flex align-items-end justify-content-end">
//                                         <button
//                                           type="button"
//                                           className="delete-button"
//                                           onClick={() =>
//                                             handleRemoveDegree(qualification.id)
//                                           }
//                                         >
//                                           <FontAwesomeIcon
//                                             icon={faTrash}
//                                             className="text-danger"
//                                           />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   ))}
//                                   <div className="row">
//                                     <p
//                                       className="text-primary"
//                                       style={{ cursor: "pointer" }}
//                                       onClick={handleAddMoreDegree}
//                                     >
//                                       + Add More Degree
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Experience Section */}
//                         <div className="row mt-2 mb-4">
//                           <div className="accordion" id="accordionExampleExp">
//                             <div className="accordion-item">
//                               <h2 className="accordion-header" id="headingOne">
//                                 <button
//                                   className="accordion-button bg-light"
//                                   type="button"
//                                   data-bs-toggle="collapse"
//                                   data-bs-target="#collapseOne"
//                                   style={{
//                                     height: "40px",
//                                     padding: "5px 10px",
//                                   }}
//                                   aria-expanded="true"
//                                 >
//                                   Experience
//                                 </button>
//                               </h2>
//                               <div
//                                 id="collapseOne"
//                                 className="accordion-collapse collapse show"
//                                 aria-labelledby="headingOne"
//                               >
//                                 <div className="accordion-body">
//                                   <div className="row align-items-center">
//                                     <div className="col-12 col-lg-2">
//                                       <label className="form-label">
//                                         Total Experience
//                                       </label>
//                                     </div>
//                                     <div className="col-12 col-lg-1">
//                                       <input
//                                         type="text"
//                                         required
//                                         value={formValues.totalExperience}
//                                         className="form-control form-control-sm"
//                                         onChange={handleEvent}
//                                         name="totalExperience"
//                                         placeholder="Exp"
//                                       />
//                                     </div>
//                                     <div className="col-12 col-lg-9 text-lg-end">
//                                       <div className="form-check d-flex justify-content-end align-items-center">
//                                         <label
//                                           className="form-check-label me-5"
//                                           htmlFor="workingCheck"
//                                         >
//                                           Are You Currently Working
//                                         </label>
//                                         <input
//                                           className="form-check-input"
//                                           type="checkbox"
//                                           checked={isWorking}
//                                           onChange={handleCheckboxChange}
//                                           id="workingCheck"
//                                         />
//                                       </div>
//                                     </div>
//                                   </div>

//                                   {isWorking ? (
//                                     <div className="row">
//                                       <div className="col-12 col-lg-3 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Current Company
//                                         </label>
//                                         <select
//                                           className="form-select form-select-sm"
//                                           name="currentCompany"
//                                           onChange={handleCurrent}
//                                         >
//                                           <option value="">
//                                             Select a Company
//                                           </option>
//                                           {consultingAndITCompanies.map((c) => (
//                                             <option
//                                               key={c.value}
//                                               value={c.value}
//                                             >
//                                               {c.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Current Role
//                                         </label>
//                                         <select
//                                           className="form-select form-select-sm"
//                                           name="currentRole"
//                                           onChange={handleCurrent}
//                                         >
//                                           <option value="">
//                                             Select a Role
//                                           </option>
//                                           {itIndustryRoles.map((r) => (
//                                             <option
//                                               key={r.value}
//                                               value={r.value}
//                                             >
//                                               {r.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Current Designation
//                                         </label>
//                                         <select
//                                           className="form-select form-select-sm"
//                                           name="currentDesignation"
//                                           onChange={handleCurrent}
//                                         >
//                                           <option value="">
//                                             Select a Designation
//                                           </option>
//                                           {industryDesignations.map((d) => (
//                                             <option
//                                               key={d.value}
//                                               value={d.value}
//                                             >
//                                               {d.label}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Join Date
//                                         </label>
//                                         <input
//                                           type="date"
//                                           className="form-control form-select-sm"
//                                           name="joiningDate"
//                                           onChange={handleCurrent}
//                                         />
//                                       </div>
//                                       <div className="col-12 col-lg-2 ms-0 pe-0">
//                                         <label className="form-check-label">
//                                           Notice Period
//                                         </label>
//                                         <input
//                                           type="text"
//                                           className="form-control form-control-sm"
//                                           name="noticePeriod"
//                                           onChange={handleCurrent}
//                                           placeholder="Notice Period"
//                                         />
//                                       </div>
//                                     </div>
//                                   ) : (
//                                     <>
//                                       {lastCompany.map((company, index) => (
//                                         <div className="row" key={company.id}>
//                                           <div className="col-12 col-lg-3 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Last Company
//                                             </label>
//                                             <select
//                                               className="form-select form-select-sm"
//                                               value={company.lastCompanyName}
//                                               onChange={(e) => {
//                                                 const updated = [
//                                                   ...lastCompany,
//                                                 ];
//                                                 updated[index] = {
//                                                   ...updated[index],
//                                                   lastCompanyName:
//                                                     e.target.value,
//                                                 };
//                                                 setLastCompany(updated);
//                                               }}
//                                             >
//                                               <option value="">
//                                                 Select a Company
//                                               </option>
//                                               {consultingAndITCompanies.map(
//                                                 (c) => (
//                                                   <option
//                                                     key={c.value}
//                                                     value={c.value}
//                                                   >
//                                                     {c.label}
//                                                   </option>
//                                                 ),
//                                               )}
//                                             </select>
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Last Role
//                                             </label>
//                                             <select
//                                               className="form-select form-select-sm"
//                                               value={company.lastRole}
//                                               onChange={(e) => {
//                                                 const updated = [
//                                                   ...lastCompany,
//                                                 ];
//                                                 updated[index] = {
//                                                   ...updated[index],
//                                                   lastRole: e.target.value,
//                                                 };
//                                                 setLastCompany(updated);
//                                               }}
//                                             >
//                                               <option value="">
//                                                 Select a Role
//                                               </option>
//                                               {itIndustryRoles.map((r) => (
//                                                 <option
//                                                   key={r.value}
//                                                   value={r.value}
//                                                 >
//                                                   {r.label}
//                                                 </option>
//                                               ))}
//                                             </select>
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Last Designation
//                                             </label>
//                                             <select
//                                               className="form-select form-select-sm"
//                                               value={company.lastDesignation}
//                                               onChange={(e) => {
//                                                 const updated = [
//                                                   ...lastCompany,
//                                                 ];
//                                                 updated[index] = {
//                                                   ...updated[index],
//                                                   lastDesignation:
//                                                     e.target.value,
//                                                 };
//                                                 setLastCompany(updated);
//                                               }}
//                                             >
//                                               <option value="">
//                                                 Select a Designation
//                                               </option>
//                                               {industryDesignations.map((d) => (
//                                                 <option
//                                                   key={d.value}
//                                                   value={d.value}
//                                                 >
//                                                   {d.label}
//                                                 </option>
//                                               ))}
//                                             </select>
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Join Date
//                                             </label>
//                                             <input
//                                               type="date"
//                                               className="form-control form-control-sm"
//                                               value={company.lastJoiningDate}
//                                               onChange={(e) =>
//                                                 handleDateChange(
//                                                   e,
//                                                   index,
//                                                   "lastJoiningDate",
//                                                 )
//                                               }
//                                             />
//                                           </div>
//                                           <div className="col-12 col-lg-2 ms-0 pe-0">
//                                             <label className="form-check-label">
//                                               Relieving Date
//                                             </label>
//                                             <input
//                                               type="date"
//                                               className="form-control form-control-sm"
//                                               value={company.lastRelievingDate}
//                                               onChange={(e) =>
//                                                 handleDateChange(
//                                                   e,
//                                                   index,
//                                                   "lastRelievingDate",
//                                                 )
//                                               }
//                                             />
//                                           </div>
//                                           <div className="col-12 col-lg-1 d-flex align-items-end justify-content-end">
//                                             <button
//                                               type="button"
//                                               className="delete-current-button"
//                                               onClick={() =>
//                                                 handleRemoveLastCompany(
//                                                   company.id,
//                                                 )
//                                               }
//                                             >
//                                               <FontAwesomeIcon
//                                                 icon={faTrash}
//                                                 className="text-danger"
//                                               />
//                                             </button>
//                                           </div>
//                                         </div>
//                                       ))}
//                                       <div className="row">
//                                         <p
//                                           className="text-primary"
//                                           style={{ cursor: "pointer" }}
//                                           onClick={handleAddMoreLastCompany}
//                                         >
//                                           + Add More Exp
//                                         </p>
//                                       </div>
//                                     </>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="col-12">
//                       <div className="d-flex justify-content-end">
//                         <input
//                           type="submit"
//                           className="btn btn-primary bg-primary register-btn-style"
//                           value={lableButton}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-12 text-center">
//                       <span>Already have an account? </span>
//                       <span className="text-primary backToLoginBtn">
//                         <Link to="/login">
//                           <u className="text-primary">Log In</u>
//                         </Link>
//                       </span>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container-fluid">
//           <FooterTwo />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
import React, { useState, useEffect } from "react";
import constants from "../../constants/Constants";
import "boxicons/css/boxicons.min.css";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../../redux/store/Slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import jsonObject from "./MockJsonCandidate.js";
import mainLogo from "../../assets/img/home3/logo.png";
import MobileMenu from "../Header/MobileMenu";
import FooterTwo from "../Footer/FooterTwo";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DropDown from "../common/DropDown.js";
import "react-toastify/dist/ReactToastify.css";
import { Password } from "@mui/icons-material";

function SignUp() {
  const [offset, setOffset] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);
  const dispatch = useDispatch();
  const userCandidate = useSelector((state) => state.user.user);
  const [lableButton, setLablebutton] = useState("Register");
  const [currentStep, setCurrentStep] = useState(0);

  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const navigate = useNavigate();

  const {
    itProfessions,
    allIndustryProfessions,
    consultingAndITCompanies,
    itIndustryRoles,
    industryDesignations,
    itQualifications,
    indianInstitutes,
  } = jsonObject;

  const initialAddressValues = { cityId: "", stateId: "", countryId: "" };

  // ---------- State declarations ----------
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    gender: "",
    degree: "",
    experience: "",
    profession: "",
    sector: [],
    totalexp: "",
    position: "",
    totalExperience: "",
    experienceFresher: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    gender: "",
    profession: "",
    sector: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    emailId: false,
    phoneNumber: false,
    gender: false,
    profession: false,
    sector: false,
  });

  const [isFresher, setIsFresher] = useState(false);
  const [data, setData] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [getcityName, setCityName] = useState("");
  const [getcountryName, setCountryName] = useState("");
  const [cityOptionsForCommunication, setCityOptionsForCommunication] = useState([]);
  const [stateOptionsForCommunication, setStateOptionsForCommunication] = useState([]);
  const [communicationaddress, setcommunicationaddress] = useState(initialAddressValues);
  const [getstateName, setStateName] = useState("");
  const [userCode, setUserCode] = useState("");
  const [isWorking, setIsWorking] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const MAX_COUNT = 5;

  const [qualifications, setQualifications] = useState([
    { id: 1, qualification: "", institutionName: "", yearOfPassOut: "", percentage: "", candidateId: "" },
  ]);

  const [currentCompany, setCurrentCompany] = useState([]);
  const [lastCompany, setLastCompany] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");

  const [dob, setDob] = useState("");
  const [candidateType, setCandidateType] = useState("");
  const [primaryRole, setPrimaryRole] = useState(null);
  const [primaryDesignation, setPrimaryDesignation] = useState("");
  const [degree, setDegree] = useState("");

  const [skillList, setSkillList] = useState([
    { id: 1, skills: "", rate: 0, categoryCode: "", categoryName: "", description: "" },
  ]);

  const [userCodeField, setUserCodeField] = useState("");
  const [userPassword, setUserPassword] = useState("string");

  // ----- Helper functions -----
  const getDropdownOptions = (array, keyLabel, keyValue) => {
    return array.map((item) => ({ label: item[keyLabel], value: item[keyValue] }));
  };

  function handleInputsetcommunicationaddress(e) {
    const { name, value } = e.target;
    if (name === "cityId") {
      setCityId(e.target.value);
      setCityName(e.target.options[e.target.selectedIndex].text);
    }
    switch (name) {
      case "countryId": {
        const [curCountry] = data.filter((country) => country.countryId === +value);
        if (!curCountry) break;
        setCountryId(curCountry.countryId);
        setCountryName(curCountry.countryName);
        setStateOptionsForCommunication(getDropdownOptions(curCountry?.states ?? [], "stateName", "stateId"));
        setCityOptionsForCommunication([]);
        break;
      }
      case "stateId": {
        const [curCountry] = data.filter((country) => country.countryId === +communicationaddress.countryId);
        if (!curCountry) break;
        const [curState] = (curCountry?.states ?? []).filter((state) => state.stateId === +value);
        if (!curState) break;
        setStateId(curState.stateId);
        setStateName(curState.stateName);
        setCityOptionsForCommunication(getDropdownOptions(curState?.cities ?? [], "cityName", "cityId"));
        break;
      }
      default:
        break;
    }
    setcommunicationaddress({ ...communicationaddress, [name]: value });
  }

  // ----- Effects -----
  useEffect(() => {
    axios.get(constants.EORMURL + "countries", { headers: {} })
      .then((response) => {
        setData(response.data);
        setCountryOptions(getDropdownOptions(response.data, "countryName", "countryId"));
      })
      .catch(console.error);
    axios.get(constants.CANDIDATE + "industry/findAll", { headers: {} })
      .then((response) => setIndustry(response.data))
      .catch(console.error);
  }, []);

  // Load userCandidate data into form
  useEffect(() => {
    if (!userCandidate || Object.keys(userCandidate).length === 0) return;

    let sectorData = [];
    if (userCandidate.industryId && userCandidate.industryId.length > 0 && userCandidate.industryId[0] !== "") {
      sectorData = userCandidate.industryId.map((id, idx) => ({ id: id, value: userCandidate.industryName?.[idx] || "" }));
    }

    setFormValues({
      firstName: userCandidate.firstName || "",
      lastName: userCandidate.lastName || "",
      emailId: userCandidate.emailId || "",
      gender: userCandidate.gender || "",
      phoneNumber: userCandidate.mobileNumber || "",
      profession: userCandidate.profession || "",
      sector: sectorData,
      totalExperience: userCandidate.totalExperience || "0",
    });

    setIsFresher(userCandidate.experienceFresher || false);
    setcommunicationaddress({
      countryId: userCandidate.countryId || "",
      stateId: userCandidate.stateId || "",
      cityId: userCandidate.cityId || "",
    });
    setCountryName(userCandidate.country || "");
    setStateName(userCandidate.state || "");
    setCityName(userCandidate.city || "");

    if (userCandidate.candidateQualificationList?.length) {
      setQualifications(userCandidate.candidateQualificationList.map((qual, idx) => ({
        id: idx + 1,
        qualification: qual.qualification || "",
        institutionName: qual.institutionName || "",
        yearOfPassOut: qual.yearOfPassOut || "",
        percentage: qual.percentage || "",
        candidateId: qual.candidateId || "",
      })));
    }

    if (userCandidate.candidateExperiencesList?.length) {
      const exp = userCandidate.candidateExperiencesList[0];
      const currentlyWorking = exp.currentlyWorking || false;
      setIsWorking(currentlyWorking);
      if (currentlyWorking) {
        setCurrentCompany([{
          id: 1,
          currentCompany: exp.currentCompany || exp.lastCompanyName || "",
          currentRole: exp.currentRole || exp.lastRole || "",
          currentDesignation: exp.currentDesignation || exp.lastDesignation || "",
          joiningDate: exp.joiningDate || exp.lastJoiningDate || "",
          noticePeriod: exp.noticePeriod || "",
          candidateId: exp.candidateId || "",
        }]);
        setLastCompany([]);
      } else {
        setLastCompany(userCandidate.candidateExperiencesList.map((exp, idx) => ({
          id: idx + 1,
          lastCompanyName: exp.lastCompanyName || "",
          lastRole: exp.lastRole || "",
          lastDesignation: exp.lastDesignation || "",
          lastJoiningDate: exp.lastJoiningDate || "",
          lastRelievingDate: exp.lastRelievingDate || "",
          candidateId: exp.candidateId || "",
        })));
        setCurrentCompany([]);
      }
    } else {
      setCurrentCompany([]);
      setLastCompany([]);
    }

    setDob(userCandidate.dob ? userCandidate.dob.split("T")[0] : "");
    let ct = userCandidate.candidateType || "";
    if (ct === "EXTERNAL") ct = "experienced";
    setCandidateType(ct);
    if (userCandidate.role) {
      setPrimaryRole({ value: userCandidate.role, label: userCandidate.role });
    } else {
      setPrimaryRole(null);
    }
    setPrimaryDesignation(userCandidate.designation || "");
    setDegree(userCandidate.degree || "");

    if (userCandidate.candidateSkillList?.length) {
      setSkillList(userCandidate.candidateSkillList.map((skill, idx) => ({
        id: idx + 1,
        skills: skill.skills || "",
        rate: skill.rate || 0,
        categoryCode: skill.categoryCode || "",
        categoryName: skill.categoryName || "",
        description: skill.description || "",
      })));
    }
  }, [userCandidate]);

  useEffect(() => {
    if (data.length === 0) return;
    if (!userCandidate || Object.keys(userCandidate).length === 0) return;
    const countryObj = data.find((c) => c.countryId === parseInt(userCandidate.countryId));
    if (countryObj) {
      setCountryName(countryObj.countryName);
      const stateObj = countryObj.states?.find((s) => s.stateId === parseInt(userCandidate.stateId));
      if (stateObj) {
        setStateName(stateObj.stateName);
        const cityObj = stateObj.cities?.find((ct) => ct.cityId === parseInt(userCandidate.cityId));
        if (cityObj) setCityName(cityObj.cityName);
      }
    }
  }, [data, userCandidate]);

  useEffect(() => {
    if (!userCode) return;
    setLablebutton("Update");
    axios.get(constants.CANDIDATE + `candidate/findCandidateById/${userCode}`, { headers: {} })
      .then((response) => dispatch(signUpUser(response.data)))
      .catch(console.error);
  }, [userCode]);

  // ----- Event handlers -----
  const handleCheckExperience = (e) => {
    const checked = e.target.checked;
    setIsFresher(checked);
    if (checked) {
      // Fresher: uncheck currently working, clear experience data, set totalExperience to "0"
      setIsWorking(false);
      setCurrentCompany([]);
      setLastCompany([]);
      setFormValues(prev => ({ ...prev, totalExperience: "0" }));
    } else {
      // Not fresher: restore totalExperience to empty or keep as is
      setFormValues(prev => ({ ...prev, totalExperience: "" }));
    }
  };

  const handleCheckboxChange = () => {
    if (!isFresher) {
      setIsWorking(prev => !prev);
    }
  };

  const handleEvent = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormValues({ ...formValues, [name]: checked ? "fresher" : "Experience" });
    } else if (name === "emailId") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({ ...errors, [name]: emailPattern.test(value) ? "" : "Invalid email address" });
    } else if (name === "phoneNumber") {
      if (value.length === 10) {
        setErrors({ ...errors, [name]: /^[0-9]{10}$/.test(value) ? "" : "Invalid phone number" });
      } else {
        setErrors({ ...errors, [name]: "Phone number must be 10 digits" });
      }
    } else if (name === "gender") {
      setErrors({ ...errors, [name]: value === "" ? "Please select a gender" : "" });
    } else {
      setErrors({ ...errors, [name]: value.length > 50 ? `${name.charAt(0).toUpperCase() + name.slice(1)} cannot exceed 50 characters` : "" });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCurrent = (event) => {
    const { name, value } = event.target;
    setCurrentCompany((prev) => prev.length > 0 ? prev.map((item) => ({ ...item, [name]: value })) : [{ id: 1, [name]: value }]);
  };

  const handleChange = (id, field, value) => {
    setQualifications((prev) => prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    if (!value) setErrors({ ...errors, [name]: "Please fill the required field" });
  };

  const handleAddMoreDegree = () => {
    const nextId = qualifications.length > 0 ? Math.max(...qualifications.map((q) => q.id)) + 1 : 1;
    setQualifications([...qualifications, { id: nextId, qualification: "", institutionName: "", yearOfPassOut: "", percentage: "", candidateId: "string" }]);
  };

  const handleRemoveDegree = (id) => setQualifications((prev) => prev.filter((q) => q.id !== id));

  const handleUploadedFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.forEach((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          toast.error(`You can only upload a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileChange = (e) => handleUploadedFiles(Array.from(e.target.files));

  const handleAddMoreCurrentCompany = () => {
    const nextId = currentCompany.length > 0 ? Math.max(...currentCompany.map((c) => c.id)) + 1 : 1;
    setCurrentCompany([...currentCompany, { id: nextId, currentCompany: "", currentRole: "", currentDesignation: "", joiningDate: "", noticePeriod: "", candidateId: "string" }]);
  };

  const handleDateChange = (e, index, dateType) => {
    const updated = [...lastCompany];
    const val = e.target.value;
    if (dateType === "lastJoiningDate") {
      if (updated[index].lastRelievingDate && new Date(val) > new Date(updated[index].lastRelievingDate)) {
        alert("Joining Date cannot be after Relieving Date");
        return;
      }
      updated[index] = { ...updated[index], lastJoiningDate: val };
    } else if (dateType === "lastRelievingDate") {
      if (updated[index].lastJoiningDate && new Date(val) < new Date(updated[index].lastJoiningDate)) {
        alert("Relieving Date must not be before Joining Date");
        return;
      }
      updated[index] = { ...updated[index], lastRelievingDate: val };
    }
    setLastCompany(updated);
  };

  const handleSectorEvent = (event) => {
    const selectedValues = event.target.value;
    const selectedIndustries = industry.filter((ind) => selectedValues.includes(ind.name));
    setFormValues((prev) => ({ ...prev, sector: selectedIndustries.map((ind) => ({ id: ind.id, value: ind.name })) }));
  };

  const handleRemoveCurrentCompany = (id) => setCurrentCompany((prev) => prev.filter((c) => c.id !== id));
  const handleAddMoreLastCompany = () => {
    const nextId = lastCompany.length > 0 ? Math.max(...lastCompany.map((c) => c.id)) + 1 : 1;
    setLastCompany([...lastCompany, { id: nextId, lastCompanyName: "", lastRole: "", lastDesignation: "", lastJoiningDate: "", lastRelievingDate: "", candidateId: "string" }]);
  };
  const handleRemoveLastCompany = (id) => setLastCompany((prev) => prev.filter((c) => c.id !== id));
  const handleDobChange = (e) => setDob(e.target.value);
  const handleCandidateTypeChange = (e) => setCandidateType(e.target.value);
  const handlePrimaryRoleChange = (selectedOption) => setPrimaryRole(selectedOption);
  const handlePrimaryDesignationChange = (e) => setPrimaryDesignation(e.target.value);
  const handleSkillChange = (id, field, value) => {
    setSkillList((prev) => prev.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)));
  };
  const handleAddSkill = () => {
    setSkillList((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((s) => s.id)) + 1 : 1;
      return [...prev, { id: nextId, skills: "", rate: 0, categoryCode: "", categoryName: "", description: "" }];
    });
  };
  const handleRemoveSkill = (id) => setSkillList((prev) => prev.filter((skill) => skill.id !== id));

  // ----- Form validation: returns true if all required fields are filled -----
  const isFormValid = () => {
    // Basic required fields (always needed)
    if (!formValues.firstName || !formValues.lastName || !formValues.emailId || !formValues.phoneNumber || !formValues.gender || !dob || !formValues.profession || !candidateType || !primaryRole?.value || !primaryDesignation || !degree) {
      return false;
    }
    // Email and phone format already validated by error state, but we can also check errors object
    if (errors.emailId || errors.phoneNumber || errors.gender) return false;

    // At least one skill (optional, but if skillList has empty skills, we might require at least one non-empty)
    const hasValidSkill = skillList.some(skill => skill.skills.trim() !== "");
    if (!hasValidSkill) return false;

    // At least one qualification with required fields
    const hasValidQualification = qualifications.some(q => q.qualification && q.institutionName && q.yearOfPassOut && q.percentage);
    if (!hasValidQualification) return false;

    // Experience validation based on fresher status
    if (!isFresher) {
      // Not fresher: totalExperience must be >0
      if (!formValues.totalExperience || parseInt(formValues.totalExperience) <= 0) return false;
      if (isWorking) {
        // Currently working: need current company, role, designation, joining date
        if (currentCompany.length === 0) return false;
        const curr = currentCompany[0];
        if (!curr.currentCompany || !curr.currentRole || !curr.currentDesignation || !curr.joiningDate) return false;
      } else {
        // Not currently working: need last company details
        if (lastCompany.length === 0) return false;
        const last = lastCompany[0];
        if (!last.lastCompanyName || !last.lastRole || !last.lastDesignation || !last.lastJoiningDate || !last.lastRelievingDate) return false;
      }
    }
    // If fresher, totalExperience is forced to "0" and no experience details needed
    return true;
  };

  // ----- SUBMIT FUNCTION -----
  const submitSignUpUser = async (e) => {
    const buttonValue = e.nativeEvent.submitter.value;
    e.preventDefault();
    const now = new Date().toISOString();
    const fullName = `${formValues.firstName} ${formValues.lastName}`;

    let candidateExperiencesList;
    if (isFresher) {
      // Fresher: send empty experience list
      candidateExperiencesList = [];
    } else if (isWorking) {
      candidateExperiencesList = currentCompany.map((item) => ({
        createdBy: fullName,
        updatedBy: buttonValue === "Update" ? fullName : null,
        lastCompanyName: item.currentCompany || "",
        lastRole: item.currentRole || "",
        lastDesignation: item.currentDesignation || "",
        lastJoiningDate: item.joiningDate || "",
        lastRelievingDate: "",
        candidateId: userCode || "string",
        currentlyWorking: true,
      }));
    } else {
      candidateExperiencesList = lastCompany.map((item) => ({
        createdBy: fullName,
        updatedBy: buttonValue === "Update" ? fullName : null,
        lastCompanyName: item.lastCompanyName || "",
        lastRole: item.lastRole || "",
        lastDesignation: item.lastDesignation || "",
        lastJoiningDate: item.lastJoiningDate || "",
        lastRelievingDate: item.lastRelievingDate || "",
        candidateId: userCode || "string",
        currentlyWorking: false,
      }));
    }

    const candidateQualificationList = qualifications.map((qual) => ({
      createdBy: fullName,
      updatedBy: buttonValue === "Update" ? fullName : null,
      qualification: qual.qualification || "",
      institutionName: qual.institutionName || "",
      yearOfPassOut: qual.yearOfPassOut || "",
      percentage: qual.percentage || "",
      candidateId: userCode || "string",
    }));

    const candidateSkillList = skillList.map((skill) => ({
      skills: skill.skills || "",
      rate: skill.rate || 0,
      categoryCode: skill.categoryCode || "",
      categoryName: skill.categoryName || "",
      description: skill.description || "",
      createdBy: fullName,
      updatedBy: buttonValue === "Update" ? fullName : null,
      status: "active",
      createdDatetime: now,
      updatedDatetime: now,
      candidateId: userCode || "string",
    }));

    const finalData = {
      ...(buttonValue === "Update" && { id: userCode, updatedBy: fullName }),
      createdBy: fullName,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      emailId: formValues.emailId,
      mobileNumber: formValues.phoneNumber,
      experienceFresher: isFresher,
      totalExperience: isFresher ? "0" : (formValues.totalExperience || "0"),
      degree: degree || "",
      country: getcountryName || "",
      countryId: countryId ? String(countryId) : "",
      state: getstateName || "",
      stateId: stateId ? String(stateId) : "",
      city: getcityName || "",
      cityId: cityId ? String(cityId) : "",
      gender: formValues.gender,
      dob: dob,
      candidateType: candidateType || "experienced",
      profession: formValues.profession,
      industryId: formValues.sector?.map((item) => item.id) || [],
      industryName: formValues.sector?.map((item) => item.value) || [],
      role: isFresher ? "Fresher" : (primaryRole?.value || primaryRole || ""),
      designation: primaryDesignation || "",
      candidateExperiencesList,
      candidateQualificationList,
      candidateSkillList,
    };

    console.log("Final payload →", JSON.stringify(finalData, null, 2));

    const buildFormData = () => {
      const blob = new Blob([JSON.stringify(finalData)], { type: "application/json" });
      const fd = new FormData();
      fd.append("candidate", blob);
      uploadedFiles.forEach((file) => fd.append("documentList", file));
      return fd;
    };

    if (buttonValue === "Register") {
      try {
        const res = await fetch(constants.CANDIDATE + "candidate/save", { method: "POST", body: buildFormData() });
        if (res.ok) {
          const response = await res.json();
          const newCandidateId = response.id;
          setUserCode(newCandidateId);
          toast.success("Candidate Registered Successfully");
          try {
            const verifyUrl = `${constants.CANDIDATE}verifyCandidate/{candidate}?candidateId=${newCandidateId}&isVerify=true`;
            const verifyRes = await fetch(verifyUrl, { method: "POST", headers: { "Content-Type": "application/json", accept: "application/json" } });
            if (verifyRes.ok) toast.success("Verification email sent successfully");
            else console.warn("Verification API responded with status:", verifyRes.status);
          } catch (verifyError) { console.error("Verification API error:", verifyError); }
          setTimeout(() => alert("Registration complete! You can update your details if needed."), 1000);
        } else if (res.status === 409) {
          toast.error("Email already in use. Please try a different email.");
        } else {
          const errText = await res.text();
          console.error("Server error:", errText);
          toast.error(`Registration failed (${res.status}). Check console for details.`);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } else if (buttonValue === "Update") {
      try {
        const res = await fetch(constants.CANDIDATE + "candidate/updateCandidate", { method: "PUT", body: buildFormData() });
        if (res.ok) {
          toast.success("Candidate Updated Successfully");
        } else if (res.status === 409) {
          toast.error("Email already in use. Please try a different email.");
        } else {
          const errText = await res.text();
          console.error("Server error:", errText);
          toast.error(`Update failed (${res.status}). Check console for details.`);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  // ----- Multi-step navigation -----
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">First Name</label>
              <input type="text" required value={formValues.firstName} className="form-control form-control-sm" name="firstName" onBlur={handleBlur} onChange={handleEvent} placeholder="First Name" />
              {errors.firstName && touched.firstName && <span className="text-danger">{errors.firstName}</span>}
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Last Name</label>
              <input type="text" required value={formValues.lastName} className="form-control form-control-sm" name="lastName" onBlur={handleBlur} onChange={handleEvent} placeholder="Last Name" />
              {errors.lastName && touched.lastName && <span className="text-danger">{errors.lastName}</span>}
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Gender</label>
              <select className="form-control form-control-sm" required value={formValues.gender} name="gender" onBlur={handleBlur} onChange={handleEvent}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Date of Birth</label>
              <input type="date" className="form-control form-control-sm" value={dob} onChange={handleDobChange} required />
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Email</label>
              <input type="email" required value={formValues.emailId} className="form-control form-control-sm" name="emailId" onBlur={handleBlur} onChange={handleEvent} placeholder="john@example.com" />
              {errors.emailId && touched.emailId && <span className="text-danger">{errors.emailId}</span>}
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Phone</label>
              <div className="input-group">
                <div className="input-group-prepend"><span className="input-group-text country-code">+91</span></div>
                <input type="tel" required className="form-control form-control-sm" name="phoneNumber" maxLength="10" onBlur={handleBlur} onChange={handleEvent} placeholder="Phone No" />
              </div>
              {errors.phoneNumber && touched.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Country</label>
              <select className="form-control form-control-sm" value={communicationaddress.countryId} name="countryId" onChange={handleInputsetcommunicationaddress}>
                <option value="">Select Country</option>
                {countryOptions.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">State</label>
              <select className="form-control form-control-sm" value={communicationaddress.stateId} name="stateId" onChange={handleInputsetcommunicationaddress}>
                <option value="">Select State</option>
                {stateOptionsForCommunication.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">City</label>
              <select className="form-control form-control-sm" value={communicationaddress.cityId} name="cityId" onChange={handleInputsetcommunicationaddress}>
                <option value="">Select City</option>
                {cityOptionsForCommunication.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Profession</label>
              <select className="form-select form-select-sm" name="profession" value={formValues.profession} onChange={handleEvent} onBlur={handleBlur} required>
                <option value="">Select a profession</option>
                {itProfessions.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
              {errors.profession && <div className="invalid-feedback d-block">{errors.profession}</div>}
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <FormControl sx={{ minWidth: "100%" }}>
                <label className="form-check-label mb-0">Sector</label>
                <Select multiple value={formValues.sector?.map((s) => s.value) || []} onChange={handleSectorEvent} renderValue={(selected) => selected.join(", ")} sx={{ height: "2rem" }}>
                  {industry.map((ind) => <MenuItem key={ind.id} value={ind.name}>{ind.name}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Candidate Type</label>
              <select className="form-control form-control-sm" value={candidateType} onChange={handleCandidateTypeChange}>
                <option value="">Select</option>
                <option value="fresher">Fresher</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Primary Role</label>
              <DropDown selectedOption={primaryRole} isMulti={false} url="listRoles" keyId="id" keyName="name" handleInputChange={handlePrimaryRoleChange} color={!primaryRole ? "1px solid red" : ""} />
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Primary Designation</label>
              <select className="form-control form-control-sm" value={primaryDesignation} onChange={handlePrimaryDesignationChange}>
                <option value="">Select Designation</option>
                {industryDesignations.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
              </select>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <label className="form-label mb-0">Highest Degree</label>
              <select className="form-control form-control-sm" value={degree} onChange={(e) => setDegree(e.target.value)}>
                <option value="">Select Degree</option>
                {itQualifications.map((q) => <option key={q.value} value={q.value}>{q.label}</option>)}
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="mb-4">
              <h6>Skills</h6>
              {skillList.map((skill) => (
                <div key={skill.id} className="row mb-2">
                  <div className="col-12 col-lg-4"><label>Skill Name</label><input type="text" className="form-control form-control-sm" value={skill.skills} onChange={(e) => handleSkillChange(skill.id, "skills", e.target.value)} placeholder="e.g., React, Java" /></div>
                  <div className="col-12 col-lg-3"><label>Category Code</label><input type="text" className="form-control form-control-sm" value={skill.categoryCode} onChange={(e) => handleSkillChange(skill.id, "categoryCode", e.target.value)} /></div>
                  <div className="col-12 col-lg-3"><label>Rate (0–10)</label><input type="number" className="form-control form-control-sm" value={skill.rate} onChange={(e) => handleSkillChange(skill.id, "rate", parseInt(e.target.value) || 0)} min="0" max="10" /></div>
                  <div className="col-12 col-lg-2 d-flex align-items-end justify-content-end"><button type="button" className="delete-button" onClick={() => handleRemoveSkill(skill.id)}><FontAwesomeIcon icon={faTrash} className="text-danger" /></button></div>
                </div>
              ))}
              <p className="text-primary" style={{ cursor: "pointer" }} onClick={handleAddSkill}>+ Add More Skill</p>
            </div>
            <div>
              <h6>Highest Qualification</h6>
              {qualifications.map((qual) => (
                <div key={qual.id} className="row mb-2">
                  <div className="col-12 col-lg-3"><label>Qualification</label><select className="form-control form-control-sm" value={qual.qualification} onChange={(e) => handleChange(qual.id, "qualification", e.target.value)}><option value="">Select</option>{itQualifications.map((q) => <option key={q.value} value={q.value}>{q.label}</option>)}</select></div>
                  <div className="col-12 col-lg-3"><label>Institute Name</label><select className="form-control form-control-sm" value={qual.institutionName} onChange={(e) => handleChange(qual.id, "institutionName", e.target.value)}><option value="">Select</option>{indianInstitutes.map((inst) => <option key={inst.value} value={inst.value}>{inst.label}</option>)}</select></div>
                  <div className="col-12 col-lg-3"><label>Year of Pass Out</label><input type="date" className="form-control form-control-sm" value={qual.yearOfPassOut} onChange={(e) => handleChange(qual.id, "yearOfPassOut", e.target.value)} /></div>
                  <div className="col-12 col-lg-2"><label>Percentage</label><input type="text" required className="form-control form-control-sm" placeholder="Percentage" value={qual.percentage} onChange={(e) => handleChange(qual.id, "percentage", e.target.value)} /></div>
                  <div className="col-12 col-lg-1 d-flex align-items-end justify-content-end"><button type="button" className="delete-button" onClick={() => handleRemoveDegree(qual.id)}><FontAwesomeIcon icon={faTrash} className="text-danger" /></button></div>
                </div>
              ))}
              <p className="text-primary" style={{ cursor: "pointer" }} onClick={handleAddMoreDegree}>+ Add More Degree</p>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-2"><label className="form-label">Total Experience</label></div>
              <div className="col-12 col-lg-2">
                <input 
                  type="text" 
                  required={!isFresher} 
                  value={formValues.totalExperience} 
                  className="form-control form-control-sm" 
                  onChange={handleEvent} 
                  name="totalExperience" 
                  placeholder="Exp" 
                  disabled={isFresher}
                />
              </div>
              <div className="col-12 col-lg-8 text-lg-end">
                <div className="form-check d-flex justify-content-end align-items-center">
                  <label className="form-check-label me-5">Are You Currently Working</label>
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={isWorking} 
                    onChange={handleCheckboxChange} 
                    disabled={isFresher}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check d-flex justify-content-end align-items-center mb-3">
                <label className="form-check-label me-5">Are You Fresher</label>
                <input 
                  className="form-check-input me-3" 
                  type="checkbox" 
                  onChange={handleCheckExperience} 
                  checked={isFresher} 
                />
              </div>
            </div>
            {!isFresher && (
              <>
                {isWorking ? (
                  <div className="row">
                    <div className="col-12 col-lg-3 mb-2"><label>Current Company</label><select className="form-select form-select-sm" name="currentCompany" onChange={handleCurrent}><option value="">Select</option>{consultingAndITCompanies.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}</select></div>
                    <div className="col-12 col-lg-3 mb-2"><label>Current Role</label><select className="form-select form-select-sm" name="currentRole" onChange={handleCurrent}><option value="">Select</option>{itIndustryRoles.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}</select></div>
                    <div className="col-12 col-lg-3 mb-2"><label>Current Designation</label><select className="form-select form-select-sm" name="currentDesignation" onChange={handleCurrent}><option value="">Select</option>{industryDesignations.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}</select></div>
                    <div className="col-12 col-lg-3 mb-2"><label>Join Date</label><input type="date" className="form-control form-control-sm" name="joiningDate" onChange={handleCurrent} /></div>
                    <div className="col-12 col-lg-3 mb-2"><label>Notice Period</label><input type="text" className="form-control form-control-sm" name="noticePeriod" onChange={handleCurrent} placeholder="Notice Period" /></div>
                  </div>
                ) : (
                  <>
                    {lastCompany.map((company, idx) => (
                      <div key={company.id} className="row mb-2">
                        <div className="col-12 col-lg-3"><label>Last Company</label><select className="form-select form-select-sm" value={company.lastCompanyName} onChange={(e) => { const updated = [...lastCompany]; updated[idx].lastCompanyName = e.target.value; setLastCompany(updated); }}><option value="">Select</option>{consultingAndITCompanies.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}</select></div>
                        <div className="col-12 col-lg-2"><label>Last Role</label><select className="form-select form-select-sm" value={company.lastRole} onChange={(e) => { const updated = [...lastCompany]; updated[idx].lastRole = e.target.value; setLastCompany(updated); }}><option value="">Select</option>{itIndustryRoles.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}</select></div>
                        <div className="col-12 col-lg-2"><label>Last Designation</label><select className="form-select form-select-sm" value={company.lastDesignation} onChange={(e) => { const updated = [...lastCompany]; updated[idx].lastDesignation = e.target.value; setLastCompany(updated); }}><option value="">Select</option>{industryDesignations.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}</select></div>
                        <div className="col-12 col-lg-2"><label>Join Date</label><input type="date" className="form-control form-control-sm" value={company.lastJoiningDate} onChange={(e) => handleDateChange(e, idx, "lastJoiningDate")} /></div>
                        <div className="col-12 col-lg-2"><label>Relieving Date</label><input type="date" className="form-control form-control-sm" value={company.lastRelievingDate} onChange={(e) => handleDateChange(e, idx, "lastRelievingDate")} /></div>
                        <div className="col-12 col-lg-1 d-flex align-items-end"><button type="button" className="delete-current-button" onClick={() => handleRemoveLastCompany(company.id)}><FontAwesomeIcon icon={faTrash} className="text-danger" /></button></div>
                      </div>
                    ))}
                    <p className="text-primary" style={{ cursor: "pointer" }} onClick={handleAddMoreLastCompany}>+ Add More Exp</p>
                  </>
                )}
              </>
            )}
            <div className="mt-3">
              <label className="form-check-label mb-0">Upload Resume</label>
              <input className="form-control form-select-sm" type="file" onChange={handleFileChange} accept="application/pdf, image/png" name="attachmentImg" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // ----- JSX with always-visible Register/Update button (disabled until form valid) -----
  return (
    <div className="wrapper">
      <div className="section-authentication-signin d-flex align-items-center justify-content-center my- my-lg-0">
        <div className="container-fluid">
          <div className="card mb-0 bg-light">
            <div className="card-body">
              <div className="p-1">
                <div className="text-center mb-4">
                  <h5 className="headerStyle">Candidate Registration</h5>
                </div>
                {/* Step indicator */}
                <div className="d-flex justify-content-center mb-4">
                  {["Basic Details", "Professional Info", "Skills & Qualification", "Experience"].map((label, idx) => (
                    <div key={idx} className={`step-indicator ${currentStep === idx ? "active" : ""}`} style={{ margin: "0 10px", padding: "5px 10px", borderBottom: currentStep === idx ? "2px solid #0d6efd" : "2px solid #ccc", cursor: "pointer" }} onClick={() => setCurrentStep(idx)}>
                      {label}
                    </div>
                  ))}
                </div>
                <div className="form-body">
                  <form onSubmit={submitSignUpUser}>
                    {renderStep()}
                    <div className="d-flex justify-content-between mt-4" style={{ marginBottom: "30px", flexWrap: "wrap", gap: "10px" }}>
                      {currentStep > 0 && (
                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                          Previous
                        </button>
                      )}
                      {currentStep < 3 && (
                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                          Next
                        </button>
                      )}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => {
                          const fakeEvent = {
                            nativeEvent: { submitter: { value: lableButton } },
                            preventDefault: () => {}
                          };
                          submitSignUpUser(fakeEvent);
                        }}
                        disabled={!isFormValid()}
                        style={{
                          marginLeft: "auto",
                          display: "inline-block",
                          backgroundColor: "#28a745",
                          color: "white",
                          padding: "8px 20px",
                          border: "2px solid #1e7e34",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          zIndex: 9999,
                          position: "relative",
                          opacity: isFormValid() ? 1 : 0.6
                        }}
                      >
                        {lableButton}
                      </button>
                    </div>
                    <div className="col-12 text-center mt-3">
                      <span>Already have an account? </span>
                      <span className="text-primary backToLoginBtn">
                        <Link to="/login"><u className="text-primary">Log In</u></Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;