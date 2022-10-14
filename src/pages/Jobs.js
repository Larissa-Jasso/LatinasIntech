import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Empty,
  Input,
  Pagination,
  Row,
  Select,
  Skeleton,
} from "antd";
import JobPreview from "../components/Job/JobPreview";
import JobList from "../components/Job/JobList";
import SelectFilter from "../components/SelectFilterArea";
import SelectFilterSeniority from "../components/SelectFilterSeniority";
import SelectFilterPerks from "../components/SelectFilterPerks";
import SelectFilterLocation from "../components/SelectFilterLocation";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [load, setLoad] = useState(true);
  const [searchArea, setSearchArea] = useState("");
  const [searchSeniority, setSearchSeniority] = useState("");
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
  const todosData = useMemo(() => {
    let computedTodos;

    if (searchArea.length > 0) {
      computedTodos = jobs.filter((stra) =>
        searchArea.some((value) =>
          stra.area.toLowerCase().includes(value.toLowerCase())
        )
      );
    }

    if (searchSeniority.length > 0) {
      computedTodos = jobs.filter((str) =>
        searchSeniority.some((value) =>
          str.seniority.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    if (keyWords !== "") {
      computedTodos = jobs.filter((todo) =>
        todo.title.toString().toLowerCase().includes(keyWords.toLowerCase())
      );
    }
    if (searchPerk.length > 0) {
      computedTodos = jobs.filter((j) =>
        j.perks.find((strp) =>
          searchPerk.some((value) =>
            strp.name.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    }

    if (searchLocation.length > 0) {
      computedTodos = jobs.filter((j) =>
        j.location.find((strl) =>
          searchLocation.some((value) =>
            strl.name.toLowerCase().includes(value.toLowerCase())
          )
        )
      );
    }

    if (sortDate) {
      computedTodos = jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (!sortDate) {
      jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (sortAphabetic) {
      jobs.sort((a, b) => a.company.localeCompare(b.company));
    }
    if (!sortAphabetic) {
      jobs.sort((a, b) => b.company.localeCompare(a.company));
    }

    if (
      searchArea.length == 0 &&
      searchSeniority.length == 0 &&
      searchPerk.length == 0 &&
      searchLocation.length == 0 &&
      keyWords.length == 0
    ) {
      computedTodos = jobs;
    }
    console.log("comp", computedTodos);
    setTotalTodos(computedTodos.length);

    //Current Page slice
    return computedTodos.slice(
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
    <Card>
      <Row gutter={[12, 12]}>
        <Col xs={24}>
          <SelectFilter
            data={jobs}
            setSearchArea={setSearchArea}
            setCurrentPage={setCurrentPage}
          />
        </Col>
        <Col xs={24}>
          <SelectFilterSeniority
            data={jobs}
            setSearchSeniority={setSearchSeniority}
            setCurrentPage={setCurrentPage}
          />
        </Col>
        <Col xs={24}>
          <SelectFilterPerks
            data={jobs}
            setSearchPerk={setSearchPerk}
            setCurrentPage={setCurrentPage}
          />
        </Col>
        <Col xs={24}>
          <SelectFilterLocation
            data={jobs}
            setSearchLocation={setSearchLocation}
            setCurrentPage={setCurrentPage}
          />
        </Col>
        <Col xs={24}>
          <Input
            placeholder="KeyWords"
            onChange={(e) => setKeyWords(e.target.value)}
            allowClear
          />
        </Col>
        <Col xs={24}>
          <Button onClick={() => setSortDate(!sortDate)}>Recent</Button>
        </Col>
        <Col xs={24}>
          <Button onClick={() => setSortAphabetic(!sortAphabetic)}>
            Company A-Z
          </Button>
        </Col>

        <Col xs={24}>
          <JobList data={todosData} />
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
  );
}
