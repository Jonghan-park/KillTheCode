import { useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination/Pagination";
import "./Notice.css";

const noticeList = [
  {
    id: 1,
    title: "Welcome to the team KTC",
    admin: "Elly",
    date: "2 Oct, 2022",
    content: 
      `Lorem ipsum dolor sit amet, ius te populo quodsi assueverit. Utinam electram percipitur eam ne, assum eligendi gloriatur vix et.
      Alterum disputationi sit eu. Dolores nominavi in his. Vix an constituto argumentum adversarium, ne cum aeque habemus epicurei.
      Facilisis evertitur scriptorem te pri, melius urbanitas quo id. Tibique mediocritatem ne sed, et vix omnium alienum recteque.`,
  },
  {
    id: 2,
    title: "As a team KTC member",
    admin: "Lauren",
    date: "2 Oct, 2022",
    content: 
      `Lorem ipsum dolor sit amet, ius te populo quodsi assueverit. Utinam electram percipitur eam ne, assum eligendi gloriatur vix et.
      Alterum disputationi sit eu. Dolores nominavi in his. Vix an constituto argumentum adversarium, ne cum aeque habemus epicurei.
      Facilisis evertitur scriptorem te pri, melius urbanitas quo id. Tibique mediocritatem ne sed, et vix omnium alienum recteque.`,
  },
  {
    id: 3,
    title: "Change the team agreement",
    admin: "Joseph",
    date: "5 Oct, 2022",
    content: 
      `Lorem ipsum dolor sit amet, ius te populo quodsi assueverit. Utinam electram percipitur eam ne, assum eligendi gloriatur vix et.
      Alterum disputationi sit eu. Dolores nominavi in his. Vix an constituto argumentum adversarium, ne cum aeque habemus epicurei.
      Facilisis evertitur scriptorem te pri, melius urbanitas quo id. Tibique mediocritatem ne sed, et vix omnium alienum recteque.`,
  },
];

const Notice = () => {
  const PAGE_SIZE = 10;
  const [notices, setNotices] = useState(noticeList.slice(0).reverse());
  const [currentPage, setCurrentPage] = useState(1);
  const currentPaginationData = useMemo(() => {
    const offset = (currentPage - 1) * PAGE_SIZE;
    return notices.slice(offset, offset + PAGE_SIZE);
  }, [notices, currentPage]);
  
  const updatePage = (pageChange) => {
    setCurrentPage(pageChange);
  };
  return (
    <div className="noticeContainer">
      <div className="noticePageTitle">NOTICE</div>
      <Row className="noticeHeader">
        <Col xs="1">No.</Col>
        <Col xs="5" lg="7">Title</Col>
        <Col xs="3" lg="2" className="dd">Admin</Col>
        <Col xs="3" lg="2">Date</Col>
      </Row>
      {currentPaginationData.map((notice) => {
        return (
          <Row key={notice.id} className="notice">
            <Col xs="1">{notice.id}</Col>
            <Col xs="5" lg="7" className="noticeTitle">{notice.title}</Col>
            <Col xs="3" lg="2">
              {notice.admin}
              <FontAwesomeIcon icon={faCrown} className="crown" />
            </Col>
            <Col xs="3" lg="2">{notice.date}</Col>
          </Row>
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalCount={notices.length}
        pageSize={PAGE_SIZE}
        onPageChange={updatePage}
      />
    </div>
  );
};

export default Notice;
