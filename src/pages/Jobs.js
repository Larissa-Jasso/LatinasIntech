import { Col, Row } from "antd";
import React from "react";
import JobPreview from "../components/Job/JobPreview";
import jobs from "../data/jobData.json";

export default function Jobs() {
  return (
    <Row>
      <Col xs={24} style={{background:"white"}}>
        {jobs.map((data) => (
          <JobPreview data={data} key={data.id} />
        ))}
      </Col>
    </Row>
  );
}
