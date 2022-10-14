import React from "react";
import { Col, Row, Typography } from "antd";
import "./About.scss"

export default function About(props) {
  const { title } = props;
  const { Text } = Typography;
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24}>
        <Text className="subtitle-job-details">{title}</Text>
      </Col>
      <Col xs={24}>
        <label>
          Enim labore reprehenderit ea deserunt fugiat consequat incididunt id.
          Officia exercitation occaecat elit qui in magna. Esse irure commodo
          fugiat tempor quis in aute cupidatat esse. Sunt officia occaecat
          deserunt occaecat exercitation ipsum. In deserunt culpa occaecat id
          esse nostrud consectetur eiusmod tempor anim culpa. Veniam velit nulla
          nostrud aliqua laborum anim id cupidatat commodo. Esse velit sint
          pariatur aliqua mollit aute fugiat aute elit velit anim anim. Nostrud
          et exercitation minim exercitation sit Lorem dolor laboris sint. Dolor
          quis quis cillum laboris. Cupidatat adipisicing ipsum et in laborum.
          Pariatur esse mollit culpa proident ipsum duis duis consectetur anim
          elit et. Exercitation sint quis aliqua incididunt cillum sunt. Ad qui
          officia proident duis ipsum. Aliquip sunt eiusmod labore enim culpa.
          Cupidatat laboris est enim consequat ut proident proident. Elit labore
          consectetur cillum anim est nisi ullamco amet irure nisi consequat
          veniam. Est amet magna ex exercitation mollit proident. Consectetur ut
          et exercitation cillum amet cupidatat elit minim commodo ullamco
          dolore mollit elit incididunt. Cillum officia tempor cupidatat ea
          tempor minim adipisicing. Qui laboris et excepteur nisi labore ad
          veniam. Labore consectetur aliquip anim in esse consectetur laborum
          tempor sunt aliqua. 
        </label>
      </Col>
    </Row>
  );
}
