import React, { useEffect, useState } from "react";
import Select from "react-select";
import Constants from "../../constants/Constants";

// eslint-disable-next-line react/prop-types
const DropDown = ({
  handleInputChange,
  selectedOption,
  disabled,
  isMulti = false,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch(`${Constants.Product_URL}listRoles`);
        const data = await response.json();

        // ✅ Direct mapping (since listRoles returns array)
        const options = data.map((item) => ({
          id: item.id,
          value: item.name,
          label: item.name,
        }));

        setItems(options);
      } catch (error) {
        console.error("Error fetching roles:", error);
        setItems([]);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (selected) => {
    handleInputChange(selected);
  };

  return (
    <Select
      isDisabled={disabled}
      value={selectedOption}
      onChange={handleChange}
      options={items}
      isMulti={isMulti}
      placeholder="Select Role"
      noOptionsMessage={() => "No roles available"}
    />
  );
};

export default DropDown;