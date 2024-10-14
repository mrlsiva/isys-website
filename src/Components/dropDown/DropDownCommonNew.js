import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Constants from '../../constants/Constants';
import Cookies from 'js-cookie';
import { textAlign } from '@mui/system';
import styles from '../../Components/styles/css/Button.module.css'
const DropDownCommonNew = ({ url, handleInputChange, keyId, keyName, selectedOption ,color, disabled, isMulti}) => {
  const [items, setItems] = React.useState([]);

  let AccessToken = Cookies.get("AccessToken");
  React.useEffect(() => {
    async function getCharacters() {
      let Fullurl=Constants.EORMURL+url
      const response = await fetch(Fullurl, {
        method: "GET",
        headers: {
          "Authorization": AccessToken,
          // 'Content-Type': 'application/json',
      // "Access-Control-Allow-Headers" : "Content-Type",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      });
      const body = await response.json();
      setItems(body?.map((option) =>
      ({ id: option[keyId], value: option[keyName], label: option[keyName] }
      )));
    }
    getCharacters();
  }, []);
  function optionSelect(items) {
    handleInputChange(items)
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
    <div className="text-left" style={{ border: `${color}`,position: "relative", zIndex: 2002 }}>
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
    </div>
  )
}

export default DropDownCommonNew