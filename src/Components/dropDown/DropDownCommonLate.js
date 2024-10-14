import React, { useEffect, useState } from 'react'
import { RiUser4Line } from 'react-icons/ri';
import Select from 'react-select';
import Constants from '../../../constants/Constants'
import Cookies from 'js-cookie';
const DropDownCommon = ({ url, handleInputChange, keyId, keyName, selectedOption ,color, disabled, isMulti}) => {
  const [items, setItems] = React.useState([]);
  let AccessToken = Cookies.get("AccessToken");
  let FullURL=Constants.EORMURL + url;
  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch(`${FullURL}`, {
        method: "GET",
        headers: {
        },
      });
      const body = await response.json();
      if(url==='accessItems/getAllLink')
      {
        const apiOptions = body.map((option) => ({ id: option[keyId], value: option[keyName], label: option[keyName] }));
      const staticOption = { id: null, value: '--No Parent--', label: '--No Parent--' };
      const updatedOptions = [staticOption, ...apiOptions];
      setItems(updatedOptions);
      }
      else
      {
      setItems(body.map((option) =>
      (
        { id: option[keyId], value: option[keyName], label: option[keyName] }
      )));
      }
      
    }

    getCharacters();
  }, [FullURL]);
  function optionSelect(items) {
    handleInputChange(items)
  }
  return (
    <div className="text-left" style={{border: `${color}`,position: "relative", zIndex: 1000}}  >
      <Select 
        isDisabled={disabled}
        value={selectedOption}
        placeholder={selectedOption}
        onChange={optionSelect}
        options={items}
        isMulti={isMulti ? isMulti : false}
      />
    </div>
  )
}
export default DropDownCommon