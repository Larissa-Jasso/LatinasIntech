import React from "react";
import { Avatar, Card, Col, Row, Typography } from "antd";
import { FileProtectOutlined } from "@ant-design/icons";
import "./JobPreview.scss";

export default function JobPreview(props) {
    const {data}=props;
  const { Text } = Typography;
  return (
    <Card className="card-style">
      <Row justify="center">
        <Col xs={24} md={12} lg={8}>
          <Row gutter={[12, 12]}>
            <Col xs={24} md={6} lg={4} >
              <Avatar shape="square" size={64} icon={<FileProtectOutlined />} />
            </Col>
            <Col xs={24} md={18} lg={20}>
              <Row gutter={[12,6]}>
                <Col xs={24}>
                  <Text copyable className="job-title">
                    {data.title}
                  </Text>
                </Col>
                <Col xs={24}>
                  <Text >
                  {data.company}

                  </Text>
                </Col>
                <Col xs={24}>
                  <Text  className="job-date">
                  {data.time}

                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} lg={8}></Col>
        <Col xs={24} md={12} lg={8}></Col>
      </Row>
    </Card>
  );
}
