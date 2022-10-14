import React from "react";
import { Card, Col, Image, Row } from "antd";
import "./Alert.scss"
export default function Alert() {
  return (
    <Card
    className="card-alert"
    >
      <Row gutter={[12,12]}>
        <Col xs={4}  xl={2}>
          <Image
            src="/images/alert.png"
            style={{ width: "100%" }}
            preview={false}
          />
        </Col>
        <Col xs={20} xl={22}>
          <label className="label-desc">
            "This may be a contingent job offer.For more information on
            Contingency Jobs, please read this article: </label><label className="label-desc label-msg">“Contingency Jobs: Pros         
            and Cons. All you Need to Know if They Suit Your Professional
            Goals.”"</label>
        </Col>
      </Row>
    </Card>
  );
}
