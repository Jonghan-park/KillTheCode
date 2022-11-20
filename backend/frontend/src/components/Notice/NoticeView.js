import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./NoticeView.css";
import axios from "axios";

const NoticeView = ({ userInfo, setClosePage, loginInfo }) => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  // The temporary state to get a notice which matchs the id
  const [noticeContent, setNoticeContent] = useState({});
  // The temporary state for the calendar based on a user information
  const [isUserAdmin, setIsUserAdmin] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const goNotice = () => {
    navigate("/notice");
  };
  const goList = () => {
    navigate("/notice");
    setClosePage(false);
  };

  const handleEditNoticeSubmit = async (e) => {
    try {
      const res = await axios.post(
        `http://vast-island-14964.herokuapp.com/notice/update/${userInfo._id}`,
        {
          title: title,
          content: content,
          username: userInfo.username,
          loginInfo: loginInfo,
        }
      );
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNotice = async (e) => {
    try {
      const res = await axios.post(
        `http://vast-island-14964.herokuapp.com/notice/delete/${userInfo._id}`,
        { loginInfo: loginInfo, username: userInfo.username }
      );
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      setTitle(userInfo.title);

      setContent(userInfo.content);
    }
  }, [userInfo]);

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="noticeTexts"
              required
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="noticeBtns">
              <button className="noticeRightBtn" onClick={goNotice}>
                Cancle
              </button>
              <button
                className="noticeRightBtn"
                onClick={handleEditNoticeSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <Row className="noticeContentHeader">
            <Col sm="1">No.{userInfo.number}</Col>
            <Col sm="6" lg="7" className="noticeContentTitle">
              {userInfo.title}
            </Col>
            <Col sm="2" lg="2">
              {userInfo.username}
            </Col>
            <Col sm="3" lg="2">
              {userInfo.date}
            </Col>
          </Row>
          <pre className="noticeContent">{userInfo.content}</pre>
          <div className="noticeBtns noticeViewBtns">
            {isUserAdmin && (
              <button className="noticeLeftBtn" onClick={deleteNotice}>
                Delete
              </button>
            )}
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
