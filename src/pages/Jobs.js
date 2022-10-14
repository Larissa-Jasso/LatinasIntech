import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Input,
  Pagination,
  Row,
  Skeleton,
  Typography,
} from "antd";
import JobList from "../components/Job/JobList";
import SelectFilter from "../components/SelectFilterArea";
import SelectFilterSeniority from "../components/SelectFilterSeniority";
import SelectFilterPerks from "../components/SelectFilterPerks";
import SelectFilterLocation from "../components/SelectFilterLocation";

export default function Jobs() {
  const { Title, Text } = Typography;
  const [jobs, setJobs] = useState([]);
  const [load, setLoad] = useState(true);
  const [searchArea, setSearchArea] = useState("");
  const [searchSeniority, setSearchSeniority] = useState([]);
  const [keyWords, setKeyWords] = useState("");
  const [searchPerk, setSearchPerk] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [sortDate, setSortDate] = useState(false);
  const [sortAphabetic, setSortAphabetic] = useState(false);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // Num of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const [totalTodos, setTotalTodos] = useState(0);
  useEffect(() => {
    fetch(`jobData.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setJobs(response);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
      });
  }, []);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  const JobsData = useMemo(() => {
    let filterJobs = jobs;

    if (searchArea.length > 0) {
      filterJobs = filterJobs.filter((stra) =>
        searchArea.some((value) =>
          stra.area.toLowerCase().includes(value.toLowerCase())
        )
      );
    }

    if (searchSeniority.length > 0) {
      filterJobs = filterJobs.filter((str) =>
        searchSeniority.some((value) =>
          str.seniority.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    if (keyWords.length > 0) {
      filterJobs = filterJobs.filter((todo) =>
        todo.title.toString().toLowerCase().includes(keyWords.toLowerCase())
      );
    }
    if (searchPerk.length > 0) {
      filterJobs = filterJobs.filter((j) =>
        j.perks.find((strp) =>
          searchPerk.some((value) =>
            strp.name.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    }

    if (searchLocation.length > 0) {
      filterJobs = filterJobs.filter((j) =>
        j.location.find((strl) =>
          searchLocation.some((value) =>
            strl.name.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    }

    if (sortDate) {
      filterJobs = filterJobs.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }

    if (sortAphabetic) {
      filterJobs = filterJobs.sort((a, b) =>
        a.company.localeCompare(b.company)
      );
    }

    setTotalTodos(filterJobs.length);

    return filterJobs.slice(
      (currentPage - 1) * recordsPerPage,
      (currentPage - 1) * recordsPerPage + recordsPerPage
    );
  }, [
    jobs,
    currentPage,
    searchArea,
    keyWords,
    searchSeniority,
    searchPerk,
    searchLocation,
    sortDate,
    sortAphabetic,
  ]);

  return load ? (
    <Skeleton />
  ) : jobs == "" ? (
    <Empty description="No jobs found" />
  ) : (
    <Row gutter={[12, 12]}>
      <Col xs={24}>
        <Row gutter={[12, 12]}>
          <Col xs={24}>
            <Title className="text-filter">Search by filters</Title>
          </Col>
          <Col xs={24} md={8} lg={4}>
            <SelectFilter
              data={jobs}
              setSearchArea={setSearchArea}
              setCurrentPage={setCurrentPage}
            />
          </Col>
          <Col xs={24} md={8} lg={4}>
            <SelectFilterSeniority
              data={jobs}
              setSearchSeniority={setSearchSeniority}
              setCurrentPage={setCurrentPage}
              searchSeniority={searchSeniority}
            />
          </Col>
          <Col xs={24} md={8} lg={4}>
            <SelectFilterLocation
              data={jobs}
              setSearchLocation={setSearchLocation}
              setCurrentPage={setCurrentPage}
            />
          </Col>
          <Col xs={24} md={8} lg={4}>
            <SelectFilterPerks
              data={jobs}
              setSearchPerk={setSearchPerk}
              setCurrentPage={setCurrentPage}
            />
          </Col>
        </Row>
        <Divider className="divider-style" />
        <Row gutter={[12, 12]} justify="space-between">
          <Col xs={24} lg={12} xl={10}>
            <Input
              placeholder="Title KeyWords"
              onChange={(e) => setKeyWords(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={24} md={22} lg={12} xl={14}>
            <Row gutter={[12,12]} justify="end">
              <Col xs={8} md={3} lg={6}  xl={4}>
                <Text>Order by:</Text>
              </Col>
              <Col xs={12} md={4} lg={6} xl={4}>
                <Button onClick={() => setSortDate(!sortDate)} className="btn-recent">Recent</Button>
              </Col>
              <Col xs={12} md={4} lg={6} xl={4}>
                <Button onClick={() => setSortAphabetic(!sortAphabetic)} className="btn-alphabetic" >
                  Company A-Z
                </Button>
              </Col>
              
            </Row>
          </Col>
        </Row>
      </Col>

      <Col xs={24}>
        <Card>
          <Row gutter={[12, 12]}>
            <Col xs={24}>
              <JobList data={JobsData} />
            </Col>
            <Col xs={24}>
              <Pagination
                defaultCurrent={1}
                total={totalTodos}
                onChange={onChange}
                responsive={true}
                showTotal={(total) => `${total} items`}
                pageSize={recordsPerPage}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
