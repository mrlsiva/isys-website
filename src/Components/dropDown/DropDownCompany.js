import React from 'react'
import Select from 'react-select';
import Cookies from 'js-cookie';
const DropDownCompany = ({ url, handleInputChange, keyId, keyName, keyNo, selectedOption ,color}) => {
  const [items, setItems] = React.useState([]);
  let AccessToken = Cookies.get("AccessToken");
  React.useEffect(() => {
    async function getCharacters() {
       
      const response = await fetch(`${url}`, {
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
   
      ({ id: option[keyId], value: option[keyName], label: option[keyName], companyNo: option[keyNo] }
     
      )));
    }
    getCharacters();
  }, [url]);
  function optionSelect(items) {
    handleInputChange(items)
  }
  return (
    <div className="text-left" style={{border: `${color}`}}  >
      <Select 
        value={selectedOption}
        onChange={optionSelect}
        options={items}
      />
    </div>
  )
}

export default DropDownCompany