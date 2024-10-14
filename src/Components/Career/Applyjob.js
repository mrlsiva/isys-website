import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormFloating,
  CFormTextarea,
} from "@coreui/react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";
import Select from "react-select";
import Constants from "../../../src/Components/constants/Constants";
import styles from "../../../src/Components/styles/css/Button.module.css";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import DropDownCommonNew from "../../../src/Components/dropDown/DropDownCommonNew";
import label from "../../../src/Components/mocks/Label";
import { Category } from "@mui/icons-material";
import { CRating } from "@coreui/react";
import Rating from "@mui/material/Rating";
import jsonObject from './DegreeJson';
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { CardHeader } from "react-bootstrap";
const JobPositionForm = () => {
  const initialValuesone = {
   
  };
  const labels = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  };
  const addRow = () => {
    const newRow = {
      id: Date.now(),
      multipleSkillsCategory: "",
    };
    setRows([...rows, newRow]);
  };
  const [existingSkillRatings, setExistingSkillRatings] = useState([]);
  const {itQualifications} =jsonObject;
  console.log("existingggg", existingSkillRatings);
  const [newSkillRatings, setNewSkillRatings] = useState({});
  const [rows, setRows] = useState([]);
  const [multi, setMulti] = useState([]);
  console.log("multi", multi);
  const [values, setValues] = useState(initialValuesone);
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [skillType, setSkillType] = useState("");
  const [categoriesData, setCategoriesData] = useState([]);
  const [mappedSkillCategories, setMappedSkillCategories] = useState([]);
  const [uploadedFiles,setUploadedFiles] = useState([])
  const MAX_COUNT =5;
  const [fileLimit,setFileLimit]=useState(false)
  console.log("skilllssss", mappedSkillCategories);
  const [url, setUrl] = useState("");
  console.log("url", url);
  const handleSubmit = async (e) => {
    const finalData = {
           // "jobId": "2ce21b71-f3f3-44bc-b36d-b9bcadc17504",
           "jobCode": "String",
            "firstName": "Nisha",
            "lastName": "G",
            "emailId": "nisha@gmail.com",
            "phoneNumber": "9323178318",
            "degree": "BE",
            "skills": [
                "Java",
                " Spring",
                " ORM"
            ],
            "noticePeriod": "1 month",
            "expectedCTC": "4 LPA",
            "currentCTC": "3 LPA",
            "applicationCode": "AP00001",
            "candidateCode": "CD00001",
            "fresherExperience": true,
            "documents": [
                {
                    "fileName": "1727860241242_srigeetha.cv.09.pdf",
                    "filePath": "uploaded_files\\\\CANDIDATE\\ownerId\\EXTERNAL_CANDIDATE\\1727860241242_srigeetha.cv.09.pdf",
                    "ownerId": "ownerId",
                    "referenceType": "CANDIDATE",
                    "referenceId": "adc2a15d-9e47-494a-9804-d2f519107c08",
                    "category": "EXTERNAL_CANDIDATE"
                }
            ]
    };
    console.log('final',finalData)
    //  console.log('final',JSON.stringify(finalData,null,2))
      let RECRURL = Constants.RECRURL + "candidateApplyJob/save";
      console.log('RECRURL',RECRURL)
      var json=JSON.stringify(finalData)
        const blob = new Blob([json], {
          type: 'application/*+json',
        })
      var bodyFormData = new FormData();
         bodyFormData.append('candidateApplyJob', blob);
         for (let i = 0; i < uploadedFiles.length; i++) {
          console.log("testttt....file...",uploadedFiles[i])
          bodyFormData.append('documents', uploadedFiles[i]);
        }
        
      let res = await fetch(RECRURL, {
          method: "POST",
          headers: {
          }, 
         body: bodyFormData, 
          ContentType: 'multipart/mixed'
      });
      console.log('res',res)
      if (res.status === 200) {
        setValidated(false)
        setValues(initialValuesone)
        setMessage('Data saved successfully')
        toast.success('Data saved successfully')
  
       setTimeout(function () {
        setMessage('')
        }, 2000)
      }else {
          setMessage("");
      }
    }
  useEffect(() => {
    const fetchData = async () => {
      const formattedUrl = skillType.replace(/,/g, "&");
      const URL =
        Constants.RECRURL +
        "appliedJobSkill/searchSkillByCategory?" +
        formattedUrl;
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log("initialRat", jsonData);

        setExistingSkillRatings(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [skillType]);
  const handleChange = (value) => {
    // const updatedQualifications = qualifications.map(qualification => 
    //   qualification.id === id ? { ...qualification, [field]: value } : qualification
    // );
    // setQualifications(updatedQualifications);
    console.log("value",value)
  };
  const [ratings, setRatings] = useState({});
  const generateUrl = () => {
    console.log("method calling");
    return (
      "appliedJobSkill/searchSkillByCategory?" +
      skillType.categories
        .map((category) => `categories=${encodeURIComponent(category)}`)
        .join("&")
    );
  };
   const handleRatingChange = (categoryName, skill, newValue) => {
    setExistingSkillRatings((prevRatings) => ({
      ...prevRatings,
      [categoryName]: {
        ...prevRatings[categoryName],
        [skill]: newValue,
      },
    }));
  };
  function handleTypeFunctiondepartmentNo(values) {
    setValues((prevState) => ({
      ...prevState,
      branch: values.id,
    }));
  }
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  const handleInputField=(e)=>{
    const {name,value}=e.target;
    setValues({
      ...values,
      [name]:value
    })
  }
  const handleInputChangeCheckbox = (e) => {
    const { name, checked } = e.target;

    if (name === "isFresher") {
      setValues({
        ...values,
        isFresher: checked,
        isExperience: false, 
      });
    } else if (name === "isExperience") {
      setValues({
        ...values,
        isExperience: checked,
        isFresher: false,  
      });
    }
  };
  function handleDesignation(values) {
    setValues((prevState) => ({
      ...prevState,
      designationId: values,
    }));
  }
  const handleSkillcategory = (values) => {
    setValues((prevState) => ({
      ...prevState,
      multipleSkillsCategory: values,
    }));
    const mappedValues = values.map((item) => item.value);
    console.log("valuess..", mappedValues);
    const updatedData = values
      .map((item) => `categories=${item.id}`)
      .toString();
    console.log("update data", updatedData);
    setSkillType(updatedData);
    setMappedSkillCategories(mappedValues);
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

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="text-dark">
              <h5 className={styles.empSubHeader}>Apply Job</h5>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                 <CCol xs={12} md={3} className='mb-3'>
                              <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                                <strong>{label.firstName}</strong><sup className={`${styles.lableSubText}`}>*</sup>
                              </CFormLabel>
                              <CFormInput className={`${styles.lableInputArea}`}
                              disabled={isSubmitted}
                              value={values.firstName}
                                type="text"
                                id="firstName"
                                name="firstName"
                                pattern="[a-zA-Z]+"
                                onChange={(e)=>handleInputField(e)}
                                required
                              />
                            </CCol>
                            <CCol xs={12} md={3} className='mb-3'>
                              <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                                <strong>{label.lastName}</strong><sup className={`${styles.lableSubText}`}>*</sup>
                              </CFormLabel>
                              <CFormInput className={`${styles.lableInputArea}`}
                              disabled={isSubmitted}
                              value={values.lastName}
                                type="text"
                                id="lastName"
                                name="lastName"
                                pattern="[a-zA-Z]+"
                                onChange={(e)=>handleInputField(e)}
                                required
                              />
                            </CCol>
                            <CCol xs={12} md={3} className='mb-3'>
                              <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                                <strong>{label.emailId}</strong><sup className={`${styles.lableSubText}`}>*</sup>
                              </CFormLabel>
                              <CFormInput className={`${styles.lableInputArea}`}
                              disabled={isSubmitted}
                              value={values.emailIdOfficial}
                                type="email"
                                id="exampleFormControlInput1"
                                name="emailIdOfficial"
                                onChange={(e)=>handleInputField(e)}
                              />
                            </CCol>
                            <CCol xs={12} md={3} className='mb-3'>
                              <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                                <strong>{label.contactNo}</strong><sup className={`${styles.lableSubText}`}>*</sup>
                              </CFormLabel>
                              <CCol className={styles.iconAlignment}>

                                <CFormInput className={`${styles.lableInputArea}`}
                                value={values.primaryMobileNo}
                                disabled={isSubmitted}
                                  type="text"
                                  id="contactNo"
                                  name="primaryMobileNo"
                                  pattern="[0-9]{10}"
                                  maxLength="10"
                                  onChange={(e)=>handleInputField(e)}
                                  required
                                />
                              </CCol>
                            </CCol>
                             <CCol md={3} className='mb-3'>
                          <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                            <strong>Degree</strong>
                          </CFormLabel>
                          <select 
                                              className="form-control form-control-sm" 
                                              name={`qualification-`}
                                              // value={qualification.qualification}
                                              onChange={(e) => handleChange(e.target.value)}
                                            >
                                                <option value="">Select a Qualification</option>
                                                   {itQualifications.map((qualif)=>(
                                                  <option key={qualif.value} value={qualif.value}>
                                                    {qualif.label}
                                                  </option>
                                                ))} 
                                            </select>
                          {/* <CFormInput className={`${styles.lableInputArea}`}
                            type="text"
                            id="degree"
                            name="degree"
                            
                          /> */}
                        </CCol> 
                        <CCol md={3} className='mb-3'>
                          <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                            <strong>Notice Period</strong>
                          </CFormLabel>
                          <CFormInput className={`${styles.lableInputArea}`}
                            type="text"
                            id="noticePeriod"
                            name="noticePeriod"
                            //value={communicationaddress.street}
                           // onChange={handleInputsetcommunicationaddress}
                          />
                        </CCol>
                        <CCol md={3} className='mb-3'>
                          <CFormLabel className={`${styles.lableText}`} htmlFor="expectedCTC">
                            <strong>Expected CTC</strong>
                          </CFormLabel>
                          <CFormInput className={`${styles.lableInputArea}`}
                            type="text"
                            id="expectedCTC"
                            name="expectedCTC"
                          />
                        </CCol>
                        <CCol md={3} className='mb-3'>
                          <CFormLabel className={`${styles.lableText}`} htmlFor="currentCTC">
                            <strong>Current CTC</strong>
                          </CFormLabel>
                          <CFormInput className={`${styles.lableInputArea}`}
                            type="text"
                            id="currentCTC"
                            name="currentCTC"
                          />
                        </CCol>
                        <CCol md={3} style={{ marginTop: "30px" }}>
                      <div className="d-flex align-items-center">
                        <strong style={{ fontSize: "17px" }} htmlFor="flexCheckDefault">
                          Fresher
                        </strong>
                        <sup style={{color: 'red', fontSize: '18px'}}>*</sup>
                        <div className="form-check ms-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={values.isFresher}
                            id="flexCheckDefault"
                            name="isFresher"
                            onChange={handleInputChangeCheckbox}
                          />
                        </div>
                      </div>
                    </CCol>
                    <CCol md={3} style={{ marginTop: "30px" }}>
                    <div className="d-flex align-items-center">
                      <strong style={{ fontSize: "17px" }} htmlFor="flexCheckDefault">
                        Experience
                      </strong>
                      <sup style={{color: 'red', fontSize: '18px'}}>*</sup>
                      <div className="form-check ms-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                           label="Experience"
                          checked={values.isExperience}
                          id="flexCheckDefault"
                          name="isExperience"
                          disabled={values.isFresher}
                          onChange={handleInputChangeCheckbox}
                        />
                      </div>
                    </div>
                  </CCol>
                  <CCol md={3} className='mb-3'>
                          <CFormLabel className={`${styles.lableText}`} htmlFor="exampleFormControlInput1">
                            <strong>Resume Upload</strong>
                          </CFormLabel>
                          <CFormInput className={`${styles.lableInputArea}`}
                            type="file"
                            id="documents"
                            name="documents"
                            onChange={handleFileChange}
                            accept='application/pdf, image/png'
                          />
                        </CCol>
                <CCol md={3}>
                      <CFormLabel htmlFor="multipleSkillsCategory">
                        <strong>Skill Category</strong>
                        <sup style={{ color: "red", fontSize: "18px" }}>*</sup>
                      </CFormLabel>
                      <DropDownCommonNew
                        selectedOption={values.multipleSkillsCategory}
                        isMulti={true}
                        url="referenceEntity/getRefEntityByName?refEntityName=SkillCategory"
                        id="code"
                        keyId="code"
                        keyName="name"
                        {...(!values.multipleSkillsCategory && {
                          color: values.multipleSkillsCategory
                            ? "1px solid green"
                            : "",
                        })}
                        handleInputChange={(values) =>
                          handleSkillcategory(values)
                        }
                      />
                    </CCol>
              </CForm>
            </CCardBody>
            <CRow className="mb-3">
              <CCol md={12}>
                <CCardHeader className="text-dark">
                <CTable bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Category</CTableHeaderCell>
            <CTableHeaderCell>Skill</CTableHeaderCell>
            <CTableHeaderCell>Rating</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {existingSkillRatings?.length > 0 &&
            existingSkillRatings.map((category, categoryIndex) => (
              <>
                {category.skills?.map((skill, skillIndex) => (
                  <CTableRow key={`${categoryIndex}-${skillIndex}`}>
                    {skillIndex === 0 && (
                      <CTableDataCell rowSpan={category.skills.length}>
                        {category.categoryName}
                      </CTableDataCell>
                    )}
                    <CTableDataCell>{skill}</CTableDataCell>
                    <CTableDataCell>
                      <Rating
                        name={`ui-skill-rating-${categoryIndex}-${skillIndex}`}
                        value={existingSkillRatings[categoryIndex]?.[skill] || 0}
                        precision={0.5}
                        onChange={(event, newValue) =>
                          handleRatingChange(categoryIndex, skill, newValue)
                        }
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </>
            ))}
        </CTableBody>
      </CTable>
      {rows.map((row, index) => (
        <CRow key={row.id} className="mb-3">
          <CCol sm={9}>
            <CFormInput
              type="text"
              placeholder="Add More Skill"
              value={row.value}
              onChange={(e) => handleInputChange(e, index)}
              className="editable-field"
            />
          </CCol>
          <CCol sm={3}>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
              <Rating
                name={`add-skill-rating-${index}`}
                value={newSkillRatings[index] || null}
                precision={0.5}
                onChange={(event, newValue) => handleRatingChange(index, newValue, true)}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {newSkillRatings[index] !== null && (
                <Box sx={{ ml: 2 }}>{labels[newSkillRatings[index]]}</Box>
              )}
            </Box>
          </CCol>
        </CRow>
      ))}
                  <CButton onClick={addRow} color="primary" className="mb-3">
                    +
                  </CButton>
                </CCardHeader>
              </CCol>
            </CRow>

            <CCardHeader className="text-dark p-3 border border-0">
              <CCol md={12} className="d-flex justify-content-left">
                {message ? (
                  <CButton disabled className={styles.btnColorDisabled}>
                    Data Saved &#10004;
                  </CButton>
                ) : (
                  <CButton
                    className={styles.btnColor}
                    onClick={handleSubmit}
                  >
                    Save
                  </CButton>
                )}
              </CCol>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};
export default JobPositionForm;
