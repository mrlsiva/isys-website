import React, { useEffect, useState } from 'react'
import { RiUser4Line } from 'react-icons/ri';
import Select from 'react-select';
import Constants from '../../../constants/Constants'
import styles from '../../../dist/styles/css/Button.module.css'

// eslint-disable-next-line react/prop-types
const DropDownCommon = ({ url, handleInputChange, keyId, keyName, selectedOption ,color, disabled, isMulti}) => {
 
  const [items, setItems] = React.useState([]);
  let FullURL=Constants.URL + url;
  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch(`${FullURL}`, {
        method: "GET",
        headers: {
          //Authorization: AccessToken,
          'Content-Type': 'application/json',
      // "Access-Control-Allow-Headers" : "Content-Type",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      });
      const body = await response.json();
      if(url==='accessItems/getAllLink')
      {
        const apiOptions = body?.map((option) => ({ id: option[keyId], value: option[keyName], label: option[keyName] }));
      const staticOption = { id: null, value: '--No Parent--', label: '--No Parent--' };
      const updatedOptions = [staticOption, ...apiOptions];
      setItems(updatedOptions);
      }
      else
      {
      setItems(body?.map((option) =>({ id: option[keyId], value: option[keyName], label: option[keyName] }
      )));
      }
    }

    getCharacters();
  }, [FullURL]);
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
    <div className="text-left" style={{border: `${color}`,position: "relative",zIndex: 1000}}  >
      <Select 
        isDisabled={disabled}
        value={selectedOption}
        placeholder={selectedOption}
        onChange={optionSelect}
        options={items}
        isMulti={isMulti ? isMulti : false}
        styles={customStyles}
      />
    </div>
  )
}

export default DropDownCommon