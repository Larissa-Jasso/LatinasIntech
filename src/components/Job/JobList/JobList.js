import { Empty } from "antd";
import React from "react";
import JobPreview from "../JobPreview";

export default function JobList(props) {
  const { data } = props;
  return data == "" ? (
    <Empty description="No data found" />
  ) : (
    data.map((d) => <JobPreview data={d} key={d.id} />)
  );
}
