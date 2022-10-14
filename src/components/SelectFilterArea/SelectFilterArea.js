import React, { useEffect, useState } from "react";
import { Select } from "antd";

export default function SelectFilter(props) {
  const { data,setSearchArea,setCurrentPage} = props;
  const filter = [];
  const myObj = [];
  const [array, setArray] = useState([]);
  const { Option } = Select;

  useEffect(() => {
    data.map((d) => {
      if (!(d.area in myObj)) {
        // if it does not exist we create that value and add it to the final array, and if it does exist we do not add it
        myObj[d.area] = true;
        filter.push({
          key: d.id,
          value: d.area,
        });
      }
    });
    setArray(filter);
  }, []);

  const handleChange =(value)=>{
    setSearchArea(value);
    setCurrentPage(1)
  }

  return (
    <Select
      mode="multiple"
      allowClear
      style={{
        width: "100%",
      }}
      placeholder="Select an area option(s)"
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
