import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./NoticeView.css";

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
  useEffect(() => {
    for (let i = 0; i < noticeList.length; i++) {
      if (noticeList[i].id == id) {
        setNoticeContent(noticeList[i]);
      }
    }
  }, []);
  return (
    <div className="noticeContainer">
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
              value={noticeContent.title}
              onChange={onNoticeChange}
            />
            <textarea
              className="noticeTexts"
              required
              name="content"
              value={noticeContent.content}
              onChange={onNoticeChange}
            />
            <div className="noticeBtns editBtns">
              <button className="noticeRightBtn" onClick={goNotice}>Cancle</button>
              <button className="noticeRightBtn">Update</button>
            </div>
          </form>
        </div>
      ) : (
        <>
        <Row className="noticeContentHeader">
          <Col sm="1">No.{noticeContent.id}</Col>
          <Col sm="6" lg="7" className="noticeContentTitle">{noticeContent.title}</Col>
          <Col sm="2" lg="2">{noticeContent.admin}</Col>
          <Col sm="3" lg="2">{noticeContent.date}</Col>
        </Row>
        <pre className="noticeContent">{noticeContent.content}</pre>
        <div className="noticeBtns">
          {isUserAdmin &&
            <button className="noticeLeftBtn">Delete</button>
          }
          <button className="noticeRightBtn" onClick={goList}>Go List</button>
          {isUserAdmin &&
            <button className="noticeRightBtn" onClick={()=> setEditing(true)}>Edit</button>
          }
        </div>
        </>
      )}
    </div>
  );
};

export default NoticeView;
