import React from "react";
import { Avatar, Card, Col, Result, Row } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import JobInformation from "../JobInformation/JobInformation";
import JobSpecs from "../JobSpecs/JobSpecs";
import JobBenefits from "../JobBenefits";
import "./JobPreview.scss";

export default function JobPreview(props) {
  const { data } = props;
  return (
    <a href={`/@j-@d/${data.id}`}>
      <Card className="card-preview">
        <Row  gutter={[12, 12]} justify="center">
          <Col xs={24} md={12} lg={10} xl={10}>
            <JobInformation
              title={data.title}
              subtitle={data.company}
              text={data.time}
            />
          </Col>
          <Col xs={24} md={6} lg={4} xl={7}>
            <JobSpecs specs={data} />
          </Col>
          <Col xs={24} md={6} lg={10} xl={7}>
            {data.perks == "" ? (
              <Avatar
              style={{ backgroundColor: '#87d068' }}
                size={{
                  xs: 40,
                  sm: 40,
                  md:60,
                  lg: 64,
                  xl: 80,
                  xxl: 70,
                }}
              >                
                No perks yet
              </Avatar>
            ) : (
              <JobBenefits benefits={data.perks} />
            )}
          </Col>
        </Row>
      </Card>
    </a>
  );
}
