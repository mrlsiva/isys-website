import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Constants from '../../../constants/Constants';
import Cookies from 'js-cookie';
const DropDownCommonTiat = ({ url, handleInputChange, keyId, keyName,code,teamName, selectedOption ,color, disabled, isMulti}) => {
  const [items, setItems] = React.useState([]);
  let AccessToken = Cookies.get("AccessToken");
  React.useEffect(() => {
    async function getCharacters() {
      let Fullurl=Constants.EORMURL+url
      const response = await fetch(Fullurl, {
        method: "GET",
        headers: {
          "Authorization": AccessToken,
          'Content-Type': 'application/json',
      // "Access-Control-Allow-Headers" : "Content-Type",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      });
      const body = await response.json();
      setItems(body.map((option) =>
      ({ id: option[keyId], value: option[keyName], label: option[keyName], code: option.code,teamName:option.teamName}
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
  }
  return (
    <div className="text-left" style={{border: `${color}`}}  >
      <Select 
        isDisabled={disabled}
        value={selectedOption}
        placeholder={selectedOption}
        onChange={optionSelect}
        options={items}
        isMulti={isMulti}
        styles={customStyles}
      />
    </div>
  )
}

export default DropDownCommonTiat