import { Card, Col, Empty, Pagination, Row, Skeleton, Typography } from "antd";
import React, { useEffect, useState } from "react";
import JobList from "../Job/JobList";
import JobPreview from "../Job/JobPreview";

export default function SimilarJobs(props) {
  const { area, id } = props;
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { Title } = Typography;

  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // Num of Records to be displayed on each page
  const [recordsPerPage] = useState(3);
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
          return job.area == area && job.id !== id;
        });
        setData(information);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
      });
  }, []);

  // Indicate where to star en finish
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Separate de array in multiples divitions
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  return load ? (
    <Skeleton />
  ) : (
    <Card>
      {data == "" ? (
        <Empty description="No similiar jobs found" />
      ) : (
        <Row gutter={[12, 12]}>
          <Col xs={24}>
            <Title className="title-job-details">Similar Jobs</Title>
          </Col>
          <Col xs={24}>
            <JobList data={currentRecords} />
          </Col>
          <Col xs={24}>
            <Pagination
              defaultCurrent={1}
              total={data.length}
              onChange={onChange}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultPageSize={recordsPerPage}
            />
          </Col>
        </Row>
      )}
    </Card>
  );
}
