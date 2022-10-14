import React from "react";
import { Badge, Col, Row, Typography } from "antd";

export default function JobSpecs(props) {
  const { specs } = props;
  const { Text } = Typography;
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24}>
        <Text>
          <Badge status="default" size="large" /> {specs.type}
        </Text>
      </Col>
      <Col xs={24}>
        <Text>
          <Badge status="default" size="large" />{" "}
          {specs.contingency == "Yes" ? "Romote" : "Presencial"}
        </Text>
      </Col>
      <Col xs={24}>
        <Text>
          <Badge status="default" size="large" /> {specs.seniority}
        </Text>
      </Col>
    </Row>
  );
}
