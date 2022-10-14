import React from "react";
import { Avatar, Col, Row, Typography } from "antd";
import { FileProtectOutlined } from "@ant-design/icons";
import "./JobInformation.scss";

export default function JobInformation(props) {
  const { Text } = Typography;
  const { title,subtitle,text } = props;

  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} md={6} xl={4}>
        <Avatar shape="square" size={64} icon={<FileProtectOutlined />} />
      </Col>
      <Col xs={24} md={18} xl={20}>
        <Row gutter={[12, 6]}>
          <Col xs={24}>
            <Text copyable className="job-title">
              {title}
            </Text>
          </Col>
          <Col xs={24}>
            <Text>{subtitle}</Text>
          </Col>
          <Col xs={24}>
            <Text className="job-date">{text}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
