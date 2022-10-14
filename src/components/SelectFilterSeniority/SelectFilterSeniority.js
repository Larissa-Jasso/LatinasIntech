import { Select } from 'antd';
import React, { useEffect, useState } from 'react'

export default function SelectFilterSeniority(props) {
    const { data,setSearchSeniority,setCurrentPage,searchSeniority} = props;
    const filter = [];
    const myObj = [];
    const [array, setArray] = useState([]);
    const { Option } = Select;
  
    useEffect(() => {
      data.map((d) => {
        if (!(d.seniority in myObj)) {
          // if it does not exist we create that value and add it to the final array, and if it does exist we do not add it
          myObj[d.seniority] = true;
          filter.push({
            key: d.id,
            value: d.seniority,
          });
        }
      });
      setArray(filter);
    }, []);
  
    const handleChange =(value)=>{
      // console.log(value);
      setSearchSeniority(value);
      setCurrentPage(1)
    }
  
    return (
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Select an seniority option(s)"
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
