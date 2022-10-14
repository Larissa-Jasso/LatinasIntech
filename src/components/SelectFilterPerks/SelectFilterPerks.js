import { Avatar, Image, Select } from "antd";
import React, { useEffect, useState } from "react";

export default function SelectFilterPerks(props) {
  const { data, setSearchPerk, setCurrentPage } = props;
  const filter = [];
  const myObj = [];
  const [array, setArray] = useState([]);
  const { Option } = Select;
  useEffect(() => {
    data.map((d) => {
      d.perks.map((p, index) => {
        let image;

        if (p.name == "womenintecherg") {
          image = "PWI.png";
        } else if (p.name == "remotefriendly") {
          image = "PRF.png";
        } else if (p.name == "paidparentalleave") {
          image = "PPL.png";
        } else if (p.name == "latinxintech") {
          image = "PLt.png";
        } else if (p.name == "lgbtqierg-2") {
          image = "PLGTBIQ.png";
        } else if (p.name == "unlimitedvacation") {
          image = "PUV.png";
        }

        if (!(p.name in myObj)) {
          // if it does not exist we create that value and add it to the final array, and if it does exist we do not add it
          myObj[p.name] = true;
          filter.push({
            key: d.id,
            value: p.name,
            image: image,
          });
        }
      });
    });
    setArray(filter);
  }, []);

  const handleChange = (value) => {
    // console.log(value);
    setSearchPerk(value);
    setCurrentPage(1);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      style={{
        width: "100%",
      }}
      placeholder="Please select an perk option(s)"
      onChange={handleChange}
      size="large"
    >
      {array.map((f, index) => {
        return (
          <Option key={index} value={f.value}>
           <Avatar 
                src={<Image src={`/images/${f.image}`} preview={false} style={{ width: 25 }} />}
                key={index}
              /> &nbsp;
              <span>{f.value} </span>
          </Option>
        );
      })}
    </Select>
  );
}
