import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Empty,
  message,
  Row,
  Skeleton,
  Typography,
} from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import "../scss/Global.scss";
import JobInformation from "../components/Job/JobInformation";
import JobBenefits from "../components/Job/JobBenefits";
import JobSpecs from "../components/Job/JobSpecs";
import About from "../components/About";
import Alert from "../components/Alert";
import Carrousel from "../components/Carrousel";
import SimilarJobs from "../components/SimilarJobs";

export default function JobDetails() {
  let props = useParams();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { Title } = Typography;

  useEffect(() => {
    fetch("/jobData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const information = response.filter((job) => {
          return job.id == props.id;
        });
        setData(information[0]);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
      });
  }, []);

  return load ? (
    <Skeleton />
  ) : data == "" ? (
    <Empty description="No information about this job" />
  ) : (
    <Row gutter={[12, 12]} align="middle">
      <Col xs={24}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <DoubleLeftOutlined /> &nbsp;
              <span>Back to Jobs board</span>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col xs={24}>
        <Title className="title-job-details">{data.title}</Title>
      </Col>
      <Col xs={24} md={12}>
        <JobInformation
          title={data.company}
          subtitle={data.area}
          text={data.time}
        />
      </Col>
      <Col xs={24} md={12}>
        <JobBenefits benefits={data.perks} />
      </Col>
      <Col xs={24}>
        <Row gutter={[12, 12]}>
          <Col xs={24} md={8}>
            <Row gutter={[12, 12]}>
              <Col xs={24}>
                <JobSpecs specs={data} />
              </Col>
              <Col xs={24}>
                <Alert />
              </Col>
              <Col xs={24}>
                <Button
                  className="btn-apply"
                  size="large"
                  type="primary"
                  onClick={() => message.success("Applied")}
                >
                  Apply
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={16}>
            <Card>
              <About title="About the job" />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <Row gutter={[12, 12]}>
          <Col xs={24} md={12}>
            <Card className="card-job">
              <Row gutter={[12, 12]}>
                <Col xs={24}>
                  <About title="About The Company" />
                </Col>
                <Col xs={24}>
                  <Button
                    className="btn-profile"
                    size="large"
                    onClick={() => message.success("See company profile")}
                  >
                    See Company profile
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Carrousel />
          </Col>
        </Row>
      </Col>
      <Col xs={24}>
        <SimilarJobs area={data.area} id={data.id} />
      </Col>
    </Row>
  );
}
