import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./NoticeView.css";

const NoticeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  // The temporary state to get a notice which matchs the id
  const [noticeContent, setNoticeContent] = useState({});
  // The temporary state for the calendar based on a user information
  const [isUserAdmin, setIsUserAdmin] = useState(true);

  const goNotice = () => {
    navigate("/notice/" + id);
  };
  const goList = () => {
    navigate("/notice");
  };
  const onNoticeChange = (e) => {
    const { name, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [name]: value,
    });
  };
  // useEffect(() => {
  //   for (let i = 0; i < noticeList.length; i++) {
  //     if (noticeList[i].id === id) {
  //       setNoticeContent(noticeList[i]);
  //     }
  //   }
  // }, [id]);
  return (
    <div className="noticeContainer">
      <h1>yoyo</h1>
      <div className="noticePageTitle">NOTICE</div>
      {editing ? (
        <div className="editNoticeForm">
          <form>
            <label htmlFor="noticeTitle">Title</label>
            <input
              type="text"
              required
              name="title"
              id="noticeTitle"
              value={""}
              onChange={onNoticeChange}
            />
            <textarea
              className="noticeTexts"
              required
              name="content"
              value={""}
              onChange={onNoticeChange}
            />
            <div className="noticeBtns">
              <button className="noticeRightBtn" onClick={goNotice}>
                Cancle
              </button>
              <button className="noticeRightBtn">Update</button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <Row className="noticeContentHeader">
            <Col sm="1">No.{noticeContent.id}</Col>
            <Col sm="6" lg="7" className="noticeContentTitle">
              {noticeContent.title}
            </Col>
            <Col sm="2" lg="2">
              {noticeContent.admin}
            </Col>
            <Col sm="3" lg="2">
              {noticeContent.date}
            </Col>
          </Row>
          <pre className="noticeContent">{noticeContent.content}</pre>
          <div className="noticeBtns noticeViewBtns">
            {isUserAdmin && <button className="noticeLeftBtn">Delete</button>}
            <button className="noticeRightBtn" onClick={goList}>
              Go List
            </button>
            {isUserAdmin && (
              <button
                className="noticeRightBtn"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NoticeView;
