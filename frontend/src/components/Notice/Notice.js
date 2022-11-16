import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination/Pagination";
import "./Notice.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Notice = () => {
  const { user } = useSelector((state) => state.auth);
  const baseUrl = "http://localhost:5000/notice";
  const [noticeList, setNoticeList] = useState([]);
  console.log(user);
  const initNotice = {
    title: "",
    content: "",
  };
  const PAGE_SIZE = 10;
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  const [writeMode, setWriteMode] = useState(false);
  const [newNotice, setNewNotice] = useState(initNotice);
  const [currentPage, setCurrentPage] = useState(1);
  // The temporary state for displaying a working page based on a user information
  const [userLogin, setUserLogin] = useState(true);
  // The temporary state for the calendar based on a user information
  const [isUserAdmin, setIsUserAdmin] = useState(true);

  /** get all data from database */
  const getAllNotice = () => {
    axios.get(baseUrl).then(({ data }) => {
      setNoticeList(data);
    });
  };

  useEffect(() => {
    getAllNotice();
  }, []);

  useEffect(() => {
    setNotices(noticeList.slice(0).reverse());
  }, [setNotices, noticeList]);

  const currentPaginationData = useMemo(() => {
    const offset = (currentPage - 1) * PAGE_SIZE;
    return notices.slice(offset, offset + PAGE_SIZE);
  }, [notices, currentPage]);

  const newNoticeChange = (e) => {
    const { name, value } = e.target;
    setNewNotice({
      ...newNotice,
      [name]: value,
    });
  };
  const onCancle = () => {
    setNewNotice(initNotice);
    setWriteMode(false);
  };
  const updatePage = (pageChange) => {
    setCurrentPage(pageChange);
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="noticeContainer">
      <div className="noticePageTitle">NOTICE</div>
      {writeMode ? (
        <div className="newNoticeForm">
          <form>
            <label htmlFor="noticeTitle">Title</label>
            <input
              type="text"
              required
              name="title"
              id="noticeTitle"
              value={newNotice.title}
              onChange={newNoticeChange}
            />
            <textarea
              className="noticeTexts"
              required
              name="content"
              value={newNotice.content}
              onChange={newNoticeChange}
            />
            <div className="noticeBtns">
              <button className="noticeRightBtn" onClick={onCancle}>
                Cancle
              </button>
              <button className="noticeRightBtn">Write</button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <Row className="noticeHeader">
            <Col xs="1">No.</Col>
            <Col xs="5" lg="7">
              Title
            </Col>
            <Col xs="3" lg="2">
              Admin
            </Col>
            <Col xs="3" lg="2">
              Date
            </Col>
          </Row>
          {currentPaginationData.map((notice) => {
            return (
              <Link key={notice._id} to={"/notice/" + notice._id}>
                <Row className="notice">
                  <Col xs="1"></Col>
                  <Col xs="5" lg="7" className="noticeTitle">
                    {notice.title}
                  </Col>
                  <Col xs="3" lg="2">
                    {notice.admin}
                    <FontAwesomeIcon icon={faCrown} className="crown" />
                  </Col>
                  <Col xs="3" lg="2">
                    {notice.date}
                  </Col>
                </Row>
              </Link>
            );
          })}
          {isUserAdmin && (
            <div className="noticeWriteBtn">
              <button onClick={() => setWriteMode(true)}>Write</button>
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalCount={notices.length}
            pageSize={PAGE_SIZE}
            onPageChange={updatePage}
          />
        </>
      )}
    </div>
  );
};

export default Notice;
