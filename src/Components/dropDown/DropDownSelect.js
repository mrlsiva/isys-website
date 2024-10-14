import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Constants from '../../../constants/Constants';
import Cookies from 'js-cookie';
import { genders, employmentTypes } from './DropdownStaticValues'; // Import arrays directly
import { textAlign } from '@mui/system';
import { json } from 'react-router-dom';
import styles from '../../../dist/styles/css/Button.module.css'

const DropDownSelect = ({ url, handleInputChange, keyId, keyName, selectedOption, color, disabled, isMulti }) => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {

    const employmentTypes = [
      { id: 'FULL_TIME', label: 'Full Time' },
      { id: 'PART_TIME', label: 'Part Time' }
    ];
    const gender= [
      { id: 'Male', label: 'Male' },
      { id: 'Female', label: 'Female' },
      { id: 'Others', label: 'Others' },
    ];
if(url==='gender'){
    const mappedItems = gender.map(option => ({
      id: option.id,
      value: option.label,
      label: option.label
    }));

    setItems(mappedItems);
  }
  else if(url==='employeeType'){
    const mappedItems = employmentTypes.map(option => ({
      id: option.id,
      value: option.label,
      label: option.label
    }));
setItems(mappedItems)
  }
  else{

  }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  function optionSelect(items) {
    handleInputChange(items);
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: '14px', // Adjust the font size here
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: '14px', // Adjust the font size here
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: '14px', // Adjust the font size here
    }),
  };

  return (
   
      <Select
        isDisabled={disabled}
        value={selectedOption}
        placeholder={selectedOption}
        onChange={optionSelect}
        options={items}
        isMulti={isMulti}
        required
        styles={customStyles}
      />
    
  );
}

export default DropDownSelect;
