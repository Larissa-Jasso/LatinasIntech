import { Select } from "antd";
import React, { useEffect, useState } from "react";

export default function SelectFilterLocation(props) {
  const { data, setSearchLocation, setCurrentPage } = props;
  const filter = [];
  const myObj = [];
  const [array, setArray] = useState([]);
  const { Option } = Select;
  useEffect(() => {
    data.map((d) => {
      d.location.map((l) => {
        if (!(l.name in myObj)) {
          // if it does not exist we create that value and add it to the final array, and if it does exist we do not add it
          myObj[l.name] = true;
          filter.push({
            key: d.id,
            value: l.name,
          });
        }
      });
    });
    setArray(filter);
  }, []);

  const handleChange = (value) => {
    // console.log(value);
    setSearchLocation(value);
    setCurrentPage(1);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      style={{
        width: "100%",
      }}
      placeholder="Select an location option(s)"
      onChange={handleChange}
    >
      {array.map((f, index) => {
        return (
          <Option key={index} value={f.value}>
            {f.value}
          </Option>
        );
      })}
    </Select>
  );
}
