import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Message.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Message({ message, owner }) {
  const [ownerName, setOwnerName] = useState("");
  const dateTime = message.date.slice(0, 10) + " " + message.date.slice(11, 19);

  useEffect(() => {
    const getOwner = async () => {
      try {
        const userId = message.user;
        const res = await axios.get(`http://localhost:5000/chatting/owner/${userId}`);
        setOwnerName(res.data.username);
      } catch (error) {
        console.log(error);
      }
    };
    
    if (!owner) {
      getOwner();
    }
  }, [message, owner]);

  return (
    <div className={owner ? "message own" : "message"}>
      <div className="messageTop">
        {owner || <><span className="ownerName">{ownerName}</span> / </>}
        {dateTime}
      </div>
      <div className="messageBottom">
        <FontAwesomeIcon icon={faUser} className="chatIcon" />
        <p className="messageText">{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
