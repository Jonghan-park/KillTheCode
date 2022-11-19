import React, { useEffect, useRef, useState } from "react";
import "./Chatting.css";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import Message from "./Message";

function Chatting({ projectId }) {
  const { user } = useSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  const submitNewChat = async (event) => {
    event.preventDefault();
    const message = {
      userId: user._id,
      content: newMessage,
      projectId: projectId,
    };
    socket.current.emit("sendMessage", {
      user: user._id,
      content: newMessage,
      projectId: projectId,
    });
    try {
      const res = await axios.post(
        "http://vast-island-14964.herokuapp.com/chatting/add",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDateTime = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const today = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const milliseconds = date.getMilliseconds();
      let dateTime = new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
      dateTime += "";
      return dateTime.slice(0, 10) + " " + dateTime.slice(11, 19)
    };
    socket.current = io("ws://localhost:5000");
    socket.current.on("getMessage", (data) => {      
      setArrivalMessage({
        user: data.user,
        content: data.content,
        date: getDateTime()
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `http://vast-island-14964.herokuapp.com/chatting/${projectId}`
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (projectId) {
      getMessages();
    }
  }, [projectId]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chattingContainer">
      <div className="chat-body">
        {messages.map((message, index) => {
          return (
            <div key={index} ref={scrollRef}>
              <Message
                message={message}
                owner={
                  message.user === user._id || message.user._id === user._id
                }
              />
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <form onSubmit={submitNewChat}>
          <input
            type="text"
            className="inputChat"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button className="chatBtn" type="submit">
            &#9658;
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatting;
