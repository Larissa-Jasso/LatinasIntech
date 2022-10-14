import React from "react";
import {Card, Col, Row } from "antd";
import JobInformation from "../JobInformation/JobInformation";
import JobSpecs from "../JobSpecs/JobSpecs";
import JobBenefits from "../JobBenefits";
import "./JobPreview.scss"

export default function JobPreview(props) {
    const {data}=props;
  return (
    <a href={`/@j-@d/${data.id}`}>
    <Card className="card-preview">
      <Row justify="center" gutter={[12,12]}>
        <Col xs={24} md={12} lg={10} xl={10}>
         <JobInformation title={data.area} subtitle={data.seniority}  text={data.title} />
        </Col>
        <Col xs={24} md={6} lg={4} xl={7}>
          <JobSpecs specs={data} />
        </Col>
        <Col xs={24} md={6} lg={10} xl={7}>
          <JobBenefits benefits={data.perks} />
        </Col>
      </Row>
    </Card>
    </a>
  );
}
